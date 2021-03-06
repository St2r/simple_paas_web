import styles from './styles.module.scss';

import AppBarLayout from '@client/layouts/appbar';
import { DataGrid, GridColDef, GridRowsProp, useGridApiContext } from '@mui/x-data-grid'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import { NextPageWithLayout } from '@client/types';
import { Button } from '@mui/material';
import { useCallback, useMemo } from 'react';
import ImageRepoNewModal, { ImageRepoNewModalOpen } from '@client/components/image_repo_new_modal';
import { useSetRecoilState } from 'recoil';
import ImageRepoDetailModal, { AImageRepoDetailModalOpen } from '@client/components/image_repo_detail_modal';

const rows: GridRowsProp = [
  {id: 1, col1: 'Hello', used: true, col3: new Date()},
  {id: 2, col1: 'DataGridPro', used: false, col3: new Date(1640328097780)},
  {id: 3, col1: 'MUI', used: true, col3: new Date(1640328098880)},
];

while (rows.length < 100) {
  (rows as any).push({...rows[0], id: rows.length});
}

const ImagesPage: NextPageWithLayout = () => {
  const setOpen = useSetRecoilState(ImageRepoNewModalOpen);
  const setRepoDetailOpen = useSetRecoilState(AImageRepoDetailModalOpen);

  const openRepoNewHandler = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const columns = useMemo(() => {
    return [
      {
        field: 'col1', headerName: '名称', flex: 1,
        filterable: false, disableColumnMenu: true,
      },
      {
        field: 'used', headerName: '是否使用', type: 'singleSelect', width: 100,
        headerAlign: 'center', align: 'center', disableColumnMenu: true,
        sortable: false,
        renderCell: (params) => {
          const used = params.row['used'] ?? false;
          return used ? <CheckBoxOutlinedIcon/> : <CheckBoxOutlineBlankIcon/>;
        }
      },
      {
        field: 'col3', headerName: '上次编辑', type: 'dateTime', width: 300,
        headerAlign: 'center', align: 'center', disableColumnMenu: true,
      },
      {
        field: 'col4', headerName: '操作', width: 150, flex: 1,
        headerAlign: 'center', align: 'center',
        filterable: false, sortable: false, editable: false, disableColumnMenu: true,
        renderCell: (params) => {
          const used = params.row['used'] ?? false;


          const handleOpen = () => {
            setRepoDetailOpen(true);
            console.log(true)
          }

          return <div className={styles.operation_button_group}>
            <Button variant={'contained'} onClick={handleOpen}>详情</Button>
            <Button variant={'contained'}>快速创建容器</Button>
            <Button variant={'contained'} color={'error'} disabled={used}>删除</Button>
          </div>
        }
      },
    ] as GridColDef[];
  }, [setRepoDetailOpen]);


  return <div className={styles.images_container_wrapper}>
    <div className={styles.images_header}>
      镜像仓库列表(TODO 切图)
      <div className={styles.images_header_operators}>
        <Button variant={'contained'} onClick={openRepoNewHandler}>新建镜像</Button>
      </div>
    </div>
    <DataGrid className={styles.images_table} columns={columns} rows={rows} hideFooter={true}/>
    <ImageRepoNewModal/>
    <ImageRepoDetailModal/>
  </div>
}

ImagesPage.getLayout = (page) => {
  return <AppBarLayout>{page}</AppBarLayout>
}

export default ImagesPage;
