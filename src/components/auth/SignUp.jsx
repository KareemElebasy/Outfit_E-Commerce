import { NavLink, useNavigate } from "react-router-dom";
import signupImg from "../../assets/images/singup.png";
import { useState } from "react";
import { useAuth } from "../../utils/auth";
import { useForm } from "react-hook-form";
export const SignUp = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   const [userData, setUserData] = useState({
  //     fullName: "",
  //     email: "",
  //     phoneNumber: "",
  //     password: "",
  //     country_id: 2,
  //   });
  //   const handleSignUp = async (e) => {
  //     e.preventDefault();
  //     console.log(userData);
  //     await auth.signUp(userData);
  //   };
  return (
    <div className="container mx-auto mt-5 mb-5">
      <div className="grid gap-2 md:grid-cols-2 w-2/3 mx-auto">
        <div>
          <img src={signupImg} alt="login-image" />
        </div>
        <div className="my-auto">
          <h2 className="italic text-[1.3rem] pb-5 text-center">
            Create New Account
          </h2>
          <div className="w-full max-w-xs">
            <form
              onSubmit={handleSubmit(async (data) => {
                console.log(data);
                await auth.signUp(data);
                navigate("/verify", { replace: true });
              })}
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <input
                  className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Full Name "
                  autoComplete="username"
                  {...register("fullName", {
                    required: "Full Name Is Required",
                    minLength: {
                      value: 10,
                      message: "Min Length of Name is 10 Chars",
                    },
                  })}
                />
                <p className="text-sale text-[.8rem] mt-2">
                  {errors.fullName?.message}
                </p>
              </div>
              <div className="mb-4">
                <input
                  className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="useremail"
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: "Email Is Required" })}
                />
                <p className="text-sale text-[.8rem] mt-2">
                  {errors.email?.message}
                </p>
              </div>
              <div className="mb-4">
                <input
                  className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="userphone"
                  type="text"
                  placeholder="Phone Number"
                  autoComplete="userphone"
                  {...register("phoneNumber", {
                    required: "Phone Number Is Required",
                    minLength: {
                      value: 10,
                      message: "Min is 10 Number ",
                    },
                    maxLength: {
                      value: 11,
                      message: "Max is 10 Number ",
                    },
                  })}
                />
                <p className="text-sale text-[.8rem] mt-2">
                  {errors.phoneNumber?.message}
                </p>
              </div>
              <div className="mb-6">
                <input
                  className="shadow appearance-none rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  {...register("password", {
                    required: "Password is Requires",
                    minLength: {
                      value: 8,
                      message: "Min is 8 Chars or Numbers",
                    },
                  })}
                />
                <p className="text-sale text-[.8rem] mt-2">
                  {errors.password?.message}
                </p>
              </div>
              <button
                className="w-full bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register Now
              </button>
            </form>
          </div>
          <p className="text-center text-black text-[.8rem]">
            already have an account?
            <NavLink className="text-primary" to="/login">
              Sign In
            </NavLink>
          </p>
        </div>
      </div>
    </div>
    // <div className="container mx-auto mt-5 mb-5">
    //   <div className="grid gap-2 md:grid-cols-2 w-2/3 mx-auto">
    //     <div>
    //       <img src={signupImg} alt="login-image" />
    //     </div>
    //     <div className="my-auto">
    //       <h2 className="italic text-[1.3rem] pb-5 text-center">
    //         Create New Account
    //       </h2>
    //       <div className="w-full max-w-xs">
    //         <form  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    //           <div className="mb-4">
    //             <input
    //               className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //               id="username"
    //               type="text"
    //               placeholder="Full Name "
    //               autoComplete="username"
    //               value={userData.fullName}
    //               onChange={(e) =>
    //                 setUserData({ ...userData, fullName: e.target.value })
    //               }
    //             />
    //           </div>
    //           <div className="mb-4">
    //             <input
    //               className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //               id="useremail"
    //               type="email"
    //               placeholder="Email"
    //               value={userData.email}
    //               onChange={(e) => {
    //                 setUserData({ ...userData, email: e.target.value });
    //               }}
    //             />
    //           </div>
    //           <div className="mb-4">
    //             <input
    //               className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //               id="userphone"
    //               type="text"
    //               placeholder="Phone Number"
    //               autoComplete="userphone"
    //               value={userData.phoneNumber}
    //               onChange={(e) =>
    //                 setUserData({ ...userData, phoneNumber: e.target.value })
    //               }
    //             />
    //           </div>
    //           <div className="mb-6">
    //             <input
    //               className="shadow appearance-none rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
    //               id="password"
    //               type="password"
    //               placeholder="Password"
    //               autoComplete="current-password"
    //               value={userData.password}
    //               onChange={(e) =>
    //                 setUserData({ ...userData, password: e.target.value })
    //               }
    //             />
    //           </div>
    //           <button
    //             onClick={handleSignUp}
    //             className="w-full bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //             type="submit"
    //           >
    //             Register Now
    //           </button>
    //         </form>
    //       </div>
    //       <p className="text-center text-black text-[.8rem]">
    //         already have an account?
    //         <NavLink className="text-primary" to="/login">
    //           Sign In
    //         </NavLink>
    //       </p>
    //       {JSON.stringify(userData)}
    //     </div>
    //   </div>
    // </div>
  );
};
