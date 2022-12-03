import {
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from 'react';

const BreadCrumb = (props) => {
  const { activeTab, setActiveTab } = props;
  const tabItems = ["Create Yo Crew", "Appoint Captain"];
  return (
    <nav classNameName="flex justify-start items-center" aria-label="Breadcrumb">
      <ol className="inline-flex justify-start items-center space-x-1 md:space-x-3">
        {tabItems.map((item, index) => {
          return (
            <li key={index} className="flex ">
              <div className="flex justify-evenly items-center">
                <h1 className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white " onClick={() => setActiveTab(index)}>
                  {item}
                </h1>
                <FontAwesomeIcon icon={faAngleRight} size="2x" className="h-5 w-5" />
              </div>
            </li>
          );
        })}
        <li className="inline-flex justify-start items-center">
          <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            Ahoy Sailors !
          </a>
        </li>
      </ol>
    </nav>
  )
}

const CrewDesc = (props) => {
  const { activeTab, setName, setDesc, setAddress } = props;
  return (
    <div className='w-full h-full flex flex-col justify-evenly items-center'>
      <div className='w-full h-full flex flex-col justify-evenly items-start bg-black gap-10'>
        {activeTab === 0 && (
          <div className='w-full h-full flex flex-col justify-start items-start gap-3'>
            <h1 className="text-2xl text-white">Name Yo Crew</h1>
            <p>What do you wanna name yo Crew?</p>
            <div className="user-box w-full md:w-1/3">
              <div className="relative inline-block px-4 py-2 font-medium group w-full sm:w-96">
                <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#bff22d] border-[2px] border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#bff22d]"></span>
                <input
                  type="text"
                  name="user_name"
                  className="w-full px-8 rounded text-black relative"
                  required
                  onInput={(e) => setName(e.target.value)}
                ></input>
                <label className="px-5">{"Crew Name *"}</label>
              </div>
            </div>
            <h1 className="text-2xl text-white">Set a cool new description for yo crew</h1>
            <p>What do you want your awesome crew to be commemorated by? <br />(Could be a fearsome motto or just some silly, sarcastic quips)</p>
            <div className="user-box w-full md:w-1/3">
              <div className="relative inline-block px-4 py-2 font-medium group w-full sm:w-96">
                <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#bff22d] border-[2px] border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#bff22d]"></span>
                <textarea
                  type="text"
                  name="user_name"
                  className="w-full px-8 rounded text-black relative"
                  required
                  onInput={(e) => setDesc(e.target.value)}
                ></textarea>
                <label className="px-5">{"Crew Description *"}</label>
              </div>
            </div>
          </div>
        )}
        {activeTab === 1 && (
          <div className='w-full h-full flex flex-col justify-start items-start gap-5'>
            <h1 className="text-2xl text-white">Add Crew Captain's Address</h1>
            <p>This address will be treated as the crew's admin and can NOT be changed later</p>
            <div className="user-box w-full md:w-1/3">
              <div className="relative inline-block px-4 py-2 font-medium group w-full sm:w-96">
                <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#bff22d] border-[2px] border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#bff22d]"></span>
                <input
                  type="text"
                  name="user_name"
                  className="w-full px-8 rounded text-black relative"
                  required
                  onInput={(e) => setAddress(e.target.value)}
                ></input>
                <label className="px-5">{"Address *"}</label>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const CreateForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [address, setAddress] = useState("");
  return (
    <div className='w-full h-full flex justify-evenly items-center font-serif'>
      <div className='w-10/12 h-10/12 flex justify-evenly items-center bg-black rounded-xl text-white'>
        <div className='w-full h-full flex flex-col justify-evenly items-center p-5' id="form">
          <h1 className="text-5xl font-semibold text-white font-raleway">
            Create yo DataDAO with CrewS with a few Clicks
          </h1>
          <div className='w-full h-full flex flex-col justify-start items-start p-10 gap-10'>
            <BreadCrumb setActiveTab={setActiveTab} activeTab={activeTab} />
            <CrewDesc activeTab={activeTab} setName={setName} setDesc={setDesc} setAddress={setAddress} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateForm