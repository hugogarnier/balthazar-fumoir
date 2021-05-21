import React from 'react';
import { GiCampCookingPot } from '@react-icons/all-files/gi/GiCampCookingPot';
import { GiFrance } from '@react-icons/all-files/gi/GiFrance';
import { RiRestaurant2Fill } from '@react-icons/all-files/ri/RiRestaurant2Fill';

const Origins = () => {
  return (
    <div className='origins_container'>
      <div className='origins_item'>
        <GiCampCookingPot className='origins_icon' />

        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className='origins_item'>
        <GiFrance className='origins_icon' />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quas!
        </p>
      </div>
      <div className='origins_item'>
        <RiRestaurant2Fill className='origins_icon' />

        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
    </div>
  );
};

export default Origins;
