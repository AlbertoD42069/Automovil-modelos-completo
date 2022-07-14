import Head from "next/head";
import Navegacion from "../../Components/navigation";
import Form_edit_brand from "../../Components/Form/Form_Edit_Brand";
import Confirmation_panel from "../../Components/Confirmation_panel";
import Warning from "../../Components/Warning";

const Edit_brand = (props) => {
    return (
        <div>
            <Head> <title>Editar marca</title></Head>
            
            <div className='container p-2'>
            <Navegacion/>
            {props.children}
            <h3> Editar marca </h3><br/> 
            <div><Form_edit_brand/></div> <br/>   
            <div><Confirmation_panel/></div> <br/>
            <div><Warning/></div>
            </div>  
        </div>

    )
}

export default Edit_brand;