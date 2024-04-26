import "./productList.css"
import { DataGrid } from "@mui/x-data-grid"
import { DeleteOutline } from "@mui/icons-material"
import { productsRows } from "../../dummyData"
import { Link } from "react-router-dom"
import { useState } from "react"

import React from "react"

const ProductList = () => {
  const [data, setData] = useState(productsRows)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListUser">
            <img src={params.row.img} alt="avatar" className="productListImg" />
            {params.row.name}
          </div>
        )
      },
    },
    { field: "stock", headerName: "Stock", width: 130 },
    {
      field: "status",
      headerName: "Status",

      width: 90,
    },
    {
      field: "price",
      headerName: "Price",

      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
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
    <div className="productList">
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

export default ProductList
