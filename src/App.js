import AOS from "aos";
import "aos/dist/aos.css";

import { Header, Main, Footer } from './components';

function App() {
  AOS.init();

  return (
    <div className="w-screen min-h-screen px-10 bg-background-50 font-poppins">
      <div className="container flex flex-col justify-between h-screen mx-auto">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;