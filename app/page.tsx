import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Whyus from "@/components/whyus";
import Menu from '@/components/heromenu';
import Story from '@/components/story';

export default function Home() {
  return (
    <>
      {/* REMOVED: <Navbar /> and <Footer /> 
         They are already provided by layout.tsx automatically 
      */}
      
      <Hero />
      <Whyus />
      <Story />
      <Menu />
      <Testimonials />
    </>
  );
}