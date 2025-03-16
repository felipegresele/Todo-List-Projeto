import { useState } from "react";

const TodoForm = ({ addTodo }) => {
    // Estado para armazenar o valor do input
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita o recarregamento da página ao enviar o formulário

        // Validação: Se o campo estiver vazio, não adiciona a tarefa
        if (!value.trim()) return;

        // Adiciona a nova tarefa
        addTodo(value);

        // Reseta o campo de entrada após a submissão
        setValue("");
    };

    return (
        <div className="todo-form">
            <h2>Criar tarefa:</h2>
            <form onSubmit={handleSubmit}> 
                <input 
                    type="text" 
                    placeholder="Digite o título da tarefa" 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)} // Atualiza o estado com o valor digitado
                />
                <button type="submit">Criar tarefa</button>
            </form>
        </div>
    );
};

export default TodoForm;
