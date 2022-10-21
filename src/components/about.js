import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
const About = () => {
  return (
    <div>
      <h2>Página acerca de mi formación académica</h2>

      <div className="about">

       <section>
        <h3 style={{color:"purple" }} >Kinder:</h3>
        <b>
          Jardín de niños y niñas "Rosaura Zapata Cano"
        </b>
        <div className="info-profile">
          <img src={require('../img/kinder.jpg')} width={"40%"} />
          <img src={require('../img/kinder2.jpg')} width={"40%"} />
        </div>
       </section>

       <section >
        <h3 style={{color:"purple" }} >Primaria:</h3>
        <b>
          Escuela primaria Federal "Pedro Moreno"
        </b>
        <div className="info-profile">
          <img src={require('../img/Primaria.jpg')} width={"40%"} />
          <img src={require('../img/Primaria2.jpg')} width={"40%"} />
        </div>
       </section>

       <section>
        <h3 style={{color:"purple" }} >Telesecundaria:</h3>
        <b>
          Escuela telesecundaria "Enoch Cancino Casahonda 999"
        </b>
        <div className="info-profile">
          <img src={require('../img/secu.jpg')} width={"40%"} />
          <img src={require('../img/secu2.jpg')} width={"40%"} />
          <img src={require('../img/secu3.jpg')} width={"40%"} />
        </div>
       </section>

       <section>
        <h3 style={{color:"purple" }} >Cobach:</h3>
        <b>
          Colegio de Bachilleres de Chiapas Plantel 215, Libertad Ventanas
        </b>
        <div className="info-profile">
          <img src={require('../img/215.jpg')} width={"40%"} />
          <img src={require('../img/cobach2.jpg')} width={"40%"} />
        </div>
       </section>

       <section>
        <h3 style={{color:"purple" }} > Universidad:</h3><br/>
        <b>
          Instituto Tecnológico de Comitán
        </b>
        <p><b>Carrera:</b> Ingeniería en Sistemas Computacionales.</p>
        <div className="info-profile">

          <img src={require('../img/Tec.jpg')}  width={"60%"} />
        </div>
       </section>
        

      <hr/>

      <h2 style={{color:"blue" }} >Hobbies </h2>
      <p>Mis pasatiempos favoritos son los siguientes:</p>

      <ul>
        <li>
          <b>Me gusta mucho leer</b>
          <img src={require('../img/libros1.jpg')} width={"100%"} />
        </li>

        <li>
          <b>Cuidar de mis mascotas</b>
          <img src={require('../img/minino.jpg')} width={"100%"} />
        </li>

        <li>
          <b>Escuchar música</b>
          <img src={require('../img/music.jpeg')} width={"100%"} />
        </li>
      </ul>

      </div>
    </div>
  );
};
export default About;
