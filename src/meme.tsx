import { useState, useEffect } from 'react';

interface Meme {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
  box_count: number;
}

interface MemeResponse {
  success: boolean;
  data: {
    memes: Meme[];
  };
}

const MemeForm = () => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allMemeImages, setAllMemeImages] = useState<Meme[]>([]);

  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const response = await fetch('https://api.imgflip.com/get_memes');
        const data: MemeResponse = await response.json();
        setAllMemeImages(data.data.memes);
      } catch (error) {
        console.error('Error fetching memes:', error);
      }
    };

    fetchMemes();
  }, []);

  const getNewImg = () => {
    if (allMemeImages.length > 0) {
      const randomIndex = Math.floor(Math.random() * allMemeImages.length);
      setMeme((prevMeme) => ({
        ...prevMeme,
        randomImage: allMemeImages[randomIndex].url,
      }));
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
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
          className="mt-10 w-full rounded-md border bg-gradient-to-r from-[#672280] to-[#A626D3] px-4 py-2 text-white"
          type="button"
          onClick={getNewImg}
        >
          Get a new meme image
        </button>
      </div>
      <div className="relative mt-10">
        <img className="mx-auto" src={meme.randomImage} alt="Meme" />
        <h2 className="absolute top-0 w-4/5 translate-x-20 py-3 text-center text-2xl uppercase tracking-wide text-white shadow-black drop-shadow-2xl">
          {meme.topText}
        </h2>
        <h2 className="absolute bottom-0 w-4/5 translate-x-20 py-3 text-center text-2xl uppercase tracking-wide text-white shadow-black drop-shadow-2xl">
          {meme.bottomText}
        </h2>
      </div>
    </main>
  );
};

export default MemeForm;
