import { About, Cart, Checkout, Error, HomeLayout, Landing, Login, Orders, Products, Register, SingleProduct } from "./pages";
const App = () => {

  return(
    <div>
      <h1 className="text-5xl font-bold">Hello World</h1>
      <button
  className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
  Button
</button>
<About />
<Cart />
    </div>
  )
}
export default App;