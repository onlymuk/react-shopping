import React, { useRef, useEffect, useState } from "react";

const CarouselPage: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState<number>(0);

  useEffect(() => {
    const carouselTimer = setInterval(() => {
      // 현재 활성화된 슬라이드의 인덱스
      const currentSlideIndex: number = activeSlide;
      // 다음 슬라이드의 인덱스
      const nextSlideIndex: number = (currentSlideIndex + 1) % 3; // 슬라이드 개수에 따라 숫자 조정

      // 슬라이드 이동
      carouselRef.current?.children[currentSlideIndex]?.classList.remove(
        "active"
      );
      carouselRef.current?.children[nextSlideIndex]?.classList.add("active");

      // 활성화된 슬라이드 인덱스 업데이트
      setActiveSlide(nextSlideIndex);
    }, 2000); // 2초마다 슬라이드 변경

    return () => {
      clearInterval(carouselTimer); // 컴포넌트 언마운트 시 타이머 클리어
    };
  }, [activeSlide]);

  return (
    <div className="carousel w-full c-area" ref={carouselRef}>
      <div
        id="slide1"
        className="carousel-item item relative w-full c-img active"
      >
        <img
          src="https://react-shop-oinochoe.vercel.app/img_shop_fashion.jpeg"
          className="w-full c-img"
          alt="Slide 1"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item item relative w-full c-img">
        <img
          src="https://react-shop-oinochoe.vercel.app/img_shop_digital.jpeg"
          className="w-full c-img"
          alt="Slide 2"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item item relative w-full c-img">
        <img
          src="https://react-shop-oinochoe.vercel.app/img_shop_grocery.jpeg"
          className="w-full c-img"
          alt="Slide 3"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarouselPage;
