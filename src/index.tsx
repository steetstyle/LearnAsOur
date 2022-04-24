import * as ReactDOMClient from 'react-dom/client';
import { App } from './App';

const container = document.getElementById('root');
if(! container) throw new Error('rootContainerNotFound')

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(<App />);