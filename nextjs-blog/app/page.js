import Image from "next/image";
import "./globals.css";
import NavBAr from "./Components/NavBAr";
import Hero from "./Components/Hero";
import MobileHero from "./Components/MobileHero";
import Imagesdiv from "./Components/Imagesdiv";
import Ukstudy from "./Components/Ukstudy";
import Ukiuniversity from "./Components/Ukiuniversity";
import UkInsitute from "./Components/UkInsitute";
import Studyoptions from "./Components/Studyoptions";
import AbroadConsultancy from "./Components/AbroadConsultancy";
import NewsEvents from "./Components/NewsEvents";
import StudyCards from "./Components/StudyCards";
import Footer from "./Components/Footer"
import VideoComponent from "./Components/VideoComponent";
import Informativediv from "./Components/Informativediv";
import Ukpartners from "./Components/Ukpartners";



export default function Home() {
  return (
    <>
      <NavBAr />
      <Hero/>
      <div className=" mt-4 p-2">
        <h1 className=" text-center text-blue-950 text-3xl">
          Study in the Uk - Study Abroad Consultants
        </h1>
        <p className="p-5 text-center">
        SI-UK will help you apply to any UK university - 100% free. Our UK overseas education consultants specialise in undergraduate, postgraduate, Oxbridge and PhD applications. Arrange your free consultation and begin your journey towards studying in the UK
        </p>
      </div>
      <MobileHero/>
      <Imagesdiv/>
      <Ukstudy/>
      <Ukiuniversity/>
      <UkInsitute/>
      <Studyoptions/>
      <AbroadConsultancy/>
      <NewsEvents/>
      <StudyCards/>
      <VideoComponent/>
      <Informativediv/>
      <Ukpartners/>
      <Footer/>
      
    
  

     

    </>
  );
}
