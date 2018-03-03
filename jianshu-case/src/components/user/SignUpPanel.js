import React, {Component} from 'react';
import Panel from './Panel';
import S from './style.scss';
import Validation from 'util/validation';

export default class SignUpPanel extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
            cfPassword: '',
            userErr: false,
            passErr: false,
            cfPassErr: false
        }

        this.validator = new Validation();

        this.validator.addByValue('username', [
            { strategy: 'isEmpty', errorMsg: '用户名不可为空' },
            { strategy: 'hasSpace', errorMsg: '用户名不可包含空格' },
            { strategy: 'maxLength:6', errorMsg: '用户名不可超过6位' }
        ]);

        this.validator.addByValue('password', [
            { strategy: 'isEmpty', errorMsg: '密码不可为空' },
            { strategy: 'hasSpace', errorMsg: '密码不可包含空格' },
            { strategy: 'maxLength:6', errorMsg: '密码不可超过6位' }
        ]);

        this.nameChange = this.nameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.cfPasswordChange = this.cfPasswordChange.bind(this);
    }

    nameChange(ev){
        let { target } = ev;

        let msg = this.validator.valiOneByValue('username', target.value);

        this.setState({
            username: target.value,
            userErr: msg
        });
    }

    passwordChange(){
        let { passDom, cfPassDom } = this.refs;
        let { cfPassword } = this.state;
        let msg = this.validator.valiOneByValue('password', passDom.value)

        this.setState({
            password: passDom.value,
            passErr: msg
        });

        console.log(cfPassword);
        if( cfPassword != "" ){
            this.cfPasswordChange();
        }
    }

    cfPasswordChange(){
        let { passDom, cfPassDom } = this.refs;

        let cfPassErr = ( (passDom.value == cfPassDom.value) ? false : '密码不一致' );

        this.setState({
            cfPassword: cfPassDom.value,
            cfPassErr: cfPassErr
        });
    }

    render(){

        let {
            nameChange,
            passwordChange,
            cfPasswordChange
        } = this;

        let {
            userErr,
            passErr,
            cfPassErr
        } = this.state;

        let usernameErr = (userErr) ? (
                <p className={S.err}>{userErr}</p>
            ) : '',
            passwordErr = (passErr) ? (
                <p className={S.err}>{passErr}</p>
            ) : '',
            cfPasswordErr = (cfPassErr) ? (
                <p className={S.err}>{cfPassErr}</p>
            ) : '';

        return (
            <div className={S.sign_panel}>
                <form className={"ui form"}>
                    <div className={"field " + (usernameErr ? 'error': '')}>
                        <input
                            type={"text"}
                            placeholder={"用户名"}
                            ref={"nameDom"}
                            onChange={nameChange}
                        />
                        {usernameErr}
                    </div>
                    <div className={"field " + (passwordErr ? 'error' : '')}>
                        <input
                            type={"password"}
                            placeholder={"密码"}
                            ref={"passDom"}
                            onChange={passwordChange}
                        />
                        {passwordErr}
                    </div>
                    <div className={"field " + (cfPasswordErr ? 'error' : '')}>
                        <input
                            type={"password"}
                            placeholder={"确认密码"}
                            ref={"cfPassDom"}
                            onChange={cfPasswordChange}
                        />
                        {cfPasswordErr}
                    </div>
                    <div className={"field"}>
                        <button
                            type={"submit"}
                            className={"ui button fluid primary"}
                        >注册</button>
                    </div>
                </form>
            </div>
        )
    }

}