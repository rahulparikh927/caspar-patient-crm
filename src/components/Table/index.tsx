import TableHeader from "./TableHeader";
import TableRows from "./TableRow";

export type ColumnDefinitionType = {
  key: string;
  header: string;
};

interface TableProps<T> {
  data?: T[];
  columns?: ColumnDefinitionType[];
  onRowClick?: (rowData: T) => void;
}

const Table = <T extends any>({ data, columns, onRowClick }: TableProps<T>) => {
  return (
    <>
      {columns && data ? (
        <table className="border-collapse w-full border border-slate-500 bg-slate-800 text-sm shadow-sm">
          <TableHeader columns={columns} />
          <TableRows data={data} columns={columns} onRowClick={onRowClick} />
        </table>
      ) : (
        <p>Error while loading table</p>
      )}
    </>
  );
};

export default Table;
