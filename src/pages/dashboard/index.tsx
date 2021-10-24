import AppBarLayout from '@client/layouts/appbar';
import { NextPageWithLayout } from '@client/types';

const DashboardPage: NextPageWithLayout = () => {
  return <div>DashboardPage</div>
}

DashboardPage.getLayout = (page) => {
  return <AppBarLayout>{page}</AppBarLayout>
}

export default DashboardPage;
