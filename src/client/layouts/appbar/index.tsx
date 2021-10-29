import React, { useCallback, useState } from 'react';
import {
  AppBar,
  Tab,
  Tabs,
} from '@mui/material';

import styles from './styles.module.scss';
import { useRouter } from 'next/router';

const routeList: { path: string, displayName: string }[] = [
  {
    path: '/dashboard',
    displayName: '仪表盘'
  },
  {
    path: '/images',
    displayName: '镜像管理'
  },
  {
    path: '/containers',
    displayName: '容器管理'
  }
]


const AppBarLayout: React.FC = ({children}) => {
  const router = useRouter();

  const [tab, setTab] = useState(routeList.findIndex(item => item.path === router.pathname));

  const clickTabHandler = useCallback((index: number) => {
    router.push(routeList[index].path).then();
  }, [router]);

  const onChange = useCallback((event, newValue: number) => {
    setTab(newValue);
    clickTabHandler(newValue);
  }, [clickTabHandler]);

  return <>
    <AppBar position="static" key={'app-bar'}>
      <Tabs
        value={tab}
        onChange={onChange}
        indicatorColor="secondary"
        textColor="inherit"
        variant="standard"
      >
        {routeList.map((item, index) => <Tab label={item.displayName} key={index} />)}
      </Tabs>
    </AppBar>
    <main className={styles.main}>{children}</main>
  </>
}

export default AppBarLayout;
