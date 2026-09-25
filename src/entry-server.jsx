import { renderToString } from 'react-dom/server';
import App from './App.jsx';

export function render(data) {
  const html = renderToString(<App data={data} />);
  return { html };
}
