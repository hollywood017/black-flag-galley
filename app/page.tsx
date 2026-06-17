import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StoryPanel from "@/components/StoryPanel";
import MenuShowcase from "@/components/MenuShowcase";
import VisitUs from "@/components/VisitUs";
import FollowBand from "@/components/FollowBand";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav overDarkHero />
      <main>
        <Hero />
        <StoryPanel />
        <MenuShowcase />
        <VisitUs />
        <FollowBand />
      </main>
      <Footer />
    </>
  );
}
