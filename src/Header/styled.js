import styled from "styled-components";

export const StyledHeader = styled.header`
	padding-top: 60px;

	@media (max-width: ${({ theme }) => theme.breakpoints.mediumMobile}px) {
		padding-top: 10px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}px) {
		padding-top: 0;
	}
`;

export const Title = styled.h1`
	display: grid;
	justify-items: center;
	font-size: 50px;
	color: ${({ theme }) => theme.colors.secondColor};
	text-shadow: 2px 2px 5px ${({ theme }) => theme.colors.shadowColor};

	@media (max-width: ${({ theme }) => theme.breakpoints.mediumMobile}px) {
		font-size: 44px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}px) {
		margin: 18px;
		font-size: 32px;
	}
`;
