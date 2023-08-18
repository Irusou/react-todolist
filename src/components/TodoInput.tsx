import { ChangeEvent } from "react";
import Todo from "./../Todo";

interface props {
	todos: Todo[];
	value: string;
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleAddClick: (value: string) => void;
}

export function TodoInput({
	todos,
	value,
	handleChange,
	handleAddClick,
}: props) {
	return (
		<>
			<div className="todo-input">
				{todos.length === 0 ? <h2>Empty List...</h2> : <h2>My Todo List</h2>}
				<div className="input-container">
					<input type="text" value={value} onChange={(e) => handleChange(e)} />
					<button type="button" onClick={() => handleAddClick(value)}>
						+
					</button>
				</div>
			</div>
		</>
	);
}
