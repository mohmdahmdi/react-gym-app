import LandingPage from "./pages/landingPage/landingPage";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  Aos.init();
  return (
    <>
      <LandingPage />
    </>
  );
};

export default App;
