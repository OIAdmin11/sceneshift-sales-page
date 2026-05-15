import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";

const testimonials = [
  {
    name: "Jordan Ellis",
    designation: "Home Services Owner",
    text: "Finally having after-hours calls handled the right way changed how many estimates we actually get to run. Our team is not playing catch-up every Monday anymore.",
  },
  {
    name: "Riley Torres",
    designation: "Operations Lead",
    text: "For our plumbing operation, not losing those evening and weekend calls has been a real shift in how steady the board stays.",
  },
  {
    name: "Alex Brennan",
    designation: "Service Business Team",
    text: "The experience feels organized and human, not like a stiff script reading at people who are already stressed.",
  },
  {
    name: "Morgan Kim",
    designation: "Operations Manager",
    text: "They worked like an extension of our day-to-day team instead of another vendor we had to chase for updates.",
  },
];
const testimonialSlides = [...testimonials, ...testimonials];

export default function TestimonialSec5() {
  return (
    <section className="testimonial-sec5">
      <div className="container">
        <div className="sec-title text-center white">
          <TitleSplitWrapper tag="h2" className="title animated-heading">
            What Our Clients Say
          </TitleSplitWrapper>
        </div>
      </div>
      <div className="swiper-wrapper-parent">
        <Swiper
          className="testi-slide5"
          modules={[Autoplay]}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          slidesPerView={1}
          spaceBetween={16}
          breakpoints={{
            1440: { slidesPerView: 4, spaceBetween: 20 },
            1366: { slidesPerView: 4, spaceBetween: 20 },
            1201: { slidesPerView: 3, spaceBetween: 20 },
            1025: { slidesPerView: 2, spaceBetween: 20 },
            769: { slidesPerView: 2, spaceBetween: 20 },
            577: { slidesPerView: 1, spaceBetween: 20 },
            480: { slidesPerView: 1, spaceBetween: 20 },
            375: { slidesPerView: 1, spaceBetween: 20 },
          }}
        >
          {testimonialSlides.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="test-block5">
                <h4 className="name">{t.name}</h4>
                <span className="designation">{t.designation}</span>
                <ul className="rating">
                  {[1, 2, 3, 4, 5].map((j) => (
                    <li key={j}>
                      <i className="fa fa-star" />
                    </li>
                  ))}
                </ul>
                <p>{t.text}</p>
                <div className="custom-cursor">D R A G</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
