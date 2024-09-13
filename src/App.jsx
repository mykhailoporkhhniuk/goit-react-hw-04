import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import Loader from './components/Loader/Loader'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import { requestSearchValue } from './services/api'
import ImageModal from './components/ImageModal/ImageModal'

function App() {

  const [searchValue, setSearchValue] = useState("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalImg, setModalImg] = useState({ src: "", alt: "" });

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const onSubmit = (userValue) => {
    setSearchValue(userValue);
    setPageNumber(1);
    setImages([]);
  };

  const onLoadMore = () => {
    setPageNumber(pageNumber + 1);
  };

  useEffect(() => {
    if (searchValue.trim() === "") return;
    const searchImages = async () => {
      try {
        setIsLoading(true);
        const data = await requestSearchValue(searchValue, pageNumber);
        setImages(images => [...images, ...data.results]);
        setTotalPage(data.total_pages);
      } catch {
        (err) => {
          setError(err);
          console.log(err);
        }
      } finally {
        setIsLoading(false);
      }
    };
    searchImages();
  }, [searchValue, pageNumber]);

  return (
    <>
      <SearchBar
        onSubmit={onSubmit}
      />
      <ImageModal
        isOpenModal={isOpenModal}
        closeModal={closeModal}
        modalImg={modalImg}
      />
      {error !== null && <ErrorMessage error={error}/>}
      {images.length !== 0 && <ImageGallery
        images={images}
        setModalImg={setModalImg}
        openModal={openModal}
      />}
      {isLoading && <Loader />}
      {pageNumber < totalPage && <LoadMoreBtn onLoadMore={onLoadMore}/>}
    </>
  );
}

export default App
