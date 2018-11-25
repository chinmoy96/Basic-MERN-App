import React from 'react';
import paths from './../paths/paths';
import {Route} from 'react-router-dom';
import Login from './../views/Login/Login';

export default ()=>{
    return(
        
            paths.map((path)=>{
                return(
                    <Route exart path={path.path} component={path.component}/>
                )
        })
        
        
        
    )
    
}