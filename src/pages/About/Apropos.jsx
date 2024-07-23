
import AboutBanner from "../../components/AboutBanner/AboutBanner";
import Collapse from "../../components/Collapse/Collapse";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Minitel from "../../assets/logo-minitel.jpeg";
import "./Apropos.css";

const Apropos = () => {

  return (
    <div className="apropos">
      <Header />
      <main className="main">
        <AboutBanner imageSrc={Minitel} />
        <section className="collapses-container">


          <Collapse title="Contact">
            <p>Renaud.subrini.dev@gmail.com</p>
          </Collapse>
          <Collapse title="Formation et Expérience">
            <ul>
              <li>Formation d'intégrateur frontend avec OpenClassrooms diplome niveau 5</li>
              <li>Formation d'assistant ingénieur en sécurité informatique diplome niveau 5</li>
              <li>4 ans d'expériences technicien de proximité informatique grand compte chez SPIE ICS</li>
              <li>Diplôme BAC STI en électrotechnique</li>
            </ul>
          </Collapse>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Apropos;
