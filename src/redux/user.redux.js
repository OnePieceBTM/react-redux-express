import axios from "axios"

const REGISTER_ERROR="REGISTER_ERROR"
const REGISTER_SUCCESS="REGISTER_SUCCESS"

const initState={
    isAuth:false,
    username:"",
    psw:"",
    repeatpsw:"",
    type:""
}

export function user(state=initState,action){
    switch(action.type){
        case REGISTER_SUCCESS:
        return {...state, msg:"", isAuth:true, ...action.payload}
        case REGISTER_ERROR:
        return {...state, isAuth:false, msg:action.msg}
        default:
        return state
    }
}

function errorMsg(msg){
    return {msg,type:"REGISTER_ERROR"}
}

function registerSuceess(data){
    return {type:"REGISTER_SUCCESS",payload:data}
}

export function register({username,paw,repeatpaw,type,mes}){
    if(!username || !paw){
        return errorMsg("用户名或者密码不能为空")
    }
    if(paw!==repeatpaw){
        return errorMsg("两次输入的密码不一致，请重新输入")
    }
    return dispatch=>{
        axios.post("",{username,paw,repeatpaw,type}).then(
            res=>{
                if(res.status==200 || res.data.code==0){
                    dispatch(registerSuceess({username,paw,repeatpaw,type}))
                }
                else{
                    dispatch(errorMsg(res.data.msg))
                }
            }
        )
    }
}