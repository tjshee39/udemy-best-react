import { Outlet, useNavigation } from 'react-router-dom'

import MainNavigation from '../components/MainNavigation'

const Root = () => {

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Root