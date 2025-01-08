import { useRef } from "react";

const useUpdateStatus = () => {
  const changeStatusRef = useRef();

  const setChangeStatusRef = (ref) => {
    changeStatusRef.current = ref;
  };

  const updateStatus = (patient) => {
    const newStatus = patient.status === "Active" ? "Inactive" : "Active";
    console.log(`Updating status of ${patient.name} to ${newStatus}`);

    // Trigger status message if ChangeStatus ref is set
    if (changeStatusRef.current) {
      changeStatusRef.current.addStatusMessage(patient.name, newStatus);
    }

    // Add logic to update the status in the backend here
    // For example: 
    // await api.updatePatientStatus(patient.id, newStatus);
  };

  return { updateStatus, setChangeStatusRef };
};

export default useUpdateStatus;
