import axios from 'axios'

class TodoModel {
	static all(){
	let request = axios.get("http://localhost:4567/")
	return request
	}
	static create(todo){
		let request = axios.post("http://localhost:4000/todos", todo)
		console.log(request)
		return request
	}
}

export default TodoModel