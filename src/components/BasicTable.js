"use client"
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Driver Name', headerName: 'Driver Name', width: 130 },
  { field: 'Plate Numbers', headerName: 'Plate Numbers', width: 130 },
  { field: 'Plate Letters', headerName: 'Plate Letters', width: 130 },
  { field: 'Entry Date', headerName: 'Entry Date', width: 130 },
  { field: 'Entry Time', headerName: 'Entry Time', width: 130 },
  { field: 'Leaving Time', headerName: 'Leaving Time', width: 130 },
  { field: 'Driver License', headerName: 'Driver License', width: 130 },
  { field: 'Reason of entry', headerName: 'Reason of entry', width: 130 },
  { field: 'Admin Name', headerName: 'Admin Name', width: 130 },
  { field: 'Admin role', headerName: 'Admin role', width: 130 },
  
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', PlateNumbers: '1 2 3' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', PlateNumbers: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', PlateNumbers: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', PlateNumbers: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', PlateNumbers: null },
  { id: 6, lastName: 'Melisandre', firstName: null, PlateNumbers: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', PlateNumbers: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', PlateNumbers: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', PlateNumbers: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }} className='bg-[#B3C8CF]'>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}