import Layout from '../components/MyLayout';
import Header from '../components/Header';
import Link from 'next/link';

export default function Blog() {
  return (
    <Layout>
      <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }
      `}</style>
    </Layout>
  );
}
