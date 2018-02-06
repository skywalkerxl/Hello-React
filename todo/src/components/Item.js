let propTypes = {
    todo: PT.object,
    onDestroy: PT.func,
    onToggle: PT.func,
    itemEditDown: PT.func
}

export default class Item extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            inEdit: false,
            val: ''
        }

        this.onEdit = this.onEdit.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onEnter = this.onEnter.bind(this);
        this.itemEditDone = this.itemEditDone.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }

    onBlur(){
        this.itemEditDone();
    }

    onEnter(ev){
        if(ev.keyCode !== 13) return;
        this.itemEditDone();
    }


    inputChange(ev){
        this.setState({
            val: ev.target.value
        })
    }

    itemEditDone(){
        this.setState({
            inEdit: false
        })
        let {todo, itemEditDown} = this.props;
        itemEditDown(todo, this.state.val);
    }

    // 编辑状态
    onEdit(){
        console.log(1);
        let {value} = this.props.todo;

        this.setState({
            inEdit: true,
            val: value
        }, ()=> {
            this.refs.editInput.focus()
        });


    }


    render(){

        let {onEdit, onBlur, onEnter, inputChange} = this;

        let {todo, onDestroy, onToggle} = this.props;

        let {inEdit, val} = this.state;

        let itemClassName = '';

        if(inEdit){
            itemClassName += 'editing';
        }

        return(
            <li className={itemClassName}>
                <div className={"view"}>
                    <input
                        type={"checkbox"}
                        className={"toggle"}
                        checked={todo.hasCompleted}
                        onChange={ev => onToggle(todo)}
                    />
                    <label
                        onDoubleClick={onEdit}
                        ref={"label"}
                    >
                        {todo.value}
                    </label>
                    <button
                        onClick={ ev => onDestroy(todo) }
                        className={"destroy"}
                        ref={"btn"}
                    ></button>
                </div>
                <input
                    value={val}
                    type={"text"}
                    className={"edit"}
                    onBlur={onBlur}
                    onKeyDown={onEnter}
                    onChange={inputChange}
                    ref={"editInput"}
                />
            </li>
        )
    }
}

Item.propTypes = propTypes;