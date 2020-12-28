import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export default BlogPost = ({ title, date, content }) => {
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

export async function getSTaticProps({ params }) {
  const { postname } = ctx.params;
  const content = await import(`../../content/pages/blog/${postname}.md`);

  const data = matter(content.default);

  return {
    props: {
      title: data.name,
      date: data.date,
      content: data.body,
    },
  };
}
