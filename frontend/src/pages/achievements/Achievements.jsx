import React from "react";
import ac1 from "../../assets/ac1.jpg";
import ac2 from "../../assets/ac2.jpg";
import ac3 from "../../assets/ac3.jpg";
import ac4 from "../../assets/ac4.jpg";
import ac5 from "../../assets/ac5.jpg";

const achievementsData = [
  {
    img: ac1,
    caption: "Guiding Students about their career paths."
  },
  {
    img: ac2,
    caption: "Panel members engaging with school staff before starting the awareness session."
  },
  {
    img: ac3,
    caption: "Students attentively listening during the session, gaining valuable information on scholarships."
  },
  {
    img: ac4,
    caption: "Motivated students attentively engaged in a session about educational growth "
  },
  {
    img: ac5,
    caption: "Focused students taking notes and actively participating during the awareness workshop."
  }
];

const Achievements = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-16 bg-gray-50">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-orange-600 mb-10">
        🌟 Our Achievements
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {achievementsData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={item.img}
              alt={`Achievement ${index + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
            <p className="p-4 text-gray-700 text-sm font-medium text-center">{item.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
