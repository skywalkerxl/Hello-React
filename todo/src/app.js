import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Item from 'components/Item.js'
import Footer from 'components/Footer.js'

require('style/base.css');
require('style/index.css');

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            todosData: [],
            inputVal: "",
            view: 'all'
        }
        this.handlerKeyDownPost = this.handlerKeyDownPost.bind(this);
        this.onClearCompleted = this.onClearCompleted.bind(this);
        this.onDestroy = this.onDestroy.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.toggleAll = this.toggleAll.bind(this);
        this.onToggle = this.onToggle.bind(this);
        this.changeView = this.changeView.bind(this);
        this.itemEditDown = this.itemEditDown.bind(this);
    }

    // 编辑子项
    itemEditDown(todo, value){
        let {todosData} = this.state;

        todosData = todosData.map(elt=>{
            if(todo.id === elt.id){
                elt.value = value;
            }
            return elt;
        })
    }

    // 更改视图
    changeView(view){
        this.setState({view});
    }

    // 输入更改时，修改state
    inputChange(ev){
        this.setState({
            inputVal: ev.target.value
        })
    }

    // 回车事件
    handlerKeyDownPost(ev){
        if(ev.keyCode != 13) return;

        // let value = ev.target.value.trim(); //ev.target真实DOM
        let {inputVal} = this.state;

        let value = inputVal.trim();

        if(value === ''){
            return '';
        }

        let todo = {};

        todo.id = new Date().getTime();
        todo.value = value;
        todo.hasCompleted = false;

        let {todosData} = this.state;

        todosData.push(todo);

        this.setState({
            todosData,
            inputVal: ''
        });
    }

    // 全选
    toggleAll(ev){
        let {checked} = ev.target;

        let{todosData} = this.state;

        todosData = todosData.map(elt=>{
            elt.hasCompleted = checked;
            return elt;
        });

        this.setState({todosData});
    }

    // 单个点选
    onToggle(todo){
        let {todosData} = this.state;

        // 这里遍历之后更改其完成状态
        todosData = todosData.map(
            elt => {
                if(elt.id === todo.id){
                    elt.hasCompleted = !elt.hasCompleted;
                }
                return elt;
            }
        )

        this.setState({
            todosData
        })

    }

    // 删除
    onDestroy( todo ){
        let {todosData} = this.state;

        todosData = todosData.filter((elt)=>{
            return elt.id !== todo.id;
        })

        this.setState({todosData});
    }

    // 清除已完成
    onClearCompleted(){
        let {todosData} = this.state;

        todosData = todosData.filter((elt)=>{
            return !elt.hasCompleted;
        });

        this.setState({todosData});
    }


    render(){
        let {
            inputChange,
            handlerKeyDownPost,
            onDestroy,
            onClearCompleted,
            toggleAll,
            onToggle,
            changeView,
            itemEditDown
        } = this;

        let {todosData, inputVal, view} = this.state;

        let items = null,
            footer = null,
            itemsBox = null;

        let leftCount = todosData.length;

        items = todosData.filter(elt=>{

            if(elt.hasCompleted)
                leftCount--;

            switch (view){
                case 'active':
                    return !elt.hasCompleted;
                case 'completed':
                    return elt.hasCompleted;
                default:
                    return true;
            }
        });

        items = items.map((elt, i)=>{
            return (
                <Item {...{
                    onDestroy,
                    todo: elt,
                    onToggle,
                    itemEditDown
                }}
                key={i}
                />
            );
        });

        if(todosData.length){
            itemsBox = (
                <section
                    className={"main"}>
                    <input
                        type={"checkbox"}
                        className={"toggle-all"}
                        checked={leftCount===0}
                        onChange={toggleAll}
                    />
                    <ul
                        className={"todo-list"}>
                        {items}
                    </ul>
                </section>
            );
            footer = (
                <Footer
                    {
                        ...{
                            leftCount,
                            showClearButton: leftCount < todosData.length,
                            onClearCompleted,
                            changeView,
                            view
                        }
                    }
                />)
        }

        return(
            <div>
                <header className={"header"}>
                    <h1>todos</h1>
                    <input
                        onKeyDown={handlerKeyDownPost}
                        type={"text"}
                        value={inputVal}
                        onChange={inputChange}
                        onKeyDown={handlerKeyDownPost}
                        className={"new-todo"}/>
                </header>
                {itemsBox}
                {footer}
            </div>
        )
    }
}

function Aac(props){
    return (
        <div>我的名字叫Aac</div>
    )
}

function Bbc(props){
    return (
        <div>我的名字叫Bbc</div>
    )
}

ReactDOM.render(
    <Router>
        <div>
            <p><Link to={"/"}>app</Link></p>
            <p><Link to={"/aac"}>aac</Link></p>
            <p><Link to={"/bbc"}>bbc</Link></p>
            <Route exact path={"/"} render={
                ()=>{
                    return (
                        <div>
                            <p>当前这个组件是app</p>
                            <App/>
                        </div>
                    )
                }
            }/>
            <Route exact path={"/aac"} component={Aac}/>
            <Route path={"/bbc"} component={Bbc}/>
        </div>
    </Router>,
    document.getElementById('root')
);

if(module.hot){
    module.hot.accept()
}
