//MAPEAR FETCH?
import { ServerNotLaunched } from "./ErrorServerNotLaunched";

export async function fetchData<T>(URL: string){

    try {
        const response = await fetch(URL)
    
        if (!response.ok) {        
            throw new Error(`Fetch error: ${response.status}, ${response.statusText}`);
          }

          const format: T = await response.json()
          
          
          
        return format
        
    
    } catch (error) {

        if (error instanceof Error) {
            if (/fetch failed/i.test(error.message)) {
                throw new ServerNotLaunched("Json server is not launched")
            } else{
                console.error(`Fetch error: ${error.name}`)
            }
            
        } else{
            console.error("Unexpected error")
        }

        
    }

}

