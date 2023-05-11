import React from 'react';
import { SpaceCard } from '../../../components/instantComponents/spaceCard';

export default function MySpaces() {
  return (
    <div className="main">
      <div className="content-head flex flex-sm-row flex-col justify-between items-center pl-2 pr-4">
        <div className="title font-extrabold text-2xl pb-sm-0 pb-4">
          My Spaces
        </div>
        <div className="buttons flex flex-sm-row flex-col">
          <div className="dropdown1 flex -items-center mr-4 mb-sm-0 mb-4">
            <div className="bg-transparent flex justify-center items-center ">
              <label className="font-semibold text-lg mr-4">Select Type:</label>
              <select className="custom-drop-down h-12 rounded-lg bg-white border border-solid px-4 ">
                <option defaultValue>All</option>
                <option>Big Buddha Cheese</option>
                <option>Girl Scout Cookies</option>
                <option>Blue Cheese</option>
                <option>Grease Monkey</option>
                <option>Rocksar</option>
                <option>Pennywise</option>
              </select>
            </div>
          </div>
          <div className="flex">
            <button className="font-bold text-base text-white bg-[#0064FA] py-2 px-4 w-full !border !border-solid border-[#0064FA] rounded-xl flex justify-center items-center">
              <div className="text-3xl font-light mb-1 mr-2 leading-3">+</div>
              Add New Space
            </button>
          </div>
        </div>
      </div>
      <div className="space-card user-panel">
        <div className="row flex flex-wrap mx-0 pt-4">
          <div className="px-0 col-xxl-3 col-md-6 col-12 ">
            <div className="spacing card !bg-transparent pe-sm-4 pr-0">
              <SpaceCard
                className=""
                img="/media/icons/cardImages/bg1.svg"
                title="ACE Parking Lounge"
                phone="+1 012 3456 789"
                capacity="300"
                address="Belmont, North Carolina"
                type="Car Parking"
                rate="$5"
                checked=""
                available="Available"
                gallery=""
              />
            </div>
          </div>
          <div className="px-0 col-xxl-3 col-md-6 col-12 mt-md-0 mt-8 ">
            <div className="spacing card !bg-transparent  pe-sm-4 pr-0">
              <SpaceCard
                className=""
                img="/media/icons/cardImages/bg1.svg"
                title="ACE Parking Lounge"
                phone="+1 012 3456 789"
                capacity="300"
                address="Belmont, North Carolina"
                type="Car Parking"
                rate="$5"
                checked=""
                available="Available"
                gallery=""
              />
            </div>
          </div>
          <div className="px-0 col-xxl-3 col-md-6 col-12 pt-xxl-0 pt-8 ">
            <div className="spacing card !bg-transparent  pe-sm-4 pr-0">
              <SpaceCard
                className=""
                img="/media/icons/cardImages/bg1.svg"
                title="ACE Parking Lounge"
                phone="+1 012 3456 789"
                capacity="300"
                address="Belmont, North Carolina"
                type="Car Parking"
                rate="$5"
                checked=""
                available="Available"
                gallery=""
              />
            </div>
          </div>
          <div className="px-0 col-xxl-3 col-md-6 col-12 pt-xxl-0 pt-8 ">
            <div className="spacing card !bg-transparent  pe-sm-4 pr-0">
              <SpaceCard
                className=""
                img="/media/icons/cardImages/bg1.svg"
                title="ACE Parking Lounge"
                phone="+1 012 3456 789"
                capacity="300"
                address="Belmont, North Carolina"
                type="Car Parking"
                rate="$5"
                checked=""
                available="Available"
                gallery=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="space-card user-panel mt-4">
        <div className="row flex flex-wrap mx-0 pt-4">
          <div className="px-0 col-xxl-3 col-md-6 col-12 ">
            <div className="spacing card !bg-transparent pe-sm-4 pr-0">
              <SpaceCard
                className=""
                img="/media/icons/cardImages/bg1.svg"
                title="ACE Parking Lounge"
                phone="+1 012 3456 789"
                capacity="300"
                address="Belmont, North Carolina"
                type="Car Parking"
                rate="$5"
                checked=""
                available="Available"
                gallery=""
              />
            </div>
          </div>
          <div className="px-0 col-xxl-3 col-md-6 col-12 mt-md-0 mt-8 ">
            <div className="spacing card !bg-transparent  pe-sm-4 pr-0">
              <SpaceCard
                className=""
                img="/media/icons/cardImages/bg1.svg"
                title="ACE Parking Lounge"
                phone="+1 012 3456 789"
                capacity="300"
                address="Belmont, North Carolina"
                type="Car Parking"
                rate="$5"
                checked=""
                available="Available"
                gallery=""
              />
            </div>
          </div>
          <div className="px-0 col-xxl-3 col-md-6 col-12 pt-xxl-0 pt-8 ">
            <div className="spacing card !bg-transparent  pe-sm-4 pr-0">
              <SpaceCard
                className=""
                img="/media/icons/cardImages/bg1.svg"
                title="ACE Parking Lounge"
                phone="+1 012 3456 789"
                capacity="300"
                address="Belmont, North Carolina"
                type="Car Parking"
                rate="$5"
                checked=""
                available="Available"
                gallery=""
              />
            </div>
          </div>
          <div className="px-0 col-xxl-3 col-md-6 col-12 pt-xxl-0 pt-8 ">
            <div className="spacing card !bg-transparent  pe-sm-4 pr-0">
              <SpaceCard
                className=""
                img="/media/icons/cardImages/bg1.svg"
                title="ACE Parking Lounge"
                phone="+1 012 3456 789"
                capacity="300"
                address="Belmont, North Carolina"
                type="Car Parking"
                rate="$5"
                checked=""
                available="Available"
                gallery=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
