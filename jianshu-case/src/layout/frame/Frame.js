import Nav from 'nav/Nav'
import S from './style.scss'
import Home from 'view/home/Home.js'
import { Route } from 'react-router-dom'
import SignIn from 'view/user/SignIn';
import SignUp from 'view/user/SignUp';
import cfg from 'config/config.json';

export default class Layout extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            signInMsg: null,
            signUpMsg: null,
            myInfo: null
        };
        this.SignInAjax = this.SignInAjax.bind(this);
        this.ClearLoginMsg = this.ClearLoginMsg.bind(this);
    }

    // 登录
    SignInAjax(reqData){
        $.post(`${cfg.url}/login`, reqData).done(
            ret => {
                console.log(ret);
                if( ret.code == 0 ){
                    this.setState({
                        myInfo: ret.data
                    });
                }else {
                    this.setState({
                        signInMsg: ret
                    });
                }
            }
        )
    }

    // 注册
    SignUpAjax(reqData){
        $.post(`${cfg.url}/register`, reqData).done(
            ret => {
                console.log(ret);
                this.setState({
                    signUpMsg: ret
                });
            }
        )
    }

    // 清除登录用户信息
    ClearLoginMsg(){
        this.setState({
            signInMsg: null
        })
    }


    render(){
        let { SignInAjax, SignUpAjax, ClearLoginMsg } = this;

        let { signInMsg, signUpMsg, myInfo } = this.state;

        return (
            <div className={S.layout}>
                <Nav
                    {...{
                        myInfo
                    }}
                ></Nav>
                <Route exact path={"/"} component={Home}></Route>
                <Route exact path={"/sign_in"} render={
                    (props) => (
                        <SignIn
                            {...{
                                SignInAjax,
                                signInMsg,
                                ClearLoginMsg,
                                myInfo
                            }}
                        ></SignIn>
                    )
                }></Route>
                <Route exact path={"/sign_up"} render={
                    (props) => (
                        <SignUp
                            {...{
                                SignUpAjax,
                                signUpMsg,

                            }}
                        ></SignUp>
                    )

                }></Route>
            </div>
        )
    }
}