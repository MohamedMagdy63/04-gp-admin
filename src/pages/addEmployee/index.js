"use client"
import { gql, useApolloClient, useMutation } from '@apollo/client';
// AddEmployee.js
import React, { useState } from 'react';
import { SignUp } from '../../gql/Mutation'
import { useRouter } from 'next/router';

function AddEmployee() {
  const [ values, setValues ] = useState()
  const router = useRouter()
  const client = useApolloClient()
  const [signUp,{loading,error}] = useMutation(SignUp,
    {
      onCompleted:(data)=>{
        localStorage.setItem("Token",data.signUp)
        client.writeQuery({query:gql` {
          isLoggedIn @client }
          `,data: { isLoggedIn: true }})
        router.push('/',{})
      }
    })
    
  return (
    <div className='text-white'>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" 
          onSubmit={(e)=>{
            e.preventDefault()
            signUp({variables:values})
          }}>
            <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    placeholder='Name'
                    required
                    className="block w-full outline-none p-2 rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inse ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e)=>{
                      setValues({
                        ...values,
                        [e.target.name]: e.target.value
                      })
                    }}
                  />
                </div>
            </div>
            <div>
                <label htmlFor="Phone Number" className="block text-sm font-medium leading-6 text-white">
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    pattern="^01[0-2]\d{1,8}$"
                    required
                    placeholder='Phone Number'
                    className="block w-full outline-none p-2 rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e)=>{
                      setValues({
                        ...values,
                        [e.target.name]: e.target.value
                      })
                    }}
                  />
                </div>
            </div>
            <div>
                <label htmlFor="Address" className="block text-sm font-medium leading-6 text-white">
                  Address
                </label>
                <div className="mt-2">
                  <input
                    id="Address"
                    name="address"
                    type="text"
                    placeholder='Address'
                    required
                    className="block w-full outline-none p-2 rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e)=>{
                      setValues({
                        ...values,
                        [e.target.name]: e.target.value
                      })
                    }}
                  />
                </div>
            </div>
            <div>
                <label htmlFor="age" className="block text-sm font-medium leading-6 text-white">
                  Age
                </label>
                <div className="mt-2">
                  <input
                    id="age"
                    name="age"
                    type="number"
                    placeholder='Age'
                    required
                    className="block w-full outline-none p-2 rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e)=>{
                      setValues({
                        ...values,
                        [e.target.name]: parseInt(e.target.value)
                      })
                    }}
                  />
                </div>
            </div>
            <div>
                <label htmlFor="Role" className="block text-sm font-medium leading-6 text-white">
                  Role
                </label>
                <div className="mt-2">
                <select id="roles" name="role"
                  className="block w-full outline-none p-2 rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                  onChange={(e)=>{
                    setValues({
                      ...values,
                      [e.target.name]: parseInt(e.target.value)
                    })
                  }}
                >
                  <option value="">Choose the role</option>
                  <option value="0">Manger</option>
                  <option value="1">Employee</option>
                </select>
                </div>
            </div>
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-white">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="username"
                  placeholder='Username'
                  required
                  className="block w-full outline-none p-2 rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e)=>{
                    setValues({
                      ...values,
                      [e.target.name]: e.target.value
                    })
                  }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  placeholder='Password'
                  name="password"
                  type="password"
                  required
                  className="block w-full outline-none p-2 rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e)=>{
                    setValues({
                      ...values,
                      [e.target.name]: e.target.value
                    })
                  }}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#A34343] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#e27c7c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                ADD Employee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;