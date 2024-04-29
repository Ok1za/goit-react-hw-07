import { useDispatch } from "react-redux";
import styles from "./SearchBox.module.css";
import { useState } from "react";

const SearchBox = () => {
    const dispatch = useDispatch();
    const [filter, setFilter] = useState('');

    const handleFilterChange = (event) => {
    const { value } = event.target;
    setFilter(value);
    dispatch(setFilter(value));
    };

    return (
        <label className={styles.searchBoxLabel}>
            <span className={styles.searchBoxLabelText}>Find contacts by name</span>
            <input
                className={styles.searchBoxInput}
                type="text"
                value={filter}
                onChange={handleFilterChange}
                placeholder="Search contacts"
            />
        </label>
    );
};

export default SearchBox;
