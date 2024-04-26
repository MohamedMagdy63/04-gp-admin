import Navbar from '@/components/Navbar';
import { ChengeState } from '@/gql/Mutation';
import { GET_ALL_REQUSETS, GET_CURRENT_USER } from '@/gql/Query';
import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import React, { useState } from 'react';


const DriveRequestCard = ({ request }) => {
  const [chengeState] = useMutation(ChengeState,{
    refetchQueries:[GET_ALL_REQUSETS],
  })

  const { ordersID, 
          ownerName, 
          reason, 
          carType, 
          arriveTime, 
          leaveTime,
          carNumber, 
          carText,
          licenseImage,
          email } = request;

  const handleApprove = (ordersID,status) => {
    // Handle approve logic
    chengeState({
      variables:{
        ordersId: ordersID,
        status: status
      }
    })
  };

  const handleDeny = (ordersID,status) => {
    // Handle deny logic
    chengeState({
      variables:{
        ordersId: ordersID,
        status: status
      }
    })
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <h3 className="text-lg font-semibold mb-2">Request ID: {ordersID}</h3>
      <p className="text-gray-600">Driver Name: {ownerName}</p>
      <p className="text-gray-600">Driver Email: {email}</p>
      <p className="text-gray-600">Plate Numbers: {carNumber}</p>
      <p className="text-gray-600">Plate Letters: {carText}</p>
      <p className="text-gray-600">Car Type: {carType}</p>
      <p className="text-gray-600">Reason of entrance: {reason}</p>
      <p className="text-gray-600">Entry Date: {new Date(arriveTime).getDate()}-{new Date(arriveTime).getMonth()+1}-{new Date(arriveTime).getFullYear()}</p>
      <p className="text-gray-600">Entry Time: {new Date(arriveTime).getHours()}:{new Date(arriveTime).getMinutes()}</p>
      <p className="text-gray-600">Departure Date: {new Date(leaveTime).getDate()}-{new Date(leaveTime).getMonth()+1}-{new Date(leaveTime).getFullYear()}</p>
      <p className="text-gray-600">Departure Time: {new Date(leaveTime).getHours()}:{new Date(leaveTime).getMinutes()}</p>
      <p className="text-gray-600">Driving License: <a href={process.env.NEXT_APP_IMAGE_URL + licenseImage} target='_blank'><img src={process.env.NEXT_APP_IMAGE_URL + licenseImage} alt="licence" className='object-contain w-[30%] h-[30%]' /></a></p>



      <div className="mt-4 flex justify-end">
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mr-2" onClick={()=>{handleApprove(ordersID,1)}}>Approve</button>
        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded" onClick={()=>{handleDeny(ordersID,0)}}>Deny</button>
      </div>
    </div>
  );
};

const DriveRequests = () => {
  const router = useRouter()
  const { data: userData, loading: userLoading, error:userError } = useQuery(GET_CURRENT_USER,{
    variables:{employeesId: typeof window !== "undefined" && window.localStorage.getItem("Token")}
  })
  const {data,loading,error} = useQuery(GET_ALL_REQUSETS,{
    pollInterval:500
  })
  if(loading) return <p>Loading....</p>
  if(error) return <p>Error! {console.error(error)}</p>

  if(userLoading) return <p>Loading....</p>
  if(userError) router.push('/login')
  if(userData && userData.me.role === 0) router.push('/authorized')

  if(userData && userData.me.role === 1) return (
    <>
    <Navbar/>
    <div className="drive-requests">
      <h2 className="text-white text-2xl font-semibold mb-4 text-center">Entrance Requests</h2>
      {data.ordersByState.map(request => (
        <DriveRequestCard key={request.ordersID} request={request} />
      ))}
    </div>
    </>
    
  );
};

export default DriveRequests;
