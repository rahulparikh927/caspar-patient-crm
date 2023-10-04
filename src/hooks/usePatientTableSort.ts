import { Patient } from "../models/patient.model";

export type sortType = "asc" | "desc";

/**
 * The usePatientTableSort function sorts an array of patients based on their first names in ascending or descending order.
 * @param {Patient[] | null} patients - An array of Patient objects.
 * @param {sortType} [type] - The `type` parameter is an optional parameter that specifies the sort order. It can have two possible values: "asc" for ascending order and "desc" for descending order.
 * If no `type` is provided, the function will return the original `patients` array without sorting.
 * @returns The function `usePatientTableSort` returns the sorted array of patients based on the specified sort type.
 */
const usePatientTableSort = (patients: Patient[] | null, type?: sortType) => {
  if (!patients) return patients;
  if (!type) return patients;

  const sortType = type === "asc";
  return patients.sort(function (a, b) {
    var textA = a.first_name.toUpperCase();
    var textB = b.first_name.toUpperCase();
    return sortType ? (textA > textB ? 1 : -1) : textA > textB ? -1 : 1;
  });
};

export default usePatientTableSort;
