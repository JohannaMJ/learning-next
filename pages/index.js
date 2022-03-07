import ArticleList from '../components/ArticleList';
import Head from 'next/head';
import Image from 'next/image';

const home = ({ articles }) => {
  console.log(articles);
  return (
    <div>
      <Head>
        <title>Web dev with Next</title>
        <meta name='keywords' content='web development, programming, next.js' />
      </Head>
      <ArticleList articles={articles} />
    </div>
  );
};

export default home;

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
