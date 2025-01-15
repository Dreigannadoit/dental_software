import React, { useState } from 'react'
import usePopup from '../hooks/usePopUp';
import AnimatedButton from '../components/AnimatedButton';
import Popup from '../components/PopUps/Popup';
import { ImportIcon, Upload } from '../assets/icons';

const Import = () => {
  const {
    isVisible: showPatientParticipationPopup,
    isExiting: isPatientParticipationExiting,
    openPopup: openPatientParticipationPopUp,
    closePopup: closePatientParticipationPopUp,
  } = usePopup();

  return (
    <>
      {/* Import File Popup */}
      {showPatientParticipationPopup && (
        <Popup
          type="Import"
          title="Import Patient List"
          message={`This action can be only done once`}
          icon={ImportIcon}
          onConfirm={closePatientParticipationPopUp}
          onCancel={closePatientParticipationPopUp}
          confirmLabel="Confirm"
          cancelLabel="Cancel"
          isExiting={isPatientParticipationExiting}
          customClass="import-popup"
        />
      )}
      <AnimatedButton
        type="button"
        classLabel="import_btn"
        label="Import"
        icon={Upload}
        backgroundColor="#8BE5FE"
        method={openPatientParticipationPopUp}
      />
    </>
  )
}



export default Import