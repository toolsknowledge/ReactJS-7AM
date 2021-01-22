import { Product } from "../model/Product";

export const PRODUCTS_LOADING:string = "PRODUCTS_LOADING";
export const PRODUCT_SUCCESS:string = "PRODUCT_SUCCESS";
export const PRODUCT_FAIL:string = "PRODUCT_FAIL";

interface ProductAsync{
    loading:boolean;
    products:Product[];
    error:string;
};
interface ProductsLoadingRequest extends ProductAsync{
    type: typeof PRODUCTS_LOADING;
};
interface ProductLoadingSuccess extends ProductAsync{
    type: typeof PRODUCT_SUCCESS;
};
interface ProductLoadingFail extends ProductAsync{
    type: typeof PRODUCT_FAIL;
};

export type ProductActionTypes = ProductsLoadingRequest | ProductLoadingSuccess |  ProductLoadingFail;