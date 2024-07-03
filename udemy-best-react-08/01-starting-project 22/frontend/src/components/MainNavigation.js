import { NavLink, Form, useRouteLoaderData } from 'react-router-dom'

import classes from '../css/MainNavigation.module.css'
import NewsletterSignup from './NewsletterSignup'

const MainNavigation = () => {
  // 'root' 라우트의 로더에서 로드된 데이터에 접근
  const token = useRouteLoaderData('root')

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to='/'
              className={({isActive}) =>
                isActive ? classes.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/events'
              className={({isActive}) =>
                isActive ? classes.active : undefined
              }
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/newsletter"
              className={({isActive}) =>
                isActive ? classes.active : undefined
              }
            >
              Newsletter
            </NavLink>
          </li>
          {!token &&
            <li>
              <NavLink
                to="/auth?mode=login"
                className={({isActive}) =>
                  isActive ? classes.active : undefined
                }
              >
                Authentication
              </NavLink>
            </li>
          }
          {token &&
            <li>
              <Form action="/logout" method="post">
                <button>로그아웃</button>
              </Form>
            </li>
          }
        </ul>
      </nav>
      <NewsletterSignup/>
    </header>
  )
}

export default MainNavigation
