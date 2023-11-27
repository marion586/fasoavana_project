/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useFormik } from "formik";
import logo from "@shared/assets/image/Spider.png";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { setCurrentUser, setValidToken } from "../../core/actions";
import { useNavigate } from "react-router-dom";
import authService from "../../core/services/_request";
import { AxiosResponse } from "axios";
import Spinner from "@/shared/components/Spinner";
import { toast } from "react-toastify";
type LoginModel = {
  email: string;
  password: string;
};
const initStateLogin: LoginModel = {
  email: "",
  password: "",
};
const Login = () => {
  const intl = useIntl();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const notify = (message: string) => toast.error(message);
  const formik = useFormik({
    initialValues: initStateLogin,
    onSubmit: async (values, { setSubmitting }) => {
      //dispatch(setAccessTokenState({refreshed:false,valid:true}))
      //navigate('../',{replace:true})
      setSubmitting(true);
      try {
        setIsLoading(true);
        const login: AxiosResponse<any> | any = await authService.postLogin(
          values
        );
        console.log(login);
        if (!login.error) {
          dispatch(setCurrentUser(login.data));
          localStorage.setItem("current_user", JSON.stringify(login.data));
          dispatch(setValidToken(true));
          navigate("/");
        } else {
          notify(login?.message || "Error request server");
        }
      } catch (error) {
        localStorage.removeItem("current_user");
      } finally {
        setIsLoading(false);
      }

      setSubmitting(false);
    },
  });
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="sm:max-w-sm sm md:max-w-lg lg:max-w-lg md:w-full mx-auto">
        <div className="bg-white mt-8 p-6 rounded-lg shadow-3xl">
          <div className="flex flex-col items-center mb-4">
            <img
              width={100}
              src={logo}
              alt="spider logo"
              className="object-cover"
            />
          </div>
          <div className="mb-2">
            <p className="text-center font-semibold md:text-lg sm:text-sm text-black">
              {" "}
              {intl.formatMessage({ id: "SIGNIN" })}
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit(e);
            }}
          >
            <div className="mb-4">
              <input
                type="email"
                id="email"
                {...formik.getFieldProps("email")}
                name="email"
                className="input-auth"
                placeholder={intl.formatMessage({ id: "YOUR_MAIL" })}
              />
            </div>
            <div className="mb-4">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="input-auth"
                  {...formik.getFieldProps("password")}
                  name="password"
                  placeholder={intl.formatMessage({ id: "PASSWORD" })}
                />
                {showPassword ? (
                  <LuEyeOff
                    className="h-6 w-6 text-gray-400 absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <LuEye
                    className="h-6 w-6 text-gray-400 absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-right text-gray-400 hover:cursor-pointer text-[11px] font-normal hover:text-gray-500">
                {" "}
                {intl.formatMessage({ id: "FORGOT.PASSWORD" })}
              </p>
            </div>
            <div className="mb-8">
              <button
                type="submit"
                className="py-2 px-4 h-[46px] w-full lv-btn-primary rounded-lg shadow-md "
              >
                <FormattedMessage
                  id={`${isLoading ? "CONNECTION" : "SIGNIN"}`}
                />
                {isLoading && <Spinner />}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
/*
 <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Adresse e-mail
              </label>*/
