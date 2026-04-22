import { useState } from "react";

function testUseState() {
    let [count, setCount] = useState(0);
    let btn = false;
    function increment() {
        // console.log("count before", count);
        setCount(prev=>prev+1);
        // console.log("count after", count);
    }
     
    let interval ;

    function start() {
        btn =true;
        interval =setInterval(() => {
            increment();
        }, 1000)
    }

    function end(){
       clearInterval(interval);
    //    setCount(0);
    }
    return (
        <div>
            <h1>
                Timer:{count}
            </h1>
            <button disabled={btn} onClick={start}>Start</button>
            <button onClick={end}>End</button>
        </div>
    )

}


export default testUseState;