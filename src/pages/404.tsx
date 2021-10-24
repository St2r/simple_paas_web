import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';

const NotFound: NextPage = () => {

  const router = useRouter();

  console.log(router.query)

  return <div>
  </div>
}

export default NotFound;
