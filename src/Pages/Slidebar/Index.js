import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";

const user = {
  name: "USER",
  email: "USER@example.com",
  imageUrl: "https://cdn-icons-png.flaticon.com/512/1721/1721930.png",
};
const navigation = [
  { name: "Dashboard", href: "/dashboard", current: false },
  { name: "Lotes", href: "/lotes", current: false },
  { name: "Usuarios", href: "/usuarios", current: false },
];
const userNavigation = [
  { name: "Seu perfil", href: "#" },
  { name: "Configurações", href: "#" },
  { name: "Sair", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Slidebar() {
  const location = useLocation().pathname;

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className=" shadow-md bg-gradient-to-tr from-sky-300 to-sky-500  ">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="hidden md:block">
                      <div className=" flex items-baseline space-x-4">
                        <NavLink
                          to="/dashboard"
                          className={({ isActive }) =>
                            isActive
                              ? "rounded-lg text-lg w-32 flex justify-center font-semibold  text-sky-500 bg-white p-2 "
                              : "text-black text-lg w-32 flex justify-center font-semibold  hover:bg-white hover:text-sky-500 hover:rounded-lg p-2"
                          }
                        >
                          Dashboard
                        </NavLink>
                        <NavLink
                          to="lotes"
                          className={({ isActive }) =>
                            isActive
                              ? "rounded-lg text-lg w-32 flex justify-center font-semibold text-sky-500 bg-white p-2 "
                              : "text-black text-lg w-32 flex justify-center font-semibold  hover:bg-white hover:text-sky-500 hover:rounded-lg p-2"
                          }
                        >
                          Lotes
                        </NavLink>
                        <NavLink
                          to="usuarios"
                          className={({ isActive }) =>
                            isActive
                              ? "rounded-lg text-lg w-32 flex justify-center font-semibold text-sky-500 bg-white p-2 "
                              : "text-black text-lg w-32 flex justify-center font-semibold  hover:bg-white hover:text-sky-500 hover:rounded-lg p-2"
                          }
                        >
                          Usuários
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      {/* Profile dropdown */}
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full bg-white"
                              src={user.imageUrl}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? "bg-sky-300" : "",
                                      "block px-4 py-2 text-sm text-black"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-sky-400 inline-flex items-center justify-center p-2 rounded-md text-violet-500 hover:text-violet-700 hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-black hover:bg-sky-400 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-black">
                        {user.email}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 px-2 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-white hover:bg-sky-400"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <header >
          {/* <div className=" font-bold text-2xl max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            {location === "/dashboard"
              ? "Dashboard"
              : location.toUpperCase().replace("/", "")}
          </div> */}
        </header>
        <main>
          <div className=" mx-auto py-3 sm:px-6 lg:px-8">
          </div>
        </main>
      </div>
    </>
  );
}
