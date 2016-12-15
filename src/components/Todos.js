import React, {Component} from 'react'
import Todo from './Todo'

class Todos extends Component {
	render(){
	let todos = this.props.todos.map((todo, i) => {
		return(
			<Todo  
				key={i}
				todo={todo}
				/>
		)
	})
	return (
		<div>
			{todos}
		</div>
	)
	}
}

export default Todos