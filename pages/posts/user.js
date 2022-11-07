import Layout from '../layout/layout';

const user = ({ users }) => {
  console.log(users);
  return (
    <Layout>
      {users.map(({ id, name }) => {
        <div key={id}>
          <h1>{name}</h1>
        </div>;
      })}
    </Layout>
  );
};

export default user;

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/posts/users');
  const users = res.json();

  return {
    props: { users },
  };
};
