import axios from "axios";
import { Patient } from "./../../models/patient.model";

export const getPatient = async () => {
  const patients = await axios.get<Patient[]>("./mock_data.json");
  return { data: patients.data };
};
