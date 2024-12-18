import React from 'react'

const Meet = () => {
  const teamMembers = [
    { name: "Shreyas Kulkarni" },
    { name: "Ritvit.K" },
    { name: "Sathvik Shetty" }
  ];

  return (
    <div className="bg-black min-h-screen w-full overflow-x-hidden">
      {/* Heading */}
      <div className="px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-[#379AE6] to-[#f6f6f6] text-transparent bg-clip-text text-center py-4 sm:py-5 font-normal">
          Meet The Team
        </h1>
      </div>
      
      {/* First Team Row */}
      <div className="flex flex-col sm:flex-row items-center justify-center mt-6 space-y-6 sm:space-y-0 sm:space-x-4 md:space-x-8 lg:space-x-16 bg-black px-4">
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-72 bg-gradient-to-b from-[#000000] to-[#2741A9] min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-80 text-center mb-6 sm:mb-0"
          >
            <div className="bg-black min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-52 m-4 sm:m-6 lg:m-8"></div>
            <p className="text-white relative bottom-4 sm:bottom-5 lg:bottom-6">{member.name}</p>
          </div>
        ))}
      </div>
      
      {/* Second Team Row */}
      <div className="flex flex-col sm:flex-row items-center justify-center mt-6 space-y-6 sm:space-y-0 sm:space-x-4 md:space-x-8 lg:space-x-16 bg-black px-4">
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-72 bg-gradient-to-b from-[#000000] to-[#2741A9] min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-80 text-center mb-6 sm:mb-0"
          >
            <div className="bg-black min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-52 m-4 sm:m-6 lg:m-8"></div>
            <p className="text-white relative bottom-4 sm:bottom-5 lg:bottom-6">{member.name}</p>
          </div>
        ))}
      </div>
      
      {/* Background Section */}
      <div 
        className="bg-cover bg-center min-h-screen mt-12 sm:mt-16 md:mt-20 lg:mt-24 w-full"
        style={{
          backgroundImage: "url('./utils/enhanced_2.png')"
        }}
      >
        <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8 lg:space-x-16 px-4'>
          {[1, 2, 3].map((_, index) => (
            <div 
              key={index} 
              className="bg-[#171A1F] min-h-40 w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-72 relative top-36 border-2 border-[#8EB8F6] rounded-3xl"
            >
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Meet