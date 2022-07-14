const Confirmation_panel = () => {
    return (
    <div className="border container p-4">
        <h1 className="display-4 text-center">Confirmación</h1><br/><br/>
        
        <p className="lead text-dark text-center">
          ¿Desea continuar con el alta de la marca?
        </p><br/><br/>
        <div>

        <form>
        <div className="form-group row" style={{display: "flex", justifyContent: "center"}}>
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
            Ingresa Token
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              id="staticEmail"
            /><br/>
          </div>
        </div>
        <div className="row" style={{display: "flex", justifyContent: "center" }}>
          <button type="button" className="btn btn-primary rounded" style={{margin: 10}}>
            Continuar
          </button>
          <button type="button" className="btn btn btn-danger rounded" style={{margin: 10}}>
            Cancelar
          </button>
        </div>
        </form>

        </div>
      </div>
      
)
}

export default Confirmation_panel;