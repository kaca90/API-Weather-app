import { ReactQueryConfigProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';

const ReactQueryProvider = ({ children }) => {
	return (
		<ReactQueryConfigProvider>
			{children}
			{process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
		</ReactQueryConfigProvider>
	);
};

export default ReactQueryProvider;