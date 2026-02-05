import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CoffeeMenu from '@/components/CoffeeMenu';
import AboutSection from '@/components/AboutSection';
import AppSection from '@/components/AppSection';
import ReserveSection from '@/components/ReserveSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CoffeeMenu />
        <AboutSection />
        <AppSection />
        <ReserveSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
