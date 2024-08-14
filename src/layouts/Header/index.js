import TeemeeAvatar from '../../assets/images/teemee_avatar.jpg';
import logo from '../../assets/images/company-logo-full.png';
import DropDown from './DropDown';
import { useState } from 'react';
function Header() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <nav style={{ fontFamily: 'Roboto' }}>
      <div className="w-full bg-gray-200 h-[60px] flex justify-between items-center border-b-slate-200 border-2">
        <div className="flex items-center mx-8">
          <img src={logo} alt="company-logo" className="h-[60px]" />
        </div>
        <div className="flex items-center tab-holder grow">
          <a href="/">Note</a>
          <a href="/" className="ml-6">
            Guidelines
          </a>
        </div>
        <div className="relative flex items-center">
          <div className=" w-[48px] h-[48px] overflow-hidden rounded-full mx-8 hover:ring-4 hover:ring-slate-300 transition-all">
            <img
              src={TeemeeAvatar}
              alt="temporary avatar"
              className=""
              onClick={toggleOpen}
              onBlur={() => {
                setOpen(false);
              }}
            />
            {open && <DropDown />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
