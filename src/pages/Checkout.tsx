import { useDispatch, useSelector } from "react-redux"
import { AppState } from "../store"
import { decreaseQty, increaseQty, setCartList } from "../store/cartSlice";
import { BiMinus, BiPlus } from "react-icons/bi";
import { CgFeed } from "react-icons/cg";


function Checkout() {
  const { cartList } = useSelector((state: AppState) => state.cart);
  const dispatch = useDispatch();

   const totalPrice = cartList?.length && cartList.reduce(
    (total, item) => total + item.price * item.quantity, 0
   )

   const handlePayment = () => {
    alert("Are you sure to order?")
   }

  return (
    <div className="w-full h-full">
      <div className="mb-2 w-fit mx-auto flex items-center gap-4">
        <h1 className="text-2xl font-bold  shadow rounded-lg shadow-gray-400 p-2">
          Checkout
        </h1>
        <button
        onClick={() => dispatch(setCartList([]))}
        className="p-2 rounded-lg shadow shadow-gray-400 border border-gray-400 bg-blue-500 font-semibold"
        >
          Clear cart
        </button>
      </div>

      {cartList.length === 0 ? (
        <p className="flex justify-center"><CgFeed size={500} color="gray" /></p>
      ) : (

      <div className="w-full lg:w-[70%] mx-auto">
        <ul>
          {cartList.map(i =>  (
          <li key={i.id} className="flex justify-between items-center mb-2 border-b border-gray-700 pb-1">
            <div className="flex items-center">
              <img src={i.image} alt="cart"
              className="w-16 h-16 object-cover mr-4" />
              <div>
                <h1 className="text-lg font-semibold"> {i.title} </h1>
                <div className="flex items-center ">
                  <button
                  onClick={() => dispatch(decreaseQty(i.id))}
                  className="bg-gray-300 shadow shadow-gray-400 border border-gray-400 text-gray-800 p-1 rounded-md"
                  >
                    <BiMinus size={20} />
                  </button>
                  <p className="w-8 text-center font-bold">
                    {i.quantity}
                  </p>
                  <button
                  onClick={() => dispatch(increaseQty(i.id))}
                  className="bg-gray-300 shadow shadow-gray-400 border border-gray-400 text-gray-800 p-1 rounded-md"
                  >
                    <BiPlus size={20} />
                  </button>
                </div>
                <p className="text-gray-700">Price: ${i.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold"></p>
            </div>
          </li>
))}
        </ul>
        <div className="mt-4 flex justify-end items-center">
          <h3 className="text-xl font-bold">
            Total: ${totalPrice.toFixed(2)}
          </h3>
        </div>
        <div className="mt-6 flex justify-end">
          <button
          onClick={handlePayment}
          className="bg-blue-500 shadow shadow-gray-400 border border-gray-400 text-white px-4 py-2 rounded-lg font-bold">
            Proceed to Payment & Order
          </button>
        </div>
      </div>
)}
    </div>
  )
}

export default Checkout