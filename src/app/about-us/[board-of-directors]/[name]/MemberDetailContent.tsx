// "use client";

// import { motion } from "framer-motion";
// import { teamMembers } from "@/resources/data";
// import { unslugify } from "@/utils";
// import { FaArrowLeft, FaChevronDown } from "react-icons/fa";
// import Link from "next/link";
// import Image from "next/image";
// import Button from "@/components/Button";

// interface MemberDetailContentProps {
//   nameOfMember: string;
// }

// const MemberDetailContent = ({ nameOfMember }: MemberDetailContentProps) => {
//   const unsluggedName = unslugify(nameOfMember);
//   const member = teamMembers.find((m) => m.slug === nameOfMember.toLowerCase());

//   if (!member) {
//     return (
//       <section className="min-h-screen flex items-center justify-center p-8 font-montserrat">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center"
//         >
//           <h1 className="text-4xl font-bold mb-4">Member Not Found</h1>
//           <p className="text-xl">No profile found for {unsluggedName}</p>
//           <Link href="/about-us" className="mt-6">
//             <Button
//               variant="light"
//               color="primary"
//               size="lg"
//               startContent={<FaArrowLeft />}
//             >
//               Back to Team
//             </Button>
//           </Link>
//         </motion.div>
//       </section>
//     );
//   }

//   return (
//     <>
//       {/* <div className="relative w-full h-[350px] bg-managementOverlay bg-center bg-cover bg-no-repeat flex items-center justify-center">
//         <div className="text-center mt-10 pt-10">
//           <div className="text-[50px] text-white font-montserrat font-bold">
//             {member.isManagement ? "Management Team Member" : "Board Member"}
//           </div>
//           <p className="text-white">{member.name}</p>
//         </div>
//       </div> */}
//       <div className="relative w-full h-[350px] bg-managementOverlay bg-center bg-cover bg-no-repeat overflow-hidden">
//   {/* Animated overlay */}
//   <motion.div 
//     className="absolute inset-0 bg-black/40"
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     transition={{ duration: 0.8 }}
//   />
  
//   {/* Floating particles */}
//   {[...Array(8)].map((_, i) => (
//     <motion.div
//       key={i}
//       className="absolute bg-white/20 rounded-full"
//       style={{
//         width: Math.random() * 10 + 5 + 'px',
//         height: Math.random() * 10 + 5 + 'px',
//         left: `${Math.random() * 100}%`,
//         top: `${Math.random() * 100}%`,
//       }}
//       animate={{
//         y: [0, (Math.random() * 100) - 50],
//         x: [0, (Math.random() * 40) - 20],
//         opacity: [0.2, 0.8, 0.2],
//       }}
//       transition={{
//         duration: Math.random() * 10 + 10,
//         repeat: Infinity,
//         ease: "easeInOut",
//       }}
//     />
//   ))}

//   {/* Content */}
//   <div className="relative h-full flex flex-col items-center justify-center px-4">
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.3, duration: 0.8 }}
//       className="text-center"
//     >
//       <motion.h1
//         className="text-4xl md:text-6xl font-bold text-white font-montserrat mb-4"
//         initial={{ letterSpacing: '0.2em' }}
//         animate={{ letterSpacing: '0.05em' }}
//         transition={{ delay: 0.5, duration: 1 }}
//       >
//         {member.isManagement ? "Management Team" : "Board of Directors"}
//       </motion.h1>
      
//       <motion.div
//         initial={{ width: 0 }}
//         animate={{ width: '150px' }}
//         transition={{ delay: 0.8, duration: 1 }}
//         className="h-[2px] bg-white mx-auto mb-6"
//       />
      
//       <motion.p
//         className="text-xl md:text-2xl text-white font-light tracking-wider"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1, duration: 0.8 }}
//       >
//         {member.name}
//       </motion.p>
      
//       <motion.p
//         className="text-lg text-white/80 mt-2"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.2, duration: 0.8 }}
//       >
//         {member.position}
//       </motion.p>
//     </motion.div>
//   </div>

//   {/* Scrolling indicator */}
//   <motion.div
//     className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//     animate={{ y: [0, 10, 0] }}
//     transition={{ duration: 2, repeat: Infinity }}
//   >
//     <FaChevronDown className="text-white h-8 w-8" />
//   </motion.div>
// </div>
//       <div className=" bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//         {/* Back Button */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.2 }}
//           className="mb-8"
//         >
//           <Link href="/about-us" className="mt-6">
//             <Button
//               variant="light"
//               color="primary"
//               size="lg"
//               startContent={<FaArrowLeft />}
//             >
//               Back to Team
//             </Button>
//           </Link>
//         </motion.div>

