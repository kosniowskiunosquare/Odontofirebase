import React, { useEffect, useState, useCallback } from "react";

import axios from "axios";
import Layout from "../Layout/Layout";
import TableTemplate from "../Layout/Table";

const columns = [
  { id: "id", label: "ID" },
  { id: "dateentry", label: "Procedures date" },
  { id: "initialdiagnosis", label: "Initial diagnosis" },
  { id: "newitemsused", label: "Items used for the procedure" },
  { id: "nextprocedure", label: "Next procedure" },
  { id: "patientsid", label: "Patients ID" },
  { id: "procedureperformed", label: "Performed procedure" }
]


const Records = () => {
  const [record, setRecord] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://us-central1-odontomanager-95368.cloudfunctions.net/app/api/medical_records"
      );
      const transformedData = response.data.map((records) => {
        return { id: records.id, ...records.patient_data };
      });
      setRecord(transformedData);
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
      <TableTemplate columns={columns} rows={record} />
      </Layout>
    </>
  );
};

export default Records;
