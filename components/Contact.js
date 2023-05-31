import React from 'react';
import Image from "next/image";

const Contact = () => {
    return (
        <>
            <div className="contact_block">
                <div>
                    <h1>Остались вопросы?</h1>
                    <h2>Свяжитесь с нами любым удобным вам способом</h2>
                    <div>
                        <span className="connect">Звоните: </span>
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path
                                    d="M10.1174 7.22024C9.4439 7.22024 8.78264 7.11491 8.15601 6.90783C7.84896 6.8031 7.47149 6.89918 7.28409 7.09165L6.04725 8.02533C4.61287 7.25966 3.72931 6.37639 2.9741 4.95278L3.88031 3.74816C4.11575 3.51304 4.2002 3.16958 4.09902 2.84731C3.89105 2.21739 3.7854 1.55644 3.7854 0.882693C3.78543 0.395971 3.38946 0 2.90277 0H0.882664C0.395971 0 0 0.395971 0 0.882664C0 6.46144 4.53859 11 10.1174 11C10.6041 11 11 10.604 11 10.1173V8.10288C11 7.61621 10.604 7.22024 10.1174 7.22024Z"
                                    fill="#307FE2"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1_2366">
                                    <rect width="11" height="11" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <span className="connect_info">(846) 205-50-35, сот. 8-960-819-9755</span>
                    </div>
                    <div>
                        <span className="connect">Пишите: </span>
                        <Image src="/icons/Иконка.png" alt="link" width={11} height={11}/>
                        <span className="connect_info">2055035@mail.ru</span>
                    </div>
                    <div className="social">
                        <Image src="/icons/Вк.svg" alt="vk" width={36} height={36}/>
                        <Image src="/icons/viber.png" alt="vi" width={36} height={36}/>
                        <Image src="/icons/telegram.png" alt="tg" width={36} height={36}/>
                        <Image src="/icons/whatsapp.png" alt="wa" width={40} height={40}/>
                    </div>
                </div>
                <Image src="/imgonline-com-ua-Replace-color-mYSMRvl7GvMxoSdt.png" alt="question" width={217}
                       height={333}/>
            </div>
            <style jsx>{`
              .contact_block{
                display: flex;
                justify-content: space-around;
                align-items: center;
              }
              h1 {
                font-weight: 700;
                font-size: 32px;
                line-height: 117px;
                letter-spacing: 0.1em;
                text-transform: uppercase;
                color: #307FE2;
              }

              h2 {
                font-weight: 500;
                //font-size: 32px;
                line-height: 39px;
                //color: #307FE2;
              }

              .connect_info {
                font-size: 20px;
                line-height: 29px;
                color: #1E1E1E;
                padding: 0 10px;
              }

              .connect {
                font-weight: 600;
                font-size: 24px;
                line-height: 29px;
                color: #5E5E5E;
                text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
                padding-right: 20px;
              }

              .social {
                display: flex;
                gap: 8px;
                justify-content: flex-end;
              }

              .social img:hover {
                cursor: pointer;
              }
            `}</style>
        </>
    );
};

export default Contact;