import React from "react";

const UserCard = ({ user,index}) => {
  return (
    <div>
      <div className="grid lg:grid-cols-6 grid-cols-1 px-28  ">
        <div>
          <h1 className="border  h-10  pl-2">{ index}</h1>
        </div>
        <div>
          <h1 className="border h-10  pl-2">{user.fullName}</h1>
        </div>
        <div>
          <h1 className="border  h-10 pl-2 ">{user.email}</h1>
        </div>
        <div>
          <h1 className="border  h-10 pl-2">{user.phone}</h1>
        </div>
        <div>
          <h1 className="border  h-10 pl-2">{user.paidAmount}</h1>
        </div>
        <div>
          <h1 className="border  h-10 ">
            <tr class="whitespace-nowrap">
            <td className="pl-3 py-2">
              <a
                href="#"
                class="px-4 py-1 mb-2 text-sm text-blue-600 bg-blue-200 rounded-full"
              >
                Edit
              </a>
            </td>
            <td class="px-6 ">
              <a
                href="#"
                class="px-4 py-1 text-sm text-red-400 bg-red-200 rounded-full"
              >
                Delete
              </a>
            </td>
            </tr>
           
          </h1>
        </div>
      </div>
      {/* <div class="container flex justify-center mx-auto">
        <div class="flex flex-col">
          <div class="w-full">
            <div class="border-b border-gray-200 shadow">
              <table class="divide-y divide-gray-300 ">
                <tbody class="bg-white divide-y divide-gray-300">
                  <tr class="whitespace-nowrap">
                    <td class="px-6 py-4 text-sm text-gray-500">1</td>
                    <td class="px-6 py-4">
                      <div class="text-sm text-gray-900">Jon doe</div>
                    </td>
                    <td class="px-6 py-4">
                      <div class="text-sm text-gray-500">
                       {user.email}
                      </div>
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">2021-1-12</td>
                    <td class="px-6 py-4">
                      <a
                        href="#"
                        class="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full"
                      >
                        Edit
                      </a>
                    </td>
                    <td class="px-6 py-4">
                      <a
                        href="#"
                        class="px-4 py-1 text-sm text-red-400 bg-red-200 rounded-full"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default UserCard;
