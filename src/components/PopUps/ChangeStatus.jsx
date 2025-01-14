import React, { useState, forwardRef, useImperativeHandle } from "react";
import ReactDOM from "react-dom";
import check from "../../assets/icons/check.png"; // Adjust as needed
import x from "../../assets/icons/x.png"; // Adjust as needed

const ChangeStatus = forwardRef((props, ref) => {
  const [statusMessages, setStatusMessages] = useState([]);

  useImperativeHandle(ref, () => ({
    addStatusMessage(name, status) {
      const id = Date.now();
      const newMessage = { id, name, status, animating: "enter" };
      setStatusMessages((prev) => [...prev, newMessage]);

      // Start exit animation after 5 seconds
      setTimeout(() => {
        setStatusMessages((prev) =>
          prev.map((msg) =>
            msg.id === id ? { ...msg, animating: "exit" } : msg
          )
        );

        // Remove the popup after the exit animation (0.5s)
        setTimeout(() => {
          setStatusMessages((prev) => prev.filter((msg) => msg.id !== id));
        }, 500);
      }, 4990); // Leave 500ms for the exit animation
    },
  }));

  return ReactDOM.createPortal(
    <div className="status-container">
      {statusMessages.map((message, index) => (
        <div
          key={message.id}
          className={`status-popup shadow f-center ${
            message.status === "Active" ? "active" : "inactive"
          } animating-${message.animating}`}
          style={{
            transform: `translateY(-${index * 5}px)`,
          }}
        >
          <div className="progress-bar"></div>
          <div className="f-center message-container">
            {(message.status === "Active" || message.status === "active") && (
              <img src={check} alt="check mark" />
            )}
            {(message.status === "Inactive" || message.status === "inactive") && (
              <img src={x} alt="x mark" />
            )}
            <p>
              You changed <strong>{message.name}</strong> to{" "}
              <strong>{message.status === "Active" ? "Active" : "Inactive"}</strong>.
            </p>
          </div>
        </div>
      ))}
    </div>,
    document.body
  );
});

export default ChangeStatus;
