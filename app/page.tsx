import Hero from '@/components/Hero';
import FAQSection from '@/components/FAQSection';
import ServiceInquiry from '@/components/ServiceInquiry';
import ServiceMap from '@/components/ServiceMap';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceInquiry>
        <WhyChooseUs />
        <ServiceMap />
        <FAQSection />
      </ServiceInquiry>
    </>
  );
}
