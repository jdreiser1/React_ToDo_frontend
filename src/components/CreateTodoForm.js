import React, {Component} from 'react'

class CreateTodoForm extends Component {
	constructor(){
		super()
		this.state = {
			todo: ''
		}
	}
	onInputChange(event){
		this.setState({
			todo: event.target.value
		})
	}
	onFormSubmit(event){
		event.preventDefault()
		let todo = this.state.todo
		this.props.createTodo(todo)
		this.setState({
			todo: ''
		})
	}
	render(){
		return(
			<div>
			<h2>Create Todo</h2>
			<form onSubmit={event => this.onFormSubmit(event)}>
				<input 
				onChange={event => this.onInputChange(event)} 
				type='text'
				placeholder="Write a todo here..."
				value={this.state.todo}/>
			</form>
			</div>
		)
	}
}
export default CreateTodoForm