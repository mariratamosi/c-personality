import logo from "../../assets/logo.svg"
import "../../styles/components/pageTop.scss"

function pageTop() {
  return (
    <>
      <div className="explanation">
        <div className="ex-text">Free Personality Test</div>
        <div className="ex-sub-text">
          Get closer to yourself by taking the test
        </div>
        <div className="ex-groups">
          <div className="ex-single">
            <div className="ex-single-icon">
              <img src={logo} alt="" />
            </div>
            <div className="ex-single-header">Complete the Test</div>
            <div className="ex-single-subheader">
              Be yourself and answer honestly to find out your personality type.
            </div>
          </div>
          <div className="ex-single">
            <div className="ex-single-icon">
              <img src={logo} alt="" />
            </div>
            <div className="ex-single-header">View Detailed Results</div>
            <div className="ex-single-subheader">
              Learn how your personality type influences many areas of your
              life.
            </div>
          </div>
          <div className="ex-single">
            <div className="ex-single-icon">
              <img src={logo} alt="" />
            </div>
            <div className="ex-single-header">Unlock Your Potential</div>
            <div className="ex-single-subheader">
              Grow into the person you want to be with your optional Premium
              Profile.
            </div>
          </div>
        </div>
      </div>
      <div className="ex-groups-tween"></div>
    </>
  )
}

export default pageTop
