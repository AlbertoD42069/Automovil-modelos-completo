import { React, useEffect, useState } from "react";

const Form_Edit_Brand = ( autoId , setResponse) => {
  const AUTO_API_BASE_URL = "http://localhost:8080/api/automovil";

  const [automovil, setAutomovil] = useState({
    id: "",
    nombre: "",
    pais_origen: "",
    calificacion: "",
    descripcion:"",
  });
  
  useEffect(()=> {
    const fetchData = async () => {
      try {
        const response = await fetch(AUTO_API_BASE_URL + "/" + autoId, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const _auto = response.json();
        setAutomovil(_auto);
      } catch (error) {
        console.log(error);
      }
    };
    if (autoId) {
      fetchData();
    }
  }, [autoId])

  const handleChange = (event) => {
    const value = event.target.value;
    setAutomovil({ ...automovil, [event.target.name]: value });
  };

  const updateAutomovil = async (e) => {
    e.preventDefault();
    const response = await fetch(AUTO_API_BASE_URL + "/" + autoId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(automovil),
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const _auto = await response.json();
    setResponse(_auto);
    reset(e);
  };

    return (
        <form>
        <div className="form-group row">
          <label  className="col-sm-2 col-form-label">
            Nombre
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              name="nombre"
              value={automovil.nombre}
              onChange={(e) => handleChange(e)} 
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">
            Pais de origen
          </label>
          <div className="col-sm-5">
          <input
              type="text"
              className="form-control"
              name="pais_origen"
              value={automovil.pais_origen}
              onChange={(e) => handleChange(e)} 
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
              className="form-control"
              name="calificacion"
              value={automovil.calificacion}
              onChange={(e) => handleChange(e)} 
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">
            Descripcion
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              name="descripcion"
              value={automovil.descripcion}
              onChange={(e) => handleChange(e)}/>
          </div>
        </div><br/>
        <div className="row justify-content-around col-3">
        <button type="button" className="btn btn-primary rounded" onClick={updateAutomovil}>
          Continuar
        </button>
        <button type="button" className="btn btn btn-danger rounded" >
          Cancelar
        </button>
        </div>

      </form>
      
    )
}

export default Form_Edit_Brand;