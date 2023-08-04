import { useRouter } from "next/router";

const Orders = () => {
  const { pathname, route } = useRouter();

  console.log("pathname:", pathname);
  console.log("route:", route);
  return (
    <ul>
      <li>Order-1</li>
      <li>Order-2</li>
      <li>Order-3</li>
    </ul>
  )
}
export default Orders;