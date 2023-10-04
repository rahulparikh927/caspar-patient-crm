import React, { useState, useEffect, createContext } from "react";
import { Patient } from "../models/patient.model";
import { getPatient } from "../api/patient";

export type PatientContextType = {
  patients: Patient[] | null;
  setPatientsData: React.Dispatch<React.SetStateAction<Patient[] | null>>;
};

export const PatientContext = createContext<PatientContextType>({
  patients: null,
  setPatientsData: () => {},
});

type PatientContextProviderProps = {
  children: React.ReactNode;
};

/**
 * The code defines a PatientContextProvider component that fetches patient data and provides it to its children components through a context.
 * @param {PatientContextProviderProps}  - - `children`: The child components that will be wrapped by
 * the `PatientContext.Provider` component.
 * @returns The PatientContextProvider component is being returned.
 */

const PatientContextProvider = ({ children }: PatientContextProviderProps) => {
  const [patientsData, setPatientsData] = useState<Patient[] | null>(null);

  useEffect(() => {
    const fetchPatients = async () => {
      const { data: patients } = await getPatient();
      setPatientsData(patients);
    };
    fetchPatients();
  }, []);

  return (
    <PatientContext.Provider
      value={{
        patients: patientsData,
        setPatientsData,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};
export default PatientContextProvider;

export const usePatientContext = () => React.useContext(PatientContext);
