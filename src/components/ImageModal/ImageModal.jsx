import Modal from "react-modal";

import css from "./ImageModal.module.css"

Modal.setAppElement("#root");

const ImageModal = ({modalImg, isOpenModal, closeModal}) => {
    return (
        <Modal
            isOpen={isOpenModal}
            onRequestClose={closeModal}
            style={{
                overlay: {
                    backgroundColor: "rgba(000, 000, 000, 0.7)",
                },
                content: {
                    borderRadius: "8px",
                    width: "50%",
                    top: "50%",
                    left: "50%",
                    right: "auto",
                    bottom: "auto",
                    background: "transparent",
                    transform: "translate(-50%, -50%)",
                },
            }}
            closeTimeoutMS={200}
        >
            <img className={css.img} src={modalImg.src} alt={modalImg.alt}/>
        </Modal>
    )
};

export default ImageModal