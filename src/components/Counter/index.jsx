import { useDispatch } from "react-redux";
import { addNumber, subNumber } from "../../store/modules/counter/actions";

const Counter = () => {
  const dispatch = useDispatch();

  return (
    <div className="Buttons">
      <button onClick={() => dispatch(addNumber(1))}>Add</button>
      <button onClick={() => dispatch(subNumber(1))}>Sub</button>
    </div>
  );
};

export default Counter;
