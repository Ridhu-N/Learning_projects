import React from "react";
const MyComponent =(props) =>{
    const textStyle = (()=>{
        if(props.status === 0){
            return {color : "#0000ff"};
        }
        else if(props.status === 1){
            return {color : "#00ff00"};
        }
        
        return{color : "#ff0000"};
        
    })();
    return (
        <p style={textStyle}>
            {
            (function(){
                if(props.status === 0  || props.status ===1 ){
                    return "Status is either 0 or 1";
                }
                return "Error, status is neither 0 nor 1";
            })()}
        </p>
    );
}
export default MyComponent;