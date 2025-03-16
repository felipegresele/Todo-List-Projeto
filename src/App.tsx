import { useEffect, useState } from 'react';
import './App.css';
import img from '../public/img.png';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';
import { useSpring, animated } from 'react-spring';

function App() {
  const [todos, setTodos] = useState(() => {
    const storedLocalTodos = localStorage.getItem('todos');
    return storedLocalTodos
      ? JSON.parse(storedLocalTodos)
      : [
          { id: 1, text: 'Estudar React', isCompleted: false },
          { id: 2, text: 'Ir para academia', isCompleted: false },
          { id: 3, text: 'Ler livro', isCompleted: false },
        ];
  });

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('Asc');

  // Função para adicionar nova tarefa na lista
  const addTodo = (text) => {
    const newTodos = [
      ...todos,
      { id: Math.floor(Math.random() * 10000), text, isCompleted: false },
    ];

    // Atualizar o estado com os novos newTodos
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(newTodos);
  };

  // Salva as tarefas no localStorage sempre que o estado 'todos' for atualizado
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Animação de entrada para os itens de tarefa
  const [enterStyle, setEnterStyle] = useSpring(() => ({
    opacity: 0,
    transform: 'translateX(-100%)', // Começa fora da tela à esquerda
  }));

  // Quando o estado todos for atualizado, aplicamos a animação de entrada
  useEffect(() => {
    setEnterStyle({ opacity: 1, transform: 'translateX(0%)' });
  }, [todos]); // A animação será aplicada sempre que a lista de todos for alterada

  return (
    <div className="container">
      <div className="app-container">
        <h1>Lista de Tarefas</h1>
        <Search search={search} setSearch={setSearch} />
        <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
        <div className="todo-list">
          {todos
            .filter((todo) =>
              filter === 'All'
                ? true
                : filter === 'Completed'
                ? todo.isCompleted
                : !todo.isCompleted
            )
            .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
            .sort((a, b) =>
              sort === 'Asc' ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text)
            )
            .map((todo) => (
              // Aplicando a animação de entrada diretamente nos itens da lista
              <animated.div
                key={todo.id}
                style={enterStyle} // Aplica a animação de entrada
              >
                <Todo
                  todo={todo}
                  removeTodo={removeTodo}
                  completeTodo={completeTodo}
                />
              </animated.div>
            ))}
        </div>
        <TodoForm addTodo={addTodo} />
      </div>
      <div className="img-container">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default App;
