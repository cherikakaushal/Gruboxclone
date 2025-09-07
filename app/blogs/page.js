// app/blogs/page.js
import "./blogs.css";
import Blog from "@/components/blog/blog";

export const revalidate = 600;   // refresh list every 10 minutes (ISR)
export const runtime = "nodejs"; // needed for rss-parser

// ---------- Sources & candidate feed URLs ----------
const SOURCES = [
  {
    key: "grubox",
    label: "Grubox",
    // keep candidates; if none work we silently skip this source
    candidates: [
      "https://www.grubox.in/blog/rss.xml",
      "https://www.grubox.in/blog?format=rss",
      "https://www.grubox.in/blog/feed",
    ],
  },
  { key: "medium",  label: "Medium",  candidates: ["https://medium.com/feed/@gruboxdemo"] },
  { key: "tumblr",  label: "Tumblr",  candidates: ["https://gruboxblogs.tumblr.com/rss"] },
  { key: "blogger", label: "Blogger", candidates: ["https://gruboxblogs.blogspot.com/feeds/posts/default?alt=rss"] },
];

// ✅ Guaranteed posts (until your site exposes an RSS feed)
const MANUAL_POSTS = [
  {
    id: "manual-ffa",
    title: "Fast, Fresh, Affordable — Your Guide to Office Meals",
    link: "https://gruboxblogs.blogspot.com/2025/07/fast-fresh-affordable-your-guide-to.html",
    excerpt:
      "A quick guide to choosing office meal plans that keep teams energized without overspending.",
    date: "2025-07-01T00:00:00.000Z",
    source: "Blogger",
  },
];

// ---------- helpers ----------
function cleanXml(xml) {
  // Escape stray & and strip control chars that break XML parsers
  return xml
    .replace(/&(?!amp;|lt;|gt;|quot;|apos;|#\d+;|#x[0-9a-fA-F]+;)/g, "&amp;")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "");
}

function firstParagraphFromHtml(html) {
  if (!html) return "";
  const m = html.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
  const fragment = (m ? m[1] : html)
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return fragment;
}

function firstParagraphFromItem(it) {
  const html =
    it["content:encoded"] ||
    it.contentEncoded || // populated by rss-parser customFields
    it.content ||
    "";
  const p = firstParagraphFromHtml(html);
  if (p) return p;
  return (it.contentSnippet || "").replace(/\s+/g, " ").trim();
}

async function parseRss(xml) {
  const { default: Parser } = await import("rss-parser");
  const parser = new Parser({
    customFields: { item: [["content:encoded", "contentEncoded"]] },
  });
  return parser.parseString(cleanXml(xml));
}

// fetch one URL, but NEVER throw — return null on failure
async function fetchOne(url) {
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "GruboxBlogs/1.0 (+https://www.grubox.in)",
        Accept: "application/rss+xml, application/xml;q=0.9, */*;q=0.8",
      },
      next: { revalidate },
    });
    if (!res.ok) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(`[feed] ${url} returned ${res.status}`);
      }
      return null;
    }
    return await res.text();
  } catch (err) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[feed] request failed for ${url}:`, err?.message || err);
    }
    return null;
  }
}

async function fetchSource({ key, label, candidates }) {
  for (const url of candidates) {
    const xml = await fetchOne(url);
    if (!xml) continue;

    try {
      const feed = await parseRss(xml);
      const items = (feed.items || []).map((it, i) => {
        const title = it.title?.trim() || "Untitled";
        const link = (it.link || "").trim();
        const when =
          it.isoDate || it.pubDate || it.published || it.updated || new Date().toISOString();

        // exactly one neat paragraph per card
        let excerpt = firstParagraphFromItem(it);
        if (excerpt.length > 260) excerpt = excerpt.slice(0, 257).trimEnd() + "…";

        return {
          id: `${key}-${link || title}-${i}`,
          title,
          link,
          excerpt,
          date: new Date(when).toISOString(),
          source: label,
        };
      });

      if (items.length) return items;
    } catch (e) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(`[feed] ${label} parse failed on ${url}:`, e?.message || e);
      }
    }
  }
  return [];
}

async function getAllPosts() {
  const results = await Promise.all(
    SOURCES.map((src) => fetchSource(src))
  );

  // merge + dedupe by link (or title)
  const map = new Map();
  for (const list of results) {
    for (const p of list) {
      const k = p.link || p.title;
      if (!map.has(k)) map.set(k, p);
    }
  }
  // Add guaranteed manual posts if needed
  for (const p of MANUAL_POSTS) {
    const k = p.link || p.title || p.id;
    if (!map.has(k)) map.set(k, p);
  }

  const posts = [...map.values()].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return posts;
}

export const metadata = {
  title: "Blogs | Grubox",
  description:
    "Insights on corporate dining, cafeteria management, smart vending, and meal plans — by Grubox.",
};

export default async function BlogsPage() {
  const posts = await getAllPosts();
  const hasPosts = posts.length > 0;
  const sources = Array.from(new Set(posts.map((p) => p.source))).sort();

  return (
    <main className="blogs-page">
      <section className="blogs-hero w3-container">
        <div className="w3-content" style={{ maxWidth: 1120 }}>
          <h1 className="blogs-title">Blogs</h1>
          <p className="blogs-subtitle">
            Articles written by the Grubox team — aggregated from our site and official channels.
          </p>
        </div>
      </section>

      <section className="blogs-list w3-container">
        <div className="w3-content" style={{ maxWidth: 1120 }}>
          {hasPosts ? (
            <Blog posts={posts} sources={sources} />
          ) : (
            <div
              className="w3-padding-32"
              style={{
                border: "1px solid var(--border)",
                borderRadius: 12,
                background: "var(--card)",
                color: "var(--muted)",
                textAlign: "center",
              }}
            >
              <p style={{ margin: 0 }}>
                No posts available right now. Please check back soon.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
