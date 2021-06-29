import App from "next/app";
import type { AppProps, AppContext } from "next/app";
import { Provider } from "react-redux";
import { store } from "../@redux/store";
import { LoadingProvider } from "../components/providers/LoadingProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LoadingProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </LoadingProvider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp;
