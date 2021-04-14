import React, { Component } from "react";
import Header from "./componentes/Header";
import AgregarCita from "./componentes/AgregarCita";
import ListaCitas from "./componentes/ListaCitas";

//Redux
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {

  //Se ejecuta una vez haya cargado el componente
  //componentDidMount() {
  //  const citasLS = localStorage.getItem("citas");
  //  if(citasLS){
  //    this.setState({
  //      citas: JSON.parse(citasLS)
  //    });
  //  }
  //}

  //Se ejecuta antes de que el componente se carga
  componentWillMount() {
    console.log("Yo me ejecuto antes");
  }

  //Se ejecuta cuando se cierra el componente
  componentWillUnmount() {
    console.log("Yo hasta que cierre el componente");
  }

  //Se ejecuta cuando cambia algo en componente
  //componentDidUpdate() {
  //  localStorage.setItem("citas", JSON.stringify(this.state.citas));
  //}

  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <Header titulo={"Administrador de Pacientes de Veterinaria"} />
          <div className="row">
            <div className="col-md-6">
              <AgregarCita />
            </div>
            <div className="col-md-6">
              <ListaCitas />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
