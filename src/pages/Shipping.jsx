import { Form, Link, useNavigate, useParams } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useState } from "react";
import { customFetch } from "../utils";
import { useDispatch } from "react-redux";
import { useCartGlobalContext } from "../context/cartContext";
import { userGlobal } from "../context/userContext";
import { Helmet } from "react-helmet-async";

export default function Shipping() {
  const { id } = useParams();


  const [loading, setloading] = useState(false);

  let validate = Yup.object().shape({
    phone: Yup.string().required("phone is invalid"),
    details: Yup.string().required("details is invalid"),
    city: Yup.string().required("city is invalid"),
  });

  function Shipping(values) {
    setloading(true);
    customFetch
      .post(
        `/api/v1/orders/checkout-session/${id}`,
        { shippingAddress: values },
        { headers: { token: localStorage.getItem("token") } ,params: {url: "https://localhost:5173"}}
      )
      .then((response) => {
        setloading(false);
        location.href = response.data.session.url
        
      })
      .catch((err) => {
        setloading(false);

      });
  }

  const { values, touched, handleChange, handleSubmit, handleBlur, errors } =
    useFormik({
      initialValues: {
        city: "",
        phone: "",
        details: "",
      },
      onSubmit: Shipping,
      validationSchema: validate,
    });

  return (
    <section className=" grid  place-items-center">
      <Helmet>
        <title>Shipping</title>
      </Helmet>
      <Form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col p-8 gap-y-4 card w-96 bg-base-100 shadow-lg"
      >
        <h4 className=" text-center font-bold text-3xl"> Shipping</h4>

        <FormInput
          type="text"
          name="city"
          label="city"
          value={values.city}
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched}
        />

        <FormInput
          type="tel"
          name="phone"
          label="Phone"
          value={values.phone}
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched}
        />

        <FormInput
          type="text"
          name="details"
          label="Details"
          value={values.details}
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched}
        />

        <div className="mt-5">
          <SubmitBtn isloading={loading} text="Checkout" />
        </div>
      </Form>
    </section>
  );
}
