export const PatientTableSearchableKeys = [
  "patient_id",
  "first_name",
  "last_name",
  "email",
];

export const getAgeFilterGap = (ageFilter: string) => {
  return ageFilter.split("-").map((item: string) => Number(item.trim()));
};
