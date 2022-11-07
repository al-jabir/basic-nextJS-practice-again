import React from 'react';
import Layout from '../layout/layout';

const FetchData = ({ users }) => {
  return (
    <Layout>
      {users.map(({ id, name, email }) => {
        return (
          <div key={id}>
            <h1>{name}</h1>
            <p>{email}</p>
          </div>
        );
      })}
    </Layout>
  );
};

export default FetchData;

export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
};
