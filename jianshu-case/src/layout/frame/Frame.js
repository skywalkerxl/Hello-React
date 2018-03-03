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

        this.SignInAjax = this.SignInAjax.bind(this);
    }

    SignInAjax(reqData){
        $.post(`${cfg.url}/login`, reqData).done(
            ret => {
                console.log(ret);
            }
        )
    }

    render(){
        let {SignInAjax} = this;

        return (
            <div className={S.layout}>
                <Nav/>
                <Route exact path={"/"} component={Home}></Route>
                <Route exact path={"/sign_in"} render={
                    (props) => (
                        <SignIn
                            {...{
                                SignInAjax
                            }}
                        ></SignIn>
                    )
                }></Route>
                <Route exact path={"/sign_up"} component={SignUp}></Route>
            </div>
        )
    }
}