import React from "react";
import logo from "../../job.png"
import "../logo/logo.css"

class Logo extends React.Component{
    render(){
        return(
            <img src={logo} />
        )
    }
}

export default Logo