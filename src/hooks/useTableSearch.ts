import { useState, useEffect } from "react";

interface TableSearch<T> {
  tableData?: T[] | null;
  searchValue: string;
  searchableKeys?: string[];
}

/**
 * The `useTableSearch` function is a custom hook that allows for searching
 * data in a table based on a search value and specified searchable keys.
 * @param  - - `tableData`: An array of objects representing the data for the table.
 * @returns The `useTableSearch` hook returns an object with two properties: `searchedData` and `loading`.
 */

export const useTableSearch = <T>({
  tableData = [],
  searchValue,
  searchableKeys,
}: TableSearch<T>) => {
  const [searchedData, setSearchedData] = useState<T[] | null>(tableData);
  const [origData, setOrigData] = useState<T[] | null>(null);
  const [searchIndex, setSearchIndex] = useState<
    {
      allValues: string;
    }[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const crawl = (tableItem: T, searchableKeys: string[] = []) => {
      let allValues;
      if (!allValues) allValues = [];
      for (var key in tableItem) {
        searchableKeys.includes(key) &&
          allValues.push(tableItem[key as keyof T] + " ");
      }
      return allValues;
    };
    const setData = async () => {
      let initialTableData: T[];
      initialTableData = tableData || [];
      setOrigData(initialTableData);
      setSearchedData(initialTableData);
      const searchInd = initialTableData.map((tableItem) => {
        const allValues = crawl(tableItem, searchableKeys);
        return { allValues: allValues.toString() };
      });
      setSearchIndex(searchInd);
      if (initialTableData) setLoading(false);
    };
    setData();
  }, [searchableKeys, tableData]);

  useEffect(() => {
    if (searchValue) {
      const reqData = searchIndex.map((tableItem, index) => {
        if (
          tableItem.allValues
            .toLowerCase()
            .indexOf(searchValue.toLowerCase()) >= 0
        )
          return origData?.[index];
        return null;
      }) as T[] | [];
      if (reqData) {
        setSearchedData(
          reqData.filter((tableItem) => {
            if (tableItem) return true;
            return false;
          })
        );
      }
    } else setSearchedData(origData);
  }, [searchValue, origData, searchIndex]);

  return { searchedData, loading };
};
