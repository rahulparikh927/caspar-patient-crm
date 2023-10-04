import { useSearchParams } from "react-router-dom";
import { sortType } from "./usePatientTableSort";
import { Gender } from "../models/patient.model";

/**
 * The `useTableQueryParams` function is a custom hook that parses and manages query
 * parameters for a table.
 * @returns The `useTableQueryParams` function returns an object with the following properties: searchValue,
    selectedGender,
    selectedAge,
    selectedSort,
    setSearchParam,
 */

const useTableQueryParams = () => {
  const [searchParams, setSearchParam] = useSearchParams({
    sq: "",
    g: "",
    age: "",
    s: "",
  });
  const searchValue = searchParams.get("sq") || "";
  const selectedGender = (
    searchParams.get("g") === "" ? undefined : searchParams.get("g")
  ) as Gender | undefined;
  const selectedAge = searchParams.get("age")
    ? (searchParams.get("age") as string)
    : undefined;
  const selectedSort = searchParams.get("s")
    ? (searchParams.get("s") as sortType)
    : undefined;

  return {
    searchValue,
    selectedGender,
    selectedAge,
    selectedSort,
    setSearchParam,
  };
};

export default useTableQueryParams;
