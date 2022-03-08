import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='keywords' content={keywords} />
      <meta charSet='UTF-8' />
      <meta name='description' content={description} />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'WebDev with Next',
  keywords: 'web development, programming, next',
  description: 'get the latest news in web dev ',
};

export default Meta;
