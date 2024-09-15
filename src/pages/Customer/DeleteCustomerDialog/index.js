import Dialog from '@/components/Dialog';
import DialogBody from '@/components/Dialog/DialogBody';
import DialogFooter from '@/components/Dialog/DialogFooter';
import DialogHeader from '@/components/Dialog/DialogHeader';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

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
            I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their
            perception of themselves! They're slowed down by their perception of themselves. If you're taught you can’t
            do anything, you won’t do anything. I was taught I could do everything.
          </p>
        </DialogBody>
        <DialogFooter>
          <button
            className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
            type="button"
            onClick={() => setOpenState(false)}
          >
            Close
          </button>
          <button
            className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
            type="button"
            onClick={() => setOpenState(false)}
          >
            Save Changes
          </button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default DeleteCustomerDialog;
