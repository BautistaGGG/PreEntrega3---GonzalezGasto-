import { useState, useEffect } from "react"

function useFetch(url) {
    const [APIdata, setAPIData] = useState(null)
    const [isLoading,setIsLoading] = useState(true)

    useEffect(() => {
       async function gettingInfoAPI(){
        try{
            const response = await fetch(url) 
            if(!response.ok){
              throw new Error(`Error ${response.status} al obtener los datos solicitados: ` + response.statusText)
            }
            const jsonData = await response.json()
            setAPIData(jsonData)
            setIsLoading(false)
          } catch(error){
            setIsLoading(false)
            console.error("Hubo un error: " + error)
          }
       }
      setTimeout(() => gettingInfoAPI(), 2000) 
    },[url])
    
    return { APIdata, isLoading }
}

export default useFetch