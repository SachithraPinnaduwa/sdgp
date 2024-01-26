import React from 'react';
import Image from 'next/image';

const Section = () => {
  const images = [ 
    { src: '/main/srilanka.jpg', href: 'https://www.smartraveller.gov.au/destinations/asia/sri-lanka', heading: 'Sri Lanka Travel Advice & Safety' },
    { src: '/main/travel.jpg', href: 'https://www.godigit.com/international-travel-insurance/tourist-scams/tourist-scams-in-sri-lanka', heading: 'List of 10 Most Common Tourist Scams in Sri Lanka' },
    { src: '/main/srilanka2.jpg', href: 'https://lifeinlanka.com/tourist-traps-and-scams-in-sri-lanka/', heading: '11 Types of Tourist Traps & Scams to Avoid in Sri Lanka' },
    { src: '/main/girl-taxi.jpg', href: 'https://www.worldnomads.com/travel-safety/southern-asia/sri-lanka/crime-sri-lanka-style', heading: 'Is Sri Lanka Safe? Crime and Travel Scams to Be Aware Of' },
    
  ];

  return (
    <section className="flex flex-col lg:flex-row items-center py-16">
        
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 ">
        {images.map((image, index) => (
          <a key={index} href={image.href}>
          <div className="relative">
            <Image
              src={image.src}
              alt=""
              className="object-cover w-full h-full rounded"
              objectPosition="responsive"
              width={400}
              height={250}
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-white text-center">
              {image.heading}
            </div>
          </div>
        </a>
        ))}
      </div>
     
    </section>
  );
};

export default Section;