export const FallCollection = (props) => {
  console.log(props.banner.data);
  const banner = props.banner.data;
  return (
    <div className="container mx-auto pt-10 pb-5">
      <div className="grid grid-cols-1">
        <div className="crad rounded">
          <div className="relative">
            <img
              src={banner?.image}
              alt="card-image"
              className="object-cover w-full"
            />

            {/* <div className="absolute top-2 left-2 z-10 w-2/5">
              <h5 className="text-white md:text-[2rem] text-[.9rem]">
                Fall 2022 <br />
                Collection
              </h5>
              <p className="text-white md:pb-5">
                The Astest Fashion For Everyone
              </p>
              <button className="px-3 py-1 rounded text-white bg-primary">
                Shop Now
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
