
import { Navigate, useParams } from "react-router-dom";
import Collapse from "../../components/Collapse/Collapse";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Host from "../../components/Host/Host";
import Slideshow from "../../components/Slideshow/Slideshow";
import Data from "../../data/data.json";

import "./Portfolio.css";

const Portfolio = () => {
  const { id } = useParams();
  console.log(id);

  const elementHostel = Data.find((item) => item.id === id);

  if (!elementHostel) {
    return <Navigate to="/erreur" replace />;
  }

  const {
    pictures,
    rating,
    tags,
    description,
    title,
    location,
    lien,
    host: { name, picture },
  } = elementHostel;

  const descriptionItems = description.split(',').map((item, index) => (
    <li key={index}>{item.trim()}</li>
  ));

  return (
    <>
      <Header />
      <div className="housing-main">
        <Slideshow images={pictures} />
        <div className="housing-header">
          <Host
            title={title}
            location={location}
            tags={tags}
            rating={rating}
            name={name}
            picture={picture}
            lien={lien}
          />
        </div>
        <div className="housing-collapse">
          <Collapse title="Description">
            <ul>
              {descriptionItems}
            </ul>
          </Collapse>
          <Collapse title="Liens">
            <ul>
              <li>
                <a href={'https://github.com/airessdev/'} target="_blank" rel="noreferrer">
                  https://github.com/airessdev/
                </a>
              </li>
              <li>

                <a href={'https://' + lien} target="_blank" rel="noreferrer">
                  {lien}
                </a>
              </li>
            </ul>
          </Collapse>
        </div>

        {id === "b9123946" && (
          <div className="housing-collapse">
            <Collapse title="Compétences">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Responsive Design</li>
              </ul>
            </Collapse>
          </div>
        )}

        {id === "46d188c5" && (
          <div className="housing-collapse">
            <Collapse title="Compétences">
              <ul>
                <li>Mobile First</li>
                <li>SASS</li>
                <li>Animation HTML5/CSS3</li>
                <li>FlexBox</li>
              </ul>
            </Collapse>
          </div>
        )}

        {id === "7af00cd6" && (
          <div className="housing-collapse">
            <Collapse title="Compétences">
              <ul>
                <li>JavaScript</li>
              </ul>
            </Collapse>
          </div>
        )}

        {id === "b4c67936" && (
          <div className="housing-collapse">
            <Collapse title="Compétences">
              <ul>
                <li>ReactJS</li>
                <li>React Hook: useState</li>
                <li>React Router Dom</li>
              </ul>
            </Collapse>
          </div>
        )}

        {id === "bc6f7112" && (
          <div className="housing-collapse">
            <Collapse title="Compétences">
              <ul>
                <li>Optimisation du référencement (SEO)</li>
                <li>LightHouse</li>
                <li>Microdonnées Schema.org</li>
                <li>Rich Snippet Google</li>
              </ul>
            </Collapse>
          </div>
        )}

        <div className="frame-container">
          <iframe className="frame" title="mon site" src={lien}></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
