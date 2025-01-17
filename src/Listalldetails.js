import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import { Displayall } from './connect';

export let Listallpage=()=>
{
    // conts[getname(variable),setname(FUNCTION)]=useState(initialized)
    const[allvalues,setAllvalues]=useState([]);
    useEffect(async()=>{
        const res=await Displayall()
        setAllvalues(res.data)
    },[])
    return(
        <>
        <div className='text-center bg-success d-flex row justify-content-center mt-3'>
            <div className='col-lg-12 col-md-10 col-sm-12'>
                <table className='table table-striped '>
                    <thead>
                        <tr>
                            <th>Account number</th>
                            <th>Account Holder</th>
                            <th>Account Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allvalues.map((data)=>
                            (
                                <tr>
                                    <td>{data.acc_number}</td>
                                    <td>{data.acc_holder}</td>
                                    <td>{data.acc_bal}</td>
                                </tr>
                            ))

                        }
                    </tbody>
                </table>

            </div>

        </div>

        </>
    );
}