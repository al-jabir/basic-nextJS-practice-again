import { getAllPost } from '../lib/helper';

const Post = ({ data }) => {
  console.log(data);
  return (
    <article>
      {data.map((p) => {
        <div key={p.id}>
          <h1>{p.id}</h1>
          <h4>{p.title}</h4>
          <p>{p.des}</p>
        </div>;
      })}
    </article>
  );
};

export default Post;

export const getStaticProps = async ({ params }) => {
  const { id } = params;
  const data = getAllPost();

  return {
    props: { data },
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
