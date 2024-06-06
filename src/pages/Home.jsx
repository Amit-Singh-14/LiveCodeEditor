import React from "react";

function Home() {
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <h1 className="homePageLogo">CODE EDITOR</h1>
        <h4 className="mainLabel">Paste invitation ROOM ID</h4>
        <div className="inputGroup">
          <input type="text" className="inputBox" placeholder="ROOM ID" />
          <input type="text" className="inputBox" placeholder="USERNAME" />
          <button className="btn joinBtn">Join</button>
          <span className="createInfo">
            If you don't have an invite then create &nbsp;
            <a href="" className="createNewBtn">
              new room
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
