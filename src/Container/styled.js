import styled from "styled-components";

export const Main = styled.main`
	margin: 50px auto;
	padding: 8px 28px;
	max-width: 600px;
	height: 380px;
	background-color: ${({ theme }) => theme.colors.containerColor};
	border-radius: 20px;
	box-shadow: 0 0 5px ${({ theme }) => theme.colors.shadowColor};
	z-index: 1;

	@media (max-width: ${({ theme }) => theme.breakpoints.iPad}px) {
		margin: 50px 20px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mediumMobile}px) {
		margin-top: 0;
		height: 460px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}px) {
		padding: 6px;
		height: 376px;
	}
`;
