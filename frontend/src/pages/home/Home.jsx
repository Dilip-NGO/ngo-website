import React, { useState, useEffect } from "react";
import bg from "../../assets/bg.jpeg";
import bg1 from "../../assets/bg1.jpeg";
import bg2 from "../../assets/bg2.jpeg";

const Home = () => {
  const images = [bg, bg1, bg2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 font-sans text-gray-800">
      {/* Top Banner Image with Smooth Slideshow */}
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] w-full overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center px-4">
            Saraswati Vidya Foundation<br/><br/>
            <h4 className=" text-4xl">सरस्वती विद्या फाउंडेशन</h4>
          </h1>
        </div>
         
      </div>

      {/* Main Content */}
      <div className="flex-1 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Heading: English then Hindi */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center text-black-700 leading-snug">
            Transforming the future of rural children through education
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-black-700 leading-snug">
           शिक्षा के माध्यम से ग्रामीण बच्चों के भविष्य का रूपांतरण
          </h2>

          {/* Paragraph: English then Hindi */}
          <p className="text-lg sm:text-xl mb-6 text-justify text-black-700">
            Due to financial hardship in villages, towns, and remote areas, many children are deprived of education. They are often forced to drop out of school and work as laborers or take on household responsibilities. Saraswati Vidya Foundation’s mission is to ensure that no child is left without education.
          </p>
          <p className="text-lg sm:text-xl mb-10 text-justify text-black-700">
            गाँव, कस्बों और दूरदराज के इलाकों में आर्थिक तंगी के कारण कई बच्चे शिक्षा से वंचित रह जाते हैं। उन्हें मजबूरी में स्कूल छोड़कर मजदूरी करनी पड़ती है या घर की जिम्मेदारियाँ संभालनी पड़ती हैं। सरस्वती विद्या फाउंडेशन का मिशन है कि कोई भी बच्चा शिक्षा से वंचित न रहे।
          </p>

          {/* Subheading: English then Hindi */}
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-black-700">
            Through our programs, we are bringing change in the following 5 key areas:
          </h3>
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-black-700">
            हमारे कार्यक्रमों के माध्यम से, हम निम्नलिखित 5 प्रमुख क्षेत्रों में बदलाव ला रहे हैं:
          </h3>

          {/* Grid of cards, each with English then Hindi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: "Financial Security: Ending Poverty Through Education",
                content:
                  "Children from poor families often drop out of school due to lack of money. Our 'Shiksha Na Ruke' (Let Education Continue) scholarship program provides financial support to help these children continue their education, so they can secure good jobs in the future and improve their family's financial condition.",
              },
              {
                title: "आर्थिक सुरक्षा: शिक्षा से गरीबी का अंत",
                content:
                  "गरीब परिवारों के बच्चे अक्सर वित्तीय अभाव के कारण स्कूल छोड़ देते हैं। हमारा 'शिक्षा न रुके' छात्रवृत्ति कार्यक्रम ऐसे बच्चों को उनकी शिक्षा जारी रखने में आर्थिक सहायता प्रदान करता है, ताकि वे भविष्य में अच्छे रोजगार प्राप्त कर सकें और अपने परिवार की आर्थिक स्थिति सुधार सकें।",
              },

              {
                title: "Equal Opportunity: Education is Every Child's Right",
                content:
                  "In villages, girls and children from underprivileged sections often do not get equal opportunities for education. We provide free coaching, books, and uniforms so that all children can study without any discrimination.",
              },
              {
                title: "समान अवसर: हर बच्चे को शिक्षा का अधिकार",
                content:
                 "ग्रामीण क्षेत्रों में, वंचित वर्गों की बालिकाओं एवं बच्चों को अक्सर शिक्षा के समान अवसर नहीं मिलते। हम सभी बच्चों को बिना किसी भेदभाव के शिक्षा प्राप्त करने के लिए पुस्तकें एवं अध्ययन सामग्री प्रदान करते हैं।",
              },

              {
                title: "Self-Reliance: Empowerment Through Education",
                content:
                  "Children who drop out of school to work as laborers often remain trapped in the cycle of poverty. We provide them with skill development training to create self-employment opportunities, helping them become self-reliant.",
              },
              {
                title: "आत्मनिर्भरता: शिक्षा से स्वावलंबन",
                content:
                  "जो बच्चे मजदूरी के लिए स्कूल छोड़ देते हैं, वे अक्सर गरीबी के दुष्चक्र में फँसे रह जाते हैं। हम उन्हें स्वरोजगार के अवसर उपलब्ध कराने के लिए कौशल विकास प्रशिक्षण प्रदान करते हैं, जिससे वे आत्मनिर्भर बन सकें।",
              },

              {
                title: "Prevention of Child Labor and Child Marriage",
                content:
                  "In the absence of education, children fall victim to child labor, trafficking, and forced marriage. We run awareness campaigns to educate parents about the importance of education and help bring children back to school.",
              },
              {
                title: "बाल श्रम और बाल विवाह रोकथाम",
                content:
                  "शिक्षा के अभाव में बच्चे बाल मजदूरी, तस्करी और जबरन शादी का शिकार हो जाते हैं। हम जागरूकता अभियान चलाकर माता-पिता को शिक्षा का महत्व समझाते हैं और बच्चों को स्कूल वापस लाने में मदद करते हैं।",
              },

              {
                title: "Safe Childhood: School = Secure Future",
                content:
                  "School is not just a place for learning, but also provides children with safety, nutrition, and emotional support. We offer facilities like mid-day meals, health check-ups, and counseling so that children can study with peace of mind.",
              },
              {
                title: "सुरक्षित बचपन: स्कूल = सुरक्षित भविष्य",
                content:
                  "स्कूल न केवल पढ़ाई का स्थान है, बल्कि यह बच्चों को सुरक्षा, पोषण और मानसिक संबल भी देता है। हम मिड-डे मील, स्वास्थ्य जाँच और काउंसलिंग जैसी सुविधाएँ प्रदान करते हैं ताकि बच्चे निश्चिंत होकर पढ़ सकें।",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-orange-200 p-6 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="text-lg sm:text-xl font-semibold mb-2 text-black-700">
                  {item.title}
                </h4>
                <p className="text-gray-700 text-base sm:text-lg">{item.content}</p>
              </div>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-red-700 mb-4">
              This change is possible only with your support!
            </h3>
            <h3 className="text-2xl font-semibold text-red-700 mb-4">
              आपके सहयोग से ही संभव है यह बदलाव!
            </h3>

            <p className="mb-6 text-lg sm:text-xl max-w-3xl mx-auto text-gray-700">
              Our goal is that no child is deprived of education. With your help in spreading the word, we can bring thousands of children back to school.
            </p>
            <p className="mb-6 text-lg sm:text-xl max-w-3xl mx-auto text-gray-700">
              हमारा लक्ष्य है कि कोई भी बच्चा शिक्षा से वंचित न रहे। आपके प्रचार-प्रसार से हम हजारों बच्चों को स्कूल वापस ला सकते हैं।
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow transition duration-300">
                Spread Awareness
              </button>
            </div>
            {/* <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow transition duration-300">
                Become a Volunteer
              </button>
              <button className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-semibold py-3 px-6 rounded-lg shadow transition duration-300">
                Donate to the Cause
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;