import React, { useState, useEffect, useCallback } from "react";

import axios from "axios";
import Layout from "../Layout/Layout";
import TableTemplate from "../Layout/Table";

const columns = [
  { id: "id", label: "ID" },
  { id: "quantity", label: "Quantity" },
  { id: "expirationdate", label: "Expiration Date" },
  { id: "suppliersname", label: "Supplier" },
  { id: "itemdescription", label: "Description" },
];


const Stocks = () => {
  const [items, setItems] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://us-central1-odontomanager-95368.cloudfunctions.net/app/api/stock"
      );
      const transformedData = response.data.map((item) => {
        return { id: item.id, ...item.item_data };
      });
      setItems(transformedData);
      console.log(transformedData);
    } catch (err) {
      console.log("Error: ", err);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <Layout>
      <TableTemplate columns={columns} rows={items} />
      </Layout>
    </>
  );
};

export default Stocks;
