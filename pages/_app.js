// import "../dist/output.css";
import "../styles/global.css";
import MainContainer from "../components/MainContainer";

export default function App({Component, pageProps}) {
    return (
        <MainContainer>
            <Component {...pageProps} />
        </MainContainer>
    );
}