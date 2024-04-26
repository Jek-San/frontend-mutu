import React, { useState } from "react"
import { DataGrid } from "@mui/x-data-grid"
import { DeleteOutline } from "@mui/icons-material"
import { Link } from "react-router-dom"

const Unit = () => {
  const dataDummy = [
    {
      id: 1,
      name: "Emergency",
    },
    {
      id: 2,
      name: "Pediatrics",
    },
    {
      id: 3,
      name: "Surgery",
    },
    {
      id: 4,
      name: "Internal Medicine",
    },
    {
      id: 5,
      name: "Obstetrics and Gynecology",
    },
  ]

  const [data, setData] = useState(dataDummy)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 200 }, // Change field to "name"
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/unit/" + params.row.id}>
              <button
                className="bg-green-500 text-white rounded-md px-3 py-1 mr-2"
                style={{ backgroundColor: "#3bb077" }}
              >
                Edit
              </button>
            </Link>
            <DeleteOutline
              onClick={() => {
                handleDelete(params.row.id)
              }}
              className="text-red-500 cursor-pointer"
            />
          </>
        )
      },
    },
  ]

  return (
    <div className="flex  flex-col  h-full w-4/4">
      <div className="flex-grow">
        <DataGrid
          rows={data} // Pass data as rows
          disableRowSelectionOnClick
          columns={columns}
          pageSize={5} // Set default page size
        />
      </div>
    </div>
  )
}

export default Unit
