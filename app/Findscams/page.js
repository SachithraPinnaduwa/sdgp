
import React from 'react';
import MyDropdown from '@/app/Findscams/MyDropdown';
import Navbar from "@/app/components/Navbar";

function FindScams() {
    return (
        <>
            <Navbar/>
        <div className={'flex flex-col justify-center items-center mt-[-6%] min-h-screen'}>
            <div className={'mt-[0%] text-center text-amber-50'}>
                <h1 className={'text-6xl mb-10'}>Community Stories</h1>
                <p className={'text-3xl'}>Scams That the Community Faced</p>
            </div>

            <div className={'mt-[10%]'}>
                <MyDropdown />
            </div>
        </div>
        </>
    );
}

export default FindScams;
