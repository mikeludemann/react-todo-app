import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/todoList';
import TodoItem from './components/todoItem';

class App extends Component {
	inputElement = React.createRef()
	constructor() {
		super()
		this.state = {
			items: [],
			currentItem: {
				text: '',
				key: '',
				checked: false
			},
		}
	}

	handleInput = (e) => {
		const itemText = e.target.value
		const currentItem = { text: itemText, key: Date.now(), checked: false }
		this.setState({
			currentItem,
		})
	}

	handleAllCheckbox = (event) => {
    let elements = this.state.items;
    
    elements.forEach(item => item.checked = event.target.checked);
    
    this.setState({items: elements})
  }

	deleteItem = (key) => {
		const deleteItems = this.state.items.filter(item => {
			return item.key !== key
		})
		this.setState({
			items: deleteItems,
		})
	}

	doneItem = ({ text, checked }) => {
		this.setState({
			items: this.state.items.map(item => item.text === text ? { text, checked: !checked } : item)
		})
	}

	addItem = (e) => {
		e.preventDefault();

		const newItem = this.state.currentItem;

		if (newItem.text !== '') {
			const items = [...this.state.items, newItem]
			this.setState({
				items: items,
				currentItem: { text: '', key: '', checked: false },
			})
		}
	}

	render(){
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				</header>
				<section className="content">
					<TodoList
						addItem={this.addItem}
						inputElement={this.inputElement}
						handleInput={this.handleInput}
						currentItem={this.state.currentItem}
					/>
					<TodoItem 
						entries={this.state.items} 
						deleteItem={this.deleteItem} 
						taskCheck={this.doneItem}
					/>
				</section>
				<footer className="App-footer">
					&#169; Copyright 2019
				</footer>
			</div>
		);
	}
}

export default App;
