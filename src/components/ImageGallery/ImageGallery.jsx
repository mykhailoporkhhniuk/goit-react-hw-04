import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css"

const ImageGallery = ({ images, setModalImg, openModal }) => {
    return (
        <ul className={css.list}>
            {images.map((image) => {
                return <li className={css.listItem} key={image.id}>
                    <ImageCard
                        alt={image.alt_descriptions}
                        url={image.urls}
                        setModalImg={setModalImg}
                        openModal={openModal}
                    />
                </li>
            })}
        </ul>
    );
}

export default ImageGallery