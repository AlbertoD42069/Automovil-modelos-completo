import Link from "next/link";

const Table_model = () => {
    return (
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
                <tbody>
                <tr>
                    <th scope="row">--</th>
                    <td> -- </td>
                    <td> -- </td>
                    <td> -- </td>
                    <td> -- </td>
                    <td> -- </td>
                    <div>
                        <Link href="/Model/Edit_Model">
                    <button className="btn"><i className="fa fa-edit" /></button>
                        </Link>
                    <button className="btn"><i className="fa fa-close" /></button>
                    <button className="btn"><i className="fa fa-eye" /></button>
                    </div>
                </tr>
                </tbody>
            </table>
    )
}

export default Table_model;