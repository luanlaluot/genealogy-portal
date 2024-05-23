import MainLayout from "@/layouts";
import React from "react";
import HomeHero from "../home-hero";
import HomeInformation from "../home-information";
import HomeBio from "../home-bio";

export default function HomeView() {
  return (
    <MainLayout>
      <HomeHero />

      <HomeInformation />

      <HomeBio />
    </MainLayout>
  );
}
