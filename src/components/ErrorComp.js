import React from 'react';
import { ERR_LOGO } from '../utils/constants';
import { useRouteError } from 'react-router-dom';
// useRouteError-catches routing error
function ErrorComp(props) {
    const error= useRouteError()
    return (
        <div style={{
            display:"flex",
            flexDirection:"column",
            height:"100vh",
            alignItems:"center",
            justifyContent:"center"
        }}>
         <img src={ERR_LOGO} style={{
            width:"500px",
            height:"500px"
         }}/> 
         <h2 style={{
            marginTop:"10px"
         }}>{error.data}</h2>
            <p style={{
            marginTop:"10px"
         }}>{error.status +":"+ error.statusText}</p>
         {/* show more information about error */}
        </div>
    );
}

export default ErrorComp;