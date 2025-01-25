import React, { useState, forwardRef, useImperativeHandle } from "react";
import ReactDOM from "react-dom";
import check from "../../assets/icons/check.png"; // Adjust as needed
import x from "../../assets/icons/x.png"; // Adjust as needed

const ChangeStatus = forwardRef((props, ref) => {
  const [statusMessages, setStatusMessages] = useState([]);
  const [consentMessages, setConsentMessages] = useState([]);
  const [SDFMessage, setSDFMessage] = useState([]);

  useImperativeHandle(ref, () => ({
    addStatusMessage(name, status) {
      const id = Date.now();
      const newMessage = { id, name, status, animating: "enter" };
      setStatusMessages((prev) => [...prev, newMessage]);
  
      // Start exit animation
      setTimeout(() => {
        setStatusMessages((prev) =>
          prev.map((msg) => (msg.id === id ? { ...msg, animating: "exit" } : msg))
        );
  
        setTimeout(() => {
          setStatusMessages((prev) => prev.filter((msg) => msg.id !== id));
        }, 500);
      }, 4990);
    },
    addConsentMessage(name, consentStatus) {
      const id = Date.now();
      const newMessage = { id, name, consentStatus, animating: "enter" };
      setConsentMessages((prev) => [...prev, newMessage]);
  
      // Start exit animation
      setTimeout(() => {
        setConsentMessages((prev) =>
          prev.map((msg) =>
            msg.id === id ? { ...msg, animating: "exit" } : msg
          )
        );
  
        setTimeout(() => {
          setConsentMessages((prev) =>
            prev.filter((msg) => msg.id !== id)
          );
        }, 500);
      }, 4990);
    },
    addSDFMessage(name, sdfStatus) {
      const id = Date.now();
      const newMessage = { id, name, sdfStatus, animating: "enter" };
      setSDFMessage((prev) => [...prev, newMessage]);
  
      // Start exit animation
      setTimeout(() => {
        setSDFMessage((prev) =>
          prev.map((msg) =>
            msg.id === id ? { ...msg, animating: "exit" } : msg
          )
        );
  
        setTimeout(() => {
          setSDFMessage((prev) => prev.filter((msg) => msg.id !== id));
        }, 500);
      }, 4990);
    },
  }));

  return ReactDOM.createPortal(
    <div className="status-container">
      {statusMessages.map((message, index) => (
        <div
          key={message.id}
          className={`status_status status-popup shadow f-center ${
            message.status === "Active" ? "active" : "inactive"
          } animating-${message.animating}`}
          style={{
            transform: `translateY(-${index + 70}px)`,
            transition: `all 4000ms linear`,
          }}
        >
          <div className="progress-bar"></div>
          <div className="f-center message-container">
            {(message.status === "Active" || message.status === true) && (
              <img src={check} alt="check mark" />
            )}
            {(message.status === "Inactive" || message.status === false) && (
              <img src={x} alt="x mark" />
            )}
            <p>
              You changed <strong>{message.name}</strong> to{" "}
              <strong>{message.status === "Active" ? "Active" : "Inactive"}</strong>.
            </p>
          </div>
        </div>
      ))}

      {consentMessages.map((message, index) => (
        <div
          key={message.id}
          className={`status_consent status-popup shadow f-center ${
            message.consentStatus === "Consented" ? "active" : "inactive"
          } animating-${message.animating}`}
          style={{
            transform: `translateY(-${index + 70}px)`,
            transition: `all 4000ms linear`,
          }}
        >
          <div className="progress-bar"></div>
          <div className="f-center message-container">
            {(message.consentStatus === "Consented") && (
              <img src={check} alt="check mark" />
            )}
            {(message.consentStatus === "Not Consented") && (
              <img src={x} alt="x mark" />
            )}
            <p>
              You updated consent for <strong>{message.name}</strong> to{" "}
              <strong>{message.consentStatus}</strong>.
            </p>
          </div>
        </div>
      ))}

      {SDFMessage.map((message, index) => (
        <div
          key={message.id}
          className={`status_sdf status-popup shadow f-center ${
            message.sdfStatus === "SDF" ? "active" : "inactive"
          } animating-${message.animating}`}
          style={{
            transform: `translateY(-${index + 70}px)`,
            transition: `all 4000ms linear`,
          }}
        >
          <div className="progress-bar"></div>
          <div className="f-center message-container">
            {(message.sdfStatus === "SDF") && (
              <img src={check} alt="check mark" />
            )}
            {(message.sdfStatus === "Not SDF") && (
              <img src={x} alt="x mark" />
            )}
            <p>
              You updated SDF for <strong>{message.name}</strong> to{" "}
              <strong>{message.sdfStatus}</strong>.
            </p>
          </div>
        </div>
      ))}
    </div>,
    document.body
  );
});

export default ChangeStatus;
