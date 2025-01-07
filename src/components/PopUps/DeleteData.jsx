import React from "react";
import ReactDOM from "react-dom";
import { Alert } from "../../assets/icons";

const DeleteData = ({ onConfirm, onCancel, isExiting }) => {
    return ReactDOM.createPortal(
        <div className={`pop-up delete ${isExiting ? "hide" : "show"}`}>
            <div>
                <div>
                    <img src={Alert} alt="" />
                    <h1>Are You Sure?</h1>
                    <p>You won't be able to reverse this</p>
                    <div className="actions">
                        <button onClick={onConfirm} className="confirm-button">
                            Yes, Delete it!
                        </button>
                        <button onClick={onCancel} className="cancel-button">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.body // Attach the pop-up to the body
    );
};

export default DeleteData;
