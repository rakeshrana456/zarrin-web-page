import { NewBlogs, BlogDataRender } from "../../StaticData/data";
import Typography from "../../Component/Typography";
import { notFound } from "next/navigation";
import Image from "next/image";
import Button from "../../Component/Button/Button";
import BlogPost from "../../Component/Blogpost/BlogPost";

export async function generateStaticParams() {
  return NewBlogs.map((blog) => ({
    slug: blog.slug,
  }));
}
export default async function BlogPage({ params }) {
  const { slug } = await params;

  const blog = NewBlogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <section className="py-20">
      <div className="container mx-auto flex flex-col gap-12 lg:gap-20 px-4 lg:px-0">
        <div className="flex flex-col gap-4 max-w-250 mx-auto ">
          {" "}
          <Typography
            variant="paragraph"
            className="text-[12px] font-bold flex gap-4"
          >
            {blog.category} <span className="inline-block">{blog.date}</span>
          </Typography>
          <Typography
            variant="heading"
            className="lg:text-[48px] text-[30px] font-bold text-[#333333]"
          >
            {blog.title}
          </Typography>
        </div>

        <div>
          <Image
            src={blog.heroImage}
            alt={blog.alt}
            height={400}
            width={400}
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-8 max-w-250 mx-auto">
          <Typography variant="heading" className="text-[#666666] text-[16px]">
            {blog.description[0]}
          </Typography>
          <Typography variant="heading" className="text-[#666666] text-[16px]">
            {blog.description[1]}
          </Typography>
        </div>
        <div className="flex gap-4 max-w-230 mx-auto align-center">
          <div className="h-26 w-3 bg-[#7C4EE4]"></div>
          <div className="flex flex-col gap-6">
            <Typography
              variant="paragraph"
              className="text-[16px] lg:text-[24px] text-[#666666] leading-11"
            >
              "{blog?.quote?.text}"{" "}
            </Typography>
            <span>
              <Typography
                variant="paragraph"
                className="text-[#333333] text-[16px]"
              >
                -{blog?.quote?.author}
              </Typography>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-8  max-w-250 mx-auto">
          <Typography variant="heading" className="text-[#666666] text-[16px]">
            {blog.content}
          </Typography>
        </div>
        <div className="max-w-190 mx-auto">
          <Image
            src={blog.secondaryImage}
            alt={blog.alt}
            height={400}
            width={400}
            className="w-full"
          />
        </div>

        <div className="flex flex-col gap-8  max-w-250 mx-auto">
          <Typography variant="heading" className="text-[#666666] text-[16px]">
            {blog.footerText}
          </Typography>
        </div>

        <div className="hidden md:flex flex-col sm:flex-row justify-between items-center gap-4">
          <Typography
            variant="heading"
            className="text-[32px] lg:text-[48px] font-bold text-[#333333] text-center sm:text-left"
          >
            Popular Posts
          </Typography>

          <Button variant="secondary">View All</Button>
        </div>
        <BlogPost blogs={BlogDataRender.slice(0,3)} />
      </div>
    </section>
  );
}
