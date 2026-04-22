import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Features from "./component/Features";
import CTA from "./component/CTA";
import Footer from "./component/Footer";
import Contact from "./component/Contact";
import Contact2 from "./component/Contact2";
import Oneway from "./component/oneWay";
import Prevkey from "./component/Prevkey";
import List from "./component/List";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features/>
      <CTA /> 
      <Contact2/> 
      <Footer /> 
      {/* <Oneway/>
      {/* <Prevkey></Prevkey> */}
      {/* <List></List> */}
    </>
  );
}

export default App;
