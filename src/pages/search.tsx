import { NextSeo } from 'next-seo';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import type { NextPageWithLayout } from '@/types';
import Search from '@/components/search/search';
import RootLayout from '@/layouts/_root-layout';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const SearchPage: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => {
  // render default create NFT component
  return (
    <>
      <NextSeo
        title="Explore NTF"
        description="Criptic - React Next Web3 NFT Crypto Dashboard Template"
      />

      <Search />
    </>
  );
};

SearchPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default SearchPage;
