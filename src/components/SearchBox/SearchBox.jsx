import { useDispatch } from "react-redux";
import styles from "./SearchBox.module.css";
import { useState } from "react";
import { setFilter } from "../../redux/contactsSlice";

const SearchBox = () => {
    const dispatch = useDispatch();
    const [filterValue, setFilterValue] = useState('');

    const handleFilterChange = (event) => {
        setFilterValue(event.target.value);
    };

    const handleFilterSubmit = () => {
        dispatch(setFilter(filterValue));
    };

    return (
        <div>
        <label className={styles.searchBoxLabel}>
            <span className={styles.searchBoxLabelText}>Find contacts by name</span>
            <input
                className={styles.searchBoxInput}
                type="text"
                value={filterValue}
                onChange={handleFilterChange}
                placeholder="Search contacts"
            />
            </label>
            <button className={styles.searchButton} onClick={handleFilterSubmit}>Search</button>
        </div>
    );
};

export default SearchBox;
