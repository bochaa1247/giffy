import  {useState,useEffect,useRef} from "react";



export default function useNearScreen ({distance='100px'}={}) {
    const [isNearScreen,setShow]= useState(false)
    const fromRef = useRef()
    useEffect(function() {
        let observer
       const onChange = (entries,observer)=> {
    
      
        const el= entries[0]
    
        if(el.isIntersecting){ 
        setShow(true)
        observer.disconnect()
       
        }
       }
       // POLYFILL INTERNET EXPLORER 11 
        Promise.resolve(
            IntersectionObserver !== 'undefined' ? IntersectionObserver: import('intersection-observer')
        ).then(()=> {
            observer= new IntersectionObserver(onChange , {rootMargin : distance })
            observer.observe(fromRef.current)


        })
    
   
  
    // DEVOLVEMOS UNA FUNCION PARA CUANDO EL COMPONENT SE DEJE DE UTILIZAR TAMBIEN EL EVENTO, EVITANDO EJECUAR EL SETSHOW CUANDO EL COMPONENTE NO ESTE DISPONIBLE
    return () =>observer && observer.disconnect()
    })

    return {isNearScreen,fromRef }
    
}