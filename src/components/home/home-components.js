export function CategoryTabs({
  categoryNames,
  selectedCategoryName,
  setSelectedCategoryName,
}) {
  return (
    <>
      <div className="no-scrollbar mt-2 flex shrink-0 overflow-y-hidden overflow-x-scroll scroll-smooth py-2">
        {Array.from(categoryNames).map((cname, index) => (
          <p
            id={`cname_${cname}`}
            key={index}
            className={
              "mr-2 inline-block shrink-0 cursor-pointer fix-safari-scroll rounded-xl px-4 py-2 hover:opacity-80 " +
              (selectedCategoryName === cname
                ? "bg-primary text-white"
                : "bg-gray-200")
            }
            onClick={() => setSelectedCategoryName(cname)}
          >
            {cname}
          </p>
        ))}
      </div>
    </>
  );
}
