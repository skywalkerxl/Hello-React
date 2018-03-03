import SignInPanel from 'components/user/SignInPanel';
import EntryPanel from 'components/user/Panel';

let propTypes = {
    SignInAjax: PT.func
}

export default class SignIn extends React.Component {
    constructor(props){
        super(props)
    }

    render(){

        let { SignInAjax } = this.props;

        return (
            <EntryPanel>
                <SignInPanel
                    {...{
                        SignInAjax
                    }}
                />
            </EntryPanel>
        )
    }
}

SignIn.propTypes = propTypes;
