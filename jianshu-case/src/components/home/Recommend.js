import {Link} from 'react-router-dom';
import S from './style.scss';
import Author from './Author';

export default class Recommend extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        let authors = [];

        return (
            <div className={S.recommend}>
                <div className={S.title}>
                    <span>作者列表</span>
                </div>
                <div className={"ui items"}>
                    {
                        authors.map((elt, i) => {
                            return (
                                <Author
                                    {...{
                                        user: elt
                                    }}
                                    key={i}
                                ></Author>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}