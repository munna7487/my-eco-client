import React from 'react';

const HowItWorks = () => {
    return (
        <div className='flex bg-[#047857] justify-center items-center my-0.5'>
            <div className="w-full text-white p-10 mx-30">
                <h2 className="text-2xl font-bold mb-6">How It Works</h2>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <span className="mt-1">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </span>
                        <div>
                            <p className="font-semibold">Sign Up Easily</p>
                            <p className="text-sm text-white/90">
                                Create your account in minutes and join our green community.
                            </p>
                        </div>
                    </li>

                    <li className="flex items-start gap-3">
                        <span className="mt-1">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18M3 17h18" />
                            </svg>
                        </span>
                        <div>
                            <p className="font-semibold">Choose Activities</p>
                            <p className="text-sm text-white/90">
                                Pick from a variety of eco-friendly tasks and challenges.
                            </p>
                        </div>
                    </li>

                    <li className="flex items-start gap-3">
                        <span className="mt-1">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
                            </svg>
                        </span>
                        <div>
                            <p className="font-semibold">Track Your Impact</p>
                            <p className="text-sm text-white/90">
                                See the difference you make with every action you complete.
                            </p>
                        </div>
                    </li>

                    <li className="flex items-start gap-3">
                        <span className="mt-1">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </span>
                        <div>
                            <p className="font-semibold">Join the Community</p>
                            <p className="text-sm text-white/90">
                                Collaborate with others, share tips, and grow together sustainably.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HowItWorks;
