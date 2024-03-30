import Modal from 'react-bootstrap/Modal';


const ShowDp = ({show,handleClose,src,user}) => {
  return (
    <>
    <Modal
      show={show}
      onHide={ handleClose}
    //   dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header style={{ backgroundColor: "#474b50" }}  closeButton> 
        <Modal.Title id="example-custom-modal-styling-title">
          {user}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{background:"#292D32"}} >
        <div className="showDp">
            <img src={src} alt="" />
        </div>
      </Modal.Body>
    </Modal>
  </>
  )
}

export default ShowDp