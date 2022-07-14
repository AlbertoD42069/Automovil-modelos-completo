const Pagination = () => {
    return (
        <div>
            <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                </a>
                </li>
                <li className="page-item">
                <a className="page-link" href="#">
                    1
                </a>
                </li>
                <li className="page-item">
                <a className="page-link">
                    /
                </a>
                </li>
                <li className="page-item">
                <a className="page-link" href="#">
                    1
                </a>
                </li>
                <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">»</span>
                </a>
                </li>
            </ul>
            </nav>
        </div>
    )
}

export default Pagination;