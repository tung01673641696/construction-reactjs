import React, { useEffect } from "react";
import Moment from "moment";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMyOrder } from "../../../redux/reducers/order";
import orderApi from "../../../api/orderApi";
import "./OrderManagement.scss";

const OrderManagement = () => {
  const dispatch = useDispatch();
  const { listMyOrder } = useSelector((state) => state.orderReducer);
  useEffect(() => {
    dispatch(getMyOrder());
  }, []);

  console.log(listMyOrder);

  const totalOrderDetails = () => {
    let sum = [];
    for (let i = 0; i < listMyOrder.length; i++) {
      let count = 0;
      for (let j = 0; j < listMyOrder[i].details.length; j++) {
        count +=
          listMyOrder[i].details[j].price * listMyOrder[i].details[j].quantity;
      }
      sum.push(count);
    }
    return sum;
  };

  return (
    <div className="order-management">
      <span className="order-title">Đơn Hàng Của Tôi</span>
      <div className="order-table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">STT</TableCell>
                <TableCell align="center">Sản Phẩm</TableCell>
                <TableCell align="center">Mã Đơn Hàng</TableCell>
                <TableCell align="center">Ngày Mua</TableCell>
                <TableCell align="center">Tổng Tiền</TableCell>
                <TableCell align="center">Trạng Thái</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listMyOrder.map((row, index) => (
                <TableRow
                  key={row.id}
                  sx={{
                    "&:last-child td, &:last-child th": {
                      border: 0,
                    },
                  }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {index + 1}
                  </TableCell>
                  <TableCell component="th" scope="row" align="">
                    <Link to={`details/${row.id}`}>
                      <div
                        className="order-text-overflow"
                        style={{
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                          width: "230px",
                          display: "block",
                          overflow: "hidden",
                        }}
                      >
                        {`[${row.details.length} sản phẩm ] ${row.details[0]?.product.name}`}
                      </div>
                    </Link>
                  </TableCell>
                  <TableCell align="center">{row.code}</TableCell>
                  <TableCell align="center">
                    {Moment(row.created_date).format("LT, DD/MM/YYYY")}
                  </TableCell>
                  <TableCell align="center">
                    {row?.discount_detail?.total
                      ? row?.discount_detail?.total.toLocaleString("de-DE") + " VNĐ"
                      : totalOrderDetails()[index].toLocaleString("de-DE")}
                  </TableCell>
                  <TableCell align="center">Chưa Xác Nhận</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default OrderManagement;
