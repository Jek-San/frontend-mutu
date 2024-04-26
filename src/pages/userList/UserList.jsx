import "./userList.css"
import { DataGrid } from "@mui/x-data-grid"
import { DeleteOutline } from "@mui/icons-material"
import { userRows } from "../../dummyData"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function UserList() {
  const [data, setData] = useState(userRows)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img src={params.row.avatar} alt="avatar" className="userListImg" />
            {params.row.username}
          </div>
        )
      },
    },
    { field: "email", headerName: "Email", width: 130 },
    {
      field: "status",
      headerName: "Status",

      width: 90,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",

      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              onClick={() => {
                handleDelete(params.row.id)
              }}
              className="userListDelete"
            />
          </>
        )
      },
    },
  ]

  return (
    <div className="userList">
      <div style={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={data}
          disableRowSelectionOnClick
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 8 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  )
}
