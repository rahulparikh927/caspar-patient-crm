import PatientTable from "../../components/PatientTable";
import PatientTableFilters from "../../components/PatientTableFilters";

const Dashboard = () => {
  return (
    <div className="max-w-[80%] m-auto">
      <PatientTableFilters />
      <PatientTable />
    </div>
  );
};

export default Dashboard;
