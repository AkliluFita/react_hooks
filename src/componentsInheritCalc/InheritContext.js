import React, { createContext,useState} from 'react'

export const InheritContext =createContext();

export function InheritProvider({children}) {
    
    const [families, setFamilies] = useState([])

    return(
        <InheritContext.Provider value={[families, setFamilies]}>
                {children}
        </InheritContext.Provider>
    )
} 