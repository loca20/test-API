
import { StyledForm, Paragraph, ParagraphWithOtherDimensions, Label, Select, Input, ErrorText, Buttons, Button } from "./styled";

const Form = ({
	currencyIn,
	setCurrencyIn,
	amountIn,
	setAmountIn,
	currencyOut,
	setCurrencyOut,
	clearForm,
	errorInfo,
	count,
	clearError,
	hideResult,
	isError,
	ratesData
}) => {
	const onFormSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<StyledForm onSubmit={onFormSubmit}>
			<Paragraph>
				<Label>Waluta, którą posiadasz:</Label>
				<Select
					value={currencyIn}
					onChange={({ target }) => setCurrencyIn(target.value)}
					onClick={hideResult}>
					{ratesData.data && Object.keys(ratesData.data.data).map((currency) => (
						<option key={currency} value={currency}>
							{currency}
						</option>
					))}
				</Select>
			</Paragraph>
			<ParagraphWithOtherDimensions>
				<Label>Kwota, którą chcesz przeliczyć:</Label>
				<Input
					$errorColor={isError}
					type="number"
					placeholder="Podaj kwotę"
					step="0.01"
					value={amountIn}
					onChange={({ target }) => setAmountIn(target.value)}
					onMouseOver={clearError}
					onClick={hideResult}
				/>
			</ParagraphWithOtherDimensions>
			<Paragraph>
				<ErrorText
				$error={errorInfo}
				>
					{errorInfo}
				</ErrorText>
			</Paragraph>
			<Paragraph>
				<Label>Waluta, na którą chcesz przeliczyć:</Label>
				<Select
					value={currencyOut}
					onChange={({ target }) => setCurrencyOut(target.value)}
					onClick={hideResult}>
					{ratesData.data && Object.keys(ratesData.data.data).map((currency) => (
						<option key={currency} value={currency}>
							{currency}
						</option>
					))}
				</Select>
			</Paragraph>
			<Buttons>
				<Button
					onClick={count}>
					Przelicz
				</Button>
				<Button 
				onClick={clearForm}>
					Wyczyść
				</Button>
			</Buttons>
		</StyledForm>
	);
};

export default Form;
