
const Navegacion = () =>  {
    return (
        <div>
            <h1> Automovil </h1><hr/>
            <link rel= "stylesheet" href= "https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/litera/bootstrap.min.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div>
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">
                        Marca <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/Model/modelos">
                        Modelo <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    </ul>
                </div>
                </nav>

            </div>
        </div>
        
    )
}

export default Navegacion;