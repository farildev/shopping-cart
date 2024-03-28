import ReactDOM from 'react-dom/client'
import '@/assets/styles/globals.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
)
