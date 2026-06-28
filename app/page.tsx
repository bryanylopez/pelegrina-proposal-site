import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Opportunity } from "@/components/sections/Opportunity";
import { Today } from "@/components/sections/Today";
import { Gap } from "@/components/sections/Gap";
import { Capabilities } from "@/components/sections/Capabilities";
import { Showcase } from "@/components/sections/Showcase";
import { Proposal } from "@/components/sections/Proposal";
import { Why } from "@/components/sections/Why";
import { Engagement } from "@/components/sections/Engagement";
import { QuickStart } from "@/components/sections/QuickStart";
import { KeyQuestions } from "@/components/sections/KeyQuestions";
import { NextSteps } from "@/components/sections/NextSteps";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Opportunity />
      <Today />
      <Gap />
      <Capabilities />
      <Showcase />
      <Why />
      <Proposal />
      <Engagement />
      <QuickStart />
      <KeyQuestions />
      <NextSteps />
      <Footer />
    </main>
  );
}
