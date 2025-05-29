import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/Homepage/mainpage";
import ContactUs from "../pages/Contact";
import News from "../pages/News";
import Gallery from "../pages/Gallery";
// import AI from "../pages/ai/SpeechAssistant";

const Route_links = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/news" element={<News />} />
      <Route path="/gallery" element={<Gallery />} />
      {/* <Route path="/pg-ai" element={<AI />} /> */}
    </Routes>
  );
};
export default Route_links;
