import PreviewList from 'preview/PreviewList';
import Recommend from 'components/home/Recommend';

import cfg from 'config/config.json';

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            previews: [],
            authors: []
        }

    }

    // 组件挂载完成后加载
    componentDidMount(){
        $.post(`${cfg.url}/getPreview`)
            .done( ret => {
                if (ret.code === 0){
                    this.setState({
                        previews: ret.data
                    })
                }
            });


        $.post(`${cfg.url}/getAuthor`).done(
            ret => {
                if( ret.code  === 0){
                    this.setState({
                        authors: ret.data
                    })
                }
            }
        )
    }

    render(){
        let {
            previews,
            authors
        } = this.state;

        return (
            <div className={"ui container grid"}>
                <div className={"column twelve wide"}>
                    <PreviewList
                        {...{
                            previews
                        }}
                    />
                </div>
                <div className={"column four wide"}>
                    <Recommend
                        {...{
                            authors
                        }}
                    />
                </div>
            </div>
        )
    }
}