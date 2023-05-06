import React from 'react';
import SpaceCard from '../../../components/instantComponents/spaceCard';

export default function HomePage() {
  return (
    <>
      <div className="main">
        <div className="content-head flex justify-between items-center">
          <div className="title font-extrabold text-2xl">My Spaces</div>
          <div className="button">
            <button className="px-5 py-2 bg-[#0064FA] text-white rounded-xl flex items-center">
              <img
                src="/media/icons/InstantIcons/filter.svg"
                alt="img"
                className="mr-2 h-3 w-3.5"
              />
              Filter
            </button>
          </div>
        </div>
        <div className="space-card">
          <div className="row pt-4">
            <div className="px-0 col-3">
              <div className="spacing pr-4">
                <SpaceCard />
              </div>
            </div>
            <div className="px-0 col-3">
              <div className="spacing  pr-4">
                <SpaceCard />
              </div>
            </div>
            <div className="px-0 col-3">
              <div className="spacing  pr-4">
                <SpaceCard />
              </div>
            </div>
            <div className="px-0 col-3">
              <div className="spacing  pr-4">
                <SpaceCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
