export const CategorySection = (props) => {
  const items = props.shop_by_category.data;
  console.log(items);
  return (
    <div className="container mx-auto bg-white pt-[5rem]">
      <h3 className="text-center italic text-[1.5rem] pb-[3rem]">
        Shop by Category
      </h3>
      <div className="grid mx-auto gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {items?.map((item) => (
          <div
            key={item.name}
            className="flex gap-3 items-center bg-primary-light"
          >
            <div>
              <img
                src={item.image}
                alt="item.name"
                className="object-cover min-h-32 max-h-32 block"
              />
            </div>
            <h5 className="mx-auto text-center font-[600]">{item.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};
