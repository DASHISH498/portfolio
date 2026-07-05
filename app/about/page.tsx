import AboutHero from "@/component/about/AboutHero";
import ContactCTA from "@/component/about/ContactCTA";

export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto py-10 space-y-6">
      <AboutHero />
      <ContactCTA />
    </main>
  );
}