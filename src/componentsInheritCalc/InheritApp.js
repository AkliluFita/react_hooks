import React ,{useState}from 'react'
import InheritForm from './InheritComponent/InheritForm';
import Header from './InheritComponent/Header'
import  './inheritApp.css'


import {InheritProvider} from './InheritContext'
// import {_1_2, _1_3, _1_4, _1_6, _1_8, _1_1 } from './FractionRatioProducer'
function InheritApp() {


    
    const [inheritor, setInheritor] = useState({inheritor_name:'',inheritor_type:'',inheritor_amount:0})
    const [alarm, setAlarm] = useState({alarmText:'',isAlarm:false})
    
  return (
    <div>
        <div className='container-fluid '  >
           <InheritProvider>

               <Header/>
               <div className="container w-70 border p-5 shadow">
                  <InheritForm 
                          inheritor={inheritor}
                          setInheritor={setInheritor}
                          alarm={alarm}
                          setAlarm={setAlarm} 
                    />
                
              </div>
             </InheritProvider>
        </div>
    
    </div>
  )
}

export default InheritApp
