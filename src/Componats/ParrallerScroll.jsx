import { useEffect, useRef } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import cn from "./ui/Cn";
import Loader from "./Loader";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsFillSaveFill } from "react-icons/bs";

export function ParallaxScroll({ images, className, loader, saved, setSeved }) {
  const handleSave = (img) => {
    var flag = true;
    if (saved !== null && saved.length > 0) {
      for (let i = 0; i < saved.length; i++) {
        if (saved[i].id === img.id) {
          flag = false;
          toast.info('Image already saved', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
          //react toastif
          break;
        }
      }
    }
    if (flag) {
      setSeved([...saved, img]);
      toast.success('Image Saved Succesfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
    }
  };

  const gridRef = useRef(null);
  const { scrollYProgress } = useViewportScroll();

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <>
    <ToastContainer/>
      <div className={cn(" items-start w-full", className)} ref={gridRef}>
        {loader ? (
          <Loader />
        ) : (
          <div
            className="grid grid-cols-1 md:grid-cols-2 overflow-y-auto no-scrollbar lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-10 px-5"
            ref={gridRef}
          >
            <div className="grid gap-10 relative ">
              {firstPart.map((el, idx) => (
                <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
                  <span className=" absolute text-2xl right-0 m-1 text-white -translate-x-0 cursor-pointer hover:text-green-300">
                    <BsFillSaveFill />
                  </span>
                  <img
                    src={el.src.original}
                    onClick={() => handleSave(el)}
                    className="h-80 w-full object-cover object-left-top img rounded-lg gap-10 !m-0 !p-0"
                    height="400"
                    width="400"
                    alt="thumbnail"
                  />
                </motion.div>
              ))}
            </div>
            <div className="grid gap-10 relative">
              {secondPart.map((el, idx) => (
                <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
                  <span className=" absolute text-2xl right-0 m-1 text-white -translate-x-0 cursor-pointer hover:text-green-300">
                    <BsFillSaveFill />
                  </span>
                  <img
                    src={el.src.original}
                    onClick={() => handleSave(el)}
                    className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                    height="400"
                    width="400"
                    alt="thumbnail"
                  />
                </motion.div>
              ))}
            </div>
            <div className="grid gap-10 relative">
              {thirdPart.map((el, idx) => (
                <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
                  <span className=" absolute text-2xl right-0 m-1 text-white -translate-x-0 cursor-pointer hover:text-green-300">
                    <BsFillSaveFill />
                  </span>
                  <img
                    src={el.src.original}
                    onClick={() => handleSave(el)}
                    className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                    height="400"
                    width="400"
                    alt="thumbnail"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
