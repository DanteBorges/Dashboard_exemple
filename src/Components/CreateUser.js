import React, { useState } from "react";
import Button from "@material-tailwind/react/Button";

function CreateUser() {
  const handleSubmit = (event) => {
    event.preventDefault();
    var data = {
      fname: fname,
      lname: lname,
      username: username,
      email: email,
      avatar: avatar,
    };

    fetch("https://www.mecallapi.com/api/users/create", {
      method: "POST",
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
          window.location.href = "/usuarios";
        }
      });
  };
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");

  return (
    <form class="w-full max-w-lg mx-auto my-20" onSubmit={handleSubmit}>
      <div class=" pt-10 pb-5 rounded-lg shadow-lg-purple bg-gradient-to-tr from-purple-400 to-purple-500 container mx-auto max-w-full">
        <div class="flex flex-wrap mx-3 mb-2">
          <div class="w-full md:w-1/2 px-3 mb-3 md:mb-0">
            <label
              class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Primeiro Nome
            </label>
            <input
              class="rounded-lg shadow appearance-none block w-full bg-white text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
              id="grid-first-name"
              type="text"
              placeholder="Primeiro Nome"
              onChange={(e) => setFname(e.target.value)}
              label="First Name"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Ultimo nome
            </label>
            <input
              class="rounded-lg shadow appearance-none block w-full bg-white text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
              id="grid-last-name"
              type="text"
              placeholder="Ultimo nome"
              onChange={(e) => setLname(e.target.value)}
              label="Last Name"
            />
          </div>
        </div>
        <div class="flex flex-wrap mx-3 mb-2">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Endereço de email
            </label>
            <input
              class="rounded-lg shadow appearance-none block w-full bg-white text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
              id="grid-first-name"
              type="email"
              placeholder="Endereço de Email "
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Nome de usuário
            </label>
            <input
              class="rounded-lg shadow appearance-none block w-full bg-white text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
              id="grid-last-name"
              label="Username"
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="janeDoe"
            />
          </div>
        </div>
        <div class="flex flex-wrap mx-3 mb-1">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
              for="grid-image"
            >
              Avatar
            </label>
            <input
              class="rounded-lg shadow appearance-none block w-full bg-white text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
              id="grid-image"
              type="text"
              placeholder="link da Imagem "
              label="Avatar"
              onChange={(e) => setAvatar(e.target.value)}
            />
          </div>
        </div>
        <div className="p-5 c">
          <Button
            color="lightBlue"
            buttonType="filled"
            size="lg"
            rounded={false}
            block={true}
            iconOnly={false}
            ripple="light"
          >
            Cadastrar
          </Button>
        </div>
      </div>
    </form>
  );
}

export default CreateUser;
