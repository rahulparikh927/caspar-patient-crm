export type Gender = "Male" | "Female";

export type Patient = {
  patient_id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: Gender;
  age: number;
  avatar: string;
};

export type PatientTableDataType = Patient & {
  full_name: string;
};
