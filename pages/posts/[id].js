import { getAllPost } from '../lib/helper';

const Post = ({ post }) => {
  console.log(post);
  return (
    <article>
      {post.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.des}</p>
          </div>
        );
      })}
    </article>
  );
};

export default Post;

export const getStaticProps = async ({ params }) => {
  const { id } = params;
  const data = getAllPost();

  return {
    props: { post },
  };
};

const getStaticPaths = async () => {
  const posts = getAllPost();
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));
  return {
    paths: {
      params: { id: post.id.toString() },
    },
    fallback: false,
  };
};
