import React ,{useContext}from 'react'

import {InheritContext} from '../InheritContext'
import '../inheritApp.css'
function InheritList(props) {
    const{family,alarm,setAlarm}=props

    const [families, setFamilies] = useContext(InheritContext)

    const {inheritor_name,inheritor_type,inheritor_amount}=family

    const handleDelete = () => {
        setFamilies(families.filter(item =>
            item.id !== family.id
        ))
        setAlarm({...alarm, alarmText:'you deleted one inheritor',isAlarm:true})
        setTimeout(() => {
            setAlarm({...alarm,isAlarm:false})
        }, 2000);

    }

    const handleEdit = () => {
        setFamilies(families.map( item =>{
            if (item.id === family.id) {
              return{
                  ...item, isCompleted:!item.isCompleted
              }
                
            }
            return item
        }))
    }

    const IfontStyle =" col fw-light ";
    const Vf_style ="font-monospace fw-light text-primary ";

    return (
        <div>
            <li 
                className="list-group-item rounded">
                  <div className="d-flex justify-content-between">
                        <div className=" flex-fill"
                                style={{color:family.isCompleted?'red':'black',textDecoration:family.isCompleted?'line-through':'none'}}
        >
                                <div className='row '>
                                    <h5 className={IfontStyle}>family Member: <span className={Vf_style}>{inheritor_type}</span></h5>
                                    <h5 className={IfontStyle}>name: <span className={Vf_style}>{inheritor_name}</span></h5>
                                    <h5 className={IfontStyle}>amount: <span className={Vf_style}>{inheritor_amount}</span></h5>
                                </div>
                        </div>

                            <div className="p-2 d-flex justify-content-between "   >
                                <button className='border-0 bg-white'onClick={handleDelete}><i id=' btn_hover' className="bi bi-archive-fill"></i></button>
                                <button className='border-0 bg-white' onClick={handleEdit}><i className="bi bi-pen-fill "></i></button>
                            </div> 
                  </div>
               
                
            </li>
           
        </div>
    )
}

export default InheritList
