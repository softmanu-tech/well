"use client"
import Image from "next/image";
import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNav";
import Grid from "./components/Grid";
import RecentProjects from "./components/ui/RecentProjects";
import { navItems } from "@/data";
import Clients from "./components/Clients";
import Experience from "./components/Experience";
import Approach from "./components/Approach";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollingPortfolio from "./components/ScrollingPortfolio";
import Navbar from "./components/Navbar";
import Services from "./components/services";
import PricingTables from "./components/PricingPlans";
import PricingPlans from "./components/PricingPlans";
import AboutUs from "./components/AboutUs";
import Card3D from "./components/3D";
import ScrollingCards from "./components/ScrollingCards";
import ServiceTable from "./components/ServiceTable";
import LoyaltyProgram from "./components/LoyaltyProgram";



export default function Home() {
  return (
    <>
      <Navbar />
      <main className=" bg-slate-100 justify-center items-center overflow-hidden px-5 mx-auto sm:px-10">
        <div className="max-w-7xl w-full mx-auto px-5 sm:px-10 flex-col grid-flow-col justify-center items-center overflow-clip">
          <Hero/>
          <AboutUs/>
          <Experience />
          <ScrollingCards/>
          <RecentProjects/>
          <Clients />
          <ServiceTable/>
          
          <ScrollingPortfolio/>
          
          <Approach/>
          <LoyaltyProgram/>
          <Footer/>
        </div>
      </main>
    </>
  );
}