import React, { useState } from "react";
import Client from "../components/Client";
import Editor from "../components/Editor";

function EditorPage() {
  const [clients, setClients] = useState([
    {
      socketId: 1,
      username: "xyz abc",
    },
    {
      socketId: 2,
      username: "abc xyz",
    },
  ]);

  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <h2>Code Editor</h2>
          </div>
          <h3>Connected</h3>
          <div className="clientsList">
            {clients.map((client) => (
              <Client key={client.socketId} username={client.username} />
            ))}
          </div>
        </div>
        <button className="btn copyBtn">Copy ROOM ID</button>
        <button className="btn leaveBtn">Leave</button>
      </div>
      <div className="editorWrap">
        <Editor />
      </div>
    </div>
  );
}

export default EditorPage;
