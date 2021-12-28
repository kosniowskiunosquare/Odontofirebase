import React, { useState, useEffect, useCallback } from "react";

import axios from "axios";
import Layout from "../Layout/Layout";
import TableTemplate from "../Layout/Table";

const columns = [
  { id: "id", label: "ID" },
  { id: "date", label: "Payments date" },
  { id: "paidamount", label: "Paid Amount" },
  { id: "numberinstalments", label: "Number of Instalments" },
  { id: "paymentconcept", label: "Payments concept" },
  { id: "patientname", label: "Patients Name" },
  { id: "paymentmethod", label: "Payments method" },
  { id: "totalamount", label: "Total Amount" },
];

const Payments = () => {
  const [payments, setPayment] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://us-central1-odontomanager-95368.cloudfunctions.net/app/api/payments"
      );
      const transformedData = response.data.map((payment) => {
        return { id: payment.id, ...payment.patient_data };
      });
      setPayment(transformedData);
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
      <TableTemplate columns={columns} rows={payments} />
      </Layout>
      
    </>
  );
};

export default Payments;
