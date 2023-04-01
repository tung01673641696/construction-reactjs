import { isPhoneNumber } from "class-validator";
// import { Regex } from "configs/constants"
import {
  validateRequiredMessage,
  validateInvalidMessage,
} from "../utils/getValidMessage";

import * as yup from "yup";

export const formSchema = {
  name: yup.string().label("Họ tên").required(validateRequiredMessage),
  nameStore: yup
    .string()
    .label("Tên cửa hàng")
    .required(validateRequiredMessage),
  email: yup.string().email().label("Email").required(validateRequiredMessage),
  desc: yup.string().label("Mô tả").required(validateRequiredMessage),
  uploadImage: yup
    .string()
    .label("Cập nhật ảnh")
    .required(validateRequiredMessage),
  phone: yup
    .string()
    .label("Số điện thoại")
    .required(validateRequiredMessage)
    .max(10, validateInvalidMessage)
    .test({
      test: (value) => (value ? isPhoneNumber(value, "VN") : false),
      message: validateInvalidMessage,
    }),

  password: yup
    .string()
    .label("Mật khẩu")
    .required(validateRequiredMessage)
    .min(4, "Mật khẩu phải chứa ít nhất 4 kí tự"),
    // .max(12, "Password cannot exceed more than 12 characters"),
  // .matches(
  //   Regex.PASSWORD,
  //   ({ label }) =>
  //     `${label} chứa ít nhất 8 kí tự bao gồm chữ hoa, chữ thường và số`
  // ),
  passwordConfirm: yup
    .string()
    .label("Nhập lại mật khẩu")
    .required(validateRequiredMessage)
    .min(4, "Mật khẩu phải chứa ít nhất 4 kí tự")
    // .max(12, "Password cannot exceed more than 12 characters")
    .oneOf([yup.ref("password")], "Mật khẩu không trùng nhau"),
  cities: yup
    .number()
    .label("Tỉnh/Thành phố")
    .required(validateRequiredMessage),
  district_code: yup
    .number()
    .label("Quận/Huyện")
    .required(validateRequiredMessage),
  ward_code: yup.number().label("Phường/Xã").required(validateRequiredMessage),
  address_detail: yup.string().required(validateRequiredMessage),
};
