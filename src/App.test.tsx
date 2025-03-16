import {describe, it, expect, } from "vitest"
import {fireEvent, render, screen, waitFor} from "@testing-library/react"
import App from './App'

describe('App Component Tests', () => {
    it("should be true", () => {
        expect(true).toBe(true)
    })

    it("should render the title Task List", () => {
        render(<App />) 

        expect(screen.getByText("Lista de Tarefas")).toBeInTheDocument();
    } )

    it("should render the 3 default tasks when started", () => {
        render(<App />)

        const task1 = screen.getByText("Estudar React");
        const task2 = screen.getByText("Ir para academia");
        const task3 = screen.getByText("Ler livro");

        //Garantir que a tarefa foi renderizada corretamente
        expect(task1).toBeInTheDocument();
        expect(task2).toBeInTheDocument();
        expect(task3).toBeInTheDocument();
    });

    it("should add a new todo", async () => {
        render(<App />);
    
        const input = screen.getByPlaceholderText("Digite o título da tarefa");
        const button = screen.getByText("Criar tarefa");
    
        // Adiciona uma nova tarefa
        fireEvent.change(input, { target: { value: 'Novo Todo' } });
        fireEvent.click(button);
    
        // Espera que o novo todo seja adicionado à tela
        expect(screen.getByText("Novo Todo")).toBeInTheDocument();
    });

    it("should search for a todo", async () => {
        render(<App />);
    
        const inputTodo = screen.getByPlaceholderText("Digite o título da tarefa");
        const buttonAdd = screen.getByText("Criar tarefa");
        const inputSearch = screen.getByPlaceholderText("Digite para pesquisar...");
    
        // Adiciona 1 nova tarefa a lista de tarefas
        fireEvent.change(inputTodo, { target: { value: "Comprar arroz" } });
        fireEvent.click(buttonAdd);
    
        // Pesquisa pela tarefa "Comprar arroz"
        fireEvent.change(inputSearch, { target: { value: "Comprar arroz" } });
    
        // Deve exibir apenas a tarefa pesquisada
        expect(screen.getByText("Comprar arroz")).toBeInTheDocument();
        });
    
        
})