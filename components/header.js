import { Section, NavButton } from "./header.styled";
import Link from "next/link";

const Header = () => (
    <Section>
        <Link href='/'><h2>Logo</h2></Link>
        <nav>
            <ul>
                <Link href='infoPage'><NavButton>Info page</NavButton></Link>
                <Link href='details1'><NavButton>Details - 1</NavButton></Link>
                <Link href='details2'><NavButton>Details - 2</NavButton></Link>
            </ul>
        </nav>
    </Section>
)
export default Header;