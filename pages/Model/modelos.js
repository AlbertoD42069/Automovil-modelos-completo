import React from 'react';
import Head from 'next/dist/shared/lib/head';
import Table_modelos from '../../Components/Table/Table_model';
import Navegation from '../../Components/navigation';
import Link from 'next/link';
import Pagination from '../../Components/Pagination';


const Modelos = (props) => {
    return (
        <div>
        <Head>
            
            <title> Modelo </title>
        </Head>
        <div className="container p-2">
        <Navegation/>
            {props.children}
            <h3>Agregar modelo</h3><br/>
            <Table_modelos/>
            <div style={{ display: "flex" }}>
                    <div style={{ marginLeft: "auto" }}><Pagination/></div>
                </div>
            <div style={{ display: "flex" }}>
                <Link href="/Model/Add_Model">
                <button type="button" className="btn btn-primary rounded" style={{ marginLeft: "auto" }}>
                    agregar
                </button>
                </Link>
            </div>
        </div>
    </div>
    )
}

export default Modelos;