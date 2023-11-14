import styled, { css } from "styled-components";

export const ResultInfo = styled.div`
	position: relative;
	display: grid;
	justify-items: center;
	margin: -150px auto;
	padding: 50px 40px 0;
	max-width: 500px;
	border-radius: 20px;
	background: ${({ theme }) => theme.colors.resultBoardColor};
	box-shadow: 0 0 5px ${({ theme }) => theme.colors.shadowColor};
	transition: margin-top 0.5s;
	z-index: -1;

	@media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}px) {
		padding: 40px 20px 0;
	}

	${({ $showResult }) => $showResult && css`
			margin-top: 0;

			@media (max-width: ${({ theme }) => theme.breakpoints.mediumMobile}px) {
				margin-top: 0;
			}

			@media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}px) {
				margin-top: -12px;
			}
		`}
`;

export const Info = styled.p`
font-size: 12px;

@media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}px) {
		margin-top: 8px;
		font-size: 11px;
	}
`;

export const Calculation = styled(Info)`
	margin: 0;
	font-size: 40px;
	font-weight: bold;
	color: ${({ theme }) => theme.colors.secondColor};
	text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mediumMobile}px) {
		font-size: 28px;
	}

@media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}px) {
	margin-top: 8px;
		font-size: 22px;
	}
`;