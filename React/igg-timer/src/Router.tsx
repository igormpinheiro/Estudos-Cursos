import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/index.tsx'
import { History } from './pages/History.tsx'
import { Index } from './layouts/DefaultLayout/Index.tsx'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Index />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
