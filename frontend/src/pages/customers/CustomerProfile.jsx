import { useSelector } from "react-redux";

export default function CustomerProfile() {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen bg-[#F8F5F0] py-12 px-6">

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-[#2C2C2C]">
          My Profile
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your Bookify account
        </p>

        <div className="mt-8 space-y-5">

          <div>
            <label className="text-sm text-gray-500">
              Name
            </label>

            <div className="mt-1 border rounded-xl px-4 py-3">
              {userInfo?.name}
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-500">
              Email
            </label>

            <div className="mt-1 border rounded-xl px-4 py-3">
              {userInfo?.email}
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-500">
              Role
            </label>

            <div className="mt-1 border rounded-xl px-4 py-3 capitalize">
              {userInfo?.role}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}