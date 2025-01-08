import React, { useState, forwardRef, useImperativeHandle } from "react";
import ReactDOM from "react-dom";

const ChangeStatus = forwardRef((props, ref) => {
  const [statusMessages, setStatusMessages] = useState([]);

  useImperativeHandle(ref, () => ({
    addStatusMessage(name, status) {
      const newMessage = { id: Date.now(), name, status };
      setStatusMessages((prev) => [...prev, newMessage]);

      setTimeout(() => {
        setStatusMessages((prev) =>
          prev.filter((msg) => msg.id !== newMessage.id)
        );
      }, 5000);
    },
  }));

  return ReactDOM.createPortal(
    <div className="status-container">
      {statusMessages.map((message, index) => (
        <div
          key={message.id}
          className="status-popup"
          style={{
            transform: `translateY(-${index * 5}px)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          <p>
            You changed <strong>{message.name}</strong> to{" "}
            <strong>{message.status}</strong>.
          </p>
        </div>
      ))}
    </div>,
    document.body
  );
});

export default ChangeStatus;
