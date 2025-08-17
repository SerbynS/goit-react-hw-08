import { HashLoader } from "react-spinners";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.backdrop}>
      <HashLoader color="#ffa500" height={50} width={50} />
    </div>
  );
};

export default Loader;
