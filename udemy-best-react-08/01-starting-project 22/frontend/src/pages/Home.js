import PageContent from '../components/PageContent'

const Home = () => {
  return (
    <>
      <PageContent title="환영합니다"/>
      <img
        className="home-img"
        src={"https://media1.tenor.com/m/wOlC5m7NikkAAAAd/" +
             "%EC%A0%9C%EB%A6%AC%EC%9D%B8%EC%82%AC-%EC%A1%B4%EC%A4%91.gif"}
      />
    </>
  )
}

export default Home