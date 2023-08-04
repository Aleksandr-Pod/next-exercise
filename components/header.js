import { Section, List } from "./header.styled";
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
        <List>
          <Link href='infoPage'>Info page</Link>
          <Link href='details1'>Details - 1</Link>
          <Link href='details2'>Details - 2</Link>
        </List>
      </nav>
    </Section>
  )
}
export default Header;