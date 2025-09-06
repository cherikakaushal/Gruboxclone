// components/blog/blog.js
"use client";

import { useMemo, useState } from "react";
import "./blog.css";

// deterministic date (prevents hydration diffs)
const DATE_FMT = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "2-digit",
});

export default function Blog({ posts = [], sources = [] }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(new Set());

  const toggleSource = (s) => {
    const next = new Set(active);
    next.has(s) ? next.delete(s) : next.add(s);
    setActive(next);
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const matchesText =
        !q ||
        p.title.toLowerCase().includes(q) ||
        (p.excerpt || "").toLowerCase().includes(q) ||
        (p.source || "").toLowerCase().includes(q);
      const matchesSource = active.size === 0 || active.has(p.source);
      return matchesText && matchesSource;
    });
  }, [posts, query, active]);

  return (
    <div>
      {/* toolbar */}
      <div className="blog-toolbar">
        <input
          className="blog-search"
          type="search"
          placeholder="Search posts…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search blog posts"
        />

        <div className="blog-filters" role="group" aria-label="Filter by source">
          {sources.map((s) => {
            const on = active.has(s);
            return (
              <button
                key={s}
                className={`chip ${on ? "chip-active" : ""}`}
                type="button"
                onClick={() => toggleSource(s)}
                aria-pressed={on}
              >
                {s}
              </button>
            );
          })}
          {sources.length > 0 && (
            <button
              className="chip chip-reset"
              type="button"
              onClick={() => setActive(new Set())}
              aria-label="Clear filters"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {/* grid */}
      {filtered.length === 0 ? (
        <p className="muted">No posts found. Try a different search or filter.</p>
      ) : (
        <ul className="blog-grid">
          {filtered.map((p) => {
            const d = new Date(p.date);
            const formatted = isNaN(d.getTime()) ? "" : DATE_FMT.format(d);

            return (
              <li key={p.id} className="blog-card card">
                <div className="blog-card-body">
                  <div className="blog-meta">
                    <span className="chip chip-source">{p.source}</span>
                    {formatted && <time dateTime={p.date}>{formatted}</time>}
                  </div>

                  <h3 className="blog-title">{p.title}</h3>

                  {p.excerpt && <p className="blog-excerpt">{p.excerpt}</p>}

                  <div className="blog-actions">
                    <a
                      href={p.link}
                      className="w3-button btn-ghost w3-round-xlarge"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Read more: ${p.title}`}
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
