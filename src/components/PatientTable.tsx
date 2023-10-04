import { useMemo } from "react";
import { Patient, PatientTableDataType } from "../models/patient.model";
import Table from "./Table";
import { usePatientContext } from "../context/PatientContext";
import useTableQueryParams from "../hooks/usePatientTableQueryParams";
import { useTableSearch } from "../hooks/useTableSearch";
import {
  PatientTableSearchableKeys,
  getAgeFilterGap,
} from "../helpers/Dashboard";
import usePatientTableSort from "../hooks/usePatientTableSort";
import { usePatientTableFilter } from "../hooks/usePatientTableFilter";
import { useNavigate } from "react-router-dom";

/* The `PatientTable` component is a React functional component that displays a table of patient data. */

const PatientTable = () => {
  const navigate = useNavigate();
  const providerPatients = usePatientContext();
  const { searchValue, selectedGender, selectedAge, selectedSort } =
    useTableQueryParams();
  const { searchedData, loading } = useTableSearch({
    tableData: providerPatients?.patients,
    searchValue,
    searchableKeys: PatientTableSearchableKeys,
  });
  const genderFilter = (patient: Patient) => patient.gender === selectedGender;
  const ageFilteredPatient = (patient: Patient) => {
    const ageFilterGap = getAgeFilterGap(selectedAge as string);
    if (ageFilterGap.length === 1) {
      return patient.age > ageFilterGap[0];
    } else {
      return patient.age >= ageFilterGap[0] && patient.age <= ageFilterGap[1];
    }
  };

  const sortedPatients = usePatientTableSort(searchedData, selectedSort);

  const filteredPatients = usePatientTableFilter({
    patients: sortedPatients,
    genderFilter: selectedGender ? genderFilter : undefined,
    ageFilter: selectedAge ? ageFilteredPatient : undefined,
  });

  const patientTableData = filteredPatients?.map(
    (patient) =>
      ({
        ...patient,
        full_name: patient.first_name + " " + patient.last_name,
      } as PatientTableDataType)
  );

  const columns = useMemo(
    () => [
      { key: "patient_id", header: "ID" },
      { key: "full_name", header: "Full Name" },
    ],
    []
  );

  const handleTableRowClick = (patient: Patient) => {
    navigate("patient-profile", { state: { ...patient } });
  };

  return (
    <>
      {loading ? (
        <p className="text-lg">Please wait while loading patients...</p>
      ) : (
        <Table
          columns={columns}
          data={patientTableData}
          onRowClick={handleTableRowClick}
        />
      )}
    </>
  );
};

export default PatientTable;
