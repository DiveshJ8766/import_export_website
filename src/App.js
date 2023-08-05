import AccordionSection from "./AccordionSection";
import "./App.css";
import CTASection from "./CTASection";
import CarouselSection from "./CarouselSection";
import ContactUs from "./ContactUs";
import Feature from "./Feature";
import Footer from "./Footer";
import Header from "./Header";
import VideoSection from "./VideoSection";

function App() {
  return (
    <div className="App">
      <Header />
      <CTASection />
      <VideoSection />
        <Feature />
      <CarouselSection />
      <AccordionSection />
        <ContactUs />
     <Footer />
    </div>
  );
}

export default App;
