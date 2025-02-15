import React, { useState } from "react";
import "../css/user_profile.css";
import { roles, test_user, userModulePreviledge } from "../test_data";
import { Input, LinearProgress, Stack, Typography, IconButton, Checkbox } from "@mui/joy";
import { Key, Visibility, VisibilityOff } from "@mui/icons-material";
import AnimatedButton from "../components/AnimatedButton";
import { Alert, Delete, File_Edit } from "../assets/icons";
import Popup from "../components/PopUps/Popup";
import usePopup from "../hooks/usePopUp";

const User_Profile = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [selectedComponent, setSelectedComponent] = useState("Roles"); // State to track selected component
  const minLength = 12;

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission

    if (newPassword !== confirmPassword) {
      console.error("Handle mismatch password"); // testing - remove later
      setError("Passwords do not match!");
    } else {
      setError("");
      alert("Password changed successfully!");
      // Submit form logic here
    }
  };

  return (
    <div className="user_profile">

      <div className="user_info_container">
        <div className="user_details user_info glassmorphism shadow">
          {test_user.map((user, index) => (
            <div className="details_container" key={index}>
              <img src={user.profilePicture} alt="" className="user_profile_img" />
              <div className="detail">
                <b>Username: </b><span>{user.username}</span>
              </div>
              <div className="detail">
                <b>Role: </b><span>{user.role}</span>
              </div>
              <div className="detail">
                <b>Email: </b><span>{user.email}</span>
              </div>
              <div className="detail">
                <b>Phone Number: </b><span>{user.phone_number}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="user_password user_info glassmorphism shadow">
          <form onSubmit={handleSubmit}>
            <h3> Change Password </h3>

            {/* New Password Field */}
            <label htmlFor="newPassword">New Password</label>
            <Stack spacing={0.5} sx={{ "--hue": Math.min(newPassword.length * 10, 120) }}>
              <Input
                type={showNewPassword ? "text" : "password"}
                placeholder="Type in here…"
                startDecorator={<Key />}
                endDecorator={
                  <IconButton onClick={() => setShowNewPassword(!showNewPassword)} size="sm">
                    {showNewPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                }
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
              />
              <LinearProgress
                determinate
                size="sm"
                value={Math.min((newPassword.length * 100) / minLength, 100)}
                sx={{
                  bgcolor: "background.level3",
                  color: "hsl(var(--hue) 80% 40%)",
                }}
              />
              <Typography
                level="body-xs"
                sx={{ alignSelf: "flex-end", color: "hsl(var(--hue) 80% 30%)" }}
              >
                {newPassword.length === 0
                  ? "Input New Password, please"
                  : newPassword.length < 3
                    ? "Very weak"
                    : newPassword.length < 6
                      ? "Weak"
                      : newPassword.length < 10
                        ? "Strong"
                        : "Very strong"}
              </Typography>

            </Stack>

            {/* Confirm Password Field */}
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              endDecorator={
                <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)} size="sm">
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              }
              sx={{
                border: confirmPassword && newPassword !== confirmPassword ? "2px solid red" : "",
              }}
            />

            {/* Error Message */}
            <p style={{ color: "red" }}> {confirmPassword && newPassword !== confirmPassword ? "Passwords Are Mismatched" : ""}</p>

            {/* Submit Button */}
            <button className="Export_BTN" disabled={newPassword !== confirmPassword || newPassword.length < minLength}>
              Confirm
            </button>
          </form>
        </div>
      </div>

      <div className="user_controls glassmorphism shadow">
        <nav>
          <ul>
            <li>
              <button className="role_btn" onClick={() => setSelectedComponent("Roles")}>
                <span>Roles</span>
              </button>
            </li>
            <li>
              <button className="access_btn" onClick={() => setSelectedComponent("Access")}>
                <span>Access</span>
              </button>
            </li>
          </ul>
        </nav>

        {selectedComponent === "Roles" ? <Roles /> : <Access />}
      </div>
    </div>
  );
};

const Access = () => {
  return (
    <>
      <div className="table access_table">
        <table>
          <thead className="shadow">
            <tr>
              <th>Module</th>
              <th>Can View</th>
              <th>Can Create</th>
              <th>Can Edit</th>
              <th>Can Delete</th>
            </tr>
          </thead>
          <tbody>
            {userModulePreviledge.length > 0 ? (
              userModulePreviledge.map((module, index) => (
                <tr key={index} className="shadow">
                  <td>{module.module}</td>
                  <td>
                    <Checkbox
                      color="primary"
                      disabled={false}
                      label=" "
                      size="sm"
                      variant="outlined"
                    />
                  </td>
                  <td>
                    <Checkbox
                      color="primary"
                      disabled={false}
                      label=" "
                      size="sm"
                      variant="outlined"
                    />
                  </td>
                  <td>
                    <Checkbox
                      color="primary"
                      disabled={false}
                      label=" "
                      size="sm"
                      variant="outlined"
                    />
                  </td>
                  <td>
                    <Checkbox
                      color="primary"
                      disabled={false}
                      label=" "
                      size="sm"
                      variant="outlined"
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No matching records found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

const Roles = () => {
  const {
    isVisible: showDeletePopup,
    isExiting,
    popupData: selectedPatient,
    openPopup: openDeletePopup,
    closePopup: closeDeletePopup,
  } = usePopup();

  const confirmDelete = () => {
    if (selectedPatient) {
      console.log("Request to delete patient with ID:", selectedPatient.id);
      // Add the logic to delete the patient here
    }
    closeDeletePopup();
  };


  return (
    <>
      {showDeletePopup && (
        <Popup
          type="Inform"
          title="Are You Sure?"
          message={`You are about to delete ${selectedPatient?.code}. This action cannot be undone.`}
          icon={Alert}
          onConfirm={confirmDelete}
          onCancel={closeDeletePopup}
          confirmLabel="Yes, Delete it!"
          cancelLabel="Cancel"
          isExiting={isExiting}
          customClass="delete-popup"
        />
      )}
      <div className="table role_table">
        <table>
          <thead className="shadow">
            <tr>
              <th>Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {roles.length > 0 ? (
              roles.map((role, index) => (
                <tr key={index} className="shadow">
                  <td>{role.role}</td>
                  <td className="crud_controlls">
                    {/* TODO: Replace url to naviate to edit patient */}
                    <AnimatedButton
                      type="routerLink"
                      classLabel="edit_patient"
                      label="Edit"
                      icon={File_Edit}
                      backgroundColor="#1E8631"
                      url="#"
                    />
                    <AnimatedButton
                      type="button"
                      classLabel="delete_patient"
                      label="Delete"
                      icon={Delete}
                      backgroundColor="#FF1A1A"
                      method={() => openDeletePopup(role)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No matching records found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default User_Profile;