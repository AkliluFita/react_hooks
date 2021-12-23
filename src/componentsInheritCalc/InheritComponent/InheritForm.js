import React ,{useContext}from 'react'
import InheritList from './InheritList'
import CalculateDivider from './CalculateDivider'

import {InheritContext} from '../InheritContext'
// import {F_1_8, F_1_2, F_1_3, F_1_4, F_1_6, F_1_1, } from '../FractionRatioProducer'

function InheritForm(props) {

    const{inheritor,setInheritor,alarm,setAlarm}=props

    const {inheritor_name,inheritor_type,inheritor_amount}=inheritor
 
    const [families, setFamilies] = useContext(InheritContext)

   

   const swichOffAlarm = () => {
        setTimeout(() => {
            setAlarm({...alarm,isAlarm:false})
        }, 2000);
   }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInheritor({ ...inheritor, [name]: value });
        
    }

// create new object and submit list  function
    const handleSubmit = (e) => {
        e.preventDefault()

        if (inheritor_name && inheritor_type && inheritor_amount) {
            const newInheritors= {  ...inheritor, id:Math.random()*10, isCompleted:false, share:0 }

                setFamilies([...families, newInheritors])
                setInheritor({inheritor_name:'',inheritor_type:'',inheritor_amount:''})
                setAlarm({...alarm, alarmText:'you sucessfully added one inheritor',isAlarm:true})
                swichOffAlarm()
        }
        if (!inheritor_name || !inheritor_type || !inheritor_amount){
               setAlarm({...alarm, alarmText:'please fill all the form',isAlarm:true})
               swichOffAlarm()
        }

        
    }
    // form field color style
      const getSelectForm_style = () => {
          if (inheritor_name && inheritor_type && inheritor_amount) {
           return {borderBottom:'2px solid green', translate:'1.5s'}
          }
          else{
            return {borderBottom:'2px solid red'}
          }
      }

  
//   check listed object inheritors whether exit or not(true or false output)
      const inheritChecker = (inheritor_type) => {
        return families.some(function (el){
            return el.inheritor_type===inheritor_type
        })
    }

    const isMather = inheritChecker('mather')
    const isFather = inheritChecker('father')
    const isDougther = inheritChecker('dougther')
    const isSon = inheritChecker('son')
    const isWife = inheritChecker('wife')
    const isHasband = inheritChecker('hasband')
   

    const option1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    const option2 = [1]

      //   form list color
    //   const getColor = isMather?'text-danger':'text-dark';
    return (

       
        <div className=" container mt-3 gap-3" >

            {/* alarm message text */}
            <div className={alarm.isAlarm? "alert alert-danger": 'alert alert-success'}>
              <h4 style={{color:'green'}}>Events:{alarm.isAlarm && alarm.alarmText}</h4>
            </div>
             
           <form className="d-flex justify-content-between mt-3 fw-light">
               {/* inherit type text field */}
                 <label> inheritor type
                 <select 
                      className="family-select-style  form-control  fw-light"
                      onChange={handleChange}
                      name="inheritor_type"
                      value={inheritor_type}
                      style={getSelectForm_style()}>
                        <option >select family members</option>
                        <option value='mather' disabled={isMather} >{isMather?"Mather(selected)":"Mather"}</option>
                        <option value='father' disabled={isFather} >{isFather?"Father(selected)":"Father"}</option>
                        <option value='dougther' disabled={isDougther} >{isDougther?"Doughter(selected)":"Doughter"}</option>
                        <option value='son' disabled={isSon} >{isSon?"Son(selected)":"Son"}</option>
                        <option value='wife' disabled={isWife||isHasband} >{isWife||isHasband?"Wife(selected)":"Wife"}</option>
                        <option value='hasband' disabled={isHasband||isWife} >{isMather||isHasband?"Hasband(selected)":"Hasband"}</option>
                      
                    </select>
                 </label>


                    {/* inherit amount text field */}
                    <label> inheritor amount
                      <select 
                            className="number-select-style  form-control  fw-light"
                            onChange={handleChange}
                            name="inheritor_amount" 
                            value={inheritor_amount}
                            style={getSelectForm_style()}>
                                <option >please select family amount</option>
                                {
                                inheritor_type==="mather"||inheritor_type==="father"||inheritor_type==="hasband" ||inheritor_type==="wife"?
                                option2.map( num => {
                                    return <option value={num}>{num}</option>
                                })
                                : option1.map( num => {
                                    return <option value={num}>{num}</option>
                                })
                                
                                }                                                         
                      </select>
                    </label>

                    {/* inherit name text field */}
                    <label > Inheritor name
                    <input 
                        type="text"
                        name="inheritor_name"
                        className=" text-style form-control  fw-light"
                        onChange={handleChange}
                        value={inheritor_name}
                        style={getSelectForm_style()}
                    />
                    </label>
                   {/* submit button field */}
                 
                    <input 
                        type="submit"
                        className="btn btn-primary "
                        value="submit" 
                        onClick={handleSubmit}
                        style={{background: inheritor_name && inheritor_type && inheritor_amount?'#6A9DCD':'#DB94BB', height:"50px"}}
                    /> 
                
           </form>

       
            
            
            {/* list component */}
          <div className="">
                <div className="">
                        <ul className='list-group gap-3 '>
                                        {families.map(family => 
                                            <InheritList
                                                    key={family.id}
                                                    family={family}
                                                    inheritor={inheritor}
                                                    setInheritor={setInheritor}
                                                    alarm={alarm}
                                                    setAlarm={setAlarm}
                                                
                                                
                                            />
                                            )} 
                        </ul>
                </div>
            

                            
                <div className="">
                                <CalculateDivider/>
                </div>
          </div>
         

        </div>
    )
}

export default InheritForm
