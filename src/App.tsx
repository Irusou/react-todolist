import { ChangeEvent, useState } from "react";
import "./App.css";
import { TodoInput } from "./components/TodoInput";
import Todo from "./Todo";
import List from "./components/List";

function App() {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [value, setValue] = useState("");

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const handleAddClick = (value: string) => {
		if (!value) {
			return;
		}

		let newTodos = [
			...todos,
			{
				id: Math.floor(Math.random() * 100),
				title: value,
			},
		];

		setTodos(newTodos);
		setValue("");
	};

	return (
		<>
			<div className="todo-list">
				<TodoInput
					todos={todos}
					value={value}
					handleChange={handleChange}
					handleAddClick={() => handleAddClick(value)}
				/>
				<List todos={todos} setTodos={setTodos} />
			</div>
		</>
	);
}

export default App;
