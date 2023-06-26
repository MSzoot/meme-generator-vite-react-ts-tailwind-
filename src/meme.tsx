import data from './data';
import { useState } from 'react';

const MemeForm = () => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allMemeImages, setAllMemeImages] = useState(data);

  const getNewImg = () => {
    const random = Math.floor(Math.random() * data.data.memes.length);
    setMeme((prevObj) => {
      return { ...prevObj, randomImage: allMemeImages.data.memes[random].url };
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMeme((prevObj) => {
      return { ...prevObj, [name]: value };
    });
  };

  return (
    <main>
      <div className="mx-auto mt-20 flex w-10/12 flex-wrap justify-between">
        <input
          className="h-[35px] w-5/12 rounded-md border border-gray-400 px-2"
          type="text"
          name="topText"
          placeholder="Top text"
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          className="h-[35px] w-5/12 rounded-md border border-gray-400 px-2"
          type="text"
          name="bottomText"
          placeholder="Bottom text"
          onChange={handleChange}
          value={meme.bottomText}
        />
        <button
          className="mt-10  w-full rounded-md border bg-gradient-to-r from-[#672280] to-[#A626D3] px-4 py-2 text-white"
          type="submit"
          onClick={getNewImg}
        >
          Get a new meme image
        </button>
      </div>
      <div className="relative mt-10">
        <img className="mx-auto" src={meme.randomImage} alt="" />
        <h2 className="drop-shadow-a absolute top-0 w-4/5 translate-x-20 py-3 text-center text-2xl uppercase tracking-wide text-white shadow-black drop-shadow-2xl">
          {meme.topText}
        </h2>
        <h2 className="absolute bottom-0 w-4/5 translate-x-20 py-3 text-center text-2xl uppercase tracking-wide text-white shadow-black drop-shadow-2xl ">
          {meme.bottomText}
        </h2>
      </div>
    </main>
  );
};

export default MemeForm;
