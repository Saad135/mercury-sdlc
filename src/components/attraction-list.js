export default function AttractionList({ listName }) {
  return (
    <>
      <div className="my-2 rounded-xl bg-white p-4 shadow sm:container sm:mx-auto">
        <p className="mb-2">{listName}</p>

        {/* Card list */}
        <div className="w-full border border-green-900 sm:flex sm:flex-wrap">
          {/* Card */}
          <div className="mb-4 mt-2 border border-blue-900 text-center sm:w-1/3">
            {/* Card Image */}
            <div className="h-72 w-full"></div>

            {/* Card title */}
            <p>Title</p>
          </div>
        </div>
      </div>
    </>
  );
}
