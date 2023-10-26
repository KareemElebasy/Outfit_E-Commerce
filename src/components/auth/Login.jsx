import { NavLink, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login.png";
import { useForm } from "react-hook-form";
import { useAuth } from "../../utils/auth";
export const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="container mx-auto mt-5 mb-5">
      <div className="grid gap-2 md:grid-cols-2 w-2/3 mx-auto">
        <div>
          <img src={loginImg} alt="login-image" />
        </div>
        <div className="my-auto">
          <h2 className="italic text-[1.3rem] pb-5 text-center">
            Welcome Back !
          </h2>
          <div className="w-full max-w-xs">
            <form
              onSubmit={handleSubmit(async (loginData) => {
                await auth.login(loginData);
                navigate("/", { replace: true });
              })}
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <input
                  className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Mobile Number "
                  autoComplete="username"
                  {...register("phonenumber", {
                    required: "Phone Number Is Required",
                    maxLength: {
                      value: 11,
                      message: "Enter a Valid Phone Number",
                    },
                  })}
                />
                <p className="text-sale text-[.8rem] mt-2">
                  {errors.phonenumber?.message}
                </p>
              </div>
              <div className="mb-6">
                <input
                  className="shadow appearance-none rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is Requires",
                    message: "Enter a Valid Password",
                  })}
                />
                <p className="text-sale text-[.8rem] mt-2">
                  {errors.password?.message}
                </p>
              </div>
              <NavLink
                className="block align-baseline font-bold text-[.7rem] text-blue-500 mb-5"
                to="/signup"
              >
                Forgot Password?
              </NavLink>
              <button
                className="w-full bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
            </form>
          </div>
          <p className="text-center text-gray-light text-[.8rem]">
            Not A Member ?
            <NavLink className="text-primary" to="/signup">
              Join Now
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};
