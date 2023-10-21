import '@mantine/core/styles.css';
import './styles/index.css';

// Libraries
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

// Components
import { router } from './routes/_router.tsx';
import MantineClientProvider from './components/providers/MantineClientProvider.tsx';
import LoadSpinner from './components/ui/animations/loading/LoadSpinner.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<MantineClientProvider>
			<Suspense fallback={<LoadSpinner />}>
				<RouterProvider router={router} />
			</Suspense>
		</MantineClientProvider>
	</React.StrictMode>
);
