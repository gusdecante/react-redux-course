import { reducer } from "./reducers"
import { numberAdd2 } from "./actions/number"
const initialState = {
    number: 0,
    cart: [],
    user: null,
    products: []
}

export {
    reducer,
    initialState, numberAdd2
}