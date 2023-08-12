import { useState, useContext, useEffect } from "react";
import { AllContext } from "../contexts/AllContexts";

const useFetch = (url, action) => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [details, setDetails] = useState('');
    const { dispatch, skills } = useContext(AllContext);
    const token = localStorage.getItem('token');

    useEffect(() => {

        const abortCont = new AbortController();
        fetch(url, {
            headers: {'Authorization': `Bearer ${token}`}
        }).then(res => {
                if (!res.ok) {
                    throw Error('There seems to be a problem fetching data.');
                } else {
                    return res.json();
                };  
            })
            .then(data => {
                setIsPending(false);
                setError(null);
                if (action !== undefined) {
                    dispatch({ type: action, payload: data });
                } else {
                    setDetails(data);
                }
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

    }, [url, dispatch, action, skills, token]);

    return { isPending, error, details };
}
 
export default useFetch;
