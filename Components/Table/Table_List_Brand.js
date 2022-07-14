import { React, useEffect, useState } from "react";
import Link from "next/link";

const Table_List_Brand = () => {

    const AUTO_API_BASE_URL = "http://localhost:8080/api/automovil";
    const [Automovil, setAutomovil] = useState(null);
    const [loading, setLoading] = useState(true);
  
  
    const [autoId, setAutoId] = useState(null);
    const [response, setResponse] = useState(null);

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
    },[response]);
   
    const deleteAuto = (e, id) => {
        e.preventDefault();
        fetch(AUTO_API_BASE_URL + "/" + id, {
            method: "DELETE",
        }).then((res) => {
            if (Automovil) {
                setAutomovil((prevElement) => {
                    return prevElement.filter((auto) => auto.id !== id)
                })
            }
        })
       };
    
    const editAuto = (e, id) => {
        e.preventDefault();
        setAutoId(id);

    } 

    return (<div>
        <div>
            <table className="table table-bordered">
                <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">País origen</th>
                            <th scope="col">Calificacion</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Acciones</th>
                        </tr>
                </thead>
                {!loading && (
                    <tbody>
                        {Automovil?.map((auto) => (
                            <tr auto={auto} key={auto.id} deleteAuto={deleteAuto} editAuto={editAuto} setResponse={setResponse}>
                            <th scope="row"> {auto.id} </th>
                            <td> {auto.nombre} </td>
                            <td> {auto.pais_origen} </td>
                            <td> {auto.calificacion} </td>
                            <td> {auto.descripcion} </td>
                            <td> 
                        <div>
                            
                                
                            <button className="btn"><i className="fa fa-edit" 
                                        onClick={(e,id) => editAuto(e, auto.id)} href="/Brand/Edit_brand" autoId={autoId}/>   
                                       

                                        </button>
                        <button className="btn"><i className="fa fa-close" 
                                onClick={(e, id) => deleteAuto(e,auto.id)}/></button>
                                
                        <button className="btn"><i className="fa fa-eye" /></button>      
                        </div>              
                        </td>
                        </tr>
                        ))}
                    </tbody>
                )}

            </table>
        </div>
    </div>)
}

export default Table_List_Brand;