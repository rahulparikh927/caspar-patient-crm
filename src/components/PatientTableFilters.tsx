import useTableQueryParams from "../hooks/usePatientTableQueryParams";
import DebouncedInput from "./DebouncedInput";

/* The code defines a functional component called `PatientTableFilters`. 
This component is responsible for rendering a set of filters/search/sort for a patient table. */

const PatientTableFilters = () => {
  const {
    searchValue,
    selectedGender,
    selectedAge,
    selectedSort,
    setSearchParam,
  } = useTableQueryParams();

  const handleSearchOnChange = (value: string) => {
    setSearchParam((prev) => {
      prev.set("sq", value);
      return prev;
    });
  };
  return (
    <>
      <div className="flex justify-end mb-2 items-center">
        <p className="mr-2">Search: </p>
        <DebouncedInput
          value={searchValue}
          onChange={(value) => handleSearchOnChange(value.toString())}
          className="form-input px-2 py-1 rounded border-1"
          placeholder="Search patient"
        />
      </div>
      <div className="flex justify-end mb-2">
        <div className="flex mr-2 items-center">
          <p className="mr-2">Gender:</p>
          <select
            onChange={(e) =>
              setSearchParam((prev) => {
                prev.set("g", e.target.value);
                return prev;
              })
            }
            value={selectedGender || ""}
            className="form-select pl-2 py-1 pr-10 rounded"
          >
            <option value={""}>All</option>
            <option value={"Male"}>Male</option>
            <option value={"Female"}>Female</option>
          </select>
        </div>
        <div className="flex items-center">
          <p className="mr-2">Age:</p>
          <select
            onChange={(e) =>
              setSearchParam((prev) => {
                prev.set("age", e.target.value);
                return prev;
              })
            }
            value={selectedAge || ""}
            className="form-select pl-2 py-1 pr-10 rounded"
          >
            <option value={""}>All</option>
            <option value={"18-30"}>18 - 30</option>
            <option value={"31-45"}>31 - 45</option>
            <option value={"45"}>&gt; 45</option>
          </select>
        </div>
      </div>
      <div className="flex justify-end mb-2 items-center">
        <p className="mr-2">Sort alphabetical:</p>
        <select
          onChange={(e) =>
            setSearchParam((prev) => {
              prev.set("s", e.target.value);
              return prev;
            })
          }
          value={selectedSort || ""}
          className="form-select pl-2 py-1 pr-10 rounded"
        >
          <option value={""}>default</option>
          <option value={"asc"}>Ascending</option>
          <option value={"desc"}>Descending</option>
        </select>
      </div>
    </>
  );
};

export default PatientTableFilters;
