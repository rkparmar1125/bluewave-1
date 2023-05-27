import { getListPage, getSinglePage } from "@/lib/contentParser";
import { Post } from "../../types/posts";
import Link from "next/link";
import Image from "next/image";

// for all regular pages
const Posts = () => {
  const postIndex: Post = getListPage(`blog/_index.md`);
  const { title, sub_title, description, image } = postIndex.frontmatter;
  const posts: Post[] = getSinglePage('blog');
  const sortedPosts = posts;
  const currentPosts = sortedPosts;
  return (
    <>
    <main className="main inner" >
        <div className="blog-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className=" slider-sec ">
                                {currentPosts.map((items, i) => (
                                    <div className="content" key={i}>
                                        <Image 
                                            src={ items.frontmatter.image?items.frontmatter.image:"" } height={200} width={200} alt="blog img" />
                                        <h2>{items.frontmatter.title}</h2>
                                        <Link href={`/blog/${items.slug}`}>Load More</Link>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </>
  );
};

export default Posts;
