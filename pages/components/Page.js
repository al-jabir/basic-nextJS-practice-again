import React from 'react';
import Layout from '../layout/layout';

const Page = ({ title, des }) => {
  return (
    <Layout>
      <h1>{title}</h1>
      <p>{des}</p>
    </Layout>
  );
};

export default Page;

export async function getServerSideProps() {
  const data = {
    title: 'Loading',
    des: 'you will be loading page showing.. from serverSide',
  };
  return {
    props: data,
  };
}
