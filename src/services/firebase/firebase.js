import { collection, getFirestore, addDoc, updateDoc, doc, getDoc } from "firebase/firestore"

export const firebaseServices = {
    crearOrden: async (ordenRealizada) => {
        try{
            const db = getFirestore()
            const coleccionDeOrdenes = collection(db, 'ordenes de compra')
            const ordenCreada = await addDoc(coleccionDeOrdenes, ordenRealizada)
            return {
                id: ordenCreada.id 
            }
        }catch (err) {
            return { err }
        }
    },
    crearCarrito: async (carrito) => {
        try {
            const db = getFirestore()
            const coleccionDeCarritos = collection(db, "Carritos")
            const carritoCreado = await addDoc(coleccionDeCarritos, carrito)
            return {
                id: carritoCreado.id
            }
        } catch (err) {
            return {err}
        }
    },
     actualizarCarrito: async (carritoID) => {
        try {
            const db = getFirestore()
            const referenciaDelDocumento = doc(db, "Carritos", carritoID)
            const data = {
                status: "Completo"
            }
            await updateDoc(referenciaDelDocumento, data)
        } catch (err) {
            console.warn(err)
            return {err}
        }
    },
    obtenerCarritoPorID: async (carritoID) => {
        try{
            const db = getFirestore()
            const referenciaDelDocumento = doc(db, "Carritos", carritoID)
            const dataDocumento = await getDoc(referenciaDelDocumento)
            return dataDocumento.data()
        }catch(err){
            return {err}
        }
    }
}