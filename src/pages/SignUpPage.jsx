import { useState } from "react";
import { ShipWheelIcon } from "lucide-react";
import { Link } from "react-router";
import useSignUp from "../hooks/useSignUp";

const SignUpPage = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { isPending, error, signupMutation } = useSignUp();

  const handleSignup = (e) => {
    e.preventDefault();
    signupMutation(signupData);
  };

  return (
    <div className="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 bg-white">
      <div className="border border-black flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-blue-50 rounded-xl shadow-lg overflow-hidden">

        <div className="hidden lg:flex w-full lg:w-1/2 bg-blue-100 items-center justify-center">
          <div className="max-w-md p-8">
            <div className="relative aspect-square max-w-sm mx-auto">
              <img src="/V-connect_Call.png" alt="Language connection illustration" className="w-full h-full" />
            </div>

            <div className="text-center space-y-3 mt-6">
              <h2 className="text-xl font-semibold text-blue-600">Connect with language partners worldwide</h2>
              <p className="text-blue-500">
                Practice conversations, make friends, and improve your language skills together
              </p>
            </div>
          </div>
        </div>

        {/* SIGNUP FORM - LEFT SIDE */}
        <div className="w-full lg:w-1/2 p-4 sm:p-8 flex flex-col">
          {/* LOGO */}
          <div className="mb-4 flex items-center justify-start gap-2">
            <span className="text-3xl font-bold font-mono text-blue-600 tracking-wider">
              V-Connect
            </span>
          </div>

          {/* ERROR MESSAGE */}
          {error && (
            <div className="alert alert-error mb-4">
              <span>{error.response.data.message}</span>
            </div>
          )}

          <div className="w-full">
            <form onSubmit={handleSignup}>
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl font-semibold text-blue-600">Create an Account</h2>
                  <p className="text-sm text-blue-500">
                    Join V-Connect and start your language learning adventure!
                  </p>
                </div>

                <div className="space-y-3">
                  {/* FULLNAME */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-blue-600">Full Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="input input-bordered w-full"
                      value={signupData.fullName}
                      onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })}
                      required
                    />
                  </div>

                  {/* EMAIL */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-blue-600">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="john@gmail.com"
                      className="input input-bordered w-full"
                      value={signupData.email}
                      onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                      required
                    />
                  </div>

                  {/* PASSWORD */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-blue-600">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="********"
                      className="input input-bordered w-full"
                      value={signupData.password}
                      onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                      required
                    />
                    <p className="text-xs text-blue-600 mt-1">
                      Password must be at least 6 characters long
                    </p>
                  </div>

                  {/* TERMS */}
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start gap-2">
                      <input type="checkbox" className="checkbox checkbox-sm border-black accent-black" required />
                      <span className="text-xs text-blue-500 leading-tight">
                        I agree to the{" "}
                        <span className="text-blue-600 hover:underline">terms of service</span> and{" "}
                        <span className="text-blue-600 hover:underline">privacy policy</span>
                      </span>
                    </label>
                  </div>
                </div>

                {/* BUTTON */}
                <button className="btn bg-blue-600 text-white hover:bg-black rounded-full transition duration-300 w-full" type="submit">
                  {isPending ? (
                    <>
                      <span className="loading loading-spinner loading-xs"></span>
                      Loading...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </button>



                {/* LOGIN LINK */}
                <div className="text-center mt-4">
                  <p className="text-sm text-blue-600">
                    Already have an account?{" "}
                    <Link to="/login" className="hover:underline font-medium">
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE AND TEXT */}
        {/*<div className="hidden lg:flex w-full lg:w-1/2 bg-blue-100 items-center justify-center">
          <div className="max-w-md p-8">
            <div className="relative aspect-square max-w-sm mx-auto">
              <img src="/V-connect_Call.png" alt="Language connection illustration" className="w-full h-full" />
            </div>

            <div className="text-center space-y-3 mt-6">
              <h2 className="text-xl font-semibold text-blue-600">Connect with language partners worldwide</h2>
              <p className="text-blue-500">
                Practice conversations, make friends, and improve your language skills together
              </p>
            </div>
          </div>
        </div>*/}
      </div>
    </div>
  );
};

export default SignUpPage;
