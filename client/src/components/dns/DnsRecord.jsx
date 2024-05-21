import React from 'react';

const DnsRecord = () => {
    // Dummy data for demonstration
    const records = [
        { id: 1, song: "The Sliding Mr. Bones (Next Stop, Pottersville)", artist: "Malcolm Lockyer", year: 1961 },
        { id: 2, song: "Witchy Woman", artist: "The Eagles", year: 1972 },
        { id: 3, song: "Shining Star", artist: "Earth, Wind, and Fire", year: 1975 }
    ];

    const handleUpdate = (id) => {
        // Handle update logic here
        console.log("Update record with ID:", id);
    }

    const handleDelete = (id) => {
        // Handle delete logic here
        console.log("Delete record with ID:", id);
    }

    return (
        <table className="table-auto shadow-lg w-full border-collapse border border-gray-200 mt-5">
            <thead>
                <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">Song</th>
                    <th className="border border-gray-300 px-4 py-2">Artist</th>
                    <th className="border border-gray-300 px-4 py-2">Year</th>
                    <th className="border border-gray-300 px-4 py-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {records.map(record => (
                    <tr key={record.id}>
                        <td className="border border-gray-300 px-4 py-2">{record.song}</td>
                        <td className="border border-gray-300 px-4 py-2">{record.artist}</td>
                        <td className="border border-gray-300 px-4 py-2">{record.year}</td>
                        <td className="border border-gray-300 px-4 py-2">
                            <button className="bg-blue-500 text-white font-semibold py-1 px-2 rounded-lg mr-2 hover:bg-blue-600 transition duration-300" onClick={() => handleUpdate(record.id)}>
                                Update
                            </button>
                            <button className="bg-red-500 text-white font-semibold py-1 px-2 rounded-lg hover:bg-red-600 transition duration-300" onClick={() => handleDelete(record.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default DnsRecord;
