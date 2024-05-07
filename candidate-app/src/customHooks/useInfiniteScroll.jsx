import { useEffect, useState } from "react";

const useInfiniteScroll = (fetchData, offset, setOffset) => {
  const [loading, setLoading] = useState(false);
  
  // Listens for scroll events and cleans up after unmounting.
  useEffect(() => {
    window.addEventListener("scroll", infiniteScroll);
    return () => window.removeEventListener("scroll", infiniteScroll);
  }, []);

  const infiniteScroll = () => {
    try {
      if (
        // Checks if the user has scrolled to the bottom of the page.
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        if (!loading) {
          setLoading(true);
          setOffset((prevOffset) => prevOffset + 9);
          fetchData();
        }
      }
    } catch (error) {
      console.error(error);
    }
  };


  return loading;
};

export default useInfiniteScroll;
