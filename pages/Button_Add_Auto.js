import Link from "next/link";
const Button_Add_Auto = () => {
    return (
        <div style={{ display: "flex" }}>
                    
                    <Link href="/Brand/Add_brand">
                    <button type="button" className="btn btn-primary rounded" style={{ marginLeft: "auto" }}>
                        Agregar
                    </button>
                    </Link>
                </div>
    )
}

export default Button_Add_Auto;