import { useEffect } from "react";

function Contact() {

  useEffect(() => {
    console.log("Mounted contact");

    return () => {
      console.log("Unmounted contact");
    };

  }, []);

  return <h2>Contact Page</h2>;
}
