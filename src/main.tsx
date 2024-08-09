import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@/scss/index.scss';
import MainWrapper from './MainWrapper.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<MainWrapper>
		<App />
	</MainWrapper>
);
