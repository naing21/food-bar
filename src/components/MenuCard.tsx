import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux'
import { IMenu } from '../type'
import { useNavigate } from 'react-router-dom';
import { setMenuDetail } from '../store/menuSlice';
import { addToCart } from '../store/cartSlice';
import { FaCartPlus } from 'react-icons/fa';

function MenuCard({ menu} : { menu: IMenu}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoToDetails = () => {
    dispatch(setMenuDetail(menu));
    navigate('/details')
  }

  const handleAddToCart = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(addToCart(menu));
    
  }
  return (
    <div onClick={handleGoToDetails} className='bg-white shadow-lg rounded-lg  shadow-gray-400 border-lg border-gray-400 overflow-hidden cursor-pointer'>
      <img src={menu.image} alt={menu.title}
      className='w-full h-52 object-cover  rounded-t-lg'
       />

       <div className="flex items-center justify-between p-2">
        <div>
          <p className='text-lg font-medium'>{menu.title}</p>
          <p className='font-medium text-yellow-500'>Price - ${menu.price}</p>
        </div>

        <button
        onClick={handleAddToCart}
        className='p-1 rounded-full shadow shadow-gray-400 border border-gray-400'
        >
        <FaCartPlus size={20} color='blue'/>
        </button>
       </div>
    </div>
  )
}

export default MenuCard