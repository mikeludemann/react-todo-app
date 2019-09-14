import React, { Component } from 'react'

class TodoItem extends Component {
	createTask = (item) => {
		return (
			<li key={item.key} className="task--item">
        <span className={`task--content ${item.done ? "task--done": ""}`}>{item.text}</span>
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
