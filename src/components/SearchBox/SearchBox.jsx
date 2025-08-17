import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";

import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const handleFilter = (e) => dispatch(changeFilter(e.target.value));

  return (
    <div className={css.wrapper}>
      <p className={css.title}>Find contacts by name</p>
      <input className={css.text} type="text" onChange={handleFilter} />
    </div>
  );
};

export default SearchBox;
