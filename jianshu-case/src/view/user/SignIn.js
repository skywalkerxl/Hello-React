import SignInPanel from 'components/user/SignInPanel';
import EntryPanel from 'components/user/Panel';

let propTypes = {
    SignInAjax: PT.func,
    signInMsg: PT.object,
    ClearLoginMsg: PT.func
}

export default class SignIn extends React.Component {
    constructor(props){
        super(props)
    }

    render(){

        let { SignInAjax, signInMsg, ClearLoginMsg } = this.props;

        return (
            <EntryPanel>
                <SignInPanel
                    {...{
                        SignInAjax,
                        signInMsg,
                        ClearLoginMsg
                    }}
                />
            </EntryPanel>
        )
    }
}

SignIn.propTypes = propTypes;
