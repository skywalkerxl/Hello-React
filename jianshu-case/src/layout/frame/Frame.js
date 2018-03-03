import Nav from 'nav/Nav'
import S from './style.scss'
import Home from 'view/home/Home.js'
import { Route } from 'react-router-dom'
import SignIn from 'view/user/SignIn';
import SignUp from 'view/user/SignUp';

export default class Layout extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className={S.layout}>
                <Nav/>
                <Route exact path={"/"} component={Home}></Route>
                <Route exact path={"/sign_in"} component={SignIn}></Route>
                <Route exact path={"/sign_up"} component={SignUp}></Route>
            </div>
        )
    }
}