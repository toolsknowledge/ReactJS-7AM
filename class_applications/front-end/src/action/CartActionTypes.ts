import { CartModal } from "../model/cart.modal";

export const CART_ITEMS_LOADING:string = "CART_ITEMS_LOADING";
export const CART_ITEMS_LOADING_SUCCESS:string = "CART_ITEMS_LOADING_SUCCESS";
export const CART_ITEMS_LOADING_FAIL:string = "CART_ITEMS_LOADING_FAIL";

interface CartAsync{
    loading:boolean;
    error:string;
    itemsInCart:CartModal;
};

interface CartItemsLoading extends CartAsync{
        type: typeof CART_ITEMS_LOADING;
};

interface CartItemsLoadingSuccess extends CartAsync{
        type: typeof CART_ITEMS_LOADING_SUCCESS;
};

interface CartItemsLoadingFail extends CartAsync{
        type: typeof CART_ITEMS_LOADING_FAIL;
};

export type CartActionTypes = CartItemsLoading | CartItemsLoadingSuccess | CartItemsLoadingFail;