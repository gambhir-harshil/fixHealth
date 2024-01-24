import useAxios from "@/hooks/useAxios";
import Card from "./Card";
import { Testimonial } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const {
    response: testimonials,
    error,
    loading,
  } = useAxios({
    method: "get",
    url: "/testimonials",
  });
  return (
    <div className="h-screen" id="testimonials">
      <Carousel className="relative" opts={{ loop: true, align: "start" }}>
        <CarouselContent>
          {testimonials?.map((testimonial: Testimonial) => (
            <CarouselItem key={testimonial.id}>
              <Card testimonial={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute w-12 h-12 top-1/2 left-8" />
        <CarouselNext className="absolute w-12 h-12 top-1/2 right-8" />
      </Carousel>
    </div>
  );
};

export default Testimonials;
