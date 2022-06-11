import React from "react";
import { Formik, Form, Field } from "formik";
import { FormikWrapper, SubmitButton } from "./PurchaseForm-styles";
import { connect } from "react-redux";
import { formOperations } from "../../store/form";
import { schema } from "./Yup";
import FormInput from "../FormInput/FormInput";

export const PurchaseForm = ({ setFormStatus, setValues }) => {
  return (
    <FormikWrapper>
      <Formik
        initialValues={{
          name: "",
          surname: "",
          age: "",
          address: "",
          phoneNumber: "",
        }}
        onSubmit={(values, { resetForm }) => {
          setFormStatus(true);
          resetForm(); //если убрать, то значения не будут очищаться после нажатия на кнопку
          setValues(values);
        }}
        validationSchema={schema}
      >
        {(formikProps) => {
          return (
            <Form noValidate>
              <div>
                <Field
                  component={FormInput}
                  name="name"
                  type="text"
                  placeholder="Введите имя"
                />
              </div>
              <div>
                <Field
                  component={FormInput}
                  name="surname"
                  type="text"
                  placeholder="Введите фамилию"
                />
              </div>
              <div>
                <Field
                  component={FormInput}
                  name="age"
                  type="number"
                  placeholder="Введите возраст"
                />
              </div>
              <div>
                <Field
                  component={FormInput}
                  name="address"
                  type="text"
                  placeholder="Введите адрес"
                />
              </div>
              <div>
                <Field
                  component={FormInput}
                  name="phoneNumber"
                  type="tel"
                  placeholder="Введите номер телефона"
                />
              </div>
              <div>
                <SubmitButton data-testid="submitBtn">
                  Сохранить изменения
                </SubmitButton>
              </div>
            </Form>
          );
        }}
      </Formik>
    </FormikWrapper>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFormStatus: (status) => dispatch(formOperations.setFormStatus(status)),
    setValues: (obj) => dispatch(formOperations.setValues(obj)),
  };
};

export default connect(null, mapDispatchToProps)(PurchaseForm);
