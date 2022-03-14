import { typesProducts } from '../types/types';
import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from '../firebase/firebaseConfig';




//Action CATEGORY Product Async
export const categoryProductAsync = (category) => {

    return async (dispatch) => {
        console.log(category);
        
        const prodCollections = collection(db, "products");
        const q = query(prodCollections, where("category", "==", category))
        const datos = await getDocs(q);
        

        const producto = [];
        datos.forEach((doc) => {
            producto.push(doc.data())
        })
        dispatch(categoryProductSync(producto))
    }
}

//Action Category Product Sync
export const categoryProductSync = (category) => {
    return {
        type: typesProducts.category,
        payload: category
    }
}


//LIST PRODUCT ---------------------------------------------

//Action List Product Async
export const listProductsAsync = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "products"));
        //console.log(querySnapshot);

        const productos = [];
        querySnapshot.forEach((doc) => {
            productos.push({
                ...doc.data()
            })
        });
        //console.log(productos);
        dispatch(listProductsSync(productos));
    }
}


//Action List Product Sync
export const listProductsSync = (products) => {
   return {
       type: typesProducts.list,
       payload: products
   }
}





//SHOW DETAILS PRODUCT ---------------------------------------------


//Action Show Detail Product Async
export const showDetailProductAsync = (code) => {

    return async (dispatch) => {
        console.log(code)
        const prodCollections = collection(db, "products");
        const q =query(prodCollections, where("codeproduct", "==", code))
        
        const datos = await getDocs(q);
        console.log(datos);

        const producto = [];
        datos.forEach((doc) => {
            producto.push(doc.data())
        })
        //console.log(producto);
        dispatch(showDetailProductSync(producto))
    }
}

//Action Show Detail Product Sync
export const showDetailProductSync = (product) => {
    return {
        type: typesProducts.detail,
        payload: product
    }
}

//SEARCH PRODUCT ---------------------------------------------

//Action Search Product Async
export const searchProductAsync = (product) => {

    return async (dispatch) => {
        const prodCollections = collection(db, "products");
        const q = query(prodCollections, where("category", "==", product))
        const datos = await getDocs(q);
        console.log(datos);

        const producto = [];
        datos.forEach((doc) => {
            producto.push(doc.data())
        })
        //console.log(producto);
        dispatch(searchProductSync(producto))
    }
}

//Action Search Product Sync
export const searchProductSync = (product) => {
    return {
        type: typesProducts.search,
        payload: product
    }
}



