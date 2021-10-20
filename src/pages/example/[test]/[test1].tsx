import type { NextPage } from 'next'
import { useRouter } from 'next/router';

const Test: NextPage = () => {
  const router = useRouter();

  console.log(router.query)

  return <div>
    Hello
  </div>
}

export default Test;
