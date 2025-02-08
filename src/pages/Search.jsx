import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import maharashtraData from "../../public/data/citidata"

const SearchMarriageProfiles = () => {
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [talukas, setTalukas] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedTaluka, setSelectedTaluka] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    setStates([maharashtraData.state]);
    setSelectedState(maharashtraData.state);
  }, []);

  useEffect(() => {
    if (selectedState) {
      const districtNames = maharashtraData.districts.map(d => d.name);
      setDistricts(districtNames);
      setSelectedDistrict('');
      setSelectedTaluka('');
      setSelectedCity('');
    }
  }, [selectedState]);

  useEffect(() => {
    if (selectedDistrict) {
      const district = maharashtraData.districts.find(d => d.name === selectedDistrict);
      if (district) {
        const talukaList = district.talukas.map(t => t.name);
        setTalukas(talukaList);
      }
      setSelectedTaluka('');
      setSelectedCity('');
    }
  }, [selectedDistrict]);

  useEffect(() => {
    if (selectedDistrict && selectedTaluka) {
      const district = maharashtraData.districts.find(d => d.name === selectedDistrict);
      if (district) {
        const taluka = district.talukas.find(t => t.name === selectedTaluka);
        if (taluka) {
          setCities(taluka.cities);
        }
      }
      setSelectedCity('');
    }
  }, [selectedTaluka, selectedDistrict]);

  const handleSearch = () => {
    console.log('Search profiles with:', { 
      selectedState, 
      selectedDistrict, 
      selectedTaluka, 
      selectedCity 
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">विवाह प्रोफाइल शोधा</h2>
      
      <div className="flex gap-4 items-end flex-wrap">
        {/* State Selection */}
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-gray-700 mb-1">राज्य</label>
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {states.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>

        {/* District Selection */}
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-gray-700 mb-1">जिल्हा</label>
          <select
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">जिल्हा निवडा</option>
            {districts.map(district => (
              <option key={district} value={district}>{district}</option>
            ))}
          </select>
        </div>

        {/* Taluka Selection */}
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-gray-700 mb-1">तालुका</label>
          <select
            value={selectedTaluka}
            onChange={(e) => setSelectedTaluka(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">तालुका निवडा</option>
            {talukas.map(taluka => (
              <option key={taluka} value={taluka}>{taluka}</option>
            ))}
          </select>
        </div>

        {/* City Selection */}
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-gray-700 mb-1">शहर</label>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">शहर निवडा</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center flex-shrink-0"
        >
          <FaSearch className="mr-2" /> शोधा
        </button>
      </div>
    </div>
  );
};

export default SearchMarriageProfiles;