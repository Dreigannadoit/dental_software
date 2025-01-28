import React, { useState, useEffect } from 'react';
import usePopup from '../../hooks/usePopUp';
import Popup from '../PopUps/Popup';
import AnimatedButton from '../AnimatedButton';
import { Alert, Delete, File_Edit } from '../../assets/icons';
import { FormControl, TextField, Select as MuiSelect, MenuItem } from '@mui/material'
import ReactDOM from "react-dom";
import useAnimation from '../../hooks/useFormAnimate';


const Attachments = ({ id = null }) => {
  const [patientPhotoFile, setPatientPhotoFile] = useState(null);
  const [files, setFiles] = useState([]);
  const [editFile, setEditFile] = useState(null); // To store the file being edited
  const [editedFileName, setEditedFileName] = useState("");
  const [showEditPopup, setShowEditPopup] = useState(false) // Added to trigger the popup


  const handlePatientPhotoFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const fileURL = URL.createObjectURL(file);
      setPatientPhotoFile(fileURL);
      console.log(event.target.files[0])
    }

  }

  const handleFileAdd = (event) => {
    const newFiles = [...files];
    const fileInput = event.target;

    if (fileInput.files && fileInput.files.length > 0) {
      for (let i = 0; i < fileInput.files.length; i++) {
        const file = fileInput.files[i];
        const fileURL = URL.createObjectURL(file);

        const newFile = {
          name: file.name, // name
          filepath: fileURL, // URL of the file for display
          dateAdded: new Date().toLocaleDateString() //date the file was added

        };

        newFiles.push(newFile);
      }
    }

    setFiles(newFiles);
    fileInput.value = null;
  };

  const {
    isVisible: showDeletePopup,
    isExiting,
    popupData: selectedFile,
    openPopup: openDeletePopup,
    closePopup: closeDeletePopup,
  } = usePopup();

  const confirmDelete = () => {
    if (selectedFile) {
      setFiles(files.filter((file) => file !== selectedFile));
    }
    closeDeletePopup();
  };

  const handleEditClick = (file) => {
    setEditFile(file);
    setEditedFileName(file.name);
    setShowEditPopup(true)
  }

  const handleEditCancel = () => {
      setShowEditPopup(false);
      setEditFile(null);
    setEditedFileName("");
  }

  const handleEditSubmit = () => {
    if (editFile) {
      const updatedFiles = files.map(file => {
        if (file === editFile) {
          return { ...file, name: editedFileName };
        }
        return file;
      });
      setFiles(updatedFiles);
      setShowEditPopup(false);
      setEditFile(null);
      setEditedFileName("");
    }
  }


  return (
    <>
        {/* Edit Popup */}
        {showEditPopup && (
            <NameEdit
              file={editFile}
                editedFileName={editedFileName}
              setEditedFileName={setEditedFileName}
               exitUser={handleEditCancel}
                handleSubmit={handleEditSubmit}
             />
        )}


      {/* Delete Popup */}
      {showDeletePopup && (
        <Popup
          type="Inform"
          title="Are You Sure?"
          message={`You are about to delete ${selectedFile?.name}. This action cannot be undone.`}
          icon={Alert}
          onConfirm={confirmDelete}
          onCancel={closeDeletePopup}
          confirmLabel="Yes, Delete it!"
          cancelLabel="Cancel"
          isExiting={isExiting}
          customClass="delete-popup"
        />
      )}

      <div className="patient_image set_image_container">
        <h2>Add Files</h2>
        <div className="set_image">
          <label htmlFor="patient_files">Add Files</label>
          <input type="file" multiple onChange={handleFileAdd} />
        </div>
      </div>


      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date Added</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) => (
              <tr className="shadow" key={index}>
                <td><a href={file.filepath} target="_blank" rel="noopener noreferrer" >{file.name}</a> </td>
                <td>{file.dateAdded}</td>
                <td>
                  <div>
                    <AnimatedButton
                      type="button"
                      classLabel="edit_patient"
                      label="Edit"
                      icon={File_Edit}
                      backgroundColor="#1E8631"
                      method={() => handleEditClick(file)}
                    />
                    <AnimatedButton
                      type="button"
                      classLabel="delete_patient"
                      label="Delete"
                      icon={Delete}
                      backgroundColor="#FF1A1A"
                      method={() => openDeletePopup(file)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export const NameEdit = ({ exitUser, handleSubmit, file, editedFileName, setEditedFileName }) => {
    const { isVisible, isInitialized, triggerEnter, triggerExit } = useAnimation(500);

    useEffect(() => {
        // Trigger enter animation when component mounts
        triggerEnter();
    }, [triggerEnter]);


    const handleCancel = () => {
        triggerExit(() => {
            if (exitUser) exitUser(); // Execute callback after exit animation completes
        });
    };
     const handleEditNameChange = (event) => {
         setEditedFileName(event.target.value);
     };

  const onSubmit = (event) => {
      event.preventDefault();
      handleSubmit();
  }

  return ReactDOM.createPortal(
    <div className={`form_container school_form_container glassmorphism shadow ${!isInitialized
      ? "" // No animation class applied until initialization
      : isVisible
        ? "enter-animation"
        : "exit-animation"
      }`}>
      <button className="form_background" onClick={handleCancel}></button>
      <div className="form school_form glassmorphism shadow">
          <form onSubmit={onSubmit}>
          <h1>Edit Name</h1>
          <div className="container">
            <div className="name full">
                  <label htmlFor="schooName">Name</label>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                    value={editedFileName}
                    onChange={handleEditNameChange}
                />
            </div>
          </div>

          <div className="form-buttons">
            <button
              type="submit"
              className="submit-btn"
            >
              Submit
            </button>
            <button
              type="button"
              className="cancel-btn"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  )
}

export default Attachments;