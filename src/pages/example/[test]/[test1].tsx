import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';
import React from 'react';

const Test: NextPage = (...props: any) => {
  const router = useRouter();

  console.log(router.query)

  console.log(props);

  return <div>
    Hello
  </div>
}

const Layout: React.FC = ({children}) => {
  return <div>Layout {children}</div>
}


const withLayout = (Page: NextPage, Layout: React.FC) => {
  const pageWithLayout: NextPage = () => {
    return <Layout><Page/></Layout>
  }

  return pageWithLayout;
}

export default withLayout(Test, Layout);
