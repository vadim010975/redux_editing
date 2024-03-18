import { ADD_POSITION } from "./actions";

const initialState = {
  pricelist: [
    {
      work: 'Замена стекла',
      price: 21000,
    },
    {
      work: 'Замена дисплея',
      price: 25000,
    },
    {
      work: 'Замена аккумулятора',
      price: 4000,
    },
    {
      work: 'Замена микрофона',
      price: 2500,
    },
  ]
}

type Position = {
  work: string,
  price: number,
}

type Action = {
  type: string,
  payload: Position,
}

const pricelistReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_POSITION:
      return {
        ...state,
        pricelist: state.pricelist.push(action.payload),
      }
    default:
      return state;
  }
}

export default pricelistReducer;