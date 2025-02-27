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

  const {
    isVisible: showAppointmentPopup,
    isExiting: isAppointmentExiting,
    openPopup: openAppointmentPopUp,
    closePopup: closeAppointmentPopUp,
  } = usePopup();

  const {
    isVisible: showPatientToothPopup,
    isExiting: isPatientToothExiting,
    openPopup: openPatientToothPopUp,
    closePopup: closePatientToothPopUp,
  } = usePopup();

  const {
    isVisible: showBillingPopup,
    isExiting: isBillingExiting,
    openPopup: openBillingPopUp,
    closePopup: closeBillingPopUp,
  } = usePopup();

  const {
    isVisible: showCommunicationPopup,
    isExiting: isCommunicationExiting,
    openPopup: openCommunicationPopUp,
    closePopup: closeCommunicationPopUp,
  } = usePopup();

  const Block = ({ label, show, exist, open, close }) => {
    return (
      <>
        {show && (
          <Popup
            type="Import"
            title={`Import ${label}`}
            message={`This action can be only done once`}
            icon={ImportIcon}
            onConfirm={close}
            onCancel={close}
            confirmLabel="Confirm"
            cancelLabel="Cancel"
            isExiting={exist}
            customClass="import-popup"
          />
        )}

        <div className="import_btn shadow">
          <p>{label}</p>
          <AnimatedButton
            type="button"
            classLabel="import_btn"
            label="Import"
            icon={Upload}
            backgroundColor="#8BE5FE"
            method={open}
          />
        </div>
      </>
    )

  }

  return (
    <div className='importPage'>
      {/* Import File Popup */}
      <Block
        label={"Patient Participation"}
        show={showPatientParticipationPopup}
        exist={isPatientParticipationExiting}
        open={openPatientParticipationPopUp}
        close={closePatientParticipationPopUp}
      />
      <Block
        label={"Appointment"}
        show={showAppointmentPopup}
        exist={isAppointmentExiting}
        open={openAppointmentPopUp}
        close={closeAppointmentPopUp}
      />
      <Block
        label={"Patient Tooth"}
        show={showPatientToothPopup}
        exist={isPatientToothExiting}
        open={openPatientToothPopUp}
        close={closePatientToothPopUp}
      />
      <Block
        label={"Billing"}
        show={showBillingPopup}
        exist={isBillingExiting}
        open={openBillingPopUp}
        close={closeBillingPopUp}
      />
      <Block
        label={"Communication"}
        show={showCommunicationPopup}
        exist={isCommunicationExiting}
        open={openCommunicationPopUp}
        close={closeCommunicationPopUp}
      />
    </div>
  )
}



export default Import