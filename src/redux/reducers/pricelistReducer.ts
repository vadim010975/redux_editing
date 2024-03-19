import { ADD_POSITION, REMOVE_POSITION } from "../actions";
import { Position } from "../../service";

const initialState = {
  pricelist: [
    {
      work: 'Замена стекла',
      price: '21000',
    },
    {
      work: 'Замена дисплея',
      price: '25000',
    },
    {
      work: 'Замена аккумулятора',
      price: '4000',
    },
    {
      work: 'Замена микрофона',
      price: '2500',
    },
  ]
}

type Action = {
  type: string,
  payload: Position,
}

const pricelistReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_POSITION:
      // eslint-disable-next-line no-case-declarations
      const arr = [...state.pricelist];
      arr.push(action.payload);
      return {
        ...state,
        pricelist: arr,
      }
      case REMOVE_POSITION:
        return {
          ...state,
          pricelist: state.pricelist.filter(el => el != action.payload),
        }
    default:
      return state;
  }
}

export default pricelistReducer;