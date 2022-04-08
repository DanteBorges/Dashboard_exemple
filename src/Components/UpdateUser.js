
 
 import React, { useState, useEffect } from "react";
 import { useParams } from 'react-router-dom';
  
 function UpdateUser() {
     const { id } = useParams();
  
    useEffect(() => {
      fetch("https://www.mecallapi.com/api/users/"+id)
        .then(res => res.json())
        .then(
          (result) => {
            setFname(result.user.fname)
            setLname(result.user.lname)
            setUsername(result.user.username)
            setEmail(result.user.email)
            setAvatar(result.user.avatar)
          }
        )
    }, [id])
     const handleSubmit = event => {
      event.preventDefault();
      var data = {
        'id': id,
        'fname': fname,
        'lname': lname,
        'username': username,
        'email': email,
        'avatar': avatar,
      }
      fetch('https://www.mecallapi.com/api/users/update', {
        method: 'PUT',
        headers: {
          Accept: 'application/form-data',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(res => res.json())
      .then(
        (result) => {
          alert(result['message'])
          if (result['status'] === 'ok') {
            window.location.href = '/';
          }
        }
      )
    }
     const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');
     return (
        <form class="w-full max-w-lg mx-auto my-20" onSubmit={handleSubmit}>
        <div class="flex flex-wrap mx-3 mb-2">
            <div class="w-full md:w-1/2 px-3 mb-3 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                First Name
            </label>
            <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
            type="text"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            label="First Name"
            />
               
           
            </div>
            <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name">
                Last Name
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name"
            type="text" value={lname}
            onChange={(e) => setLname(e.target.value)}
            label="Last Name"
            />
            </div>
        </div>
        <div class="flex flex-wrap mx-3 mb-2">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Email Address
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
                type="email"  value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                />
            </div>
            <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Username
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name"
            label="Username"
            onChange={(e) => setUsername(e.target.value)}
            type="text" value={username}
            />
            </div>
        </div>
        <div class="flex flex-wrap mx-3 mb-1">
            <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-image">
                Avatar
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-image" type="text"
            value={avatar}
            label="Avatar"
            onChange={(e) => setAvatar(e.target.value)}
            />
            </div>
        </div>
        <button type="submit" class="inline-flex items-center ml-8 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Update
        </button>
       
        </form>
    )
 }
  
 export default UpdateUser;