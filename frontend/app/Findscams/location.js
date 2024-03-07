
'use client'
import { useState,useContext } from 'react';
import useUserLocation from '../helpers/locationHook';
import { useAuth } from '../context/AuthContext';

const LocationComponent = () => {
    // const [district, setDistrict] = useState('');
    const auth = useAuth();

  const [fetchLocation, setFetchLocation] = useState(false);
  const { latitude, longitude, error } = useUserLocation(fetchLocation);
  const fetchDistrict = async () => {
    
    console.log(latitude, longitude);
    if (latitude && longitude) {
      const districtName = await getDistrictFromCoordinates(latitude, longitude);
      auth.setDistrict(districtName);
    }
  };  

  const onClick = () => {
    setFetchLocation(true); 
  
   
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!fetchLocation || latitude === null || longitude === null) {
    return (
      <div 
      className="flex justify-center items-center"
      >
    <button onClick={onClick} className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400">
        Get Location
    </button>
</div>

    );
  }
  const getDistrictFromCoordinates = async (latitude, longitude) => {
    const apiKey = 'AIzaSyCpuVAfjf-4KzBI3o2h6I_p69SeAWTUtG4';
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === 'OK') {
        const addressComponents = data.results[0].address_components;
        const districtComponent = addressComponents.find(component => 
          component.types.includes('administrative_area_level_2'));
        return districtComponent ? districtComponent.long_name : 'District not found';
      } else {
        return 'Error fetching district';
      }
    } catch (error) {
      return 'Error fetching district';
    }
  };
  

  return (
    // <div
    // //  className="p-4 bg-gray-100 rounded-md shadow-md"
    //  >
    // {/* <p className="text-gray-700">Latitude: {latitude}</p>
    // <p className="text-gray-700">Longitude: {longitude}</p>
    // {auth.district && <p className="text-gray-700">District: {auth.district}</p>} */}
    <div className="flex justify-center items-center">
       
        <button onClick={fetchDistrict} className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
            Get District
        </button>
    </div>
// {/* </div> */}

  );
};

export default LocationComponent;