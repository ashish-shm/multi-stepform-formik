import React from "react";
import { useFormik } from "formik";

function FirstPage() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      bio: "",
      phone: "",
    },
  });
  console.log(formik.values);
  return (
    <div>
      <form>
        <label htmlFor="username">Enter Username</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        ></input>
        <label htmlFor="email">Enter Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        ></input>
        <label htmlFor="bio">Enter Bio</label>
        <input
          type="text"
          name="bio"
          id="bio"
          onChange={formik.handleChange}
          value={formik.values.bio}
        ></input>
        <label htmlFor="phone">Enter Phone Number</label>
        <input
          type="text"
          name="phone"
          id="phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
        ></input>
      </form>
    </div>
  );
}

export default FirstPage;
