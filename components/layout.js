import Header from "./header";
import Footer from "./footer";

const LayoutMain = ({children}) => (
	<>
		<Header/>
			{children}
		<Footer/>
	</>
)
export default LayoutMain;