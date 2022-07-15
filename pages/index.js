import React from 'react'
import Head from "next/dist/shared/lib/head";
import _fetch from "isomorphic-fetch";
import Navegacion from '../Components/navigation';
import Link from 'next/link';
import Pagination from '../Components/Pagination';
import Table_List_Brand from '../Components/Table/Table_List_Brand';
import Button_Add_Auto from './Button_Add_Auto';




const Index = () => {
    //console.log(props)
    return (
            <div className='container p-2'>
                <Head>
                    <title> Marca </title>
                </Head>
                <Navegacion/>
                
                    <h1>Marca</h1>
                    
                <div className='container p-2'>
                    
                    <Table_List_Brand/>
                   
                <div style={{ display: "flex" }}>
                    <div style={{ marginLeft: "auto" }}><Pagination/></div>
                </div>
                <div style={{ display: "flex" }}>
                    <div style={{ marginLeft: "auto" }}><Button_Add_Auto/><br/></div>
                </div>
                </div>
                </div>
                
                
    )
}

export default Index;




/*
const Index = (props) => {
    console.log(props)
    return (
            <div className='container p-2'>
                <Head>
                    <title> Marca </title>
                </Head>
                <Navegacion/>
                
                    <h1>Marca</h1>
                <div className='container p-2'>
                
                {props.children}
                <Table Automovil={props.Automovil}/>
                <div style={{ display: "flex" }}>
                    <div style={{ marginLeft: "auto" }}><Pagination/></div>
                </div>
                <div style={{ display: "flex" }}>
                    
                    <Link href="/Brand/Add_brand">
                    <button type="button" className="btn btn-primary rounded" style={{ marginLeft: "auto" }}>
                        Agregar
                    </button>
                    </Link>
                </div>
                </div>
                </div>
                
    )
}
Index.getInitialProps = async (ctx) => {
    const res = await _fetch('http://localhost:8080/api/automovil');
    const jsonDatos = await res.json();

    return{Automovil: jsonDatos}
}   
export default Index;
*/