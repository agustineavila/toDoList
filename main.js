const todos = JSON.parse(localStorage.getItem('todos')) || [];

const render = () => {
		const todoList = document.getElementById('todo-list');
	  const todosTemplate = todos.map(t => '<li class="lista">' + '- ' + t + '</li>');
		todoList.innerHTML = todosTemplate.join('');  // esto es para eliminar la coma que se agrega default
		const elementos = document.querySelectorAll('#todo-list li');
		elementos.forEach((elemento, i) => {
				elemento.addEventListener('click', () => {
					elemento.parentNode.removeChild(elemento);	
					todos.splice(i, 1);
					actualizaTodos(todos);
					render();
				})
		})
};

const actualizaTodos = (todos) => {
		const todoStrings = JSON.stringify(todos)
		localStorage.setItem('todos', todoStrings)
}

window.onload = () => {
	render()
	const form = document.getElementById('todo-form');  // capturamos el form
	form.onsubmit = (e) => {   
		e.preventDefault();                              // evitamos que recargue
		const todo = document.getElementById('todo');   // capturamos el input
		const todoText = todo.value;       //guardamos el text que ingresamos
		todo.value = '';     // borramos el contenido del input
		todos.push(todoText);  // agregamos al array el texto
		actualizaTodos(todos);
		render();
	}
}
