import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Certifications } from "@/components/Certifications";
import { Products } from "@/components/Products";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Certifications />
        <Products />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
