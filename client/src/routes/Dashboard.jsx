import React from 'react'
import DnsRecord from '../components/dns/DnsRecord'
const Dashboard = () => {
    return (
        <div className="w-screen">
            <div className='flex justify-center text-4xl bg-gradient-to-r from-orange-400 via-green-400 to-yellow-500 font-bold bg-clip-text text-transparent mt-5'>
                <h1>Dns Dashboard</h1>
            </div>
            <div className="flex justify-around space-x-4 bg-white p-6 rounded-lg">
                <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
                    Create Record
                </button>
                <input
                    type="text"
                    placeholder="Search"
                    className="p-2 indent-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                />
            </div>
            <div className='flex justify-center w-full'>
                <DnsRecord />
            </div>
        </div>
    )
}

export default Dashboard