import { useState } from "react";


function Oneway (){
    const [name, setName] = useState("");

  function handleSubmit() {
    alert("Form Submitted");
    setName(""); // Reset state
  }

  return (
    <>
      <input
        placeholder="Your Name"
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Submit
      </button>

      <p>State Value: {name}</p>
    </>
  );

}

export default Oneway


