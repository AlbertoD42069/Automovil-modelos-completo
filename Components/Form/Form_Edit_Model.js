const Form_Add_Brand= () => {
    return (
        <form>
        <div className="form-group row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
            Nombre
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              id="staticEmail"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Pais de origen
          </label>
          <div className="col-sm-5">
            <select class="form-control form-control-lg">
              <option>Alemania</option>
              <option>Brasil</option>
              <option>China</option> 
              <option>Corea del Sur</option> 
              <option>España</option>
              <option>Estados Unidos</option>
              <option>Francia</option>
            </select>
          </div>
        </div>
        
        <div className="form-group row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Calificacion
          </label>
          <div className="col-sm-5">
          <select class="form-control form-control-lg">
              <option>1</option>
              <option>1.5</option>
              <option>2</option>
              <option>2.5</option>
              <option>3</option>
              <option>3.5</option>
              <option>4</option> 
              <option>4.5</option> 
              <option>5</option> 
              <option>5.5</option> 
              <option>6</option>
              <option>6.5</option>
              <option>7</option>
              <option>7.5</option>
              <option>8</option>
              <option>8.5</option>
              <option>9</option>
              <option>9.5</option>
              <option>10</option>

            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Descripcion
          </label>
          <div className="col-sm-5">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
            />
          </div>
        </div>
        
        <div className="row justify-content-around col-3">
        <button type="button" className="btn btn-primary rounded">
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