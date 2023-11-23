import { StyledForm, Message } from "./styled";

const LoadingAndError = ({ ratesData, children }) => {

    if (ratesData.status !== "loading" && ratesData.status !== "error") {
        return children;
    }

    return (
		<StyledForm>
		
		{ratesData.status === "loading" ? (
                <Message $loading>
                    Momencik...
                    <br />
                    Ładuję kursy walut 
										<br />
										z Europejskiego Banku Centralnego 
										<br />
										😎
                </Message>
            ) : (
                <Message $error>
                    Hmm... Coś poszło nie tak ☹️ 
										<br />
										Sprawdź, czy masz połączenie z internetem.
                    <br />
                    Jeśli masz... to wygląda na to, że to nasza wina.
                    <br />
                    Może spróbuj później? 😉
                </Message>
            )}

		</StyledForm>
    );
};

export default LoadingAndError;