import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { Login } from './pages/login'
import { Document } from './pages/Documents'
import { PrivateOutlet } from './components/PrivateRoute/PrivateOutlet'
import { ListDocuments } from './pages/ListDocuments'
import { SuccessDocument } from './pages/SuccessDocument'
import { NewDocument } from './pages/NewDocument'
import { UpdateDocument } from './pages/UpdateDocument'
import { ExtractDocument } from './pages/ExtractDocument'
import { TaxesOnDocument } from './pages/Taxes'


export const MainRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/financial" element={<PrivateOutlet />} >
        <Route path="home" element={<Home />} />
        <Route path="document" element={<Document />} >
          <Route path="new" element={<NewDocument />} />
          <Route path="success/:id" element={<SuccessDocument />} />
          <Route path="update/:id" element={<UpdateDocument />} />
          <Route path="list" element={<ListDocuments />} />
          <Route path="taxes/:id" element={<TaxesOnDocument />} />
          <Route path="extract" element={<ExtractDocument />} />
        </Route>
      </Route>

    </Routes>
  )
}