import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import pic from '../../public/assets/pic.jpg';

const FirstPost = () => {
  return (
    <>
      <Head>
        <title>Next.js first post</title>
      </Head>
      <div style={{ textAlign: 'center' }}>
        <h1>First blog post</h1>
        <Image src={pic} alt='this is pic' width={300} height={400} />
      </div>
    </>
  );
};

export default FirstPost;
