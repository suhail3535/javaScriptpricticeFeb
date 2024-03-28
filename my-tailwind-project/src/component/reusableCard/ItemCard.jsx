import { Link } from "react-router-dom";

export default function Example({ products, index,id }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product, index) => (
            <Link to={`/product/${product.id}`}>
              <div key={index}>
                <div className="rounded-md lg:aspect-none lg:h-80 sm:h-80 md:h-80  cursor-pointer  overflow-hidden">
                  <img
                    src={product.Link}
                    alt={product.imageAlt}
                    className="sm:hover:scale-110 transition-all ease-in-out duration-700 translate-x-4 cursor-pointer"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className=" text-gray-700 text-xl">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.Name}
                      </a>
                    </h3>
                    <p className="mt-1 text-xl text-gray-900">
                      {product.Brand}
                    </p>
                  </div>
                  <p className="text-xl font-medium text-gray-900">
                    {product.MRP}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
