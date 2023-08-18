interface LineProps {
	key: number;
	value: string;
	onClick: () => void;
}
export default function Line({ key, value, onClick }: LineProps) {
	return (
		<>
			<li className="line-item" key={key}>
				{value} <button onClick={onClick}>x</button>
			</li>
		</>
	);
}
