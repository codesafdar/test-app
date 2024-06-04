import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Loading from '../components/common/loader/Loading'
const Dashboard = lazy(() => import('../pages/dashboard'))
const Library = lazy(() => import('../pages/library'))

const Routing = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route index element={<Library />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default Routing