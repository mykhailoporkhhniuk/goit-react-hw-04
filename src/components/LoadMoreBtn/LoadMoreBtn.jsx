import css from "./LoadMoreBtn.module.css"

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <div className={css.btnWrapper}>
      <button className={css.btn} onClick={onLoadMore} type="button">Load more</button>
    </div>
  );
}

export default LoadMoreBtn