import styled, { css } from "styled-components";

export const StyledForm = styled.form`
	padding: 6px 20px;

	@media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}px) {
		padding-top: 0;
	}
`;

export const Paragraph = styled.p`
	display: grid;
	grid-template-columns: 1fr 220px;

	@media (max-width: ${({ theme }) => theme.breakpoints.mediumMobile}px) {
		grid-template-columns: 1fr;
	}
`;

export const ParagraphWithOtherDimensions = styled(Paragraph)`
	margin-top: 36px;

	@media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}px) {
		margin-top: 46px;
	}
`;

export const Label = styled.label`
	display: grid;
	align-items: center;

	@media (max-width: ${({ theme }) => theme.breakpoints.mediumMobile}px) {
		margin-bottom: 10px;
		justify-items: center;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}px) {
		margin-top: -10px;
		font-size: 13px;
	}
`;

export const Select = styled.select`
	padding: 10px;
	text-align: center;
	border: 1px solid rgb(165, 165, 165);
	border-radius: 5px;

	@media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}px) {
		margin-bottom: -10px;
		font-size: 14px;
	}
`;

export const Input = styled.input`
	padding: 10px;
	text-align: center;
	border: 1px solid rgb(165, 165, 165);
	border-radius: 5px;

	@media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}px) {
		margin-bottom: -10px;
		font-size: 14px;
	}

${({ $errorColor }) => $errorColor && css`
background-color: rgba(221, 167, 178, 0.584);
`}
`;

export const ErrorText = styled.span`
	grid-column-start: 2;
	margin-top: -10px;
	height: 14px;
	text-align: center;
	font-size: 14px;
	color: ${({ theme }) => theme.colors.errorColor};
	visibility: hidden;

	@media (max-width: ${({ theme }) => theme.breakpoints.mediumMobile}px) {
		grid-column-start: 1;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}px) {
		margin-top: 0;
		font-size: 12px;
	}

	${({ $error }) => $error && css`
	visibility: visible;
	`}
`

export const Buttons = styled.div`
	display: grid;
	grid-template-columns: 160px 160px;
	justify-content: space-evenly;

	@media (max-width: ${({ theme }) => theme.breakpoints.mediumMobile}px) {
		grid-template-columns: 120px 120px;
	}
	@media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}px) {
		grid-template-columns: 100px 100px;
	}
`

export const Button = styled.button`
	margin-top: 20px;
	padding: 8px;
	border-radius: 8px;
	border: 1px solid ${({ theme }) => theme.colors.buttonsBorderColor};
	cursor: pointer;
	transition: 0.3s;

	&:hover {
	background-color: ${({ theme }) => theme.colors.buttonsHoverColor};
	color: ${({ theme }) => theme.colors.secondColor};
}

@media (max-width: ${({ theme }) => theme.breakpoints.mediumMobile}px) {
		margin-top: 20px;
}

@media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}px) {
		font-size: 14px;
}
`