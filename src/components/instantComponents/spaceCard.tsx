import React from 'react';

export default function SpaceCard() {
  return (
    <div className="flex flex-col">
      <div className="img">
        <img src="/media/icons/cardImages/bg1.svg" className="w-full" />
      </div>
      <div className="text bg-white ">
        <div className="text-lg font-bold pt-4 px-4">ACE Parking Lounge</div>
        <div className="row mx-4 pt-4">
          <div className="px-0 col-7 flex items-center ">
            <img
              src="/media/icons/cardIcons/phone.svg"
              className="h-3.5 w-3.5"
            />
            <label className="text-sm pl-1">+1 012 3456 789</label>
          </div>
          <div className="px-0 col-5 flex items-center">
            <img
              src="/media/icons/cardIcons/flag.svg"
              className="h-3.5 w-3.5"
            />
            <label className="text-sm pl-1">Capacity: 300</label>
          </div>
        </div>
        <div className="row mx-4 pt-4">
          <div className="px-0 col-12 flex items-center">
            <img
              src="/media/icons/cardIcons/location.svg"
              className="h-3.5 w-3.5"
            />
            <label className="text-sm pl-1">Belmont, North Carolina</label>
          </div>
        </div>
        <div className="row mx-4 py-4 ">
          <div className="px-0 col-8 flex items-center">
            <img
              src="/media/icons/cardIcons/space.svg"
              className="h-3.5 w-3.5"
            />
            <label className="text-sm pl-1">Type: Car Parking</label>
          </div>
          <div className="px-0 col-4 flex items-center">
            <img
              src="/media/icons/cardIcons/dollar.svg"
              className="h-3.5 w-3.5"
            />
            <label className="text-sm pl-1">Rate: $5</label>
          </div>
        </div>
        <div className="border-b-2"></div>
        <div className="row mx-4 py-4">
          <div className="px-0 col-7 flex items-center">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer h-3.5 w-3.5"
                checked
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 pl-1">
                Available
              </span>
            </label>
          </div>
          <div className="px-0 col-5 flex justify-center items-center">
            <div className="flex ">
              <div className="px-1">
                <img
                  src="/media/icons/cardIcons/electric1.svg"
                  className="h-3.5 w-3.5"
                />
              </div>
              <div className="px-1">
                <img
                  src="/media/icons/cardIcons/electric4.svg"
                  className="h-3.5 w-3.5"
                />
              </div>
              <div className="px-1">
                <img
                  src="/media/icons/cardIcons/electric3.svg"
                  className="h-3.5 w-3.5"
                />
              </div>
              <div className="px-1">
                <img
                  src="/media/icons/cardIcons/electric2.svg"
                  className="h-3.5 w-3.5"
                />
              </div>
              <div className="flex pl-3">
                <img
                  src="/media/icons/cardIcons/threeDots.svg"
                  className="h-3.5 w-3.5 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
