import { useRef } from "react";

const useUpdateStatus = () => {
  const changeStatusRef = useRef();
  const changeConsentRef = useRef();
  const changeSDFRef = useRef();

  const setChangeStatusRef = (ref) => {
    changeStatusRef.current = ref;
  };

  const setChangeConsentRef = (ref) => {
    changeConsentRef.current = ref;
  };

  const setChangeSDFRef = (ref) => {
    changeSDFRef.current = ref;
  };

  const updateStatus = (data) => {
    const newStatus = data.status === "Active" ? "Inactive" : "Active";
    console.log(`Updating status of ${data.name} to ${newStatus}`);

    if (changeStatusRef.current) {
      changeStatusRef.current.addStatusMessage(data.name || data.code, newStatus);
    }

    // Backend logic here
  };

  const updateConsent = (data) => {
    const newConsent = !data.consented;
    console.log(
      `Updating consent status of ${data.name} (${data.id}) to ${newConsent ? "Consented" : "Not Consented"
      }`
    );

    if (changeConsentRef.current) {
      changeConsentRef.current.addConsentMessage(
        data.name,
        newConsent ? "Consented" : "Not Consented"
      );
    }

    // Backend logic here
  };

  const updateSDF = (data) => {
    const newSDFStatus = !data.sdf;
    console.log(`Updating SDF status of ${data.name} to ${newSDFStatus}`);

    if (changeSDFRef.current) {
      changeSDFRef.current.addSDFMessage(data.name || data.code, newSDFStatus? "SDF" : "Not SDF");
    }
  }

  
  return {
    updateStatus,
    setChangeStatusRef,
    updateConsent,
    setChangeConsentRef,
    updateSDF,
    setChangeSDFRef,
  };
};

export default useUpdateStatus;
