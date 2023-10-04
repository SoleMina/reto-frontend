import { Inter } from 'next/font/google';
import Search from '@/components/Search';
import Carousel from '@/components/Carousel';
import Layout from '@/components/Layout';
import NextHead from '@/components/NextHead';
import Modal from '@/components/Modal';

const inter = Inter({ subsets: ['latin'] });
console.log(inter);

export default function Home() {
  return (
    <>
      <Layout>
        <NextHead />
        <Carousel />
        <div className="container">
          <Search />
          <Modal title="Título" btn="Check more info here:" />
        </div>
      </Layout>
    </>
  );
}
