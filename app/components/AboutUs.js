import React from "react";
import Image from "next/image";

const AboutUs = () => {
    return (
        <div className="flex flex-wrap lg:flex-nowrap p-10">
            <div className="w-full lg:w-1/2">
                <Image src="/main/about.jpg" alt="Left Side Image" width={400} height={400} className="w-full lg:w-auto h-auto rounded-lg" />
            </div>
            <div className="w-full lg:w-1/2 text-white p-4">
                <div className="p-4 text-center">
                    <p><span className="text-2xl">Welcome to ScamSensei!</span> <br/>We're a team of computer science students from IIT Sri Lanka dedicated to providing a platform for people to share their experiences with scams. Whether you're a local or a visitor, our website is designed to help you navigate through common fraudulent activities. </p>
                    <p>At ScamSensei, we believe in the power of community to combat scams. Our platform encourages users to share stories and ask questions, creating a supportive environment where everyone can learn and stay informed. Join us as we work together to make our communities safer and more secure.</p>
                    <p>Thank you for being part of the ScamSensei community!</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
