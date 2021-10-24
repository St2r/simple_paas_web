import { NextPage } from 'next';
import LoginForm from '@client/components/passport_form/login';

import styles from './style.module.scss';





const HomePage: NextPage = () =>  {

  return <div className={styles.home}>
    <div className={styles.home_bg} >此处应有一背景图</div>
    <div className={styles.home_form}>
      <LoginForm />
    </div>
  </div>
}

export default HomePage;
