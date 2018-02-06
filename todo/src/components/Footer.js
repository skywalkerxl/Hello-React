let propTypes = {
    leftCount: PT.number,
    showClearButton: PT.bool,
    onClearCompleted: PT.func,
    changeView: PT.func,
    view: PT.oneOf(['all', 'active', 'completed'])  // view的状态只会是这三者的其中之一
}

export default class Footer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let {
            leftCount,
            showClearButton,
            onClearCompleted,
            view,
            changeView
        } = this.props;

        let clearBtn = null;

        if(showClearButton){
            clearBtn = (
                <button
                    className={"clear-completed"}
                    onClick={onClearCompleted}
                >
                    clear all completed
                </button>
            )
        }

        return(
            <footer className={"footer"}>
                <span className={"todo-count"}>
                    <strong>{leftCount}</strong>
                    <span>item left</span>
                </span>
                <ul className={"filters"}>
                    <li>
                        <a
                            className={view==="all" ? 'selected' : ""}
                            onClick={ev => changeView("all")}
                            href={"#/all"}>All</a>
                    </li>
                    <li>
                        <a
                            className={view==="active" ? 'selected' : ""}
                            onClick={ev => changeView("active")}
                            href={"#/active"}>Active</a>
                    </li>
                    <li>
                        <a
                            className={view==="completed" ? 'selected' : ""}
                            onClick={ev => changeView("completed")}
                            href={"#/completed"}>Completed</a>
                    </li>
                </ul>
                {clearBtn}
            </footer>
        )
    }
}