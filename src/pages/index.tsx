import type { NextPage, NextPageContext } from 'next'
import axios from 'axios';

const Root: NextPage = () => {
  return <div/>
}

export async function getServerSideProps(context: NextPageContext) {
  const {req, res} = context;

  if (res) {
    console.log('res');

    try {
      await axios.post('/api/passport/login');
      res.writeHead(302, {Location: '/dashboard'})
    } catch (e) {
      res.writeHead(302, {Location: '/home'})
    }

    res.end()
  }
  return;
}

export default Root;