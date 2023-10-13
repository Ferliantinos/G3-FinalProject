import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import Section1 from "../components/layouts/Section1";
import Header from "../components/layouts/header";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Navbar />
        <Section1 />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
