import Head from "next/head";
//import Navegacion from "../Components/navigation";
import Navegacion from "../../Components/navigation";
import Confirmation_panel from "../../Components/Confirmation_panel"
//import Confirmation_panel from "../Confirmation_panel";
import Warning from "../../Components/Warning";
import Form_Add_Brand from "../../Components/Form/Form_Add_Brand";
import View_Brand from "../../Components/View_Brand";

const Add_brand = (props) => {
    return (
        <div>
            <Head> <title>Agregar marca</title></Head>
            
            <div  className='container p-2'>
            {props.children}
            <Navegacion/>
            <div>
                <h3>Agregar marca</h3><br/>
                <div><Form_Add_Brand/></div> <br/>
                <div><Confirmation_panel/></div> <br/>
                <div><Warning/></div> <br/>
                </div>
            </div>
        </div>
        
       )
}

export default Add_brand;
/*
<Container_Add>
            <Head> <title>Agregar marca</title></Head>
            <h1> Agregar marca </h1><br/>
        </Container_Add>
*/