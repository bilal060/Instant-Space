import React from 'react';
import SpaceCard from '../../../components/instantComponents/spaceCard';
import AddNewSpaceCard from '../../../components/instantComponents/AddNewSpaceCard';
import { BookingsTable } from '../../../components/instantComponents/tableComponents';
import '../../../index.css'
import Modal from '../auth/components/cmpnt/modal';
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
          <div className="row mx-0 pt-4">
            <div className="px-0 col-3 align-items-stretch">
              <div className="spacing pr-4">
                <SpaceCard />
              </div>
            </div>
            <div className="px-0 col-3 align-items-stretch">
              <div className="spacing  pr-4">
                <SpaceCard />
              </div>
            </div>
            <div className="px-0 col-3 align-items-stretch">
              <div className="spacing  pr-4">
                <SpaceCard />
              </div>
            </div>
            <div className="px-0 col-3 align-items-stretch">
              <AddNewSpaceCard />
            </div>
          </div>
        </div>

        <div className="bookings">
          <div className="bookings-head flex justify-between items-center pt-10 pb-4">
            <div className="title font-extrabold text-2xl">Bookings History</div>
            <button className="text-base font-bold text-primary rounded-xl flex items-center">
              View All
              <img
                src="/media/icons/InstantIcons/viewAll.svg"
                alt="img"
                className="ml-2 h-4 w-4 mt-1"
              />
            </button>
          </div>
          <div className="table tableBooking rounded-xl overflow-hidden">
            <div className=" bg-white rounded-lg">
              <table className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                <thead className=" border-b-2 !border-[#E7E6E9]">
                  <tr className="fw-bold bg-white !h-[60px]">
                    <th className="!pb-6 !text-sm text-gray !font-bold !pl-3">
                      Customer Full Name
                    </th>
                    <th className="!pb-6 !text-sm text-gray !font-bold">
                      Branch Location
                    </th>
                    <th className="!pb-6 !text-sm text-gray !font-bold">
                      Contact Info
                    </th>
                    <th className="!pb-6 !text-sm text-gray !font-bold">
                      From
                    </th>
                    <th className="!pb-6 !text-sm text-gray !font-bold">To</th>
                    <th className="!pb-6 !text-sm text-gray !font-bold">
                      Space Type
                    </th>
                    <th className="!pb-6 !text-sm text-gray !font-bold">
                      Total Amount
                    </th>
                    <th className="!pb-6 !text-sm text-gray !font-bold">
                      Status
                    </th>
                    <th className="!pb-6 !text-sm text-gray !font-bold"></th>
                  </tr>
                </thead>
                <tbody>
                  {BookingsTable.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td className="">
                          <div className="flex pl-4">
                            <div className="symbol symbol-label symbol-40px">
                              <div className=" symbol-label fs-8 fw-bold !bg-[#E2E2EA] text-inverse-primary">
                                <img src="/media/icons/tableImages/tableImage.svg" />
                              </div>
                            </div>
                            <div className="flex-col flex justify-center">
                              <p className="mb-0 text-dark text-sm font-medium flex items-center ml-3">
                                {data.fname}
                              </p>
                              <p className="mb-0 text-dark text-sm font-medium flex items-center ml-3 ">
                                {data.lname}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="">
                          <div className="flex">
                            <div className="flex-col">
                              <p className="mb-0 text-dark text-sm font-medium flex items-center ">
                                {data.location1},
                              </p>
                              <p className="mb-0 text-dark text-sm font-medium flex items-center ">
                                {data.location2}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="">
                          <div className="flex">
                            <div className="flex-col">
                              <p className="mb-0 text-dark text-sm font-medium flex items-center ">
                                {data.contact},
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="">
                          <div className="flex">
                            <div className="flex-col">
                              <p className="mb-0 text-dark text-sm font-medium flex items-center ">
                                {data.Ftime},
                              </p>
                              <p className="mb-0 text-dark text-sm font-medium flex items-center ">
                                {data.Fdate}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="">
                          <div className="flex-col">
                            <p className="mb-0 text-dark text-sm font-medium flex items-center ">
                              {data.Ttime},
                            </p>
                            <p className="mb-0 text-dark text-sm font-medium flex items-center ">
                              {data.Tdate}
                            </p>
                          </div>
                        </td>
                        <td className="">
                          <p className="text-dark text-sm font-medium  d-block mb-0 ">
                            {data.type}
                          </p>
                        </td>
                        <td className="">
                          <p className="text-dark text-sm font-medium  d-block mb-0 ">
                            {data.amount}
                          </p>
                        </td>
                        <td className="">
                          <div className="text-[#169401] text-sm font-bold px-3 py-1 !bg-[#169401]/[.10] !border border-solid border-[#169401] rounded-lg flex justify-center ">
                            {data.status}
                          </div>
                        </td>
                        <td className=" >!py-5 text-end">
                          <a
                            href="#"
                            className="btn btn-sm btn-icon btn-active-color-primary "
                          >
                            <img src={data.threedots} className="svg-icon-2" />
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* My Earnings and Calender */}
        <div className="section">
          <div className="row">
            <div className="col-6">
            <div className="earnings">
              <div className="head text-2xl font-bold">
                Earnings
              </div>
            </div>
            </div>
            <div className="col-6">
            <div className="calender"></div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
