import React from 'react';
import Layout from '../layout/layout';

const Page2 = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div className='main'>
        <h1>{data.name} </h1>
        <h3>{data.job}</h3>
        <p>{data.loc}</p>
      </div>
    </Layout>
  );
};

export default Page2;

export async function getServerSideProps() {
  const data = {
    name: 'Jonh Doe',
    age: 25,
    job: 'Junior Software Engineer',
    loc: 'London, England',
  };

  return {
    props: {
      data,
    },
  };
}
