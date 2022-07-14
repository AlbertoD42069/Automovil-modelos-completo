import Link from "next/link";
//import {Router}from "next/router";

const Table = (props) => {
    return (
        props.Table?.map(table => (
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
                <tbody>
                <tr>
                    <th scope="row"> {table.id} </th>
                    <td> {table.nombre} </td>
                    <td> {table.pais_origen} </td>
                    <td> {table.calificacion} </td>
                    <td> {table.descripcion} </td>
                    <td> 
                    
                    <div>
                        <Link href="/Brand/Edit_brand">
                            <button className="btn"><i className="fa fa-edit" /></button>
                        </Link>
                    <button className="btn"><i className="fa fa-close" /></button>
                    <button className="btn"><i className="fa fa-eye" /></button>      
                    </div>

                                     
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        ))
    )
}

export default Table;