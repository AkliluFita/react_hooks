import React ,{useState,useContext}from 'react'
import AnswerTable from './AnswerTable'
import {InheritContext} from '../InheritContext'
// import {_1_8, _1_2, _1_3, _1_4, _1_6, _1_1, } from '../FractionRatioProducer'
import {F_1_8, F_1_2, F_1_3, F_1_4, F_1_6, F_1_1} from '../FractionRatioProducer'
//  import {AM} from '../FractionRatioProducer'
function CalculateDivider() {

    const [families, setFamilies] = useContext(InheritContext)

    const [resultDisplay, setresultDisplay] = useState(false)

    const [share_wife, setShare_wife] = useState(0)
    const [share_hasband, setShare_hasband] = useState(0)
    const [share_mather, setShare_mather] = useState(0)
    const [share_father, setShare_father] = useState(0)
    const [share_son, setShare_son] = useState(0)
    const [share_dougther, setshare_dougther] = useState(0)

 
      const handleDeleteResult = () => {
        setresultDisplay(false)

        setshare_dougther('')
        setShare_wife('')
        setShare_hasband('')
        setShare_father('')
        setShare_son('')
        setShare_mather('')
      }

    
    const inheritChecker = (inheritor_type) => {
        return families.some(function (el){
            return el.inheritor_type===inheritor_type
        })
    }

    //////// all inheritors collection find checker
    const check ={
        HASBAND: inheritChecker('hasband'),
        WIFE:inheritChecker("wife"),
        MATHER:inheritChecker("mather"),
        FATHER:inheritChecker("father"),
        SON:inheritChecker("son"),
        DOUGTHER:inheritChecker("dougther")
    }
    ////////////////////////////////////////////////// divider function collection start////////////////////////
    const handleDivider = () => {
        //////***************for hasband */
     if (check.HASBAND) {
         if (!check.SON && !check.DOUGTHER) {
             setShare_hasband(F_1_2)
         }
         else {setShare_hasband(F_1_4)}
         
     }

        //////***************for wife */
     if (check.WIFE) {
         if (!check.SON && !check.DOUGTHER) {
             setShare_wife(F_1_4)
         }
         else {setShare_wife(F_1_8)}
         
     }
 

        //////***************for mather */
            if (check.MATHER) {
             if (!check.SON && !check.DOUGTHER) {
                 setShare_mather(F_1_3)
             }
             else {setShare_mather(F_1_6)}
             
         }
   

            //////***************for father */
            if (check.FATHER) {
                if (!check.SON && !check.DOUGTHER) {
                    setShare_father(F_1_3)
                }
                else {setShare_father(F_1_6)}
                
            }
      

             //////***************for son */
             if (check.SON) {
                 const remain ='1'
                 if (!check.DOUGTHER) {
                    setShare_son(remain)
                 }
                setShare_son(remain)
                
            }
         
                 //////***************for son */
             if (check.DOUGTHER) {
                const remain ='1'
                setshare_dougther(remain)
                   
               }
        

            setresultDisplay(true)
 
           
 }

////////////////////////////////////////////////// divider function collection end////////////////////////

    return (
        <div className='container d-flex flex-column'>

           {/* calculate divider button */}
                 <div className=" position-absolute">
                    {families.length &&(<input 
                            type="button"
                            value='divide inheritor'
                            className="btn  btn-light border-secondary" 
                            onClick={handleDivider}/>)
                        
                            }
                 </div>
                        
            

           {/* table answer*/}
                 <div className='container  border'>
                    {resultDisplay && <AnswerTable 
                                                share_mather={share_mather}
                                                share_father={share_father}
                                                share_dougther={share_dougther}
                                                share_hasband={share_hasband}
                                                share_wife={share_wife}
                                                share_son={share_son}
                                                />} 
                  </div>
           {/* delete  button */}
                  <div  className=" ">
                    { resultDisplay && <input 
                            type="button"
                            value='delete result' 
                            className="btn border-danger"
                            onClick={handleDeleteResult}/>  }  
                  </div>
                    
        </div>
    )
}

export default CalculateDivider
