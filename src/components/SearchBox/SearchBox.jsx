import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
    const dispatch = useDispatch();
    const selectNameFilter = useSelector((state) => state.filters.name);

    const onChangeFilter = (event) => {
        dispatch(changeFilter(event.target.value));
    };

    return (
        <label className={styles.searchBoxLabel}>
            <span className={styles.searchBoxLabelText}>Find contacts by name</span>
            <input
                className={styles.searchBoxInput}
                type="text"
                value={selectNameFilter}
                onChange={onChangeFilter}
                placeholder="Search contacts"
            />
        </label>
    );
};

export default SearchBox;
