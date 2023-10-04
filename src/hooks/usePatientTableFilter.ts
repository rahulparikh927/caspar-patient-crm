import { Patient } from "../models/patient.model";

interface PatientTableFilter {
  patients: Patient[] | null;
  genderFilter?: (patient: Patient) => boolean;
  ageFilter?: (patient: Patient) => boolean;
}

/**
 * The `usePatientTableFilter` function filters an array of patients based on gender and age filters.
 * @param {PatientTableFilter}  - - `patients`: an array of patient objects
 * @returns the filtered patients based on the provided gender and age filters.
 */

export const usePatientTableFilter = ({
  patients,
  genderFilter,
  ageFilter,
}: PatientTableFilter) => {
  if (!patients) return patients;
  let filteredPatients: Patient[];

  filteredPatients =
    (genderFilter && patients.filter(genderFilter)) || patients;

  filteredPatients =
    (ageFilter && filteredPatients.filter(ageFilter)) || filteredPatients;

  return filteredPatients;
};
