// import Navbar from "@/components/Navbar";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Hero from "./Component/Hero/Hero";
import FeatureBlog from "./Component/FeatureBlog/FeatureBlog";
import Recentpost from "./Component/RecentPost/Recentpost";
import BlogPost from "./Component/Blogpost/BlogPost";
import { blogDataList } from "./StaticData/data";
export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <FeatureBlog />
      <Recentpost />
      <BlogPost blogs={blogDataList} />
      {/* <Footer /> */}
    </>
  );
}
