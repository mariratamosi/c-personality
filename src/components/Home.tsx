import "../styles/components/home.scss"

function Home() {
  return (
    <div className="home pt-page">
      <div className="hero">
        <div className="hero-text">
          <h1>“It’s so incredible to finally be understood.”</h1>
          <p>
            Take our Personality Test and get a “freakishly accurate”
            description of who you are and why you do things the way you do.
          </p>
        </div>
        <div className="hero-action">
          <a href="/take-test" className="cp-btn cp-x-large-btn">
            Take the test
          </a>
          <div className="btn-sub-text">Only takes 10 minutes</div>
        </div>
      </div>
    </div>
  )
}

export default Home
