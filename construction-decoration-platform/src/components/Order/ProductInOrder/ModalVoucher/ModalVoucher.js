import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import voucherApi from "../../../../api/voucherApi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function ModalVoucher({ orderCountPrice, allData, setGetPriceAll }) {
  const [open, setOpen] = React.useState(false);
  const [voucher, setVoucher] = useState();
  const { user, error, loading } = useSelector((state) => state.userReducer);

  const newArr = {
    store_id: orderCountPrice.storeId,
    customer_id: user.data.id,
    products: orderCountPrice.products.map((result) => {
      return {
        id: result.id,
        quantity: result.quantity,
        price: result.price,
      };
    }),
  };

  //get voucher
  const handleOpen = async () => {
    setOpen(true);
    if (newArr) {
      const getVoucher = await voucherApi.getVoucherStore(newArr, 1);

      if (getVoucher.status == 200) {
        setVoucher(getVoucher.data);
      }
    }
  };
  const handleClose = () => setOpen(false);

  //get id voucher
  console.log("voucher", voucher);

  //apply
  const handleApplyVoucher = async (id, storeId,nameVoucher) => {
    allData?.orders.forEach((el) => {
      if (el.storeId == storeId) {
        el.voucher_id = id;
      }
    });

    const applyVoucher = await voucherApi.applyVoucher(allData);

    console.log("applyVoucher",applyVoucher);

    console.log("nameVoucher",nameVoucher);

    if (applyVoucher.status == 200) {
      setGetPriceAll(applyVoucher.data);
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>Chọn voucher</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Voucher Của Bạn
          </Typography>

          {voucher?.can?.map((el) => (
            <>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {el.name}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Giảm Giá {el.detail_discount.value}
              </Typography>

              <Button
                variant="primary"
                size="sm"
                onClick={() =>
                  handleApplyVoucher(el.id, orderCountPrice.storeId, el.name)
                }
              >
                Sử dụng
              </Button>
            </>
          ))}
        </Box>
      </Modal>
    </div>
  );
}
