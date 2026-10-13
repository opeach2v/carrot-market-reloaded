export default function Home() {
  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center p-5 dark:bg-gray-700">
      <div className="flex flex-col gap-2 bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm dark:bg-gray-600">
        <div className="group flex flex-col">
          <input
            className="bg-gray-100 w-full"
            placeholder="Write your email"
          />
          <span className="group-focus-within:block hidden">
            Make sure it is a valid email.,..
          </span>
          <button className="w-full bg-black text-white rounded-sexy-name me-tomato">
            Submit
          </button>
        </div>
      </div>
    </main>
  );
}
