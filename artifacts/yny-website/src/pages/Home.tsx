import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { TrustIndicators } from "@/components/sections/TrustIndicators";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { WhyYnY } from "@/components/sections/WhyYnY";
import { Industries } from "@/components/sections/Industries";
import { EngagementModels } from "@/components/sections/EngagementModels";
import { Leadership } from "@/components/sections/Leadership";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <TrustIndicators />
      <WhatWeDo />
      <FeaturedProducts />
      <WhyYnY />
      <Industries />
      <EngagementModels />
      <Leadership />
      <CTA />
    </Layout>
  );
}