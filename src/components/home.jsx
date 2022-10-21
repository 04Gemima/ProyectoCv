import Table from "react-bootstrap/Table";

const Home = () => (
  <div>
    <h1>Inicio</h1>
    <h2>Página Principal</h2>

    <b style={{color: "green"}}>Gemima Eluseni Morales Rivera</b>
    <br /><br />
    <div className="info-profile">

      <div className="images">
        <img src={require('../img/perruno.jpg')} className="card-images" />
      </div>
      
      <div className="p-info">
        <b style={{color: "black"}} id="presentacion">Presentación:</b>
        <br />
        <p style={{color: "purple"}}>
          Mi nombre es Gemima Eluseni Morales Rivera, tengo 21 años de edad. Vivo en la Colonia Libertad Ventanas, municipio
          de Siltepec, Chiapas. Estudio la carrera de ingeniería en Sistemas
          
          Computacionales, séptimo semestre grupo B, en el Instituto Tecnológico de Comitán, Chiapas. Actualmente trabajo en una empresa
          de viveros y agroinsumos que se llama "San Miguel Arcángel", que se ubica en el municipio de La Grandeza.
          Mi comida favorita es el spaghetti y el arroz. Mi artista favorito se llama Nestor Pérez Vargas, pero su nombre artístico es Neztor Mvl.
        </p>
      </div>
    </div>
  </div>
);
export default Home;
