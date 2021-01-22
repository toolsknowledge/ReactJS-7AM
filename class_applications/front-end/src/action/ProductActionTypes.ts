import { product } from "../model/product";

export const PRODUCTS_LOADING:string = "PRODUCTS_LOADING";           
export const PRODUCTS_SUCCESS:string = "PRODUCTS_SUCCESS";            
export const PRODUCTS_FAIL:string = "PRODUCTS_FAIL";                  

interface ProductsAsync{
    loading:boolean;
    products:product[];
    error:string;
};

interface ProductsLoading extends ProductsAsync{
    type : typeof PRODUCTS_LOADING;
};

interface ProductsSuccess extends ProductsAsync{
    type: typeof PRODUCTS_SUCCESS;
};

interface ProductsFail extends ProductsAsync{
    type: typeof PRODUCTS_FAIL;
};

export type ProductActionTypes = ProductsLoading |  ProductsSuccess | ProductsFail;


