'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  author: string;
  title: string;
  company: string;
  quote: string;
  image: string;
  verified: boolean;
  metric?: string;
}

const testimonials: Testimonial[] = [
  {
    author: "Jessica Anderson",
    title: "Senior Engineer, Growth Stage",
    company: "TechCorp",
    image: "https://i.pravatar.cc/150?u=jessica-anderson",
    quote: "Got promoted in 4 months using the exact framework. My manager finally had data to fight for me. This works.",
    verified: true,
    metric: "Promoted to Staff Engineer",
  },
  {
    author: "Robert Taylor",
    title: "Product Manager",
    company: "StartupXYZ",
    image: "https://i.pravatar.cc/150?u=robert-taylor",
    quote: "Negotiated a 32% raise by following the prep framework. Came with documentation and market research. They couldn't say no.",
    verified: true,
    metric: "$32k annual raise",
  },
  {
    author: "Priya Patel",
    title: "Design Lead",
    company: "DesignCo",
    image: "https://i.pravatar.cc/150?u=priya-patel",
    quote: "The visibility strategy is game-changing. Went from invisible to the person everyone knows. Career growth followed naturally.",
    verified: true,
    metric: "Promoted to Director",
  },
  {
    author: "Thomas Mueller",
    title: "Principal Engineer",
    company: "TechScale",
    image: "https://i.pravatar.cc/150?u=thomas-mueller",
    quote: "Used the 90-day plan. Hit every milestone. Got promoted and got the raise. Best $99 I've spent.",
    verified: true,
    metric: "Promoted + 28% raise",
  },
  {
    author: "Amanda Brooks",
    title: "Engineering Manager",
    company: "GrowthCorp",
    image: "https://i.pravatar.cc/150?u=amanda-brooks",
    quote: "Recommended this to my team. 3 got promoted, 2 got raises, everyone's more intentional about their career.",
    verified: true,
    metric: "Team success: 5/5",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[current];

  return (
    <div className="w-full bg-gray-50 rounded-xl border border-gray-200 p-8 md:p-12">
      <div className="max-w-3xl mx-auto">
        {/* Rating */}
        <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-2xl">
              ★
            </span>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-relaxed">
          "{testimonial.quote}"
        </blockquote>

        {/* Author Info */}
        <div className="flex items-center gap-4 mb-8">
          <img
            src={testimonial.image}
            alt={testimonial.author}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <p className="font-semibold text-gray-900 flex items-center gap-2">
              {testimonial.author}
              {testimonial.verified && (
                <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                  Verified
                </span>
              )}
            </p>
            <p className="text-gray-600 text-sm">{testimonial.title}</p>
            <p className="text-gray-500 text-sm">{testimonial.company}</p>
          </div>
        </div>

        {/* Metric */}
        {testimonial.metric && (
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-8">
            <p className="text-indigo-900 font-semibold text-lg">
              ✓ {testimonial.metric}
            </p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between pt-8 border-t border-gray-200">
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition ${
                  i === current ? "bg-indigo-600 w-8" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="p-2 hover:bg-white rounded-lg transition"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-indigo-600" />
            </button>
            <button
              onClick={next}
              className="p-2 hover:bg-white rounded-lg transition"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-indigo-600" />
            </button>
          </div>
        </div>

        {/* Counter */}
        <p className="text-center text-gray-600 text-sm mt-4">
          {current + 1} of {testimonials.length}
        </p>
      </div>
    </div>
  );
}

export { testimonials };
