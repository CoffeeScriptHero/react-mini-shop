import * as yup from "yup";
import { RequiredMessage } from "./PurchaseForm-styles";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const schema = yup.object().shape({
  name: yup
    .string()
    .required(<RequiredMessage>Вы не указали имя</RequiredMessage>)
    .min(2, <RequiredMessage>Слишком короткое имя</RequiredMessage>)
    .max(15, <RequiredMessage>Слишком длинное имя</RequiredMessage>),
  surname: yup
    .string()
    .required(<RequiredMessage>Вы не указали фамилию</RequiredMessage>)
    .min(2, <RequiredMessage>Слишком коротая фамилия</RequiredMessage>)
    .max(20, <RequiredMessage>Слишком длинная фамилия</RequiredMessage>),
  age: yup
    .number()
    .required(<RequiredMessage>Вы не указали возраст</RequiredMessage>)
    .positive(
      <RequiredMessage>Возраст не может быть отрицательным</RequiredMessage>
    )
    .integer(<RequiredMessage>Введите целое число</RequiredMessage>),
  address: yup
    .string()
    .required(<RequiredMessage>Вы не указали адрес</RequiredMessage>)
    .min(5, <RequiredMessage>Слишком мало символов</RequiredMessage>),
  phoneNumber: yup
    .string()
    .required(<RequiredMessage>Вы не указали номер</RequiredMessage>)
    .matches(phoneRegExp, {
      message: (
        <RequiredMessage>Введите корректный номер телефона</RequiredMessage>
      ),
    }),
});
