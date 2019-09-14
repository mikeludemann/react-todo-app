import React, { Component } from "react";

class TodoList extends Component {
	componentDidUpdate() {
		this.props.inputElement.current.focus()
	}
	render() {
		return (
			<div className="todo--list">
				<div className="header">
					<form onSubmit={this.props.addItem}>
						<input
							className="add--element" 
							placeholder="Add new Task"
							ref={this.props.inputElement}
							value={this.props.currentItem.text}
							onChange={this.props.handleInput}
						/>
						<button className="add--submit" type="submit">Add Task</button>
					</form>
				</div>
			</div>
		)
	}
}

export default TodoList;