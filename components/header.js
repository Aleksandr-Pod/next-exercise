import { Section, NavButton } from "./header.styled";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  console.log("useRouter", router);
  //   console.log("pathName", pathname);
  return (
    <Section>
      <Link href='/' >Logo</Link>
      <nav>
        <ul>
          <NavButton href='/infoPage'>Info page</NavButton>
          <NavButton href='/details1'>Details - 1</NavButton>
          <NavButton href='/details2'>Details - 2</NavButton>
        </ul>
      </nav>
    </Section>
  )
}
export default Header;