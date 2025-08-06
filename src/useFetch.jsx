import {useState, useEffect} from "react";

const useFetch = (url)=>{
    const [courses, setCourses]=useState([]);
    const [error, setError]=useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        setTimeout(()=>{fetch(url, {signal})
            .then(res => {
                if(!res.ok) throw Error('Couldn\'t retrieve courses');

                console.log(res)
                return res.json()
            })
            .then(data=>setCourses(data))
            .catch(err =>{
                setError(err.message);
            })}, 200);


        // unmounted
        return () => {
            console.log('unmounted')
            controller.abort();
        }

    }, []);

    return [courses,setCourses, error, setError];
}

export default useFetch;