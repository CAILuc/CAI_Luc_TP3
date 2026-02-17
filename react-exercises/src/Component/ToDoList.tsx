import {useState} from "react";

interface ToDo{
    id: number;
    text: string;
    completed: boolean;
}

function TodoList() {
    const [todos , setTodos] = useState<ToDo[]>([]);
    const [input, setInput] = useState('');
    
    const addTodo = () => {
        const newTodos : ToDo = {
            id: Date.now(),
            text: input,
            completed: false
        }

        setTodos([...todos, newTodos]);
    };

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo =>
            todo.id === id
                ? { ...todo, completed: !todo.completed }
                : todo
        ));
    };

    const removeTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id!==id ))
    };

    return (
        <div>
            <div>
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Nouvelle tâche..."
                />
                <button onClick={addTodo}>Ajouter</button>
            </div>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            value={todo.id}
                            onChange={() => toggleTodo(todo.id)}
                        />
                        {todo.text}
                        <button onClick={() => removeTodo(todo.id)}>Supprimer</button>
                    </li>
                ))
                }
            </ul>

            <div>
                <p> {todos.filter(todo => todo.completed).length}/{todos.length} tâches complétées</p>
            </div>

        </div>
    );
}

export default TodoList;