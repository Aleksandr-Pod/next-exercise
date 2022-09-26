import { Section } from "./header.styled";
import Link from "next/link";

const Header = () => (
    <Section>
        <Link href='/'><h2>Logo</h2></Link>
        <nav>
            <ul>
                <Link href='infoPage'>Info page</Link>
                <Link href='details1'>Details - 1</Link>
                <Link href='details2'>Details - 2</Link>
            </ul>
        </nav>
    </Section>
)
export default Header;