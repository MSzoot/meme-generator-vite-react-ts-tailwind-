const MemeForm = () => {
  return (
    <main>
      <form
        className="mx-auto mt-20 flex w-10/12 flex-wrap justify-between"
        action=""
      >
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
        >
          Get a new meme image 🖼️
        </button>
      </form>
    </main>
  );
};

export default MemeForm;
