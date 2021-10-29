import React, { ChangeEvent, useCallback, useState } from 'react';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl, FormControlLabel,
  IconButton,
  Input, InputLabel,
  Modal
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AddIcon from '@mui/icons-material/Add';
import style from './style.module.scss';

export const ImageRepoNewModalOpen = atom({
  key: 'image-repo-new-open',
  default: false
})

const ImageRepoNewModal: React.FC = () => {
  const [open, setOpen] = useRecoilState(ImageRepoNewModalOpen);
  const [repoName, setRepoName] = useState('');

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const handleRepoNameChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setRepoName(event.target.value);
  }, [setRepoName]);

  const handleClearRepoName = useCallback(() => {
    setRepoName('');
  }, [setRepoName]);


  return <Modal open={open} onClose={handleClose}>
    <Card className={`common-model-wrapper ${style.image_repo_new_modal}`}>
      <CardHeader title={'创建镜像仓库'} action={<IconButton onClick={handleClose}><CloseIcon/></IconButton>}/>
      <CardContent className={style.modal_content}>
        <FormControl fullWidth>
          <InputLabel color={'info'}>镜像仓库名称</InputLabel>
          <Input
            value={repoName} onChange={handleRepoNameChange}
            endAdornment={<IconButton onClick={handleClearRepoName}><HighlightOffIcon/></IconButton>}
          />
        </FormControl>
      </CardContent>
      <CardActions className={style.modal_actions}>
        <Button variant={'contained'} startIcon={<AddIcon/>}>创建</Button>
      </CardActions>
    </Card>
  </Modal>
}

export default ImageRepoNewModal;