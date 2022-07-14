import Head from "next/head";
//import Navegacion from "../Components/navigation";
import Navegacion from "../../Components/navigation";
import Confirmation_panel from "../../Components/Confirmation_panel"
//import Confirmation_panel from "../Confirmation_panel";
import Warning from "../../Components/Warning";
import Form_Add_Brand from "../../Components/Form/Form_Add_Brand";
import Form_Add_Model from "../../Components/Form/Form_Add_Model";

const Add_Model = (props) => {
    return (
        <div>
            <Head> <title>Agregar modelo</title></Head>
            
            <div  className='container p-2'>
            {props.children}
            <Navegacion/>
            <div>
                <h3>Agregar modelo</h3><br/>
                <div><Form_Add_Model/></div> <br/>
                <div><Confirmation_panel/></div> <br/>
                <div><Warning/></div>
                </div>
            </div>
        </div>
        
       )
}

export default Add_Model;