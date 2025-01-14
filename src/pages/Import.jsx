import React, { useState } from 'react'
import usePopup from '../hooks/usePopUp';
import AnimatedButton from '../components/AnimatedButton';
import Popup from '../components/PopUps/Popup';
import { ImportIcon, Upload } from '../assets/icons';

const Import = () => {
  const {
    isVisible: showImportPopup,
    isExiting,
    openPopup: openImportPopUp,
    closePopup: closeImportPopUp,
  } = usePopup();

  return (
    <>
      {/* Import File Popup */}
      {showImportPopup && (
        <Popup
          type="Import"
          title="Import Patient List"
          message={`This action can be only done once`}
          icon={ImportIcon}
          onConfirm={closeImportPopUp}
          onCancel={closeImportPopUp}
          confirmLabel="Confirm"
          cancelLabel="Cancel"
          isExiting={isExiting}
          customClass="import-popup"
        />
      )}
      <AnimatedButton
        type="button"
        classLabel="import_btn"
        label="Import"
        icon={Upload}
        backgroundColor="#8BE5FE"
        method={openImportPopUp}
      />
    </>
  )
}

export default Import