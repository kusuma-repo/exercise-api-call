import React from 'react'
import  './search-box.css'
export const Search = ({querySearch}) => {
    
    return (
        <div>
            <input  className="search"
         onChange={querySearch}
         type="search" 
        
         placeholder="search monster..."  /> 
        </div>
    )
}
