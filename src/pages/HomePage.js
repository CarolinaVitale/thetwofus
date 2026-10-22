import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import ProductCollection from '../components/ProductCollection';
import PackagingSection from '../components/PackagingSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return <>
    <Hero />
    <Ticker />
    <ProductCollection />
    <PackagingSection />
    <AboutSection />
    <ContactSection />
  </>;
}
