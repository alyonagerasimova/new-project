import React from 'react';
import Image from "next/image";

const TeamSection = () => {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Познакомтесь с нашим
                        руководством</h2>
                    {/*<p className="mt-6 text-lg leading-8 text-gray-600">Libero fames augue nisl porttitor nisi, quis. Id*/}
                    {/*    ac elit odio vitae elementum enim vitae ullamcorper suspendisse.</p>*/}
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    <li>
                        <div className="flex items-center gap-x-6">
                            <Image className="h-16 w-16 rounded-full"
                                   src="/avatar.jpg"
                                   alt=""
                                   width={300}
                                   height={300}/>
                            <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Осипова
                                    Татьяна Николаевна</h3>
                                <p className="text-sm font-semibold leading-6 text-indigo-600">ведущий специалист
                                    департамента жилой недвижимости, специалист по ипотечному кредитованию
                                    военнослужащих и сопровождению оформления целевых займов.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    );
};

export default TeamSection;