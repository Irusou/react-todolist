import Todo from "./../Todo";
import Line from "./Line";

interface ListProps {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
export default function List({ todos, setTodos }: ListProps) {
	const handleDeleteClick = (id: number) => {
		let newTodos = todos.filter((todo) => todo.id !== id);

		setTodos(newTodos);
	};

	return (
		<>
			<div className="list-container">
				{todos.length === 0 ? (
					<span></span>
				) : (
					<ul className="list">
						{todos.map((todo) => (
							<Line
								key={todo.id}
								value={todo.title}
								onClick={() => handleDeleteClick(todo.id)}
							/>
						))}
					</ul>
				)}
			</div>
		</>
	);
}
