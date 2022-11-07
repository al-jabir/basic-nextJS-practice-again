import Link from 'next/link';
import Layout from './layout/layout';

export default function Home() {
  return (
    <Layout>
      <Link href='./posts/first-post'>Go to post</Link>
    </Layout>
  );
}
