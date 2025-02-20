
import { HashRouter, Route, Routes, } from 'react-router-dom'
import { AppIndex, AppStarter, Checkout, MenuDetail } from './pages'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<AppStarter />} >
          <Route path="" index={true} element={<AppIndex />} />
          <Route path="details" element={<MenuDetail />} />
          <Route path="checkout" element={<Checkout />} />
          {/* <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} /> */}
          
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App