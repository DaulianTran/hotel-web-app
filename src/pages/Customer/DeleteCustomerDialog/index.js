import Dialog from '@/components/Dialog';
import DialogBody from '@/components/Dialog/DialogBody';
import DialogFooter from '@/components/Dialog/DialogFooter';
import DialogHeader from '@/components/Dialog/DialogHeader';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DeleteCustomerDialog({ openState, setOpenState }) {
  return (
    <>
      <Dialog openState={openState} setOpenState={setOpenState} size="md">
        <DialogHeader>
          <h3 className="text-3xl font-semibold">Xóa người dùng</h3>
          <button
            className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-gray-900 bg-transparent border-0 outline-none hover:text-gray-400"
            onClick={() => setOpenState(false)}
          >
            <span className="block w-6 h-6 text-[20px] text-gray-900 hover:text-gray-400 bg-transparent outline-none">
              <FontAwesomeIcon icon={faX} />
            </span>
          </button>
        </DialogHeader>
        <DialogBody>
          <p className="my-4 text-lg leading-relaxed text-blueGray-500">
            Xóa người dùng là một đi không trở lại, bạn thật sự muốn xóa người ấy chứ ??
          </p>
        </DialogBody>
        <DialogFooter>
          <button
            className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-gray-600 uppercase transition-all duration-150 ease-linear outline-none hover:text-gray-400 background-transparent focus:outline-none"
            type="button"
            onClick={() => setOpenState(false)}
          >
            Thoát
          </button>
          <button
            className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-red-500 rounded shadow outline-none active:bg-red-600 hover:shadow-lg focus:outline-none"
            type="button"
            onClick={() => setOpenState(false)}
          >
            Xác nhận xóa
          </button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default DeleteCustomerDialog;
