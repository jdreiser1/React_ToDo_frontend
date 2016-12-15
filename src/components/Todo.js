import React, {Component} from 'react'

class Todo extends Component {
	render(){
	return(
		<p>
			<span>{this.props.todo.body}</span>
		</p>
	)
	}
}

export default Todo
