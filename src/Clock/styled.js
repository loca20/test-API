import styled from 'styled-components';

export const StyledClock = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 0;
	font-family: monospace;
	color: ${({ theme }) => theme.colors.clockColor};

@media (max-width: ${({ theme }) => theme.breakpoints.mediumMobile}px) {
		justify-content: center;
		font-size: 12px;
}

@media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}px) {
	font-size: 10px;
}
`