import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../layout/layout';

const ProductPage = () => {
  const router = useRouter();
  const { productid } = router.query;
  return (
    <Layout>
      <h1>This is product page id: {productid} </h1>
    </Layout>
  );
};

export default ProductPage;
