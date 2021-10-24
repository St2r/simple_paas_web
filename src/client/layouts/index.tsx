import { NextPage } from 'next';
import React from 'react';

export const withLayout = (Page: NextPage, Layout: React.FC) => {
  const pageWithLayout: NextPage = () => {
    return <Layout><Page/></Layout>
  }

  return pageWithLayout;
}
