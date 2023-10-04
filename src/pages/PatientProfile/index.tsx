import { useLocation, useNavigate } from "react-router-dom";
import { Patient } from "../../models/patient.model";
import { usePatientContext } from "../../context/PatientContext";
import DialogBox from "../../components/DialogBox";
import { useState } from "react";

/* The `PatientProfile` component is a React functional component that displays the profile information of a patient. It uses various hooks and patient context to manage the state and data. */

const PatientProfile = () => {
  const { patients, setPatientsData } = usePatientContext();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  let { state } = useLocation();
  const patient = state as Patient;

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleDeletePatient = () => {
    const newPatients =
      patients?.filter(
        (patientItem) => patient.patient_id !== patientItem.patient_id
      ) || null;

    setPatientsData(newPatients);
    handleGoBack();
  };

  return (
    <>
      <div className="max-w-[80%] m-auto">
        <h4 className="text-2xl mb-2">Patient Profile</h4>
        <div className="flex justify-end mb-2">
          <button
            type="button"
            onClick={handleGoBack}
            className="px-4 py-2 font-semibold text-sm bg-slate-500 text-white rounded-full shadow-sm mr-2"
          >
            Go back
          </button>
          <button
            type="button"
            onClick={() => setOpenDeleteModal(true)}
            className="px-4 py-2 font-semibold text-sm bg-red-700 text-white rounded-full shadow-sm"
          >
            Delete Patient
          </button>
        </div>
        <div className="grid grid-cols-2 border-collapse w-full border border-slate-500 bg-slate-800 text-sm shadow-sm">
          <div className="border border-slate-600 font-semibold p-4 text-slate-200 text-left">
            Patient ID
          </div>
          <div className="border border-slate-600 font-semibold p-4 text-slate-200 text-left">
            {patient.patient_id}
          </div>
          <div className="border border-slate-600 font-semibold p-4 text-slate-200 text-left">
            First Name
          </div>
          <div className="border border-slate-600 font-semibold p-4 text-slate-200 text-left">
            {patient.first_name}
          </div>
          <div className="border border-slate-600 font-semibold p-4 text-slate-200 text-left">
            Last Name
          </div>
          <div className="border border-slate-600 font-semibold p-4 text-slate-200 text-left">
            {patient.last_name}
          </div>
          <div className="border border-slate-600 font-semibold p-4 text-slate-200 text-left">
            Age
          </div>
          <div className="border border-slate-600 font-semibold p-4 text-slate-200 text-left">
            {patient.age}
          </div>
          <div className="border border-slate-600 font-semibold p-4 text-slate-200 text-left">
            Gender
          </div>
          <div className="border border-slate-600 font-semibold p-4 text-slate-200 text-left">
            {patient.gender}
          </div>
          <div className="border border-slate-600 font-semibold p-4 text-slate-200 text-left">
            Image
          </div>
          <div className="border border-slate-600 font-semibold p-4 text-slate-200 text-left">
            <img
              src={patient.avatar}
              alt={`${patient.first_name} ${patient.last_name} `}
            />
          </div>
        </div>
      </div>
      <DialogBox
        show={openDeleteModal}
        title="Delete"
        content={`Are you sure you want to delete ${patient.patient_id} ?`}
        actionButtonText="Delete"
        onAction={() => handleDeletePatient()}
        onClose={() => setOpenDeleteModal(false)}
      />
    </>
  );
};

export default PatientProfile;
