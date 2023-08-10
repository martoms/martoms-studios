import { useState, useContext, useEffect } from "react";
import { AllContext } from "../contexts/AllContexts";

const useFetch = (url, action) => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const { dispatch, skills } = useContext(AllContext);

    useEffect(() => {

        const abortCont = new AbortController();
        fetch(url).then(res => {
                if (!res.ok) {
                    throw Error('There seems to be a problem fetching data.');
                } else {
                    return res.json();
                };  
            })
            .then(data => {
                setIsPending(false);
                setError(null);
                dispatch({ type: action, payload: data });
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            })

        return () => abortCont.abort();

    }, [url, dispatch, action, skills]);

    return { isPending, error };
}
 
export default useFetch;
