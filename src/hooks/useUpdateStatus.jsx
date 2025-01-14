import { useRef } from "react";

const useUpdateStatus = () => {
  const changeStatusRef = useRef();

  const setChangeStatusRef = (ref) => {
    changeStatusRef.current = ref;
  };

  const updateStatus = (data) => {
    const newStatus = data.status === "Active" ? "Inactive" : "Active" ;
    console.log(`Updating status of ${data.name} to ${newStatus}`);

    // Trigger status message if ChangeStatus ref is set
    if (changeStatusRef.current) {
      changeStatusRef.current.addStatusMessage(data.name || data.code, newStatus);
    }

    // Add logic to update the status in the backend here
    // For example: 
    // await api.updatePatientStatus(patient.id, newStatus);
  };

  return { updateStatus, setChangeStatusRef };
};

export default useUpdateStatus;
