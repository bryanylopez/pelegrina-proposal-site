import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Opportunity } from "@/components/sections/Opportunity";
import { Audit } from "@/components/sections/Audit";
import { Today } from "@/components/sections/Today";
import { Gap } from "@/components/sections/Gap";
import { Capabilities } from "@/components/sections/Capabilities";
import { Proposal } from "@/components/sections/Proposal";
import { Why } from "@/components/sections/Why";
import { Scope } from "@/components/sections/Scope";
import { Engagement } from "@/components/sections/Engagement";
import { Sample } from "@/components/sections/Sample";
import { QuickStart } from "@/components/sections/QuickStart";
import { KeyQuestions } from "@/components/sections/KeyQuestions";
import { NextSteps } from "@/components/sections/NextSteps";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Opportunity />
      <Audit />
      <Today />
      <Gap />
      <Capabilities />
      <Proposal />
      <Why />
      <Scope />
      <Engagement />
      <Sample />
      <QuickStart />
      <KeyQuestions />
      <NextSteps />
      <Footer />
    </main>
  );
}