//         {/* Main Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className=" mx-auto bg-white rounded-3xl  overflow-hidden"
//         >
//           <div className="md:flex">
//             {/* Profile Image - Creative Layout */}
//             <motion.div
//               className="md:w-2/5 relative"
//               whileHover={{ scale: 1.02 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <div className="h-full w-full bg-gradient-to-br from-primary to-secondary p-0">
//                 <div className="h-full relative w-full overflow-hidden">
//                   <Image
//                     src="/images/koan-oil.jpg"
//                     alt={member.name}
//                     fill
//                     priority
//                     className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
//                   />
//                 </div>
//               </div>
//               <motion.div
//                 className="absolute -bottom-6 -right-6 bg-white p-4 rounded-full shadow-lg"
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ delay: 0.4 }}
//               >
//                 <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold">
//                   {member.name
//                     .split(" ")
//                     .map((n) => n[0])
//                     .join("")}
//                 </div>
//               </motion.div>
//             </motion.div>

//             {/* Profile Details - Creative Layout */}
//             <div className="md:w-3/5 p-8 md:p-12">
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.3 }}
//               >
//                 <h1 className="text-4xl font-bold text-gray-900 mb-2">
//                   {member.name.split(" ").map((name, i) => (
//                     <motion.span
//                       key={i}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.1 * i }}
//                       className="inline-block mr-2"
//                     >
//                       {name}
//                     </motion.span>
//                   ))}
//                 </h1>
//                 <motion.p
//                   className="text-xl text-primary mb-6 inline-block px-3 py-1 bg-primary/10 rounded-full"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.5 }}
//                 >
//                   {member.position}
//                 </motion.p>
//               </motion.div>

//               {/* Bio Section */}
//               <motion.div
//                 className="mb-8"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.6 }}
//               >
//                 <div className="flex items-center mb-4">
//                   <div className="w-8 h-1 bg-primary rounded-full mr-3"></div>
//                   <h2 className="text-2xl font-semibold text-gray-800">
//                     Professional Profile
//                   </h2>
//                 </div>
//                 <p className="text-gray-600 leading-relaxed">{member.bio}</p>
//               </motion.div>

//               {/* Education Section */}
//               {member.education && (
//                 <motion.div
//                   className="mb-8"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.7 }}
//                 >
//                   <div className="flex items-center mb-4">
//                     <div className="w-8 h-1 bg-primary rounded-full mr-3"></div>
//                     <h2 className="text-2xl font-semibold text-gray-800">
//                       Education
//                     </h2>
//                   </div>
//                   {Array.isArray(member.education) ? (
//                     <ul className="space-y-3">
//                       {member.education.map((item, index) => (
//                         <motion.li
//                           key={index}
//                           className="text-gray-600 pl-5 relative before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-primary before:rounded-full"
//                           initial={{ opacity: 0, x: -10 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           transition={{ delay: 0.8 + index * 0.1 }}
//                         >
//                           {item}
//                         </motion.li>
//                       ))}
//                     </ul>
//                   ) : (
//                     <p className="text-gray-600">{member.education}</p>
//                   )}
//                 </motion.div>
//               )}

//               {/* Experience Section */}
//               {member.experience && member.experience.length > 0 && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.9 }}
//                 >
//                   <div className="flex items-center mb-4">
//                     <div className="w-8 h-1 bg-primary rounded-full mr-3"></div>
//                     <h2 className="text-2xl font-semibold text-gray-800">
//                       Experience
//                     </h2>
//                   </div>
//                   <ul className="space-y-4">
//                     {member.experience.map((item, index) => (
//                       <motion.li
//                         key={index}
//                         className="text-gray-600 pl-5 border-l-2 border-primary/30 py-1"
//                         initial={{ opacity: 0, x: -10 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 1.0 + index * 0.1 }}
//                       >
//                         {item}
//                       </motion.li>
//                     ))}
//                   </ul>
//                 </motion.div>
//               )}
//             </div>
//           </div>
//         </motion.div>

//         {/* Creative Footer */}
//         <motion.div
//           className="mt-12 text-center text-gray-500 text-sm"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.5 }}
//         >
//           <p>
//             Want to work with {member.name.split(" ")[0]}?{" "}
//             <a href="#contact" className="text-primary hover:underline">
//               Get in touch
//             </a>
//           </p>
//         </motion.div>
//       </div>
//     </>
//   );
// };

// export default MemberDetailContent;


"use client";

