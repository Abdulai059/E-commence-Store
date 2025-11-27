export default function AppDownloadCard() {
  return (
    <div className="w-full max-w-xl rounded-md border border-gray-500/30 p-2 text-sm md:p-8">
      <p className="mb-1 font-medium text-green-400">Download Now!</p>

      <h2 className="text-lg font-semibold text-slate-50">Download our mobile app.</h2>

      <p className="mt-1 text-slate-50/80 text-sm">
        Mobile banking app for IOS & Android to <br />
        manage your online money.
      </p>

      <div className="mt-6 flex items-center gap-4">
        <button aria-label="googlePlayBtn" className="transition-all active:scale-95" type="button">
          <img
            className="w-28 md:w-44"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/appDownload/googlePlayBtn.svg"
            alt="googlePlayBtn"
          />
        </button>

        <button aria-label="appleStoreBtn" className="transition-all active:scale-95" type="button">
          <img
            className="w-28 md:w-44"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/appDownload/appleStoreBtn.svg"
            alt="appleStoreBtn"
          />
        </button>
      </div>
    </div>
  );
}
