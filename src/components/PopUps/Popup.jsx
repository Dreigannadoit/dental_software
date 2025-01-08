import React, { useState } from "react";
import { Form } from "react-bootstrap";
import ReactDOM from "react-dom";

const Popup = ({
    type,
    title,
    message,
    icon,
    onConfirm,
    onCancel,
    confirmLabel,
    cancelLabel,
    isExiting,
    customClass,
    onFileChange
}) => {
    const renderPopup = () => {
        switch (type) {
            case "Inform":
                return ReactDOM.createPortal(
                    <Inform
                        title={title}
                        message={message}
                        icon={icon}
                        onConfirm={onConfirm}
                        onCancel={onCancel}
                        confirmLabel={confirmLabel}
                        cancelLabel={cancelLabel}
                        isExiting={isExiting}
                        customClass={customClass}
                    />,
                    document.body
                );

            case "Import":
                return ReactDOM.createPortal(
                    <Import
                        title={title}
                        message={message}
                        icon={icon}
                        onConfirm={onConfirm}
                        onCancel={onCancel}
                        confirmLabel={confirmLabel}
                        cancelLabel={cancelLabel}
                        isExiting={isExiting}
                        customClass={customClass}
                        onFileChange={onFileChange}
                    />,
                    document.body
                );
            default:
                console.error("Invalid type of Pop-up. No such Pop-up type exists");
                return null;
        };
    }

    return (
        <>
            {renderPopup()}
        </>
    )
};

const Inform = ({
    title,
    message,
    icon,
    onConfirm,
    onCancel,
    confirmLabel,
    cancelLabel,
    isExiting,
    customClass
}) => {
    return (
        <div className={`pop-up ${customClass} ${isExiting ? "" : "show"}`}>
            <div className="pop-up-content">
                <div>
                    {icon && <img src={icon} alt="Popup Icon" />}
                    <h1>{title}</h1>
                    <p>{message}</p>
                    <div className="actions">
                        <button onClick={onConfirm} className="confirm-button">
                            {confirmLabel}
                        </button>
                        <button onClick={onCancel} className="cancel-button">
                            {cancelLabel}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Import = ({
    title,
    message,
    icon,
    onConfirm,
    onCancel,
    confirmLabel,
    cancelLabel,
    isExiting,
    customClass,
    onFileChange,
}) => {
    const [fileName, setFileName] = useState("");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFileName(file ? file.name : ""); // Update the file name
        if (onFileChange) {
            onFileChange(event);
        }
    };

    return (
        <div className={`pop-up ${customClass} ${isExiting ? "" : "show"}`}>
            <div className="pop-up-content">
                <div>
                    {icon && <img src={icon} alt="Popup Icon" />}
                    <h1>{title}</h1>
                    <p>{message}</p>

                    {/* Custom File Input */}
                    <label htmlFor="file-input" className="file-input-label">
                        Choose File
                    </label>
                    <input
                        id="file-input"
                        type="file"
                        onChange={handleFileChange}
                    />
                    {fileName && (
                        <div className="file-input-preview">Selected: {fileName}</div>
                    )}

                    <div className="actions">
                        <button onClick={onConfirm} className="confirm-button">
                            {confirmLabel}
                        </button>
                        <button onClick={onCancel} className="cancel-button">
                            {cancelLabel}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Popup;
