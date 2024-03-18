import "./App.css";
import Form from "./components/Form";
import { useDispatch, useSelector } from "react-redux";
import addPosition from "./redux/addPosition";

export default function App() {

  type Position = {
    work: string,
    price: number,
  }

  type Action = {
    type: string,
    payload: Position,
  }

  type State = {list: (state: {
    pricelist: {
        work: string;
        price: number;
    }[];
}, action: Action) => {
    pricelist: {
        work: string;
        price: number;
    }[];
}}

  const dispatch = useDispatch();
  const { pricelist } = useSelector((state: any) => state.list)

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const formData = new FormData(target);
    const data = Object.fromEntries(formData);
    const work = data.work as string;
    const price = Number(data.price);
    if (Number.isNaN(price)) {
      return;
    }
    target.reset();
    dispatch(addPosition({work, price}));
  }

  return (
    <>
      <Form handleSubmit={handleSubmit}/>
      <List />
    </>
  )
}
