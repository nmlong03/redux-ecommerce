import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import productApi, { productReducer } from "../api/product";
import uploadApi, { uploadReducer } from "../api/upload";
import CategoryApi, { categoryReducer } from "../api/category";
import cartApi, { cartReducer } from "../api/cart";
import authApi, { authReducer } from "../api/auth";

const rootReducer = combineReducers({
    products: productReducer,
    upload: uploadReducer,
    category: categoryReducer,
    auth: authReducer,
    cart: cartReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware).concat(CategoryApi.middleware).concat(uploadApi.middleware).
    concat(cartApi.middleware). concat(authApi.middleware)
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
export default store