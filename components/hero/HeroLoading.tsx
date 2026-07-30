export default function HeroLoading() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-4">
                <div className="h-4 w-6 bg-gray-300 rounded"></div>
              </th>

              <th className="px-6 py-4">
                <div className="h-4 w-16 bg-gray-300 rounded"></div>
              </th>

              <th className="px-6 py-4">
                <div className="h-4 w-24 bg-gray-300 rounded"></div>
              </th>

              <th className="px-6 py-4">
                <div className="h-4 w-24 bg-gray-300 rounded"></div>
              </th>

              <th className="px-6 py-4">
                <div className="h-4 w-16 bg-gray-300 rounded"></div>
              </th>

              <th className="px-6 py-4">
                <div className="h-4 w-20 bg-gray-300 rounded"></div>
              </th>

              <th className="px-6 py-4">
                <div className="h-4 w-20 bg-gray-300 rounded"></div>
              </th>
            </tr>
          </thead>

          <tbody>

            {[1, 2, 3, 4, 5].map((item) => (
              <tr key={item} className="border-b">

                <td className="px-6 py-4">
                  <div className="h-4 w-6 bg-gray-200 rounded"></div>
                </td>

                <td className="px-6 py-4">
                  <div className="w-20 h-14 bg-gray-200 rounded-lg"></div>
                </td>

                <td className="px-6 py-4">
                  <div className="h-4 w-32 bg-gray-200 rounded"></div>
                </td>

                <td className="px-6 py-4">
                  <div className="h-4 w-28 bg-gray-200 rounded"></div>
                </td>

                <td className="px-6 py-4">
                  <div className="h-4 w-10 bg-gray-200 rounded"></div>
                </td>

                <td className="px-6 py-4">
                  <div className="h-8 w-20 bg-gray-200 rounded-full"></div>
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    <div className="h-9 w-16 bg-gray-200 rounded-lg"></div>
                    <div className="h-9 w-16 bg-gray-200 rounded-lg"></div>
                  </div>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}