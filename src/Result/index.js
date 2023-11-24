import { ResultInfo, Info, Calculation } from "./styled";

const Result = ({ result, amountIn, currencyIn, amountOut, currencyOut, formattedRatesDay }) => (
	<ResultInfo
	$showResult={result}>
		<Calculation>
			{amountIn}&nbsp;{currencyIn} = {amountOut ? amountOut.toFixed(4) : null}
			&nbsp;{currencyOut}
		</Calculation>
		<Info>Przeliczono po kursie z dnia {formattedRatesDay}</Info>
	</ResultInfo>
);

export default Result;
