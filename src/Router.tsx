import { Routes, Route } from 'react-router-dom'
import { Home } from "./pages/Home"
import { Order } from "./pages/Order"
import { Address } from './pages/Address'
import { Complete } from './pages/Complete'
import { DefaultLayout } from './layouts/DefaultLayout'



export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/Order' element={<Order />} />
                <Route path='/Order/Address' element={<Address />} />
                <Route path='/Order/Address/Complete' element={<Complete />} />
            </Route>
        </Routes>
    )
}

