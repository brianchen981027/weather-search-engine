import Head from 'next/head';

import { useAppSelector } from '@/Hooks/useRedux';

import Content from '@/Components/Content';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import Loader from '@/Components/Loader';

const Home = (): JSX.Element => {
  const { isLoading } = useAppSelector((state) => state.common.value);
  return (
    <>
      <Head>
        <title>BC&apos;s Weather Search Engine</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/weatherIcon.ico" />
      </Head>
      <main className="bg-[url('../images/WeatherBg.jpg')] bg-cover bg-center h-full">
        {isLoading && <Loader isLoading={isLoading} />}
        <Header />
        <Content />
      </main>
      <Footer />
    </>
  );
};

export default Home;
