import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { Notifications } from "@mantine/notifications";

import { CustomMantineProvider, CustomModalsProvider } from "@core/providers";
import { RouteManager } from "@routes";
import { persistor, store } from "@store/manager";
import { modals } from "@/modals";
import { theme } from "@/theme";

const App = () => {
	return (
		<Provider store={store}>
			<HashRouter>
				<PersistGate persistor={persistor}>
					<CustomMantineProvider theme={theme}>
						<CustomModalsProvider modals={modals}>
							<Notifications position="top-right" zIndex={9999} />
							<RouteManager />
						</CustomModalsProvider>
					</CustomMantineProvider>
				</PersistGate>
			</HashRouter>
		</Provider>
	);
};

export default App;
