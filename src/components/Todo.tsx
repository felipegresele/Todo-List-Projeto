import { useState } from 'react';
import { useSpring, animated } from 'react-spring'; // Importando o 'animated' para aplicar animações

const Todo = ({ todo, removeTodo, completeTodo }) => {
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
  const [isRemoving, setIsRemoving] = useState(false); // Estado para controle da animação de remoção

  // Animação de remoção da tarefa
  const [removeStyle, setRemoveStyle] = useSpring(() => ({
    opacity: 1,
    transform: 'translateX(0%)',
    backgroundColor: 'transparent',
  }));

  const handleComplete = () => {
    // Alterna o estado de "completo" da tarefa
    completeTodo(todo.id);
    setIsCompleted(!isCompleted);
  };

  const handleRemove = () => {
    setIsRemoving(true); // Marca como removendo
    setRemoveStyle({
      opacity: 0,
      transform: 'translateX(100%)', // Desliza a tarefa para a direita
      backgroundColor: '#e75b5b', // Fica vermelho ao ser removido
    });

    // Chama a função de remoção depois de um tempo para garantir que a animação aconteça
    setTimeout(() => removeTodo(todo.id), 500); // Tempo de animação antes de remover
  };

  return (
    <animated.div
      id={`todo-${todo.id}`}
      className={`todo ${isRemoving ? 'removing' : ''}`}
      style={removeStyle} // Aplica a animação de remoção
    >
      <div className="content">
        <p style={{ textDecoration: isCompleted ? "line-through" : "" }}>
          {todo.text}
        </p>
      </div>
      <div>
        <button className="complete" onClick={handleComplete}>Completar</button>
        <button className="remove" onClick={handleRemove}>Deletar</button>
      </div>
    </animated.div>
  );
};

export default Todo;
