import { FaCartArrowDown, } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../store'
import { useEffect, useState } from 'react';
import { setFilterList } from '../store/menuSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBowlFood} from 'react-icons/fa6';
import { RiDrinksFill } from 'react-icons/ri';
import { MdOutlineDinnerDining } from 'react-icons/md';
import { GiFoodTruck } from 'react-icons/gi';
import { IoHomeOutline } from 'react-icons/io5';

function Header() {
  const { menuList } = useSelector((state: AppState) => state.menu);
  const { cartList } = useSelector((state: AppState) => state.cart);
  const cartItems = cartList.reduce((total, item) => total + item.quantity, 0);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const filterList = menuList.filter(i => i.title.toLowerCase().includes(searchText.toLowerCase()));
    dispatch(setFilterList(filterList));
  }, [searchText])

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const filterByCategory = (categoryName: string) => {
    const filterList = menuList.filter(i => i.category === categoryName);
    dispatch(setFilterList(filterList));

    if (location.pathname !== '/') navigate('/');
  }

  const handleShowAllMenu = () => {
    dispatch(setFilterList(menuList));

    if (location.pathname !== '/') navigate('/');
  }
  return (
    <div className='sticky top-0 w-full  shadow shadow-gray-400 border border-gray-400 bg-white bg-opacity-75 p-2 sm:px-10 sm:py-3 flex flex-col md:flex-row justify-between items-center  rounded-b-lg'>
      <div className='w-full md:w-fit flex items-center justify-between gap-2'>
      <div className="flex items-center space-x-2">
          <h1 className="text-yellow-300 font-serif text-3xl">MT</h1>
         <h2 className='font-mono'>foodbar</h2>
        </div>
        <div className="relative w-full max-w-[500px]">
        <input
          type="text"
          placeholder='Search...'
          className='bg-[#f2f3f5] shadow shadow-gray-400 border border-gray-400 px-4 py-3 size-2 rounded-[30px] w-full'
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
        </div>
      </div>

      <div className="w-full md:w-fit flex  items-center justify-between md:justify-start gap-2">
        <button onClick={handleShowAllMenu} className='categoryBtn'><IoHomeOutline  size={20} color='black'/>
        </button>
        <button onClick={() => filterByCategory("Breakfast")} className='categoryBtn'><FaBowlFood size={20} color='yellow'/></button>
        <button onClick={() => filterByCategory("Lunch")} className='categoryBtn'><GiFoodTruck size={20} color='white'/></button>
        <button onClick={() => filterByCategory("Dinner")} className='categoryBtn'><MdOutlineDinnerDining size={20}  color='red'/></button>
        <button onClick={() => filterByCategory("Drink")} className='categoryBtn'><RiDrinksFill size={20} color='gray' /></button>

        <button onClick={() => navigate('/checkout')} className='bg-gray-300 md:ml-2  shadow shadow-gray-400 border border-gray-400 font-bold p-2 rounded-full relative flex items-center justify-center'>
          <FaCartArrowDown size={20} />
          <p className='absolute bg-red-600 text-white font-semibold text-sm -top-2 -right-2 w-5 h-5 rounded-full'>
            {cartItems}
          </p>
        </button>

      </div>
    </div>
  )
}

export default Header