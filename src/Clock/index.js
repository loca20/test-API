import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate.js";

const Clock = () => {

	const date = useCurrentDate();

	const formatDate = (date) => {
		const day = date.toLocaleDateString(undefined, {
			weekday: "long",
			day: "numeric",
			month: "short",
		});
		const time = date.toLocaleTimeString();

		return `${day}, ${time}`;
	};

	return (
		<StyledClock>
			<p>Dzisiaj jest {formatDate(date)}</p>
		</StyledClock>
	);
};

export default Clock;
