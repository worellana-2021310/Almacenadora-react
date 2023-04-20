import React, { useState } from 'react';
import './App.css';
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'

function App() {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [creator, setCreator] = useState("");

  const handleAddTodo = () => {
    const newTodo = `${name} - ${description} - ${startDate} - ${endDate} - ${creator}`;
    setTodos([...todos, { todo: newTodo, completed: false }]);
    setName("");
    setDescription("");
    setStartDate("");
    setEndDate("");
    setCreator("");
  };

  // const swalWithBootstrapButtons = Swal.mixin({
  //   customClass: {
  //     confirmButton: 'btn btn-success',
  //     cancelButton: 'btn btn-danger'
  //   },
  //   buttonsStyling: false
  // })
  
  // swalWithBootstrapButtons.fire({
  //   title: 'Are you sure?',
  //   text: "You won't be able to revert this!",
  //   icon: 'warning',
  //   showCancelButton: true,
  //   confirmButtonText: 'Yes, delete it!',
  //   cancelButtonText: 'No, cancel!',
  //   reverseButtons: true
  // }).then((result) => {
  //   if (result.isConfirmed) {
  //     swalWithBootstrapButtons.fire(
  //       'Deleted!',
  //       'Your file has been deleted.',
  //       'success'
  //     )
  //   } else if (
  //     /* Read more about handling dismissals below */
  //     result.dismiss === Swal.DismissReason.cancel
  //   ) {
  //     swalWithBootstrapButtons.fire(
  //       'Cancelled',
  //       'Your imaginary file is safe :)',
  //       'error'
  //     )
  //   }
  // })

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleCompleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleEditTodo = (index) => {
    const editedTodo = prompt("Editar todo:", todos[index].todo);
    const newTodos = [...todos];
    newTodos[index].todo = editedTodo;
    setTodos(newTodos);
  };

  return (
    <div id='Todo'>
      <h1 id='titulo1'>ToDo List</h1>
      <label>
        <input className='Inputs' value={name} onChange={(e) => setName(e.target.value)} placeholder='Nombre de la tarea....'/>
      </label>
      
      <label>
        <input
          className='Inputs'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Descripcion....'
        />
      </label>
      
      <br />
      <label>
      <h1 className='fechastitulo'>Fecha de Inicio y Fecha de Cierre</h1><br />
        <input
          className='Inputs'
          value={startDate}
          type="date"
          onChange={(e) => setStartDate(e.target.value)}
          placeholder='Fecha de Inicio'
        />
      </label>
      
      <label>
        
        <input
          className='Inputs'
          value={endDate}
          type="date"
          onChange={(e) => setEndDate(e.target.value)}
          placeholder='Fecha De Cierre....'
        />
      </label>
      <br />
      <label id='creadorinput'>
        <input
          className='Inputs'
          value={creator}
          onChange={(e) => setCreator(e.target.value)}
          placeholder='Creador....'
        />
      </label>
      
      <button id='botonAñadir' onClick={handleAddTodo}><img id='imagenMas' src="./agregar.png" alt="" /></button>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{ textDecoration: todo.completed ? "line-through" : "" }}
          >
            <input
              
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCompleteTodo(index)}
              
            />
            {todo.todo}
            <button id='eliminar' onClick={() => handleDeleteTodo(index)}>Eliminar</button>
            <button id='editar' onClick={() => handleEditTodo(index)}>Editar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default App;