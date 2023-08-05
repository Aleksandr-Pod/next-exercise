import Header from "./header";
import Footer from "./footer";
import StyledComponentsRegistry from '../lib/registry';

const LayoutMain = ({children}) => (
	<StyledComponentsRegistry>
		<>
			<Header/>
			{children}
			<Footer />
		</>
	</StyledComponentsRegistry>
)
export default LayoutMain;