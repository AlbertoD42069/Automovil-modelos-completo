import Head from "next/head";
import Navegation from "../../Components/navigation";
import Confirmation_panel from "../../Components/Confirmation_panel";
import Warning from "../../Components/Warning";
import Form_Add_Model from "../../Components/Form/Form_Add_Model";

const Add_Model = () => {
    return (
        <div>
            <Head> <title>Agregar modelo</title></Head>
           
           <div className="container p-2">
                <Navegation/>
                <h3> Agregar modelo </h3><br/>
                <div><Form_Add_Model/></div> <br/>
                <div><Confirmation_panel/></div> <br/>
                <div><Warning/></div>
           </div>
        </div>
       )
}

export default Add_Model;