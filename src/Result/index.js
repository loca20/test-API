import { ResultInfo, Info, Calculation } from "./styled";

const Result = ({ result, amountIn, currencyIn, amountOut, currencyOut }) => (
	<ResultInfo
	$showResult={result}>
		<Calculation>
			{amountIn}&nbsp;{currencyIn} = {amountOut ? amountOut.toFixed(4) : null}
			&nbsp;{currencyOut}
		</Calculation>
		<Info>Przeliczono po kursie z dnia 28.08.2023</Info>
	</ResultInfo>
);

export default Result;
