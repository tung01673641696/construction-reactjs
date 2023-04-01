import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";

import { setAddressSelect } from "../../../../redux/reducers/address";

import { useSelector, useDispatch } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ModalAddress({ setAddressDefault }) {
  const { listAddress } = useSelector((state) => state.addressReducer);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue] = React.useState("");

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAddressDefault(listAddress.find((it) => it.id == parseInt(value)));
    setOpen(false);
  };

  const Label = ({ item }) => {
    return (
      <>
        <div className="change-order-text">
          <p className="change-order-name">
            {item.name} | {item.phone}
          </p>
        </div>
        <div className="change-order-text">
          <p className="change-order-detail">{item.address_detail.address}</p>
        </div>
      </>
    );
  };

  return (
    <div>
      <Button onClick={handleOpen} className="change-order-btn">
        THAY ĐỔI
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form
            onSubmit={handleSubmit}
            style={{
              width: "100%",
            }}
          >
            <FormControl
              variant="standard"
              style={{ minWidth: "100%" }}
            >
              <FormLabel
                style={{
                  fontSize: "18px",
                  marginBottom: "20px",
                }}
              >
                Địa chỉ của tôi
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-error-radios"
                name="quiz"
                value={value}
                onChange={handleRadioChange}
              >
                {listAddress.map((item) => (
                  <FormControlLabel
                    value={item.id}
                    control={<Radio />}
                    label={<Label item={item} />}
                  />
                ))}
              </RadioGroup>
              <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                Xác Nhận
              </Button>
            </FormControl>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalAddress;
