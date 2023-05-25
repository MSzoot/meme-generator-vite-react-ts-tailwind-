import data from './data';
import { useState } from 'react';

const MemeForm = () => {
  const [url, setUrl] = useState('https://i.imgflip.com/8p0a.jpg');
  const getNewImg = () => {
    const random = Math.floor(Math.random() * data.data.memes.length);
    setUrl(data.data.memes[random].url);
  };
  return (
    <main>
      <div className="mx-auto mt-20 flex w-10/12 flex-wrap justify-between">
        <input
          className="h-[35px] w-5/12 rounded-md border border-gray-400 px-2"
          type="text"
          name=""
          id=""
        />
        <input
          className="h-[35px] w-5/12 rounded-md border border-gray-400 px-2"
          type="text"
          name=""
          id=""
        />
        <button
          className="mt-10  w-full rounded-md border bg-gradient-to-r from-[#672280] to-[#A626D3] px-4 py-2 text-white"
          type="submit"
          onClick={getNewImg}
        >
          Get a new meme image
        </button>
      </div>
      <div className="mt-10">
        <img className="mx-auto" src={url} alt="" />
      </div>
    </main>
  );
};

export default MemeForm;
