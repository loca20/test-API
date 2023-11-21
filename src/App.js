import { useState } from "react";
import { useRatesData } from "./useRatesData";
import Container from "./Container";
import Header from "./Header";
import Clock from "./Clock";
import Form from "./Form";
import Result from "./Result";
import currencies from "./currencies";

fetch("/test-API/currencyRates.json").then((response) => {
	response.json().then((currencyRates) => {
		console.log(currencyRates);
	});
});

function App() {
	const {ratesData} = useRatesData();
	const [currencyIn, setCurrencyIn] = useState("PLN");
	const [amountIn, setAmountIn] = useState("");
	const [currencyOut, setCurrencyOut] = useState("EUR");
	const [errorInfo, setErrorInfo] = useState("");
	const [result, setResult] = useState(false);
	const [amountOut, setAmountOut] = useState("");


	console.log(ratesData);
	const isError = !!errorInfo;

	const clearForm = () => {
		setCurrencyIn("PLN");
		setAmountIn("");
		setCurrencyOut("EUR");
		setErrorInfo("");
		setResult(false);
	};

	const clearError = () => {
		if (amountIn > 0) {
			return;
		}

		setErrorInfo("");
		setAmountIn("");
	};

	const rateCurrencyIn = currencies.find(
		({ name }) => name === currencyIn
	).rate;

	const rateCurrencyOut = currencies.find(
		({ name }) => name === currencyOut
	).rate;

	const count = () => {
		if (amountIn === "") {
			setErrorInfo("Musisz podać kwotę");
			return;
		}

		if (amountIn <= 0) {
			setErrorInfo("Podaj kwotę dodatnią!");
			return;
		}

		setResult(true);
		setAmountOut((+amountIn * rateCurrencyIn) / rateCurrencyOut);
	};

	const hideResult = () => {
		if (result) {
			setResult(false);
		}
	};

	return (
		<>
			<Header />

			<Container>
				<Clock />
				<Form
					currencyIn={currencyIn}
					setCurrencyIn={setCurrencyIn}
					amountIn={amountIn}
					setAmountIn={setAmountIn}
					currencyOut={currencyOut}
					setCurrencyOut={setCurrencyOut}
					clearForm={clearForm}
					errorInfo={errorInfo}
					count={count}
					clearError={clearError}
					hideResult={hideResult}
					isError={isError}
					ratesData={ratesData}
				/>
				<Result
					result={result}
					amountIn={amountIn}
					currencyIn={currencyIn}
					amountOut={amountOut}
					currencyOut={currencyOut}
				/>
			</Container>
		</>
	);
}

export default App;
