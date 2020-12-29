import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

const BlogPost = ({ title, date, content }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{date}</p>
      <article>
        <ReactMarkdown source={content} />
      </article>
    </div>
  );
};

export default BlogPost;

export async function getStaticProps({ ...ctx }) {
  const { id } = ctx.params;

  const content = await import(`../../content/pages/blog/${id}.md`);
  const data = matter(content.default);

  return {
    props: {
      title: data.data.name,
      date: data.data.date.toString(),
      content: data.content,
    },
  };
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    console.log(context);
    const keys = context.keys();
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      return slug;
    });
    return data;
  })(require.context("../../content/pages/blog", true, /\.md$/));

  const paths = blogSlugs.map((slugs) => `/blog/${slugs}`);
  return {
    paths,
    fallback: false,
  };
}
