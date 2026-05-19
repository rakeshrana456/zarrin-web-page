
import BlogCard from "./BlogCard";
export default function BlogPost({ blogs }) {
  return (
    <>
      <section>
        <div className="container mx-auto ">
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} data={blog} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}