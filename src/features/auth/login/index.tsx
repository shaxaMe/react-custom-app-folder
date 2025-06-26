import Waves from "@/components/ui/waves";
import LogoFull from "@/assets/icons/logo-full.svg?react";
import { Input } from "antd";
import { useNavigate, Navigate, useSearchParams } from "react-router-dom";
import { paths } from "@/config/path/path";
import { useAuthStore } from "../store/auth";
import { useNotificationContext } from "@/context/notification";
import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";

const Login = () => {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo");
  const navigate = useNavigate();
  const { authLogin } = useAuthStore();
  const { notify } = useNotificationContext();
  const [loading, setLoading] = useState(false);
  const { isAuthenticated } = useAuth();

  // Redirect if already authenticated
  if (isAuthenticated) {
    return <Navigate to={redirectTo || paths.home.getHref()} replace />;
  }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      const auth = {
        user: {
          id: "1",
          name: "Shahzodbek",
          email: "ismatovshahzod43@gmail.com",
          role: "admin",
        },
        accessToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6IlNoYWh6b2RiZWsiLCJpYXQiOjE1MTYyMzkwMjJ9.example",
        refreshToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6IlNoYWh6b2RiZWsiLCJpYXQiOjE1MTYyMzkwMjJ9.refresh",
        isAuthenticated: true,
      };

      authLogin(auth);

      notify({
        type: "success",
        message: "Login successful",
        description: "Welcome back, Shahzodbek!",
        duration: 3,
      });

      navigate(redirectTo || paths.home.getHref());
      setLoading(false);
    }, 1000);
  }

  return (
    <>
      <div className="relative bg-black h-screen w-full flex justify-center items-center">
        <Waves
          className="absolute top-0 left-0 w-full h-full z-10"
          lineColor="blue"
          backgroundColor="rgba(22, 17, 226, 0.45)"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={22}
          yGap={36}
        />
        <div className="flex bg-white w-fit max-w-[450px] relative z-20 rounded-2xl flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <LogoFull className="mx-auto h-10 w-auto" />
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm/6 font-medium text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed">
                  {loading ? "Signing in..." : "Sign in"}
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm/6 text-gray-500">
              Not a member?
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500">
                Start a 14 day free trial
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
