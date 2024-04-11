//this is the main page
import Image from "next/image";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Landing_page from "./landing_page/Landing_page";
import '@fortawesome/fontawesome-free/css/all.css';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Landing_page/>
      <Footer/>
      <div className="home "></div>
    </div>
  );
}