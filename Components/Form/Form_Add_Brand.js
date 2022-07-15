import { React, useEffect, useState } from "react";
import Link from "next/link";

const Form_Add_Brand= () => {
    const AUTO_API_BASE_URL = "http://localhost:8080/api/automovil";

    const [automovil, setAutomovil] = useState({
      id: "",
      nombre: "",
      pais_origen: "",
      calificacion: "",
      descripcion:"",
    });
    const [response_Auto, setResponseAuto] = useState({
      id: "",
      nombre: "",
      pais_origen: "",
      calificacion: "",
      descripcion:"",
    }); 
    
    const handleChange = (event) => {
      const value = event.target.value;
      setAutomovil({ ...automovil, [event.target.name]: value });
    };

    const saveAuto = async (e) => {
      e.preventDefault();    
      const response = await fetch(AUTO_API_BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(automovil),
        });
         if (!response.ok) {
          throw new Error("Something went wrong");
      }
      const _automovil = await response.json();
      setResponseAuto(_automovil);
      reset(e);
    };

    const reset =(e) => {
      e.preventDefault();
      setAutomovil({
        id: "",
        nombre: "",
        pais_origen: "",
        calificacion: "",
        descripcion:"",
      });
    }

    return (
        <form>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">
            Nombre
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              name="nombre"
              value={automovil.nombre}
              onChange={(e) => handleChange(e)}
              className="form-control"
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
              name="pais_origen"
              value={automovil.pais_origen}
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
              value={automovil.calificacion}
              onChange={(e) => handleChange(e)}
              className="form-control"
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
              name="descripcion"
              value={automovil.descripcion}
              onChange={(e) => handleChange(e)}
              className="form-control"
            />
          </div>
        </div>
        
        <div className="row justify-content-around col-3">
        <button type="button" className="btn btn-primary rounded"
        onClick={saveAuto}>
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