import { useSelector } from "react-redux";

const Display = () => {
  const count = useSelector((store) => store.count);
  return <h3>{count}</h3>;
};

export default Display;
