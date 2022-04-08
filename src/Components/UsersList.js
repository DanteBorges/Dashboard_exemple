import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@material-tailwind/react/Button";

function UsersList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    ReadUsers();
  }, []);

  const ReadUsers = () => {
    fetch("https://www.mecallapi.com/api/users")
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      });
  };

  const UpdateUser = (id) => {
    window.location = "/update/" + id;
  };

  const DeleteUser = (id) => {
    var data = {
      id: id,
    };
    fetch("https://www.mecallapi.com/api/users/delete", {
      method: "DELETE",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result["message"]);
        if (result["status"] === "ok") {
          ReadUsers();
        }
      });
  };
  return (
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto">
        <div className=" pt-2 pb-18 rounded-lg shadow-lg-rose bg-gradient-to-tr from-rose-300 to-rose-500 container mx-auto max-w-full">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="lg:flex lg:items-center lg:justify-between py-2">
              <div class="flex-2 min-w-0"></div>
              <div class="mt-2 flex lg:mt-0 lg:ml-4">
                <span class="hidden sm:block">
                  <Link to="/create">
                    <Button
                      color="purple"
                      buttonType="filled"
                      size="lg"
                      rounded={false}
                      block={false}
                      iconOnly={false}
                      ripple="light"
                    >
                      Criar
                    </Button>
                  </Link>
                </span>
              </div>
            </div>
            <div class="shadow overflow-hidden border-b  sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="px-10 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      class="px-10 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Nome
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>

                    <th scope="col" class="relative px-6 py-1">
                      <span class="sr-only">Editar</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.ID}>
                      <td class="px-10 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-500">{user.id}</div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 h-10 w-10">
                            <img
                              class="h-10 w-10 rounded-full"
                              src={user.avatar}
                              alt=""
                            />
                          </div>
                          <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900">
                              <span> {user.fname}</span>{" "}
                              <span>{user.lname}</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-500">{user.username}</div>
                      </td>
                      <td class="px-6 py-4 space-x-2 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => UpdateUser(user.id)}
                          class="inline-block text-sm px-4 py-2 leading-none border rounded text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white mt-4 lg:mt-0"
                        >
                          EDITAR
                        </button>
                        <button
                          onClick={() => DeleteUser(user.id)}
                          class="inline-block text-sm px-4 py-2 leading-none border rounded text-red-600 border-red-600 hover:bg-red-600 hover:text-white mt-4 lg:mt-0"
                        >
                          DELETAR
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersList;
