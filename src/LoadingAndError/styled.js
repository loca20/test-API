import styled, { css } from "styled-components";

export const StyledForm = styled.form`
	padding: 6px 20px;

	@media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}px) {
		padding-top: 0;
	}
`;

export const Message = styled.p`
	margin-top: 50px;
	text-align: center;
	font-size: 20px;
	line-height: 1.5;

	${({ $loading }) => $loading && css`
			color: ${({ theme }) => theme.colors.clockColor};
		`};

	${({ $error }) => $error && css`
			color: ${({ theme }) => theme.colors.errorColor};
		`};

		@media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}px) {
			margin-top: 40px;
			font-size: 18px;
	}
`;