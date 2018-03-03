import EntryPanel from 'components/user/Panel'
import SignUpPanel from "components/user/SignUpPanel";

let proptypes = {
    SignUpAjax: PT.func,
    signUpMsg: PT.object
}

export default class SignUp extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        let { SignUpAjax } = this.props;

        return (
            <EntryPanel>
                <SignUpPanel
                    {...{
                        SignUpAjax
                    }}
                />
            </EntryPanel>
        )
    }
}

SignUp.propTypes = proptypes
