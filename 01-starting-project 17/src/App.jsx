import Header from './components/Header.jsx'
import Signup from './components/SignUp.jsx'
import StateLogin from './components/StateLogin.jsx'
import Login from './components/Login.jsx'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <StateLogin />
      </main>
    </>
  );
}

export default App
