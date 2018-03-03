import EntryPanel from 'components/user/Panel'
import SignUpPanel from "components/user/SignUpPanel";

export default class SignUp extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <EntryPanel>
                <SignUpPanel/>
            </EntryPanel>
        )
    }
}