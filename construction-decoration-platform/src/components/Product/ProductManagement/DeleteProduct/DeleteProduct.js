import { Button, Modal, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import storeApi from "../../../../api/storeApi";
import {
  storeGetProduct,
  storeCreateProduct,
  storeDeleteProduct
} from "../../../../redux/reducers/store";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 450,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
};

const DeleteProduct = ({ product }) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteProduct = async (id) => {
    const res = await dispatch(storeDeleteProduct(id));
    if (res.status === 200) {
      toast.success("Xóa sản phẩm thành công")
    } else {
      toast.success("Xóa sản phẩm không thành công")
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        color="error"
        onClick={() => setVisible(true)}
        style={{
          height: "100%"
        }}
      >
        Xoá
      </Button>
      <Modal
        open={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Bạn có chắc chắn muốn xoá sản phẩm ?
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "20px",
            }}
          >
            <Button
              variant="contained"
              color="warning"
              onClick={() => setVisible(false)}
            >
              Không
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleDeleteProduct(product.id)}
              sx={{
                marginLeft: "15px",
              }}
            >
              Có
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default DeleteProduct;
