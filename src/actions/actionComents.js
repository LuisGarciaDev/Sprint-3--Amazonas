import { addDoc, collection, deleteDoc, getDocs, query, where, doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'
import {typesCom} from '../types/types'


// Asyn action register comentario
export const registerComentAsync = (nameuser, emailuser, title, opinion) =>{
    return(dispatch)=>{
    const item = {
        nameuser,
        emailuser,
        title,
        opinion,
    }
    addDoc(collection(db, "comentarios"), item)
    .then(resp =>{
        dispatch(registerComentSync(item))
        dispatch(listComentAsync())
    })
    .catch(error => {
        console.log(error)
    })
    }
}

// Sync action register comentario --------------------------------------
export const registerComentSync = (item) =>{
    return{
        type: typesCom.register,
        payload: item
    }
}





// Asyn action list comentario
export const listComentAsync = () => {

    return async (dispatch)  => {
        const querySnapshot = await getDocs(collection(db, "comentarios"));

        const comentarios = []
        querySnapshot.forEach((doc)=> {
        comentarios.push({
                ...doc.data()
            })
        })
        //console.log(comentarios);
        dispatch(listComentSync(comentarios))
    }
}

// Sycn action list comentario ------------------------------------------
export const listComentSync = (coments) =>{
    return{
        type: typesCom.list,
        payload: coments
    }
}



// Sycn action delete comentario----------------------------------------
export const deleteSync = (email) => {
    return{
        type: typesCom.delete,
        payload: email
    }
}

// Asyn action delete comentario
export const deleteAsync = (email) =>{
    return async(dispatch) =>{
        const artCollection = collection(db, "comentarios")
        const q = query(artCollection, where('emailuser','==',email))
        const data = await getDocs(q)
        data.forEach((docu)=>{
            deleteDoc(doc(db, "comentarios",docu.id))
        })
        dispatch(deleteSync(email))
        dispatch(listComentAsync())
    }
}




// Sycn action update comentario----------------------------------------
export const updateComentSync = (id, coments) =>{
    return{
        type: typesCom.update,
        payload:{
            id,
            ...coments
        }
    }
}

// Asyn action update comentario
export const updateComentAsync = (coments) =>{
    console.log(coments);

    return async (dispatch) => {

        const artCollection = collection(db, "comentarios")
        const q = query(artCollection,where('nameuser','==', coments.nameuser))
        const data = await getDocs(q)

        data.forEach((docu) =>{
            updateDoc(doc(db, "comentarios", docu.id),{
                nameuser: coments.nameuser,
                emailuser: coments.emailuser,
                title: coments.title,
                opinion: coments.opinion,
            })
        })
        dispatch(listComentAsync())
    }
}