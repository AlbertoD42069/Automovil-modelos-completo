import Head from "next/head";
import Navegacion from "../../Components/navigation";
import Form_Edit_Model from "../../Components/Form/Form_Edit_Model";
import Confirmation_panel from "../../Components/Confirmation_panel";
import Warning from "../../Components/Warning";

const Edit_brand = () => {
    return (
        <div>

            <Head> <title>Editar model</title></Head>

            <div className="container p-2">
                <Navegacion/>
            <h1> Editar model </h1><br/> 
            <div><Form_Edit_Model/></div><br/>
            <div><Confirmation_panel/></div><br/>
            <div><Warning/></div>
            </div>
             
        </div>

    )
}

export default Edit_brand;