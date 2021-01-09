import react from "react";
import matter from "gray-matter";
import Layout from "../../components/layout/layouts/Layout";
import styled from "styled-components";

const PostsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
`;

const BlogPosts = (props) => {
  const { posts, pageData } = props;
  return (
    <Layout>
      <h1>{pageData.title}</h1>
      <p>{pageData.description}</p>
      <PostsContainer>
        {posts.map((post) => (
          <div>{post.frontmatter.name}</div>
        ))}
      </PostsContainer>
    </Layout>
  );
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

  const pageData = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);
    let document = matter(values[0].default);
    return document.data;
  })(require.context("../../content/pages/", true, /blog\.md$/));

  return {
    props: {
      pageData,
      posts,
    },
  };
}

export default BlogPosts;
