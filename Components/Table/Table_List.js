const Table_List = () => {
    /*
    const USER_API_BASE_URL = "http://localhost:8080/api/automovil";
    const [auto, setAuto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [autoId, setAutoId] = useState(null);
    const [responseAuto, setResponseAuto] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try {
            const response = await fetch(USER_API_BASE_URL, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            });
            const auto = await response.json();
            setAuto(auto);
          } catch (error) {
            console.log(error);
          }
          setLoading(false);
        };
        fetchData();
    }, [automovil, responseUser]);
    */
    return (
        <div>
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
            </table>
            </div>
        </div>
    )
}
export default Table_List;