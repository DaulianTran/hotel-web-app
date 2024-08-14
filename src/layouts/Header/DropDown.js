function DropDown() {
  const profile = [
    { name: 'Edit profile', href: '' },
    { name: 'Katy Perry', href: '' },
    { name: 'Manage Notes', href: '' },
  ];
  return (
    <div
      id="dropdown-menu"
      className="origin-top-right left-[-40px] absolute w-32 mt-2 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-slate-700"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="dropdown-button"
      tabindex="-1"
    >
      <div className="py-1 text-white" role="none">
        {profile.map((item) => (
          <a
            href="/"
            className="block px-4 py-2 text-sm text-left hover:bg-slate-600 focus:bg-slate-500 "
            role="menuitem"
          >
            {item.name}
          </a>
        ))}
        <hr className="m-2 solid"></hr>
        <a
          href="/"
          className="block px-4 py-2 text-sm text-left hover:bg-slate-600 focus:bg-slate-500 "
          role="menuitem"
        >
          Log Out
        </a>
      </div>
    </div>
  );
}

export default DropDown;
