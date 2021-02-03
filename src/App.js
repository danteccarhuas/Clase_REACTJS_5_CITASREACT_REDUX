import React, { Component } from "react";
import Header from "./componentes/Header";
import AgregarCita from "./componentes/AgregarCita";
import ListaCitas from "./componentes/ListaCitas";

class App extends Component {
  state = {
    citas: [],
  };

  //Se ejecuta una vez haya cargado el componente
  componentDidMount() {
    const citasLS = localStorage.getItem("citas");
    if(citasLS){
      this.setState({
        citas: JSON.parse(citasLS)
      });
    }
  }

  //Se ejecuta antes de que el componente se carga
  componentWillMount() {
    console.log("Yo me ejecuto antes");
  }

  //Se ejecuta cuando se cierra el componente
  componentWillUnmount() {
    console.log("Yo hasta que cierre el componente");
  }

  //Se ejecuta cuando cambia algo en componente
  componentDidUpdate() {
    localStorage.setItem("citas", JSON.stringify(this.state.citas));
  }

  crearCita = (nuevaCita) => {
    //Agregar la nuevata cita al inicio el array de esta manera
    //[nuevaCita, ...this.state.citas];
    const citas = [...this.state.citas, nuevaCita];

    this.setState({
      citas,
    });
    console.log(citas);
  };

  borrarCita = (id) => {
    console.log(id);
    //Obtener copia del state
    const citasActuales = [...this.state.citas];

    //borrar el elemento del state
    const citas = citasActuales.filter((cita) => cita.id !== id);

    //actualizar el state
    this.setState({
      citas,
    });
  };

  render() {
    return (
      <div className="container">
        <Header titulo={"Administrador de Pacientes de Veterinaria"} />
        <div className="row">
          <div className="col-md-6">
            <AgregarCita crearCita={this.crearCita} />
          </div>
          <div className="col-md-6">
            <ListaCitas citas={this.state.citas} borrarCita={this.borrarCita} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
