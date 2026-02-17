import { useState ,useEffect} from "react";

function Prevkey(){
    // const [count ,setCount] = useState(0);
    let count =0
    useEffect(()=>{
        console.log("runs on every mount");
    })
    function counter(){
        // setCount(count+1);
        // setCount(count+1);
        count++;
    }
    return (
        <>
        <div>{count}</div>
        <button onClick={counter}>Click Me</button>
        </>
    )

}

export default Prevkey



    //    setCount(prev =>{
    //        return prev+1;
    //     })
    //     setCount(prev =>{
    //        return prev+1;
    //     })