import React from "react";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import MenuButton from "../UI/MenuButton"

const TableTemplate = (props) => {
  return (
    <>
      <div style={{ height: 100}}></div>
      <div style={{width: "90%", margin: "auto"}}>
      <MenuButton formLoad={props.formLoad}/>
      <TableContainer component={Paper}>
        <Table  sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              {props.columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="right"
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {props.columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align="right">
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    </>
  );
};

export default TableTemplate;
