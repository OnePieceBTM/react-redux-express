import React from "react";
import Logo from "../../component/logo/logo.js"
import{List, InputItem, WingBlank, WhiteSpace, Button, Radio} from "antd-mobile"

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            "type":"genius"
        }
    }
    render(){
        const RadioItem = Radio.RadioItem;
        return(
            <div>
                <Logo />
                <WingBlank>
                    <List>
                        <InputItem>用户名</InputItem>
                        <WhiteSpace/>
                        <InputItem>密码</InputItem>
                        <WhiteSpace/>
                        <InputItem>确认密码</InputItem>
                        <WhiteSpace/>
                        <RadioItem checked={this.state.type=="genius"}>牛人</RadioItem>
                        <WhiteSpace/>
                        <RadioItem checked={this.state.type=="boss"}>BOSS</RadioItem>
                        <Button type="primary">
                            登录
                        </Button>
                        <WhiteSpace />
                        <Button type="primary" onClick={this.register}>
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