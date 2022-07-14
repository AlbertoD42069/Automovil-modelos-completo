import {React, useState } from "react";

const Form_Add_Brand= () => {

  const AUTO_MODEL_API_BASE_URL = "http://localhost:8080/api/modelos";
  const [model, setModel] = useState({
    id:"",
    marca:"",
    modelo:"",
    calificacion:"",
    precio:"",
    estatus:"",
  }); 

  const [responseModel, setResponseModel]  = useState ({
    id:"",
    marca:"",
    modelo:"",
    calificacion:"",
    precio:"",
    estatus:"",
  })

  const handleChange = (event) => {
    const value = event.target.value;
    setModel({ ...model, [event.target.name]: value });
  };

  const saveModel = async (e) => {
    e.preventDefault();    
    const response = await fetch(AUTO_MODEL_API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(model),
      });
       if (!response.ok) {
        throw new Error("Something went wrong");
    }
    const _model = await response.json();
    setResponseModel(_model);
    reset(e);
  };

  const reset =(e) => {
    e.preventDefault();
    setAutomovil({
      id:"",
      marca:"",
      modelo:"",
      calificacion:"",
      precio:"",
      estatus:"",
    });
  }

    return (
        <form>
        <div className="form-group row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
            Marca
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              name="marca"
              value={model.marca}
              onChange={(e) => handleChange(e)}            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">
            Modelo
          </label>
          <div className="col-sm-5">
          <input
              type="text"
              name="modelo"
              value={model.modelo}
              onChange={(e) => handleChange(e)}
              className="form-control"
            />
          </div>
        </div>
        
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">
            Calificacion
          </label>
          <div className="col-sm-5">
          <input
              type="text"
              name="calificacion"
              value={model.calificacion}
              onChange={(e) => handleChange(e)}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Precio
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              name="precio"
              value={model.precio}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Estatus
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              name="estatus"
              value={model.estatus}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="row justify-content-around col-3">
        <button type="button" className="btn btn-primary rounded" onClick={saveModel}>
          Continuar
        </button>
        <button type="button" className="btn btn btn-danger rounded" >
          Cancelar
        </button>
        </div>

      </form>
      
    )
}

export default Form_Add_Brand;