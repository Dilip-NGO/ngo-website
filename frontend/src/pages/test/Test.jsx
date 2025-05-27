
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import first from "@/assets/first.png"; // Assuming you have an image for the first prize
import second from "@/assets/second.png"; // Assuming you have an image for the first prize
import third from "@/assets/third.png"; // Assuming you have an image for the first prize
import logo from "@/assets/logo.png"; // Assuming you have a logo image
import firstimg from "@/assets/firstimg.png"; // Assuming you have an image for the first prize
import secondimg from "@/assets/secondimg.png"; // Assuming you have an image for the first prize
import thirdimg from "@/assets/thirdimg.png";

const ScholarshipTest = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      {/* Header with navigation */}
      

      <div className="max-w-6xl mx-auto px-4 py-12">
        
        
        {/* English Version */}
        <div className="rounded-xl shadow-lg p-6 sm:p-8 mb-12">
          {/* <div className="text-center mb-6">
            <div className="space-y-1 text-base font-medium text-red-700">
              <p>Jai Maa Saraswati</p>
              <p>Shri Ganeshaya Namah</p>
              <p>Jai Shri Ram</p>
              <p>Jai Shri Krishna</p>
              <p>जय माँ सरस्वती</p>
              <p>श्री गणेशाय नमः</p>
              <p>जय श्री राम</p>
              <p>जय श्री कृष्ण</p>
            </div>
          </div> */}
          
          <h2 className="text-3xl font-bold mb-6 text-center text-black-600">
            🏆  Scholarship Examination 🏆<br/><br/>
            🏆  स्कॉलरशिप परीक्षा 🏆
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 mb-8">
            <div className=' flex flex-col gap-8'>
              <p className="text-gray-800 text-base leading-relaxed">
                We are organizing a <span className="text-black-600">Scholarship Examination</span> for students. 
                Participants will be awarded based on their performance as follows:<br />
                <span className="text-black-700">हम बच्चों के लिए एक स्कॉलरशिप परीक्षा आयोजित कर रहे हैं। इसमें भाग लेने वाले छात्रों को उनके प्रदर्शन के आधार पर निम्नलिखित पुरस्कार दिए जाएंगे:</span>
              </p>

              <div className=''>
                <p className="text-gray-800 text-base">
                  🎓 <span className="font-medium text-blue-600">Applicable For:</span> Students of <strong>Class 9th to 12th</strong>
                </p>

                <p className="text-gray-800 text-base">
                  📘 <span className="font-medium text-blue-600">Syllabus Covered:</span> Based on <strong>Class 6th to 9th</strong> curriculum
                </p>
              </div>
              {/* Prize Display Section with Images */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {/* First Prize */}
                <Card className="border-t-4 border-amber-500 transform transition-all hover:scale-105 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-full rounded-lg mb-4 overflow-hidden">
                        <img 
                          src={firstimg} 
                          alt="First Prize" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-2xl font-bold text-amber-500 mb-2">🥇 First Prize</div>
                      <div className="text-2xl font-bold text-amber-500 mb-2">🥇 प्रथम स्थान</div>
                      <div className="text-3xl font-bold text-gray-800">₹1,00,000/-</div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Second Prize */}
                <Card className="border-t-4 border-gray-400 transform transition-all hover:scale-105 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className={"w-full rounded-lg mb-4 overflow-hidden"}>
                        <img 
                          src={secondimg}
                          alt="Second Prize" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-2xl font-bold text-gray-500 mb-2">🥈 Second Prize</div>
                      <div className="text-2xl font-bold text-gray-500 mb-2">🥈 द्वितीय स्थान</div>
                      <div className="text-3xl font-bold text-gray-800">₹50,000/-</div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Third Prize */}
                <Card className="border-t-4 border-amber-700 transform transition-all hover:scale-105 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-full rounded-lg mb-4 overflow-hidden">
                        <img 
                          src={thirdimg} 
                          alt="Third Prize" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-2xl font-bold text-amber-700 mb-2">🥉 Third Prize</div>
                      <div className="text-2xl font-bold text-amber-700 mb-2">🥉 तृतीय स्थान</div>
                      <div className="text-3xl font-bold text-gray-800">₹25,000/-</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="rounded-lg p-6 md:p-8 mb-8">
              <h3 className="text-2xl font-bold text-black-600 mb-2 text-center">🏆 Additional Prizes</h3>

              <ul className="space-y-5 text-gray-700 text-base md:text-lg">
                <li className="flex items-start">
                  <span className="mr-3 text-indigo-500 text-xl">💰</span>
                  <span>
                    <strong>4th to 10th Prize:</strong> ₹1,000/- each<br />
                    <strong>चौथे से दसवें स्थान तक:</strong> ₹1,000/- प्रत्येक
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="mr-3 text-indigo-500 text-xl">💸</span>
                  <span>
                    <strong>11th to 30th Prize:</strong> ₹500/- each<br />
                    <strong>11वें से 30वें स्थान तक:</strong> ₹500/- प्रत्येक
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="mr-3 text-yellow-500 text-xl">🏅</span>
                  <span>
                    <strong>31st to 200th Prize:</strong> Medals<br />
                    <strong>31वें से 200वें स्थान तक:</strong> पदक प्रदान किए जाएंगे
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="mr-3 text-green-600 text-xl">📜</span>
                  <span>
                    <strong>All Participants:</strong> Certificate of Participation<br />
                    <strong>सभी प्रतिभागियों को:</strong> भागीदारी प्रमाणपत्र प्रदान किए जाएंगे
                  </span>
                </li>
              </ul>
            </div>

            <div className=' flex flex-col gap-8'>
              
            <div className=''>
                <p className="text-gray-800 text-base">
                  🎓 <span className="font-medium text-blue-600">Applicable For:</span> Students of <strong>Class 6th to 8th</strong>
                </p>

                <p className="text-gray-800 text-base">
                  📘 <span className="font-medium text-blue-600">Syllabus Covered:</span> Based on <strong>Class 1st to 6th</strong> curriculum
                </p>
              </div>
              {/* Prize Display Section with Images */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {/* First Prize */}
                <Card className="border-t-4 border-amber-500 transform transition-all hover:scale-105 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-full rounded-lg mb-4 overflow-hidden">
                        <img 
                          src={first} 
                          alt="First Prize" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-2xl font-bold text-amber-500 mb-2">🥇 First Prize</div>
                      <div className="text-2xl font-bold text-amber-500 mb-2">🥇 प्रथम स्थान</div>
                      <div className="text-3xl font-bold text-gray-800">₹30,000/-</div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Second Prize */}
                <Card className="border-t-4 border-gray-400 transform transition-all hover:scale-105 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className={"w-full rounded-lg mb-4 overflow-hidden"}>
                        <img 
                          src={second}
                          alt="Second Prize" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-2xl font-bold text-gray-500 mb-2">🥈 Second Prize</div>
                      <div className="text-2xl font-bold text-gray-500 mb-2">🥈 द्वितीय स्थान</div>
                      <div className="text-3xl font-bold text-gray-800">₹15,000/-</div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Third Prize */}
                <Card className="border-t-4 border-amber-700 transform transition-all hover:scale-105 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-full rounded-lg mb-4 overflow-hidden">
                        <img 
                          src={third} 
                          alt="Third Prize" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-2xl font-bold text-amber-700 mb-2">🥉 Third Prize</div>
                      <div className="text-2xl font-bold text-amber-700 mb-2">🥉 तृतीय स्थान</div>
                      <div className="text-3xl font-bold text-gray-800">₹5,000/-</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="rounded-lg p-6 md:p-8 mb-8">
              <h3 className="text-2xl font-bold text-black-600 mb-2 text-center">🏆 Additional Prizes</h3>

              <ul className="space-y-5 text-gray-700 text-base md:text-lg">
                <li className="flex items-start">
                  <span className="mr-3 text-indigo-500 text-xl">💰</span>
                  <span>
                    <strong>4th to 12th Prize:</strong> School Bag<br />
                    <strong>चौथे से बारहवें स्थान तक:</strong> स्कूल बैग प्रदान किया जाएगा
                  </span>

                </li>

                <li className="flex items-start">
                  <span className="mr-3 text-green-600 text-xl">📜</span>
                  <span>
                    <strong>All Participants:</strong> Certificate of Participation<br />
                    <strong>सभी प्रतिभागियों को:</strong> भागीदारी प्रमाणपत्र प्रदान किए जाएंगे
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-bold text-black-600 mb-6 text-center">📘 Test Details</h2>
              <ol className="space-y-4 text-gray-700 text-base md:text-lg list-decimal list-inside">
                <li className="flex items-start">
                  <span className="mr-2 text-indigo-500">🕒</span>
                  <span>Duration: <span className="font-semibold">1 hour 30 minutes</span></span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-indigo-500">❓</span>
                  <span>No of Questions: <span className="font-semibold">100</span></span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-indigo-500">📝</span>
                  <span>Total Marks: <span className="font-semibold">2 × 100 = 200 marks</span></span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-indigo-500">📄</span>
                  <span>Paper Mode: <span className="font-semibold">Offline (OMR Sheet)</span></span>
                </li>
              </ol>
            </div>

            {/* Terms and Conditions Section */}
            <div className="rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-black-800">📌 Terms and Conditions</h3>
              <h3 className="text-2xl font-bold mb-4 text-black-800">📌 नियम और शर्तें:</h3>
              <ul className="space-y-4 text-gray-800 text-base leading-relaxed">
                <li>
                  • All candidates must arrive at the examination center at least 30 minutes before the scheduled start time of the examination. <br />
                  सभी विद्यार्थियों को परीक्षा प्रारंभ होने के निर्धारित समय से कम से कम 30 मिनट पहले परीक्षा केंद्र पर पहुंचना अनिवार्य है।
                </li>
                <li>
                  • Candidates are required to strictly follow all instructions given by the invigilators during the examination. <br />
                  विद्यार्थियों को परीक्षा के दौरान पर्यवेक्षकों द्वारा दिए गए सभी निर्देशों का सख्ती से पालन करना होगा।
                </li>
                <li>
                  • The examination will be conducted in a transparent and fair manner to ensure integrity. <br />
                  परीक्षा को पारदर्शी और निष्पक्ष तरीके से आयोजित किया जाएगा ताकि ईमानदारी सुनिश्चित की जा सके।
                </li>
                <li>
                  • For any concerns or assistance, candidates may contact the support team via email or phone at 9569927027. <br />
                  किसी भी समस्या या सहायता के लिए, विद्यार्थियों ईमेल या 9569927027 नंबर पर कॉल करके सहायता टीम से संपर्क कर सकते हैं।
                </li>
                <li>
                  • The date and time of the examination will be announced two months in advance. <br />
                  परीक्षा की तिथि और समय दो महीने पहले घोषित किए जाएंगे।
                </li>
                <li>
                  • The examination center details will be communicated four days before the exam date. <br />
                  परीक्षा केंद्र का विवरण परीक्षा तिथि से चार दिन पहले साझा किया जाएगा।
                </li>
                <li>
                  • Any candidate found engaging in unfair practices or cheating during the examination will be subject to strict disciplinary action. <br />
                  परीक्षा के दौरान अनुचित गतिविधियों या नकल करते पाए जाने वाले उम्मीदवार के खिलाफ सख्त अनुशासनात्मक कार्रवाई की जाएगी।
                </li>
              </ul>
            </div>

          
            <div className="text-center mb-8">
              <p className="text-xl font-semibold text-black-600">
                🎁 Additional Benefits: Total prizes worth up to ₹2 Lakhs, educational materials, trophies, medals, and more.<br/>
                🎁 अतिरिक्त लाभ: कुल मिलाकर ₹2 लाख रुपये तक के पुरस्कार, शिक्षा सामग्री, ट्रॉफी, मेडल और अन्य आकर्षक इनाम
              </p>
              <Link
                to="/form"
                className="inline-block bg-orange-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 mt-2"
              >
                Apply Now
              </Link>
            </div>
            

            
            <div className="text-center bg-gradient-to-r from-blue-400 to-blue-400 text-white p-4 rounded-lg mb-8">
              <p className="text-xl font-bold">
                📢 This is a golden opportunity! Participate, learn, and step toward a brighter future.<br/>
                📢 यह एक सुनहरा अवसर है! भाग लें, सीखें, और अपने उज्जवल भविष्य की ओर एक कदम बढ़ाएँ।
              </p>
            </div>
            
            {/* About Foundation Section */}
          <div className="mb-8">
            
          <div className="flex items-center justify-center gap-3 mb-6">
            <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 pb-2">
              About Our Foundation
            </h2>
          </div>
            <div className="rounded-lg p-6">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-black-700 text-center">
                Why Saraswati Vidya Foundation? | सरस्वती विद्या फाउंडेशन ही क्यों?
              </h3>
              <div className="prose prose-lg max-w-none text-gray-700">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">🎯 Our Mission</h4>
                  <p className="leading-relaxed">
                    We acknowledge the challenges faced by children in Sonbhadra in accessing quality education. We encourage you to reflect on your present academic standing and the seriousness with which you approach your education. Participating in the scholarship examination will not only provide you with an opportunity to earn financial aid but also ensure comprehensive support throughout your educational journey.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">💰 Financial Support</h4>
                  <p className="leading-relaxed">
                    Once awarded, the scholarship will cover both your academic and financial needs. Should you encounter any difficulties or obstacles at any stage, please do not hesitate to reach out to us. Assistance will be granted based on your academic performance and examination results.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">🎓 Coaching Support</h4>
                  <p className="leading-relaxed">
                    Moreover, for students aspiring to enroll in prestigious coaching institutes for Medical, Engineering, or Arts disciplines, we will facilitate free admission and guidance, ensuring that financial constraints do not hinder your ambitions.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">गुणवत्तापूर्ण शिक्षा के लिए आपका सहयोग आवश्यक है</h4>
                    <p className="leading-relaxed">
                    हम सोनभद्र के बच्चों को गुणवत्तापूर्ण शिक्षा प्राप्त करने में आने वाली चुनौतियों को समझते हैं। हम आपसे अनुरोध करते हैं कि आप अपनी वर्तमान शैक्षणिक स्थिति और शिक्षा के प्रति आपकी गंभीरता पर विचार करें। छात्रवृत्ति परीक्षा में भाग लेना न केवल आपको आर्थिक सहायता प्राप्त करने का अवसर देगा, बल्कि आपके पूरे शैक्षणिक मार्ग में समग्र समर्थन भी सुनिश्चित करेगा।
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3"><br/>छात्रवृत्ति से मिलने वाले लाभ</h4>
                  <p className="leading-relaxed">
                    छात्रवृत्ति प्राप्त होने पर आपकी शैक्षणिक और आर्थिक दोनों आवश्यकताओं का ध्यान रखा जाएगा। यदि आप किसी भी चरण पर किसी कठिनाई या बाधा का सामना करते हैं, तो कृपया निःसंकोच हमसे संपर्क करें। सहायता आपकी शैक्षणिक प्रदर्शन और परीक्षा परिणाम के आधार पर प्रदान की जाएगी।
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">पात्रता और समर्थन</h4>
                  <p className="leading-relaxed">
                    यह अवसर विशेष रूप से उन छात्रों के लिए है जो ईमानदारी से अध्ययन करते हैं और प्रगति के लिए सच्ची इच्छाशक्ति रखते हैं। आपकी लगन और समर्पण हमारी सहायता का आधार होगा।
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">विशेष कोचिंग और मार्गदर्शन की सुविधा</h4>
                  <p className="leading-relaxed">
                  साथ ही, जो छात्र मेडिकल, इंजीनियरिंग या कला संकायों में प्रतिष्ठित कोचिंग संस्थानों में प्रवेश लेना चाहते हैं, उनके लिए नि:शुल्क प्रवेश एवं मार्गदर्शन की व्यवस्था भी की जाएगी, ताकि आर्थिक बाधाएँ आपके सपनों के रास्ते में नहीं आएं।
                  </p>
                </div>

              </div>
            </div>
             
          </div>
        </div>
        
        
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
    </div>
  );
};

export default ScholarshipTest;