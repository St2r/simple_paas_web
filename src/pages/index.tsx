import type { NextPage } from 'next'
import { useRecoilState } from 'recoil';

// css
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';

const Home: NextPage = () => {

  const router = useRouter();


  return (
    <div className={styles.container}>
      <div onClick={() => router.push('/404')}>Value: text</div>
    </div>
  )
}

export async function getServerSideProps() {
  return { props: { textState: '1'} };
}

export default Home
