import { About } from "@/components/About";
import { AttendanceModalities } from "@/components/AttendanceModalities";
import { ReferralCta } from "@/components/ReferralCta";
import { BudgetForm } from "@/components/BudgetForm";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { StrategicPhotos } from "@/components/StrategicPhotos";
import { TccHelps } from "@/components/TccHelps";
import { WhatToExpect } from "@/components/WhatToExpect";
import { WhatsappFloat } from "@/components/WhatsappFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <TccHelps />
        <HowItWorks />
        <AttendanceModalities />
        <StrategicPhotos />
        <WhatToExpect />
        <BudgetForm />
        <Faq />
        <ReferralCta />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
