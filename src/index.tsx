import App from "./App";
import { createRoot } from 'react-dom/client';
import { GlobalStyle } from "./styles/global";

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <>
    <App />
    <GlobalStyle />
  </>
);
