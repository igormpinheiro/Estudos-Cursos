import { Header } from '../../components/Header/Index.tsx'
import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './Style.ts'

export function Index() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
