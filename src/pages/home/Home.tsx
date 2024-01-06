import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Photo {
  id: number;
  thumbnailUrl: string;
  title: string;
}

const HomePage = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        setPhotos(response.data);
      })
      .catch(error => console.error('Error fetching photos:', error));
  }, []);

  return (
    <div>
      {/* Navigation Bar here */}
      <div className="photo-feed">
        {photos.map((photo: Photo) => (
          <div key={photo.id} className="photo-item">
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
      {/* Other components here */}
    </div>
  );
};

export default HomePage;
