import { useState } from "react";


function Contact() {
  const [name ,setName]=useState("");
  let value ;
function handleChange(event){
    value = event.target.value;
    console.log("value",value)
  setName(event.target.value);
}
  function handleSubmit() {
    setName("");
    alert("Form submitted",value);
  }

  // UI = F(STATE)

  const obj1 = {
    name:"Aniket",
    email:"email1@gmail.com",
    address:{
       adress1:"nobe",
       adress2:"shallow copy"
    }
  }
  const obj2 = obj1;
  const obj3 = {
    name:"Aniket",
    email:"email1@gmail.com"
  }

  const obj4 = {...obj1};

  console.log("Object4",obj4 , obj2)
  console.log("logging object",Object.is(obj1,obj3));


  return (
    <section>
      <h2>Contact Me</h2>
       <p>{name}</p>
      <input type="text" placeholder="Your Name"  onChange={handleChange} />
      <input type="email" placeholder="Your Email" />

      <button onClick={handleSubmit}>
        Submit
      </button>
    </section>
  );
}


export default Contact;


// Because React does NOT re-render when a normal variable changes.

// React re-renders only when:

// Props change
// State changes

// Changing let variable does not trigger re-render.

// A Hook is a special function in React that lets you “hook into” React features like state and lifecycle inside functional components.

// Before Hooks:

// Only class components could have state
// Functional components were “stateless”

// Why Were Hooks Introduced?

// Problems with class components:

// Confusing this
// Hard lifecycle logic
// Logic scattered across lifecycle methods
// Less reusable logic

// Hooks made:

// Functional components powerful
// Cleaner logic
// Better reusability
// Easier testing


// const [formData, setFormData] = useState({
//   name: "",
//   email: ""
// });

