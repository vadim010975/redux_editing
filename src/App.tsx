import "./App.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import addPosition from "./redux/addPosition";
import Form from "./components/Form";
import List from "./components/List";
import { Pricelist } from "./service";

export default function App() {

  type RootState = {
    list: {
      pricelist: Pricelist,
    }
  }

  const { pricelist } = useSelector((state: RootState) => state.list);

  const dispatch = useDispatch();
  

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
      <List pricelist={pricelist} />
    </>
  )
}
