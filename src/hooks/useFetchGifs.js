import {useEffect, useState} from 'react'
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = (category) =>{

    const [state, setState] = useState({
        data: [],
        loading: true
    });

        // el hook useEffect recibe la función que queremos que se ejecute solo una vez aunque luego hayan otros cambios en la página
    // y también recibe un array vacío que dice que no tenemos más dependencias y solo debe ejecutarse esa función la primera vez que se carga la página
    useEffect( ()=>{

        getGifs(category)
            .then(imgs =>{

                setState({
                    data: imgs,
                    loading:false
                });
            })

    },[category])
    
    return state; //{data:[], loading: true}

}