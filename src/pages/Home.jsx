import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function Home() {
  const [roomId, setRoomId] = useState("");
  const [username, setUserName] = useState("");

  const navigate = useNavigate();

  const createNewRoom = (e) => {
    e.preventDefault();

    const id = uuidv4();
    setRoomId(id);
    toast.success("Created a new room");
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("RoomId and username is required.");
      return;
    }

    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });
  };

  const handleInputEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };

  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <h1 className="homePageLogo">CODE EDITOR</h1>
        <h4 className="mainLabel">Paste invitation ROOM ID</h4>
        <div className="inputGroup">
          <input
            type="text"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            className="inputBox"
            placeholder="ROOM ID"
          />
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            className="inputBox"
            placeholder="USERNAME"
            onKeyDown={handleInputEnter}
          />
          <button className="btn joinBtn" onClick={joinRoom}>
            Join
          </button>
          <span className="createInfo">
            If you don't have an invite then create &nbsp;
            <a href="" className="createNewBtn" onClick={createNewRoom}>
              new room
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
