
const Warning = () => {
    return(
        <div className="border container p-4">
        <div className="alert alert-success" role="alert" >
            <h1 className="text-dark text-center">Operación Exitosa</h1>
        </div>
        <div>
            <p className="lead text-dark">Tu operacion fue procesada exitosamente</p>
        </div>
        <div style={{ display: "flex" }}>
        <button type="button" className="btn btn-primary rounded" style={{ marginLeft: "auto" }}>
          continuar
        </button>
        </div>
        </div>

    )
}


export default Warning;