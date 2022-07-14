import { React, useEffect, useState } from "react";
import Link from "next/link";

const Table_model = () => {

    const AUTO_MODEL_API_BASE_URL = "http://localhost:8080/api/modelos";
    const [model, setModel] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {

                const response = await fetch(AUTO_MODEL_API_BASE_URL, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",

                    }
                });
                const Model = await response.json();
                setModel(Model);
            } catch (error) {
                    console.log(error);
            }
            setLoading(false); 
        };
        fetchData();
    },[]);


    return (
        <div>
            <div>
                <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Marca</th>
                            <th scope="col">Modelo</th>
                            <th scope="col">Calificacion</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Estatus</th>
                            <th scope="col">Acciones</th>

                        </tr>
                        </thead>
                        {!loading && (
                            <tbody>
                                {model?.map((model) => (
                                    <tr model={model} key={model.id}>
                                        <th scope="row"> {model.id} </th>
                                            <td> {model.marca} </td>
                                            <td> {model.modelo} </td>
                                            <td> {model.calificacion} </td>
                                            <td> {model.precio} </td>
                                            <td> {model.estatus} </td>
                                            <td>
                                            <div>
                                                <button className="btn"><i className="fa fa-edit" /></button>
                                                <button className="btn"><i className="fa fa-close" /></button>
                                                <button className="btn"><i className="fa fa-eye" /></button>
                                                </div>
                                            </td>
                                    </tr>
                                ))}
                            </tbody>
                        )} 
                </table>
            </div>
        </div>
    )
}

export default Table_model;