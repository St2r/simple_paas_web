import React, { useCallback } from 'react';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { Modal } from '@mui/material';

export const ImageTagNewModalOpen = atom({
  key: 'image-tag-new-open',
  default: false
})

const ImageTagNewModal: React.FC = () => {
  const [open, setOpen] = useRecoilState(ImageTagNewModalOpen);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <div>Model</div>
  </Modal>
}

export default ImageTagNewModal;