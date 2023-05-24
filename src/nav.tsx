const Nav = () => {
  return (
    <div className="flex h-[65px] w-full items-center justify-between bg-gradient-to-r from-[#672280] to-[#A626D3] px-10 text-3xl text-white">
      <div className="flex items-center">
        <img
          src="/public/png-transparent-redbubble-polite-cat-meme-funny-cat-meme-thumbnail Background Removed.png"
          alt="picture of meme cat"
          className="h-12 w-12"
        />
        <h1 className="font-bold">Meme Generator</h1>
      </div>
      <a className="text-lg" href="">
        React training
      </a>
    </div>
  );
};

export default Nav;
