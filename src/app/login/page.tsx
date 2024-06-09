export default function Login() {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center justify-center">
        <div className="flex w-1/3 flex-col gap-20">
          <div className="flex w-full flex-col items-center justify-center">
            <p className="text-5xl font-medium">Login</p>
          </div>
          <div className="flex w-full flex-col gap-10">
            <div className="flex w-full flex-col">
              <label className="mb-2 block text-sm font-bold text-gray-700">
                Username
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded-xl border px-3 py-2 leading-tight text-gray-500 shadow focus:outline-none"
                id="username"
                type="text"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="mb-2 block text-sm font-bold text-gray-700">
                Password
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded-xl border px-3 py-2 leading-tight text-gray-500 shadow focus:outline-none"
                id="password"
                type="password"
                placeholder="************"
              />
            </div>
            <div className="flex w-full items-center gap-2">
              <input type="checkbox" id="remember" name="remember" />
              <label htmlFor="remember" className="text-base">
                Remember me
              </label>
            </div>
            <button className="focus:shadow-outline w-full rounded-xl bg-reddish-brown px-4 py-2 font-semibold text-white hover:bg-red-900 focus:outline-none">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
