
import { React, useEffect, useState } from "react";

const View_Brand = (auto) => {
    const AUTO_API_BASE_URL = "http://localhost:8080/api/automovil";

    const [Automovil, setAutomovil] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {

                const response = await fetch(AUTO_API_BASE_URL, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",

                    }
                });
                const Automovil = await response.json();
                setAutomovil(Automovil);
            } catch (error) {
                    console.log(error);
            }
            setLoading(false); 
        };
        fetchData();
    },[auto]);


    return (
        <div className="border container p-4">
            <h2 className="display-4 text-center">Automovil</h2><br/><br/>
            <form>
                {!loading && (
                    <div>
                        {Automovil?.map((auto) => 
                            <div auto={auto} key={auto.id}>
                                <div className="form-group row" style={{display: "flex", justifyContent: "center"}}>
                                    <label  className="col-sm-2 col-form-label">
                                    Nombre
                                    </label>
                                    <div className="col-sm-5">
                                        <label  className="col-sm-5 col-form-label">
                                        {auto.nombre}
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group row" style={{display: "flex", justifyContent: "center"}}>
                                    <label  className="col-sm-2 col-form-label">
                                    Pais origen
                                    </label>
                                    <div className="col-sm-5">
                                        <label className="col-sm-2 col-form-label">
                                        {auto.pais_origen}
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group row" style={{display: "flex", justifyContent: "center"}}>
                                    <label  className="col-sm-2 col-form-label">
                                    Calificacion
                                    </label>
                                    <div className="col-sm-5">
                                        <label  className="col-sm-2 col-form-label">
                                        {auto.calificacion}
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group row" style={{display: "flex", justifyContent: "center"}}>
                                    <label  className="col-sm-2 col-form-label">
                                    Descripcion
                                    </label>
                                    <div className="col-sm-5">
                                        <label className="col-sm-8 col-form-label">
                                        {auto.descripcion}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </form>
      </div>
      
    )
}

export default View_Brand;

/*
{!loading && (
                    <form>
                        {Automovil?Map((auto) => (
                            <div></div></div>
                        ))}
                    
                    <div className="form-group row" style={{display: "flex", justifyContent: "center"}}>
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                        nombre
                        </label>
                        <div className="col-sm-5">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                            nombre
                            </label>
                        </div>
                    </div>
                    <div className="form-group row" style={{display: "flex", justifyContent: "center"}}>
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                        Pais origen
                        </label>
                        <div className="col-sm-5">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                            Pais origen
                            </label>
                        </div>
                    </div>
                    <div className="form-group row" style={{display: "flex", justifyContent: "center"}}>
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                        Calificacion
                        </label>
                        <div className="col-sm-5">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                            Calificacion
                            </label>
                        </div>
                    </div>
                    <div className="form-group row" style={{display: "flex", justifyContent: "center"}}>
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                        Descripcion
                        </label>
                        <div className="col-sm-5">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                            Descripcion
                            </label>
                        </div>
                    </div>
                
                </form>
                )}
*/