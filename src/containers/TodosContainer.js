import React, {Component} from 'react'
import TodoModel from "../models/Todo.jsx"
import Todos from "../components/Todos.js"
import CreateTodoForm from "../components/CreateTodoForm"

class TodosContainer extends Component {
	constructor(){
		super()
		this.state = {
			todos: []
		}
	}

	componentDidMount(){
		this.fetchData()
	}

	fetchData(){
		TodoModel.all().then( (res) => {
			this.setState({
				todos: res.data,
				todo: ''
			})
	})
	}
	CreateTodoForm(todo){
		let newTodo = {body: todo, completed: false}
		TodoModel.create(newTodo).then( (res) => {
			console.log(res)
			let todos = res.data
			this.setState({todos: todos})
		})	
	}

	render(){
		return (
			<div>
			<Todos todos={this.state.todos} />
			
			<CreateTodoForm createTodo={this.CreateTodoForm.bind(this)}/>
			</div>
			)
	}
}

export default TodosContainer