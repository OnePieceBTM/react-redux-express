import React from "react";
import axios from "axios";
//这是普通组件，没有Router包起来的，this.props获取不到属性，用withRouter就可以
import {withRouter} from "react-router-dom";
@withRouter
class AutoRoute extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    
    componentDidMount(){
        const pulicList=["/login","/register"];
        const pathname=this.props.location.pathname;
        if(pulicList.indexOf(pathname)>-1){
            return null;
        }
        axios.get("/user/info").then(res=>{
            if(res.status==200){
                if(res.data.code==1){
                    
                }
                else{
                    this.props.history.push("/login")
                }
                
            }
        })
    }
    render(){
        return null
    }
}

export default AutoRoute