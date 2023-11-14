import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
	box-sizing: border-box;
}

*,
::after,
::before {
	box-sizing: inherit;
}

body {
	margin: 0 auto;
	max-width: 1000px;
	height: 100vh;
	font-family: "Lato", sans-serif;
	background-image: radial-gradient(
			circle,
			rgba(0, 0, 0, 0.9) 0%,
			rgba(0, 0, 0, 0.8) 50%,
			rgba(0, 10, 20, 0.5) 100%
		),
		url("https://cdn.pixabay.com/photo/2014/10/23/10/10/dollars-499481_1280.jpg");
	background-size: cover;
}
`