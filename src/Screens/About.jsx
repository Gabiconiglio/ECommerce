import Avatar from "../Components/Imagines/Avatar.jpg";
import "../Screens/Css/About.css";

function About() {
  return (
    <div>
      <h3 id="tituloAbout">About OlympusGG</h3>
      <div className="join" id="conteinerAbout">
        <img src={Avatar} alt="Avatar" id="ImagAbout" />
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
            <strong>Description: </strong> My name is Gabriel and I am a student
            studying Programming Technology at the National Technological
            University of Córdoba.
            <br />I am currently in my second year and have gained experience in
            Java, SQL, HTML, CSS and React.
            <br />I consider myself a proactive person, curious and committed to
            my studies.
            <br />I value punctuality and formality in all my activities, as I
            believe they are fundamental aspects for academic and professional
            success.
            <br />I am excited to continue learning and contribute to the world
            of programming with my skills and knowledge.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
