import { NavLink, Form } from 'react-router-dom'

import classes from '../css/MainNavigation.module.css'
import NewsletterSignup from './NewsletterSignup'

const MainNavigation = () => {
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
          <li>
            <Form action="/logout" method="post">
              <button>로그아웃</button>
            </Form>
          </li>
        </ul>
      </nav>
      <NewsletterSignup/>
    </header>
  )
}

export default MainNavigation
