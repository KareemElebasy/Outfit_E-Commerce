import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/auth";

export const VerifyCode = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const onVerify = async (e) => {
    e.preventDefault();
    await auth.verifyCode();
    navigate("/login", { replace: true });
  };
  return (
    <div className="container mx-auto mt-5 mb-5 min-h-[50vh]">
      <div className="flex items-center justify-center">
        <div className="">
          <h6 className="text-center pb-2">OutFit</h6>
          <h5>Confirmation Code</h5>
          <form onSubmit={onVerify}>
            <input className="block bg-gray" type="number" />
            <button className="pt-3" type="submit">
              Verfiy
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
