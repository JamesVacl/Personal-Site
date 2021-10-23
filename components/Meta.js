import Head from 'next/head'
import { NextSeo } from 'next-seo';


const Meta = ({title, keywords, description, author}) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <meta name='author' content={author} />
        <link rel='icon' href='/favicon.ico' />
        <title>{title}</title>
      </Head>
    </>
    )
  }

Meta.defaultProps = {
  title: 'James Vaclavek',
  keywords: 'James Vaclavek, Portfolio, Developer',
  description: "Check out James Vaclavek's portfolio website!",
  author: 'James Vaclavek',
}

export default Meta
