import Link from "next/link";
const Button_Add_Model = () => {
    return (
        <div style={{ display: "flex" }}>
                    
                    <Link href="/Model/Add_Model">
                    <button type="button" className="btn btn-primary rounded" style={{ marginLeft: "auto" }}>
                        Agregar
                    </button>
                    </Link>
                </div>
    )
}

export default Button_Add_Model;