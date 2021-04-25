import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/contact";
import Header from "./components/header";

import "./App.css";

function App() {
  return (
    <>
      <Header/>
      <Profile />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
