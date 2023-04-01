const ValidateMessage = {
  REQUIRED: "không được để trống",
  INVALID: "không hợp lệ",
  NOT_MATCH: "không khớp",
};

export function validateRequiredMessage({ label }) {
  return label + " " + ValidateMessage.REQUIRED;
}

export function validateInvalidMessage({ label }) {
  return label + " " + ValidateMessage.INVALID;
}

export function validateNotMatchMessage({ label }) {
  return label + " " + ValidateMessage.NOT_MATCH;
}

export function deleteWhiteSpace(value) {
  return value.trim().replace(/ +/g, " ");
}

export function validatePhoneNumber(phone) {
  let reGex = new RegExp(/(\+84|0)+([3|5|7|8|9])+([0-9]{8})\b/, "g");
  let phones = reGex.test(phone);
  return phones;
}

export function validateName(name) {
  let reGex = new RegExp(
    /^[_A-zÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*((-|\s)*[_A-zÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ])*$/,
    "gm"
  );
  let names = reGex.test(name);
  return names;
}

export function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
}

export function validateNumber(number) {
  let reGex = new RegExp(/^[1-9][0-9]*$/);
  let numbers = reGex.test(number);
  return numbers;
}

export function validateDate(date) {
  let reGex = new RegExp(
    /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/
  );
  let dates = reGex.test(date);
  return dates;
}
