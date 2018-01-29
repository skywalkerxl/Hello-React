import Item from 'components/Item.js'
import Footer from 'components/Footer.js'

require('style/base.css');
require('style/index.css');

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            todosData: [],
            inputVal: ""
        }
        this.handlerKeyDownPost = this.handlerKeyDownPost.bind(this);
        this.onClearCompleted = this.onClearCompleted.bind(this);
        this.onDestroy = this.onDestroy.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.toggleAll = this.toggleAll.bind(this);
        this.onToggle = this.onToggle.bind(this);
    }

    inputChange(ev){
        this.setState({
            inputVal: ev.target.value
        })
    }

    // 回车
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
        let {inputChange, handlerKeyDownPost, onDestroy, onClearCompleted, toggleAll, onToggle } = this;
        let {todosData, inputVal} = this.state;
        let items = null,
            footer = null,
            itemsBox = null;

        let leftCount = todosData.length;

        items = todosData.map((elt, i)=>{

            if(elt.hasCompleted)
                leftCount--;
            
            return (
                <Item {...{
                    onDestroy,
                    todo: elt,
                    onToggle
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
                            onClearCompleted
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


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

if(module.hot){
    module.hot.accept()
}
