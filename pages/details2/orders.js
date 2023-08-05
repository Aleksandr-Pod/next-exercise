// import { useRouter } from "next/router";
import { List } from "../../styles/orders.styled";

const Orders = () => {
  // const { pathname, route } = useRouter();

  // console.log("pathname:", pathname);
  // console.log("route:", route);
  return (
    <List>
      <li>Order-1</li>
      <li>Order-2</li>
      <li>Order-3</li>
    </List>
  )
}
export default Orders;