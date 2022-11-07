import React from 'react';
import Layout from '../layout/layout';

const Home = ({ post }) => {
  return (
    <Layout>
      <h1>{post.title}</h1>
      <p>{post.des}</p>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const post = {
    title: 'new update post',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ad!',
  };

  return {
    props: {
      post,
    },
  };
}
