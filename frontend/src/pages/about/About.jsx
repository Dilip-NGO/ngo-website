import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import logo from "../../assets/logo.png";
import chairman from "../../assets/chairman.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        

        {/* Main Content Section */}
        <div className="rounded-xl shadow-lg p-6 sm:p-8">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-black-600 mb-4">
              📚 About Us
            </h1>
            <Separator className="my-6" />
          </div>

          {/* Foundation Logo Section */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black-700 mb-6">
              🏛️ Saraswati Vidya Foundation
            </h2>
            <div className="flex justify-center mb-6">
              <img
                src={logo}
                alt="Saraswati Logo"
                className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 h-auto object-contain"
              />
            </div>
            <Separator className="my-8" />
          </div>

          {/* Current Situation Section */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black-700 mb-6 text-center">
              🌟 Current Educational Challenges
            </h2>

            <div className="p-6 rounded-lg mb-6">
              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-semibold text-black-800 mb-4">
                  📊 Economic Situation Analysis
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Looking at the economic situation in our village, we found that children from places like the village, Kamba, Nagar, etc., are facing extremely poor financial conditions. These children are deeply worried about their education and future. In many cases, the student is also responsible for supporting their family financially.
                </p>
                <h3 className="text-xl font-semibold text-black-800 mb-4 mt-6">
                  👨‍👩‍👧‍👦 Impact on Childhood
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Due to such harsh circumstances, these students are forced to leave their homes and travel thousands of kilometers to work as laborers. At an age when they should be with their parents—an age considered the best part of human life, a time meant to be carefree, safe, and happy—many children are deprived of a happy childhood.
                </p>
                <h3 className="text-xl font-semibold text-black-800 mb-4 mt-6">
                  ⚠️ Consequences of Dropping Out
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  There are numerous reasons why children drop out of school. These include challenging socio-economic conditions and a lack of awareness in communities where education is not prioritized. Going to school not only ensures a respectful future and a happy present for children but also provides them a safe place to express themselves, learn, share, and grow.
                  Children who drop out of school often end up as child laborers. Some are forced into child marriage or fall victim to child trafficking.
                </p>
                <Separator className="my-6" />
                <h3 className="text-xl font-semibold text-black-800 mb-4">
                  📊 आर्थिक स्थिति का विश्लेषण
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  हम गांव के आर्थिक स्थिति को देखते हुए, हमें यह पता चला कि गांव, कस्बा, नगर आदि स्थानों के बच्चो की आर्थिक स्थिति इतना नीचे स्तर पर है की बच्चा अपने शिक्षा और भविष्य को लेकर काफी चिंतित है। जहाँ तक मुझे पता चल पाया की उनकी घर का भी पालन पोषण उस विद्यार्थी को ही करना पढ़ रहा है।
                </p>
                <h3 className="text-xl font-semibold text-black-800 mb-4 mt-6">
                  👨‍👩‍👧‍👦 बचपन पर प्रभाव
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  और इन स्थितियों के कारण इतना कठिन परिस्थितियों से गुजरते हुए विद्यार्थी अपने घर के छोड़ कर मजदूरी करने के लिये अपने घर से हजारों किमी के दूरी में चले जा रहे हैं।
                  जिस उम्र में विद्यार्थी को अपने माता-पिता के साथ रहना चाहिए—जो बचपन के मानव जीवन का सबसे अच्छा हिस्सा कहा जाता है—एक ऐसी उम्र जब वे बेफिक्र, सुरक्षित और खुश होते हैं, लेकिन कई बच्चों के लिए खुशहाल बचपन वास्तविकता नहीं है।
                </p>
                <h3 className="text-xl font-semibold text-black-800 mb-4 mt-6">
                  ⚠️ स्कूल छोड़ने के परिणाम
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  स्कूल छोड़ने के कई कारण हैं—चुनौतीपूर्ण सामाजिक-आर्थिक परिस्थितियों से लेकर उन समुदायों में शिक्षा को प्राथमिकता न देना तक। स्कूल जाना न केवल बच्चों के लिए एक सम्मानजनक भविष्य और खुशहाल वर्तमान सुनिश्चित करता है, बल्कि उन्हें खुद को व्यक्त करने, सीखने, साझा करने और बढ़ने के लिए एक सुरक्षित स्थान भी देता है।
                  स्कूल छोड़ने वाले बच्चों को अक्सर बाल श्रम करना पड़ता है, उन्हें बाल विवाह में धकेल दिया जाता है, या वे बाल तस्करी के शिकार हो जाते हैं।
                </p>
              </div>
            </div>

            <Separator className="my-8" />
          </div>

          

            {/* Chairman Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-12 lg:px-10 py-10">
            {/* Image */}
            <div className="flex-shrink-0">
              <img
                src={chairman}
                alt="Chairman"
                className="
                  w-60 h-60 sm:w-80 sm:h-80 md:w-[370px] md:h-[370px] lg:w-[420px] lg:h-[460px]
                  shadow-2xl rounded
                  bg-gradient-to-br from-orange-100 to-red-100
                  transition-transform duration-300 hover:scale-105 hover:shadow-orange-300/70
                  animate-fade-in
                "
              />
            </div>

            {/* Content */}
            <div className="max-w-2xl text-justify text-gray-800">
              <h2 className="text-2xl md:text-3xl font-bold text-black-700 mb-4">From The Chairman's Desk</h2>
              <p className="mb-4">
                Mr. Dilip Kumar, the esteemed Chairman of Saraswati Vidya Foundation, is a passionate advocate
                for educational equity and community development. With a clear vision of empowering lives
                through learning, he has been instrumental in shaping the foundation’s mission to bring quality
                education to every corner of society—especially the underprivileged and marginalized.
              </p>
              <p className="mb-4">
                Under his visionary leadership, Saraswati Vidya Foundation has launched impactful initiatives
                such as rural school development, scholarship distribution, teacher training programs, and
                digital literacy campaigns. Mr. Kumar’s approach blends grassroots understanding with strategic
                planning, making the foundation a trusted name in the educational NGO sector.
              </p>
              <p>
                Driven by the belief that education is the most powerful tool to transform lives, Mr. Dilip Kumar
                continues to lead the organization with compassion, integrity, and an unwavering commitment to
                creating opportunities for all.
              </p>
            </div>
          </div>

            {/* Our Mission Section */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black-700 mb-6 text-center">
              🎯 Our Mission & Vision
            </h2>

            <div className="p-6 rounded-r-lg">
              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-semibold text-black-800 mb-4">
                  💡 "Your Education Should Not Stop" Program
                </h3>
                <p className=" mb-4">
                  Saraswati Vidya Foundation, through its "Your Education Should Not Stop" scholarship program, is helping children facing difficult circumstances to continue their education with the hope of a brighter future and a better life. We will take the responsibility of fulfilling your dreams. With your hard work and our support, we can make quality education accessible and help achieve those dreams.
                </p>
                <h3 className="text-xl font-semibold text-black-800 mb-4 mt-6">
                  🤝 Our Commitment | हमारी प्रतिबद्धता
                </h3>
                <p className=" mb-6">
                  Let us join hands to ensure a happy and safe childhood for every child.
                </p>
                <Separator className="my-6" />
                <h3 className="text-xl font-semibold text-black-800 mb-4">
                  💡 "शिक्षा ना रुके" कार्यक्रम
                </h3>
                <p className=" mb-4">
                  सरस्वती विद्या फाउंडेशन आपकी "शिक्षा ना रुके" छात्रवृत्ति योजना के माध्यम से कठिन परिस्थितियों से जूझ रहे बच्चों की एक उज्ज्वल भविष्य और बेहतर जीवन की आशा के साथ आपकी शिक्षा को जारी रखने में मदद कर रहा है। आपके सपने पूरे करने की जिम्मेदारी हमारी होगी। आपके मेहनत और हमारा सहयोग मिलकर गुणवत्ता पूर्ण शिक्षा के साथ उन सपनों को पूरा कर सकता है।
                </p>
                <h3 className="text-xl font-semibold text-black-800 mb-4 mt-6">
                  🤝 हमारी प्रतिबद्धता
                </h3>
                <p className="">
                  सभी के लिए एक खुशहाल और सुरक्षित बचपन सुनिश्चित करने हेतु हमारे साथ हाथ मिलाएं।
                </p>
              </div>
            </div>
            <Separator className="my-8" />
          </div>

          {/* Call to Action Section */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black-700 mb-6">
              🚀 Join Our Movement
            </h2>
            

            <div className="text-black rounded-xl p-8">
              
              <p className="text-lg mb-6 opacity-90">
                Together, we can ensure every child has access to quality education and a bright future.<br />
                आइए मिलकर सुनिश्चित करें कि हर बच्चे को गुणवत्तापूर्ण शिक्षा और उज्ज्वल भविष्य मिले।
              </p>
              <Link
                to="/"
                className="bg-white text-black-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-md"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link
            to="/"
            className="inline-flex items-center text-black-600 hover:text-orange-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;