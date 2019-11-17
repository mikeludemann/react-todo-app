import React, { Component } from 'react'

class TodoItem extends Component {
	createTask = (item) => {
		return (
			<li className="task--item">
				<label className="task--label">
					<input type="checkbox" id={item.key} key={item.key} className="task--check" checked={item.checked} onChange={() => this.props.taskCheck(item)}/>
					<span className="task--finish"></span>
				</label>
        <span className={`task--content ${item.checked ? "task--done" : ""}`}>{item.text}</span>
        <span className="task--close" onClick={() => this.props.deleteItem(item.key)}>&#10006;</span>
			</li>
		)
	}
	render() {

		const todoEntries = this.props.entries;
		const listItems = todoEntries.map(this.createTask);

		return <div className="complete--list"><ul className="todo--list--elements">{listItems}</ul></div>

	}
}

export default TodoItem;
