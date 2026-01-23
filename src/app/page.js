import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DiscoverSection from "@/components/Discover";
import GardenSection from "@/components/GardenSection";
import Health from "@/components/Health";
import Wedding from "@/components/Wedding";
import Tiptop from "@/components/Tiptop";
import Customer from "@/components/Customer";
import ServicesGrid from "@/components/ServicesGrid";


export default function Home() {
  return (
 <div>

  {/* <Header /> */}
  <HeroSection/>
  <DiscoverSection/>
   {/* <GardenSection/>
   <Health/>
   <Wedding/> */}
   <ServicesGrid/>
   <Tiptop/>
   {/* <Customer/> */}

  {/* <Footer/> */}
  
 </div>

  );
}

