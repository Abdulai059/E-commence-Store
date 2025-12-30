import Button from "@/ui/Button";
import { deleteItem } from "./cartSlice";
import { useDispatch } from "react-redux";

function DeleteItem() {
  //   const dispatch = useDispatch();

  return (
    <Button className="cursor-pointer" variant="small">
      Delete
    </Button>
  );
}

export default DeleteItem;

// onClick={() => dispatch(deleteItem(pizzaId))}
