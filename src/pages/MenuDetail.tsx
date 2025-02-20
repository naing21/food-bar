import { useSelector } from "react-redux"
import { AppState } from "../store"
import { Navigate, useNavigate } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
import MenuCard from "../components/MenuCard";

function MenuDetail() {
  const { menuDetail } = useSelector((state: AppState) => state.menu);
  const navigate = useNavigate();

  if (menuDetail) {
    return (
      <div className="w-full flex flex-col  md:flex-row gap-4 relative pt-10">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-0  shadow shadow-gray-400 border border-gray-400 left-0 py-1 px-4 bg-yellow-500 rounded-lg"
        >
          <TbArrowBackUp size={25} color="white"/>
        </button>

        <div className="w-full shadow shadow-gray-400 border rounded-lg border-gray-400 md:1/2 lg:w-1/3">
         <MenuCard menu={menuDetail} />
        </div>

        <div className="w-full p-2 shadow rounded-lg shadow-gray-400 md:1/2 lg:w-2/3 ">
          <div>
            <span
            className="font-extrabold "
            >Description </span> 
            <br />
            <br />
            <p className="text-lg font-mono font-extralight">
            {menuDetail.description}
            </p>
          </div>
        </div>
      </div>
    )
  } else {
  return <Navigate to={'/'} replace />
}
}

export default MenuDetail