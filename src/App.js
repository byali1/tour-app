import { useEffect, useState } from 'react';
import './App.css';
import Loading from './Loading';
import TourCard from './TourCard';

function App() {

  const url = 'http://localhost:5000/api/react-tours-project';

  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState(null);

  const removeTour = (id) => {
    const index = tours.findIndex(tour => tour.id === id);

    if (index !== -1) {
      const updatedTours = [...tours]; 
      updatedTours.splice(index, 1);   
      setTours(updatedTours);          
    }
  }

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert(`An error occurred while fetching. ${error.message}`);
    }
  }

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <Loading />
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        {tours.map((tour) => (
          <TourCard key={tour.id} id={tour.id} name={tour.name} info={tour.info} image={tour.image} price={tour.price} 
          notInterested={removeTour} />
        ))}
      </div>
    </div>
  );


}

export default App;
