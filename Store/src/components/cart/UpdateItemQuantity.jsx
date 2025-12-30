import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";
import Button from "../../ui/Button";

function UpdateItemQuantity({ productId, currentQuantity }) {
  const dispatch = useDispatch();

  function handleIncQuantity() {
    dispatch(increaseItemQuantity(productId));
  }

  function handleDecQuantity() {
    dispatch(decreaseItemQuantity(productId));
  }

  return (
    <div className="hidden items-center gap-2 md:flex md:gap-3">
      <Button variation="round" size="basebtn" onClick={handleDecQuantity}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>

      <Button variation="round" size="basebtn" onClick={handleIncQuantity}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
