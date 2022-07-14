import React from 'react';
import Head from 'next/dist/shared/lib/head';
import Table_modelos from '../../Components/Table/Table_model';
import Navegation from '../../Components/navigation';
import Link from 'next/link';
import Pagination from '../../Components/Pagination';
import Button_Add_Model from '../Button_Add_Model';


const Modelos = () => {
    return (
        <div  className='container p-2'>
            <Head>
                
                <title> Modelo </title>
            </Head>
            <Navegation/>

            <h3>Modelo</h3><br/>

            <div className="container p-2">

            <Table_modelos/>

            <div style={{ display: "flex" }}>
                    <div style={{ marginLeft: "auto" }}><Pagination/></div>
                </div>
                <Button_Add_Model/>
        </div>
    </div>
    )
}

export default Modelos;