export const PRODUCT_LOADING:string = "PRODUCT_LOADING";
export const PRODUCT_SUCCESS:string = "PRODUCT_SUCCESS";
export const PRODUCT_FAIL:string = "PRODUCT_FAIL";
export const payload:any = "payload";

export interface ProductLoading{
    type: typeof PRODUCT_LOADING
};

export interface ProductFail{
    type: typeof PRODUCT_FAIL
};

export type ProductType = {
    "products": Product[]
};

export type Product = {
    "_id":string,
    "name":string,
    "category":string,
    "image":string,
    "price":number,
    "brand":string,
    "rating":number,
    "numReviews":number,
    "description":string
}



export interface ProductSuccess{
    type : typeof PRODUCT_SUCCESS,
    payload : ProductType
};

export type ProductDispatchTypes = ProductLoading | ProductSuccess | ProductFail;


