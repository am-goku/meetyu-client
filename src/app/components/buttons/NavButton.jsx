
function NavButton({title, cbFun}) {
  return (
    <>
      <button
        className="w-full p-3 border shadow-lg shadow-black dark:shadow-emerald-900"
        onClick={cbFun}
      >
        {title}
      </button>
    </>
  );
}

export default NavButton