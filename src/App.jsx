import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Element } from "react-scroll";
import { About, Contact, Model, Navbar, Project, Footer, Tech } from "./components/Index";
import MyChess from "./pages/MyChessp";
import LiveWhiteBoard from "./pages/LiveWhiteboard";
import DynamicVideo from "./components/DynamicVideo";
import SocioGram from "./pages/SocioGram"

function App() {
  return (
    <BrowserRouter>
      <DynamicVideo>
        <Routes>
          {/* Main Page */}
          <Route
            path="/"
            element={
              <div className="relative z-0">
                <Navbar />

                {/* Scrolling Sections */}
                <Element name="home" id="home">
                  <Model />
                </Element>
                <Element name="about" id="about">
                  <About />
                </Element>
                <Element name="tech" id="tech">
                  <Tech />
                </Element>
                <Element name="projects" id="projects">
                  <Project />
                </Element>
                <Element name="contact" id="contact">
                  <Contact />
                </Element>
                <Footer />
              </div>
            }
          />
          {/* MyChess Page */}
          <Route path="/mychess" element={<MyChess />} />
          {/* Live Whiteboard Page */}
          <Route path="/livewhiteboard" element={<LiveWhiteBoard />} />
          {/* Live Whiteboard Page */}
          <Route path="/sociogram" element={<SocioGram />} />
        </Routes>
      </DynamicVideo>
    </BrowserRouter>
  );
}

export default App;
