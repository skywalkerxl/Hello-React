import { Link, NavLink } from 'react-router-dom';
import S from './style.scss'
import cfg from 'config/config.json';

let propTypes = {
    myInfo: PT.object
}

export default class Nav extends React.Component{
    constructor(props){
        super(props);

        this.initUserInfo = this.initUserInfo.bind(this);
    }

    initUserInfo(myInfo){
        myInfo.avatar = cfg.url +  myInfo.avatar;
        return myInfo;
    }

    render(){

        let { myInfo } = this.props;
        let userInfo = null;

        if(myInfo){

            myInfo = this.initUserInfo(myInfo);

            userInfo = [(
                <NavLink
                    to={"/my_page"}
                    className={`${S.avatar} item`}
                    activeClassName={"active"}
                    key={"1"}
                >
                    <img
                        src={myInfo.avatar}
                        className={"ui image avatar"}
                        alt={""}
                    />
                    <div
                        className={S.dropDown}
                    >
                        <p>注销</p>
                    </div>
                </NavLink>
            )]
        }else{
            userInfo = [
                (<NavLink to={"/sign_in"}
                          className={"item"}
                          activeClassName={"active"}
                          key={"1"}
                >登录</NavLink>),
                (<NavLink to={"/sign_up"}
                          className={"item"}
                          activeClassName={"active"}
                          key={"2"}
                >注册</NavLink>)
            ]
        }

        return (
            <div className={"ui fixed secondary pointing menu " + S.nav}>
                <div className={"ui container"}>
                    <Link to={"/"}
                          className={"header item"}
                    >Noods</Link>

                    <NavLink exact
                             to={"/"}
                             className={"item"}
                             activeClassName={"active"}
                    >首页</NavLink>
                    <div className={"menu right"}>
                        {userInfo.map( (elt,i) => {
                            return elt;
                        } )}
                        <NavLink to={"/write"}
                                 className={"item"}
                                 activeClassName={"active"}
                        >写文章</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}