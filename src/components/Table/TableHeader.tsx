import { ColumnDefinitionType } from ".";

type TableHeaderProps = {
  columns: Array<ColumnDefinitionType>;
};

const TableHeader = ({ columns }: TableHeaderProps): JSX.Element => {
  const headers = columns.map((column, index) => {
    return (
      <th
        className="border border-slate-600 font-semibold p-4 text-slate-200 text-left"
        key={`headCell-${index}`}
      >
        {column.header}
      </th>
    );
  });

  return (
    <thead className="bg-slate-700">
      <tr>{headers}</tr>
    </thead>
  );
};

export default TableHeader;
