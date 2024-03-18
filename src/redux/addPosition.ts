import { ADD_POSITION } from "./actions"

type Position = {
  work: string,
  price: number,
}

const addPosition = (position: Position) => {
  return {
    type: ADD_POSITION,
    payload: position,
  }
}

export default addPosition;