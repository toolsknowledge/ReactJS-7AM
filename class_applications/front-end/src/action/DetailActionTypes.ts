import { Detail } from "../model/detail";

export const LODAING_PRODUCT_ID:string = "LODAING_PRODUCT_ID";
export const LODAING_PRODUCT_ID_SUCCESS:string = "LODAING_PRODUCT_ID_SUCCESS";
export const LODAING_PRODUCT_ID_FAIL:string="LODAING_PRODUCT_ID_FAIL";

interface DetailAsync{
    loading:boolean;
    product:Detail;
    error:string;
};

interface LoadingProductID extends DetailAsync{
    type: typeof LODAING_PRODUCT_ID;
}

interface LoadingProductIDSuccess extends DetailAsync{
    type: typeof LODAING_PRODUCT_ID_SUCCESS;
}

interface LoadingProductIDFail extends DetailAsync{
    type: typeof LODAING_PRODUCT_ID_FAIL;
};

export type DetailActionTypes = LoadingProductID | LoadingProductIDSuccess |  LoadingProductIDFail;
