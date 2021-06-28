import App from "next/app";
import type { AppProps, AppContext } from "next/app";
import { Provider } from "react-redux";
import { store } from "../@redux/store";
import Loading from "../components/common/Loading";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Loading />
    </Provider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp;
