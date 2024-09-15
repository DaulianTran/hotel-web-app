/* 
- Props:
    + openState, setOpenState: state to control dialog open/close action
    + children: pass child components, these child component will appear in dialog
    + size: xs,sm,md,lg,xl,2xl,...,8xl just like clothes
*/
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Dialog({ openState = false, setOpenState, size = '2xl', title, children }) {
  // Validate "size" input
  const validSizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl'];
  if (!validSizes.includes(size)) {
    console.warn(`Invalid size: ${size}. Valid sizes are: 'xs', 'sm', 'md', 'lg', 'xl', '2xl', ..., '8xl'`);
    size = '2xl'; // Thiết lập giá trị mặc định
  }

  const sizeVariant = 'max-w-' + size;

  //   const sizeVariant = {
  //     xs: 'max-w-xs',
  //     sm: 'max-w-sm',
  //     md: 'max-w-md',
  //     lg: 'max-w-lg',
  //     xl: 'max-w-xl',
  //     '2xl': 'max-w-2xl',
  //     '3xl': 'max-w-3xl',
  //     '4xl': 'max-w-4xl',
  //     '5xl': 'max-w-5xl',
  //     '6xl': 'max-w-6xl',
  //     '7xl': 'max-w-7xl',
  //     '8xl': 'max-w-8xl',
  //   };

  return (
    <>
      {openState ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className={`relative w-auto ${sizeVariant} mx-auto my-6`}>
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {children}
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}

export default Dialog;
