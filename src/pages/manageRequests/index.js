import Navbar from '@/components/Navbar';
import React from 'react';

const staticRequests = [
  {
    id: 1,
    requesterName: "John Doe",
    carModel: "Toyota Camry",
    pickupLocation: "123 Main St",
    destination: "456 Elm St",
    timestamp: "2024-04-19 10:00 AM"
  },
  {
    id: 2,
    requesterName: "Jane Smith",
    carModel: "Honda Accord",
    pickupLocation: "789 Oak St",
    destination: "101 Pine St",
    timestamp: "2024-04-19 11:00 AM"
  }
];

const DriveRequestCard = ({ request }) => {
  const { id, requesterName, carModel, pickupLocation, destination, timestamp } = request;

  const handleApprove = () => {
    // Handle approve logic
    console.log(`Request ${id} has been approved`);
  };

  const handleDeny = () => {
    // Handle deny logic
    console.log(`Request ${id} has been denied`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <h3 className="text-lg font-semibold mb-2">Request ID: {id}</h3>
      <p className="text-gray-600">Driver Name: {requesterName}</p>
      <p className="text-gray-600">Plate Numbers: {carModel}</p>
      <p className="text-gray-600">Plate Letters: {pickupLocation}</p>
      <p className="text-gray-600">Reason of entrance: {destination}</p>
      <p className="text-gray-600">Entry Date: {timestamp}</p>
      <p className="text-gray-600">Departure Date: {timestamp}</p>
      <p className="text-gray-600">Entry Time: {timestamp}</p>
      <p className="text-gray-600">Departure Time: {timestamp}</p>
      <p className="text-gray-600">Driving License: <img></img></p>



      <div className="mt-4 flex justify-end">
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mr-2" onClick={handleApprove}>Approve</button>
        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded" onClick={handleDeny}>Deny</button>
      </div>
    </div>
  );
};

const DriveRequests = () => {
  return (
    <>
    <Navbar/>
    <div className="drive-requests">
      <h2 className="text-white text-2xl font-semibold mb-4 text-center">Entrance Requests</h2>
      {staticRequests.map(request => (
        <DriveRequestCard key={request.id} request={request} />
      ))}
    </div>
    </>
    
  );
};

export default DriveRequests;
