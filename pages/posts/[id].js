import Layout from '../layout/layout';
import { getAllPost } from '../lib/helper';

const Post = ({ post }) => {
  // console.log(post);
  return (
    <article>
      {post.map((item) => {
        <Layout key={item.id}>
          <h1>{item.title}</h1>
        </Layout>;
      })}
    </article>
  );
};

export default Post;

export const getStaticProps = async () => {
  const post = getAllPost();

  return {
    props: { post },
  };
};

export const getStaticPaths = async () => {
  const posts = getAllPost();
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};
