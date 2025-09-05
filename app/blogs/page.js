// app/blogs/page.js
import '../../components/blog/blog.css'; // ✅ Correct relative path to CSS file
import Blogs from '@/components/blog/blog'; // ✅ Path should match your folder and file structure

export default function BlogsPage() {
  return (
    <div className="w3-light-grey">
      <Blogs />
    </div>
  );
}
