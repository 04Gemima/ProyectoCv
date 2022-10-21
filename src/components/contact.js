import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


const Contact = () => {
  return (
    <div>
      <h1>Página de contacto</h1>
      <h4 style={{color: "blue"}}>Contacto y redes sociales: </h4>

      <a href="https://api.whatsapp.com/send?phone=529631823066" target={"_blank"}>
        <p style={{color:"purple" }} >
          <img src={require('../img/whatsapp.png')} width={"30px"} />
          &nbsp;
          9631823066
        </p>
      </a>

      <a href="https://www.facebook.com/gemima.morales.16" target={"_blank"}>
        <p style={{color:"purple" }} >
          <img src={require('../img/facebook.png')} width={"30px"} />
          &nbsp;
          Gemi Rivera
        </p>
      </a>

      <a href="https://www.instagram.com/gemi_moriv/" target={"_blank"}>
        <p style={{color:"purple" }} >
          <img src={require('../img/instagram.png')} width={"30px"} />
          &nbsp;
          gemi_moriv
        </p>
      </a>
    </div>
    
  );
};
export default Contact;
