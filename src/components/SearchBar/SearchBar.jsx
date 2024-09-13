import toast, { Toaster } from 'react-hot-toast';
import css from "./SearchBar.module.css"

const SearchBar = ({ onSubmit }) => {

    const handleSubmit = (e) => { 
        e.preventDefault();
        const form = e.target;
        const userValue = form.elements.userValue.value.trim();
        if (userValue === "") {
            toast.error("Enter a value!", {
                duration: 4000,
                position: "top-right",
            });
        } else onSubmit(userValue);
    }
    
    return (
        <header className={css.header}>
            <form onSubmit={handleSubmit}>
                <Toaster />
                <div className={css.wrapper}>
                    <input
                        className={css.input}
                        name='userValue'
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                    <button className={css.btn} type="submit">🔍</button>
                </div>
            </form>
        </header>
    );
}

export default SearchBar