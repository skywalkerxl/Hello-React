import React, {Component} from 'react';
import Panel from './Panel';
import S from './style.scss';
import Validation from 'util/validation'

export default class SignInPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            nameErr: false,
            passwErr: false
        }

        this.nameChange = this.nameChange.bind(this)
        this.passwChange = this.passwChange.bind(this)

        this.validator = new Validation()

        this.validator.addByValue('username', [
            {strategy: 'isEmpty', errorMsg: '用户名不能为空'},
            {strategy: 'hasSpace', errorMsg: '用户名不能有空格'},
            {strategy: 'maxLength:6', errorMsg: '用户名最大长度为6'}
        ]);

        this.validator.addByValue('password', [
            {strategy: 'isEmpty', errorMsg: '密码不能为空'},
            {strategy: 'hasSpace', errorMsg: '密码不能有空格'},
            {strategy: 'maxLength:6', errorMsg: '密码最大长度为6'}
        ]);

    }


    nameChange(ev){
        let { target } = ev;

        let msg = this.validator.valiOneByValue('username', target.value);

        console.log(msg);

        this.setState({
            username: target.value,
            nameErr: msg
        });


    }

    passwChange(ev){
        let {target} = ev;

        let msg = this.validator.valiOneByValue('password', target.value);

        console.log(msg);

        this.setState({
            password: target.value,
            passwErr: msg
        });
    }

    render(){
        let { nameChange, passwChange } = this;

        let {passwErr, nameErr} = this.state;

        let nameErrMsg = (nameErr ? (
            <p className={S.err}>{nameErr}</p>
        ) : '');

        let passErrMsg = (passwErr ? (
            <p className={S.err}>{passwErr}</p>
        ) : '');

        return (
            <div className={S.sign_panel}>
                <form className={"ui form"}>
                    <div className={"field " + (nameErr ? 'error': '' )}>
                        <input
                            type={"text"}
                            placeholder={"用户名"}
                            ref={"nameDom"}
                            onChange={nameChange}
                        />
                        { nameErrMsg }
                    </div>
                    <div className={"field " + (passwErr ? 'error' : '' )}>
                        <input
                            type={"text"}
                            placeholder={"密码"}
                            ref={"passDom"}
                            onChange={passwChange}
                        />
                        { passErrMsg }
                    </div>
                    <div className={"field"}>
                        <button
                            type={"submit"}
                            className={"ui button fluid primary"}
                        >登录</button>
                    </div>
                </form>
            </div>
        )
    }
}