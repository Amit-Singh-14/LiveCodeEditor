import CodeMirror from "codemirror";
import React, { useEffect, useRef } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";

function Editor() {
  const editorRef = useRef(null);
  const textAeraRef = useRef(null);
  useEffect(() => {
    if (editorRef.current) {
      return;
    }
    editorRef.current = CodeMirror.fromTextArea(document.getElementById("realtimeEditor"), {
      mode: { name: "javascript" },
      theme: "dracula",
      autoCloseTags: true,
      autoCloseBrackets: true,
      lineNumbers: true,
    });
  }, []);

  return <textarea ref={textAeraRef} id="realtimeEditor"></textarea>;
}

export default Editor;
