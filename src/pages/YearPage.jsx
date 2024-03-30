import Skeleton from "@mui/material/Skeleton";
import { useEffect } from "react";
import { useState } from "react";
import { animateScroll } from "react-scroll";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { scrollOptions } from "../data/data";
import { useGetPostByIdQuery } from "../api/posts";
import { getYear } from "../session";

export const YearPage = () => {
  const [scroll, setScroll] = useState(0);

  const {
    data: postData,
    isLoading,
    isError,
  } = useGetPostByIdQuery(getYear().year);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onTopButton = () => {
    animateScroll.scrollToTop(scrollOptions);
  };

  function createMarkup(stroke) {
    return { __html: stroke };
  }

  return (
    <div className="year">
      <div
        onClick={() => onTopButton()}
        className={scroll < 300 ? "year__top" : "show year__top"}
      >
        <ArrowUpwardIcon />
      </div>

      {!postData ? (
        <>
          <Skeleton
            variant="rounded"
            width={250}
            height={100}
            animation="wave"
            style={{ marginTop: "20px" }}
          />
          <Skeleton
            variant="rounded"
            width={300}
            height={50}
            animation="wave"
            style={{ marginTop: "30px", marginBottom: "20px" }}
          />
          <Skeleton
            variant="rounded"
            width={200}
            height={40}
            animation="wave"
            style={{ marginTop: "30px", marginBottom: "10px" }}
          />
          <Skeleton
            variant="rounded"
            width={700}
            height={400}
            animation="wave"
          />
        </>
      ) : (
        <>
          <h1>{postData.title}</h1>
          <div id="tags">{postData.tags}</div>
          <div dangerouslySetInnerHTML={createMarkup(postData.desc)}></div>
        </>
      )}
    </div>
  );
};
