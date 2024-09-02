import css from "./SearchBox.module.css"

const SearchBox = ({ searchInput, handleChange }) => {
    return (
        <div className={css.serch}>
            <label htmlFor="search">Find contacts by name</label>
            <input className={css.field} type="text" id="search" value={searchInput} onChange={handleChange}/>
        </div>
    )
};

export default SearchBox;
