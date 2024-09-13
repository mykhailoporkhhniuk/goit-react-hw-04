import css from "./ImageCard.module.css"

const ImageCard = ({ alt, url, setModalImg, openModal }) => {
    const handleClick = () => {
        setModalImg({ src: url.regular, alt: alt })
        openModal()
    }
    return (
        <div onClick={handleClick}>
            <img className={css.img} src={url.small} alt={alt} />
        </div>
    );
}

export default ImageCard