import { motion } from "framer-motion";
import { teamMembers } from "@/resources/data";
import { unslugify } from "@/utils";
import { FaArrowLeft, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";

interface MemberDetailContentProps {
  nameOfMember: string;
}

const MemberDetailContent = ({ nameOfMember }: MemberDetailContentProps) => {
  const unsluggedName = unslugify(nameOfMember);
  const member = teamMembers.find((m) => m.slug === nameOfMember.toLowerCase());

  if (!member) {
    return (
      <section className="min-h-screen flex items-center justify-center p-8 font-montserrat">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Member Not Found</h1>
          <p className="text-lg sm:text-xl mb-6">No profile found for {unsluggedName}</p>
          <Link href="/about-us">
            <Button
              variant="light"
              color="primary"
              size="lg"
              startContent={<FaArrowLeft />}
            >
              Back to Team
            </Button>
          </Link>
        </motion.div>
      </section>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[250px] sm:h-[350px] bg-managementOverlay bg-center bg-cover bg-no-repeat overflow-hidden">
        {/* Animated overlay */}
        <motion.div 
          className="absolute inset-0 bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-montserrat mb-2 sm:mb-4"
              initial={{ letterSpacing: '0.2em' }}
              animate={{ letterSpacing: '0.05em' }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {member.isManagement ? "Management Team" : "Board of Directors"}
            </motion.h1>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100px sm:150px' }}
              transition={{ delay: 0.8, duration: 1 }}
              className="h-[2px] bg-white mx-auto mb-4 sm:mb-6"
            />
            
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-white font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {member.name}
            </motion.p>
            
            <motion.p
              className="text-sm sm:text-base md:text-lg text-white/80 mt-1 sm:mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {member.position}
            </motion.p>
          </motion.div>
        </div>

        {/* Scrolling indicator - Hidden on mobile */}
        <motion.div
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaChevronDown className="text-white h-6 w-6 sm:h-8 sm:w-8" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center sm:justify-start mb-6 sm:mb-8"
        >
          <Link href="/about-us">
            <Button
              variant="light"
              color="primary"
              size="lg"
              startContent={<FaArrowLeft />}
            >
              Back to Team
            </Button>
          </Link>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto bg-white rounded-xl sm:rounded-3xl shadow-md overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <motion.div
              className="w-full md:w-2/5 relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="aspect-square md:aspect-auto md:h-full bg-gradient-to-br from-primary to-secondary">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/images/koan-oil.jpg"
                    alt={member.name}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white p-2 sm:p-4 rounded-full shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              </motion.div>
            </motion.div>

            {/* Details Section */}
            <div className="w-full md:w-3/5 p-6 sm:p-8 md:p-10 lg:p-12">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h1>
                <motion.p
                  className="text-base sm:text-lg md:text-xl text-primary mb-4 sm:mb-6 inline-block px-3 py-1 bg-primary/10 rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {member.position}
                </motion.p>
              </motion.div>

              {/* Bio Section */}
              <motion.div
                className="mb-6 sm:mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-6 sm:w-8 h-1 bg-primary rounded-full mr-2 sm:mr-3"></div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                    Professional Profile
                  </h2>
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>

              <div className="grid gap-6 sm:gap-8">
                {/* Education Section */}
                {member.education && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className="w-6 sm:w-8 h-1 bg-primary rounded-full mr-2 sm:mr-3"></div>
                      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                        Education
                      </h2>
                    </div>
                    {Array.isArray(member.education) ? (
                      <ul className="space-y-2 sm:space-y-3">
                        {member.education.map((item, index) => (
                          <motion.li
                            key={index}
                            className="text-gray-600 text-sm sm:text-base pl-4 sm:pl-5 relative before:absolute before:left-0 before:top-2 sm:before:top-3 before:w-2 before:h-2 before:bg-primary before:rounded-full"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 + index * 0.1 }}
                          >
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-600 text-sm sm:text-base">
                        {member.education}
                      </p>
                    )}
                  </motion.div>
                )}

                {/* Experience Section */}
                {member.experience && member.experience.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className="w-6 sm:w-8 h-1 bg-primary rounded-full mr-2 sm:mr-3"></div>
                      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                        Experience
                      </h2>
                    </div>
                    <ul className="space-y-3 sm:space-y-4">
                      {member.experience.map((item, index) => (
                        <motion.li
                          key={index}
                          className="text-gray-600 text-sm sm:text-base pl-4 sm:pl-5 border-l-2 border-primary/30 py-0.5 sm:py-1"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.0 + index * 0.1 }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          className="mt-8 sm:mt-12 text-center text-gray-500 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <p>
            Want to work with {member.name.split(" ")[0]}?{" "}
            <a
              href="#contact"
              className="text-primary hover:underline font-medium"
            >
              Get in touch
            </a>
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default MemberDetailContent;