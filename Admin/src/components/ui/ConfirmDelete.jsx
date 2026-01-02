import { Trash2 } from "lucide-react";

function ConfirmDelete({ onConfirm, onCloseModal }) {
  return (
    <div className="flex flex-col items-center rounded-xl  p-6 md:p-8">
      {/* Icon */}
      <div className="flex items-center justify-center rounded-full bg-red-100 p-4">
        <Trash2 className="text-red-600" />
      </div>

      <h2 className="mt-4 text-xl font-semibold text-gray-900">Are you sure?</h2>

      <p className="mt-2 text-center text-sm text-gray-600">
        Do you really want to continue?
        <br />
        This action cannot be undone.
      </p>

      <div className="mt-5 flex w-full items-center justify-center gap-4">
        <button
          type="button"
          className="h-10 w-full rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-600 transition hover:bg-gray-100 active:scale-95 md:w-36"
          onClick={onCloseModal} 
        >
          Cancel
        </button>
        <button
          type="button"
          className="h-10 w-full rounded-md bg-red-600 text-sm font-medium text-white transition hover:bg-red-700 active:scale-95 md:w-36"
          onClick={() => onConfirm?.()}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
