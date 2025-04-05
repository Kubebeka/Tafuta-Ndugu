import React, { useState } from 'react';

const sampleData = [
  {
    surname: 'Mwanjala',
    firstName: 'Asha',
    region: 'Dar es Salaam',
    lastSeen: 'Kariakoo',
    contact: '+255 712 345 678',
  },
  {
    surname: 'Mwanjala',
    firstName: 'Omary',
    region: 'Dodoma',
    lastSeen: 'Majengo',
    contact: '+255 713 111 222',
  },
  {
    surname: 'Mrema',
    firstName: 'Rehema',
    region: 'Arusha',
    lastSeen: 'Sanawari',
    contact: '+255 714 555 666',
  },
];

export default function TafutaNduguApp() {
  const [surname, setSurname] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filtered = sampleData.filter(person =>
      person.surname.toLowerCase() === surname.toLowerCase()
    );
    setResults(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Tafuta Ndugu / Find Relatives</h1>

        <label className="block mb-2 font-medium">Jina la Ukoo / Surname</label>
        <input
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          className="w-full border border-gray-300 rounded p-2 mb-4"
          placeholder="Andika jina la ukoo... / Enter surname..."
        />
        <button
          onClick={handleSearch}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Tafuta / Search
        </button>

        {results.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Matokeo / Results</h2>
            {results.map((person, index) => (
              <div key={index} className="bg-gray-50 border p-3 rounded mb-2">
                <p><strong>Jina / Name:</strong> {person.firstName} {person.surname}</p>
                <p><strong>Mkoa / Region:</strong> {person.region}</p>
                <p><strong>Mara ya Mwisho Kuonekana / Last Seen:</strong> {person.lastSeen}</p>
                <p><strong>Mawasiliano / Contact:</strong> {person.contact}</p>
              </div>
            ))}
          </div>
        )}

        {results.length === 0 && surname && (
          <p className="mt-4 text-center text-red-600">Hakuna matokeo / No results found</p>
        )}
      </div>
    </div>
  );
}
