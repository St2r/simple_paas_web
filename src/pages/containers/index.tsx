import AppBarLayout from '@client/layouts/appbar';
import { NextPageWithLayout } from '@client/types';

const ContainersPage: NextPageWithLayout = () => {
  return <div>ContainersPage</div>
}

ContainersPage.getLayout = (page) => {
  return <AppBarLayout>{page}</AppBarLayout>
}

export default ContainersPage;
