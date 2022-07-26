import axios from "axios";
import React, { useEffect } from "react";
import { AiFillEye } from "react-icons/ai";
import { BsSuitHeartFill } from "react-icons/bs";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import UseHooks from "../../UseHook/UseHooks";
import "./Product.css";

const Product = () => {
  const [product, setProduct] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const { baseURL } = UseHooks();

  useEffect(() => {
    setLoading(true);
    setTimeout(async () => {
      await axios.get(`${baseURL}/api/v1/products`).then((data) => {
        const productItems = data.data.product;
        if (productItems) {
          setLoading(false);
        }
        console.log(productItems);
        setProduct(productItems);
      });
    }, 1500);
  }, [baseURL]);

  const handleButton = (id) => {
    console.log("click me", id);
  };

  return (
    <div className="container pb-16">
      <h2 className="text-3xl font-bold text-gray-800 uppercase mb-6">
        top new arrival
      </h2>
      <div className="flex justify-center items-center">
        {loading && <HashLoader color="#FA385A" />}
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
        spaceBetween={20}
        slidesPerView={4}
        loop={Infinity}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        navigation
        auto="true"
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div className="grid grid-cols-4 gap-6">
          {product.length &&
            product?.map((items) => (
              <SwiperSlide key={items._id}>
                <div className="">
                  <div className="bg-white shadow rounded overflow-hidden group">
                    <div className="relative">
                      <div className="flex justify-center h-52 bg-gray-100">
                        <img
                          src={items?.images[0].url}
                          className="object-contain pt-5 h-48 w-48"
                          alt=""
                        />
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                        <Link
                          to="/"
                          onClick={() => handleButton(items?._id)}
                          className="text-white text-lg w-9 h-8 rounded-lg bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                        >
                          <AiFillEye />
                        </Link>
                        <Link
                          to="/"
                          className="text-white text-lg w-9 h-8 rounded-lg bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                        >
                          <BsSuitHeartFill />
                        </Link>
                      </div>
                    </div>
                    <div className="pt-3 pb-3 px-4">
                      <a href="/#">
                        <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                          {items?.title.slice(0, 18)}...
                        </h4>
                      </a>
                      <p className="capitalize font-medium text-sm mb-2 text-gray-800 hover:text-primary transition">
                        {items?.description.slice(0, 62)}
                      </p>
                      <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-primary font-semibold">
                          $ {items?.price}
                        </p>
                        <p className="text-sm text-gray-400 line-through">
                          $ {items?.pricepre}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <ReactStars
                          size={20}
                          color="gray"
                          activeColor="#ffd700"
                          edit={false}
                          value={items?.rating}
                        />
                        <div className="text-xs text-gray-500 ml-3">
                          ({items?.rating})
                        </div>
                      </div>
                    </div>
                    <p
                      onClick={() => handleButton(items?._id)}
                      className="block w-full py-1 cursor-pointer text-center text-white hover:text-primary bg-primary border border-primary rounded-b hover:bg-transparent transition"
                    >
                      Add to card
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Product;
