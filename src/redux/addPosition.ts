import { ADD_POSITION } from "./actions"
import { Position } from "../service"

const addPosition = (position: Position) => {
  return {
    type: ADD_POSITION,
    payload: position,
  }
}

export default addPosition;