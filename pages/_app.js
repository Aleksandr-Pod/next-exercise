
import LayoutMain from '../components/layout';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <LayoutMain>
    <Component {...pageProps} />
  </LayoutMain>
)

export default MyApp
