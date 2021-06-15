import {createGlobalStyle} from 'styled-components';
export const GlobalStyles = createGlobalStyle`

  *,
  *::after,
  *::before {
    box-sizing: border-box;
}

    body {
        background: ${({theme}) => theme.body};
        color: ${({theme}) => theme.text};
		transition: all 0.5s linear;
        height: 100vh;
        margin: 0;
    }

    * {
	font-family: 'Poppins';
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	outline: none;
	
}

html {
	scroll-behavior: smooth;
	
}

a {
	color: black;
	text-decoration: none;
}


code {
	font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
		monospace;
}

@media (max-width: 319px) {
	html {
		display: none;
	}
}

@media (min-width: 320px) and (max-width: 719px) {
	html {
		font-size: 12px;
	}
}

@media (min-width: 720px) and (max-width: 1126px) {
	html {
		font-size: 15px;
	}
}

@media (min-width: 1127px) and (max-width: 1440px) {
	html {
		font-size: 18px;
	}
}

@media (min-width: 1441px) {
	html {
		font-size: 18px;
	}
}


`;
