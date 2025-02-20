import { useDispatch, useSelector } from "react-redux"
import { AppState } from "../store"
import { useEffect } from "react";
import { setFilterList, setIsFecthingMenu, setMenuList } from "../store/menuSlice";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";


function AppStarter() {

  const { isFetchingMenu } = useSelector((state:AppState) => state.menu)
  const dispatch = useDispatch();

  useEffect(() => {
    const startUp = async () => {
      dispatch(setIsFecthingMenu(true));
      try {
        const res = await fetch('/data.json');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        const data = await res.json();
        dispatch(setMenuList(data?.menu));
        dispatch(setFilterList(data?.menu));
    } catch (error) {
      console.log("Error fetching the data.json", error)
    } finally {
      dispatch(setIsFecthingMenu(false));
    }
    }
    startUp();
  }, [])
  return (
   <>
   {isFetchingMenu ? (
    <>
    <h1>Loading...</h1>
    </>
   ) : (
    <div className="w-full min-h-screen bg-neutral-100 relative">
      <Header />
    
    <div className="w-full h-full px-10 py-4">
      < Outlet />
    </div>
    </div>

   )}
   </>
  )
}

export default AppStarter