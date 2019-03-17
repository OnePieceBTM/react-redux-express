import React from "react";
import Logo from "../../component/logo/logo.js"
import{List, InputItem, WingBlank, WhiteSpace, Button, Radio} from "antd-mobile"

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            "username":"",
            "paw":"",
            "repeatpaw":"",
            "type":"genius"
        }
        this.handleRegister=this.handleRegister.bind(this)
    }
    handleChange(key,v){
        this.setState(
            {
                [key]:v
            }
        )    
    }
    handleRegister(){
        console.log("好神奇的操作啊！",this.state)
    }
    render(){
        const RadioItem = Radio.RadioItem;
        return(
            <div>
                <Logo />
                <WingBlank>
                    <List>
                        <InputItem onChange={(v)=>{this.handleChange("username",v)}}>用户名</InputItem>
                        <WhiteSpace/>
                        <InputItem type="password" onChange={(v)=>{this.handleChange("paw",v)}}>密码</InputItem>
                        <WhiteSpace/>
                        <InputItem type="password" onChange={(v)=>{this.handleChange("repeatpaw",v)}}>确认密码</InputItem>
                        <WhiteSpace/>
                        <RadioItem checked={this.state.type=="genius"} onChange={(v)=>{this.handleChange("type","genius")}}>牛人</RadioItem>
                        <WhiteSpace/>
                        <RadioItem checked={this.state.type=="boss"} onChange={(v)=>{this.handleChange("type","boss")}}>BOSS</RadioItem>
                        <Button type="primary">
                            登录
                        </Button>
                        <WhiteSpace />
                        <Button type="primary" onClick={this.handleRegister}>
                            注册
                        </Button>
                    </List>
                    <WhiteSpace/>
                </WingBlank>
            </div>
        )
    }
}
export default Register