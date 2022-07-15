import Head from "next/head";
import Navegation from "../../Components/navigation";
import Confirmation_panel from "../../Components/Confirmation_panel";
import Warning from "../../Components/Warning";
import Form_Add_Model from "../../Components/Form/Form_Add_Model";
import View_Brand from "../Components/View_Brand";

const View = () => {
    return (
        <div>
            <Head> <title>Agregar modelo</title></Head>
           
           <div className="container p-2">
                <Navegation/>
                <h3> detalles </h3><br/>
                <div><View_Brand/></div>
           </div>
        </div>
       )
}

export default View;