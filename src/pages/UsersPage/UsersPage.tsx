import  {FC, useState, useEffect } from 'react';
import axios from 'axios';

import { photoService } from '../../api';
import { Photo } from '../../types';
import { PhotoComponent } from '../../components';
import "./UsersPage.css";


export const UsersPage:FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

const [searchResults, setSearchResults] = useState<Photo[]>([]);

  const [search, setSearch] = useState<string>('');

const onSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
  setSearch(event.target.value);
}

const performSearch = () => {
  setSearchResults(photos.filter(photo => photo.title.includes(search)));
}

  // useEffect(() => {
  //   photoService.getAll()
  //     .then(res=>{
  //       setPhotos(res);
  //       setSearchResults(res);
  //     })
  //     .catch(error => console.error('Error fetching photos:', error));
  // }, []);


  return <div>
    <div className="searchbar">
      <input type="text" placeholder="Search.." name="search" value={search} onChange={onSearchInput}/>
      <button type="submit" onClick={performSearch}>Search</button>
    </div>
  
    <div className="photo-feed">
        {searchResults.map((photo: Photo) => <PhotoComponent photo={photo}/>)}
    </div>
   </div>
};

