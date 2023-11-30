import cv from "../Components/Imagines/cv.jpg";
import "../Screens/Css/About.css";

function About() {
  return (
    <div>
      <h3 id="tituloAbout">About OlympusGG</h3>
      <div className="join" id="conteinerAbout">
        <img src={cv} alt="Avatar" id="ImagAbout" />
        <div id="infoAbout">
          <p>
            <strong>Full Name: </strong> Gabriel Eduardo Coniglio
          </p>
          <p>
            <strong>Age: </strong> 33
          </p>
          <p>
            <strong>Birthdate: </strong> 25/03/1990
          </p>
          <p>
            <strong>E-mail: </strong> gabrielconiglio@hotmail.com
          </p>
          <p>
            <strong>Company: </strong> Vates S.A
          </p>
          <p>
            <strong>Customer: </strong> Claro
          </p>
          <p>
            <strong>Description: </strong> My name is Gabriel, and I am
            currently enrolled in the Programming Technology program at
            Universidad Tecnológica Nacional de Córdoba (UTN).
            <br /> I am in my second year, where I have gained experience in
            Java, SQL, HTML, CSS, and React. I consider myself a proactive,
            curious, and committed individual.
            <br /> Punctuality and formality are of significant importance in
            all my activities, as they serve as fundamental aspects for academic
            and professional success.
            <br /> I am enthusiastic about continuing to learn and contributing
            to the world of development with my skills and knowledge.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
