import React from "react";
import { Modal } from "react-bootstrap";

import './ImgModal.scss';

const ModalImg = ({ showModal, setShowModal, url }) => {
  const handleClose = () => setShowModal(false);

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Body 
        style={{ backgroundImage: `url(${url})`}}
      />
    </Modal>
  );
};

export default ModalImg;
