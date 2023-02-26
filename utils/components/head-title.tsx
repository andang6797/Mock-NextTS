import Head from 'next/head';

interface HeadTitleProps {
    title: string;
}

export const HeadTitle = (props: HeadTitleProps) => {
    return (
        <Head>
        <title>{props.title}</title>
        <meta name="description" content="KibbiApp" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/vercel.svg" />
      </Head>
    )
}

export default HeadTitle;