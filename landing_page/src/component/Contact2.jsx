import { useState } from "react";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  function handleChange(e) {
    setFormData({
      // ...formData,
      // [e.target.name]: e.target.value
      
    });
    setFormData(formData);
    console.log("formData",formData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    alert("Form Submitted!");
  }


  const sectionStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    fontFamily: "Arial, sans-serif"
  };

  const formStyle = {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    width: "350px",
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  };

  const inputStyle = {
    padding: "12px 15px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "16px",
    outline: "none",
    transition: "0.3s",
  };

  const buttonStyle = {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#667eea",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "10px",
    color: "#333"
  };

  return (
    <section style={sectionStyle}>
      <form onSubmitl={handleSubmit} style={formStyle}>
        <h2 style={headingStyle}>Contact Me</h2>

        <input
          style={inputStyle}
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
        />

        <input
          style={inputStyle}
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
        />

        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = "#5a67d8"}
          onMouseOut={(e) => e.target.style.backgroundColor = "#667eea"}
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
