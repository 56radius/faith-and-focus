import React from "react";

// Simple Star icon SVG component
const Star = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.965a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.538 1.118l-3.38-2.454a1 1 0 00-1.176 0l-3.38 2.454c-.783.57-1.838-.196-1.538-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.04 9.392c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.965z" />
  </svg>
);

// Simple Card components (can be replaced by any UI library)
const Card = ({ children, className }) => (
  <div className={`rounded-lg shadow p-6 ${className}`}>{children}</div>
);
const CardHeader = ({ children }) => <div className="mb-4">{children}</div>;
const CardTitle = ({ children }) => (
  <h4 className="font-semibold text-gray-900">{children}</h4>
);
const CardDescription = ({ children }) => (
  <p className="text-sm text-gray-500">{children}</p>
);
const CardContent = ({ children }) => <div>{children}</div>;

// Sample testimonials data
const testimonials = [
  {
    name: "Pastor John Doe",
    church: "Faith and Focus Church",
    rating: 5,
    text: "The media outreach from Faith and Focus has transformed how we connect with our congregation and beyond."
  },
  {
    name: "Sister Mary Smith",
    role: "Ministry Leader",
    rating: 4,
    text: "Their digital evangelism tools are excellent and easy to use for all age groups."
  },
  {
    name: "Brother James Lee",
    church: "Faith and Focus",
    rating: 5,
    text: "I have seen growth in our online attendance thanks to their inspiring media content."
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-amber-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Testimonials</h3>
          <p className="text-lg text-gray-700">
            Hear from ministry leaders who have experienced transformation through our media services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <CardTitle>{testimonial.name}</CardTitle>
                <CardDescription>{testimonial.church || testimonial.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
