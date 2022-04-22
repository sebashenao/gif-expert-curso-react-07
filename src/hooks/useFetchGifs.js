import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

/**
 * tenemos los custom hooks que es para que
 * una funcion o proceso se pueda reutilizar en varias partes
*/
export const useFecthGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    /**
     * este useEffect se utiliza para algo que
     * se ejecutara una unica vez en el componente
     * pero en el momento que la category cambie se
     * necesita que se ejcute nuevamente, por eso en el
     * array se debe enviar la category, si no, esto
     * lo que hara es solo hacerlo una vez
    */

    /**
     * no se puede utilizar async/await en useEffect
     * porque esta funcion siempre espera una respuesta
     * sincronica
    */
    useEffect(() => {
        getGifs(category).then(imgs => setState({ data: imgs, loading: false }));
    }, [category]);

    return state;
}