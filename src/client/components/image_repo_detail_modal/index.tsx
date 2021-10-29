import { atom, useRecoilState } from 'recoil';
import React, { useCallback, useMemo } from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, Modal } from '@mui/material';

import style from './style.module.scss';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

export const AImageRepoDetailModalOpen = atom<boolean>({
  key: 'image_repo_detail_modal_open',
  default: false,
});

const AImageRepoTagList = atom({
  key: 'image_repo_tag_list',
  default: [],
});

const ImageRepoDetailModal: React.FC = () => {
  const [open, setOpen] = useRecoilState(AImageRepoDetailModalOpen);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const columns: GridColDef[] = useMemo(() => {
    return [
      {
        field: 'col1', flex: 1,
        headerName: 'TAG',
      },
      {
        field: 'col2', width: 200,
        headerName: '上次编辑', type: 'dateTime',
      },
      {
        field: 'col3',
        headerName: '操作', width: 200,
        renderCell: params => {
          return <div className={style.operation_button_group}>
            <Button variant={'contained'} color={'info'}>重命名</Button>
            <Button variant={'contained'} color={'error'}>删除</Button>
          </div>
        }
      }
    ];
  }, []);

  const rows: GridRowsProp = useMemo(() => {
    return [
      {
        id: 1, col1: 'latest', col2: new Date()
      },
    ];
  }, []);

  return <Modal open={open} onClose={handleClose}>
    <Card className={`common-model-wrapper ${style.repo_detail_modal}`}>
      <CardHeader title={'镜像仓库详情'}/>
      <CardContent>
        <DataGrid className={style.tag_list_grid} columns={columns} rows={rows} hideFooter/>
      </CardContent>
    </Card>
  </Modal>
}

export default ImageRepoDetailModal;
