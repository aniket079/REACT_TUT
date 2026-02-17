import { useEffect } from "react";

function Contact() {

  useEffect(() => {
    console.log("Mounted");

    return () => {
      console.log("Unmounted");
    };

  }, []);

  return <h2>Contact Page</h2>;
}
