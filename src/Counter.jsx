import React, {useState} from "react";


function Counter(){

    const[ count, setCount ] = useState(0);

    return (
        <>
            <p>{count}</p>
        </>
    )
}

export default Counter;