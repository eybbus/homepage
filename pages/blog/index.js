import react from "react";
import matter from "gray-matter";

const BlogPosts = (props) => {
  console.log(props.posts);
  return <h1>Blogs</h1>;
};

export async function getStaticProps() {
  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value = values[index];
      const document = matter(value.default);
      // document.data.date = document.data.date.toString();

      return {
        frontmatter: { ...document.data, date: document.data.date.toString() },
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context("../../content/pages/blog", true, /\.md$/));

  console.log(posts);
  return {
    props: {
      posts,
    },
  };
}

export default BlogPosts;
