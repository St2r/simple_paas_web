import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { textState } from './_app';

const NotFound: NextPage = () => {
  const [text, setText] = useRecoilState(textState);

  const router = useRouter();

  console.log(router.query)

  return <div>
    404 {text}
  </div>
}

export default NotFound;
