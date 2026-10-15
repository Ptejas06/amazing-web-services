import Hero from '@/components/Hero';
import ServiceInquiry from '@/components/ServiceInquiry';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceInquiry>
        <WhyChooseUs />
      </ServiceInquiry>
    </>
  );
}
