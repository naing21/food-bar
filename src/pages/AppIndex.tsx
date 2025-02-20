
import { useSelector } from 'react-redux'
import { AppState } from '../store'
import MenuCard from '../components/MenuCard';

function AppIndex() {
  const { filterList } = useSelector((state: AppState) => state.menu);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {filterList.map(i => (
        <MenuCard key={i.id} menu={i} />
      ))}
    </div>
  )
}

export default AppIndex