import React from "react";
const Table_Brand = ({auto}) => {
    return (<div>
    <div><tbody><tr key={auto.id}>
        <th scope="row"> {table.id} </th>
        <td> {auto.nombre} </td>
        <td> {auto.pais_origen} </td>
        <td> {auto.calificacion} </td>
        <td> {auto.descripcion} </td>
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
    </div>
</div>)
}
export default Table_Brand;