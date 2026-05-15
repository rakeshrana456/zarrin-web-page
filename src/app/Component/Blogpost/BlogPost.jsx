import { blogDataList } from "@/app/StaticData/data";
import BlogCard from "./BlogCard";
export default function Recentpost() {
  return (
    <>
        <section>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                    {
                      blogDataList.map((blog) => (
                        <BlogCard key={blog.id} data={blog} />
                      ))
                    }
                </div>
            </div>
        </section>                  
    </>
  );
}