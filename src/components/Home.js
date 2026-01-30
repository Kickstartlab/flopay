import React, { useEffect } from 'react'
import Menu from './Menu'
import feature1 from '../assets/feature1.png';
import feature2 from '../assets/feature2.png';
import feature3 from '../assets/feature3.png';
import account1 from '../assets/account1.png';
import account2 from '../assets/account2.png';
import cash1 from '../assets/cash1.png';
import cash2 from '../assets/cash2.png';
import cash3 from '../assets/cash3.png';
import merchant from '../assets/merchant.png';
import top from '../assets/top.png';
import Card from '../assets/Card.png';
import instant from '../assets/instant.png';
import cash from '../assets/cash.png';
import buy from '../assets/buy.png';
import whatsapp from '../assets/whatsapp.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Faq from './Faq';
import FlopayAccount from './FlopayAccount';


export default function Home() {

    useEffect(() => {
        AOS.init({
            duration: 600,
        });
    }, [])

    const faqItems = [
        {
            title: "Can I access all features on the mobile app?",
            content:
                "Absolutely! The app provides the same functionality as the web platform, including payments, transfers, and account management.",
        },
        {
            title: "What should I do if I forget my password?",
            content:
                "Absolutely! The app provides the same functionality as the web platform, including payments, transfers, and account management.",
        },
        {
            title: "Is this service available internationally?",
            content:
                "Absolutely! The app provides the same functionality as the web platform, including payments, transfers, and account management.",
        },
        {
            title: "How long does a transaction take?",
            content:
                "Absolutely! The app provides the same functionality as the web platform, including payments, transfers, and account management.",
        },
    ];

    const features = [
        {
            feature_img: feature1,
            feature_heading: 'International & Local Payments',
            feature_desc: <div className='space-y-5'>
                <p>Send and receive cross-border transfers in all major currencies.</p>
                <p>Real-time instant transfers in GBP and EUR.</p>
                <p>Bulk transfer support – ideal for payroll, vendor payments, or repeated remittances.</p>
                <p>Payment tracking with notifications – receive real-time updates on payment status, from initiation to completion.</p>
            </div>,
        },

        {
            feature_img: feature2,
            feature_heading: 'Multi-Currency & FX Management',
            feature_desc: <div className='space-y-5'>
                <p>Major global currencies, enabling smooth international transactions.</p>
                <p>Multi-currency IBANs tied to your business for direct receipt and payment in various currencies.</p>
                <p>Multi-currency exchange, including buying, selling, and transferring foreign currencies.</p>
            </div>,
        },

        {
            feature_img: feature3,
            feature_heading: 'Integration & Business Tools',
            feature_desc: <div className='space-y-5'>
                <p>Bulk transaction automation – streamline recurring or high-volume
                    payments, reducing manual input.</p>
                <p>Real-time settlement tracking –
                    monitor payment statuses instantly for better cash flow visibility.</p>
                <p>User access controls and permissions – manage team roles securely, allowing different levels of access.</p>
            </div>,
        },
    ]

    return (
        <div className="bg-black-100 font-poppins overflow-hidden text-white-100">

            <section className="lg:px-20 px-5 bg-top z-10 lg:h-screen">
                <div className='container mx-auto'>

                    <Menu />
                    <div className="lg:flex hidden justify-between items-end gap-y-6 lg:py-28 py-12 text-center lg:w-9/12 mx-auto">

                        <div className='lg:w-4/12 '>
                            <img src={top} alt='' className='absolute top-0 left-0 ml-64 w-64 h-auto object-cover animate-img'></img>

                        </div>

                        <div className='lg:w-8/12'>
                            <div className='italic lg:text-7xl space-y-6'>
                                <h1>
                                    BANK.
                                </h1>
                                <h1>
                                    BUY.
                                </h1>
                                <h1>
                                    SPEND.
                                </h1>
                            </div>

                            <button className='btn-gradient text-black-100 py-2 rounded-full px-4 mt-8 flex items-center justify-between mx-auto gap-6'>
                                Open An Account

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </button>
                        </div>

                        <div className='lg:w-4/12 space-y-28 lg:translate-y-28'>
                            <p className='md:text-2xl text-xl text-center'>
                                +<br></br>
                                Crypto & Cash
                                In one Flow
                            </p>

                            <p className='md:text-2xl text-xl text-center'>
                                Transforming Payments
                            </p>
                        </div>

                    </div>

                    <div className="pt-12 pb-20 lg:hidden block">

                        <div className='lg:w-8/12 text-center'>
                            <div className='italic lg:text-7xl md:text-5xl text-4xl space-y-6'>
                                <h1>
                                    BANK.
                                </h1>
                                <h1>
                                    BUY.
                                </h1>
                                <h1>
                                    SPEND.
                                </h1>
                            </div>

                            <button className='btn-gradient text-black-100 py-2 rounded-full px-4 mt-8 flex items-center justify-between mx-auto gap-6'>
                                Open An Account

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </button>
                        </div>

                        <div className='lg:w-4/12 space-y-8 mt-8'>
                            <p className='md:text-2xl text-xl text-center'>
                                +<br></br>
                                Crypto & Cash
                                In one Flow
                            </p>

                            <p className='md:text-2xl text-xl text-center'>
                                Transforming Payments
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* The FLo Pay Account */}

            <section id='about' className="lg:px-20 px-5 lg:py-20 py-8 z-20">
                <div className='container mx-auto'>
                    <FlopayAccount />
                </div>
            </section>

            <section className="lg:px-20 px-5 lg:pb-20 py-6 bg-crypto">
                <div className='container mx-auto'>

                    <div className='flex flex-wrap items-center justify-between gap-12'>

                        <div className='lg:w-4/12 space-y-5'>
                            <h3 className='md:text-4xl text-2xl uppercase font-semibold'>
                                Crypto-currency in One Tap
                            </h3>
                            <p className='text-white-50 opacity-50'>
                                Buy, sell, and store your crypto alongside your cash.
                            </p>
                            <button className='bg-white-50 py-2 px-5 text-black-100 font-semibold rounded-full'>
                                Open An Account
                            </button>
                        </div>

                        <div className='lg:w-7/12'>
                            <img src={Card} alt='card' className='w-11/12'></img>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>
            </section>

            {/* feature s section */}

            <section className="lg:px-20 px-5 lg:pb-20 py-6 relative z-10">
                <div className='container mx-auto'>
                    <h2 className='md:text-4xl text-2xl font-semibold text-center'>
                        Buy & Sell Crypto Instantly
                    </h2>

                    <img src={buy} alt='buy' className='flex mx-auto lg:w-7/12 mt-16'></img>
                </div>
            </section>

            {/* Crypto & Cash, In One Flow */}

            <div className="lg:py-20 py-6 lg:px-20 px-5 bg-cash">
                <div className='container mx-auto'>

                    <h3 className='md:text-5xl text-2xl font-medium text-center md:mb-48 mb-8'>
                        Crypto & Cash, In One Flow
                    </h3>

                    <div className='lg:flex hidden justify-center lg:space-y-0 space-y-8'>

                        <div className='flex flex-col'>
                            <div className='bg-black-100 backdrop-blur-md p-5 rounded-3xl w-80 absolute left-1/4 bg-opacity-70 border border-white-50 border-opacity-25 -mt-16 z-20'>
                                <div className='flex items-center gap-5'>
                                    <img src={cash1} alt='icon'></img>
                                    <p className='md:text-2xl '>Digital<br></br> Bank Accounts</p>
                                </div>
                                <p className='pt-5'>Open GBP and EUR accounts alongside a built-in crypto wallet</p>
                            </div>

                            <div className='bg-black-100 backdrop-blur-md p-5 rounded-3xl w-80 absolute left-[22%] bg-opacity-70 border border-white-50 border-opacity-25 mt-80'>
                                <div className='flex items-center gap-5'>
                                    <img src={cash2} alt='icon'></img>
                                    <p className='md:text-2xl '>Buy & Sell <br></br> Crypto</p>
                                </div>
                                <p className='pt-5'>Purchase and trade Bitcoin, Ethereum, and more -- instantly.</p>
                            </div>
                        </div>

                        <img src={cash} alt='card' className='w-80 z-10'></img>

                        <div className='flex flex-col'>
                            <div className='bg-black-100 backdrop-blur-md p-5 rounded-3xl w-80 absolute right-[22%] bg-opacity-70 border border-white-50 border-opacity-25 mt-16 text-right'>
                                <div className='flex items-center justify-end gap-5'>
                                    <img src={cash3} alt='icon'></img>
                                    <p className='md:text-2xl '>Merchant <br></br> Services</p>
                                </div>
                                <p className='pt-5'>Accept crypto payments and bank payouts with ease.</p>
                            </div>

                            <div className='bg-black-100 backdrop-blur-md p-5 rounded-3xl w-80 absolute right-[26%] bg-opacity-70 border border-white-50 border-opacity-25 mt-96 z-20'>
                                <div className='flex items-center gap-5'>
                                    <img src={cash2} alt='icon'></img>
                                    <p className='md:text-2xl '>Flo Pay Debit Cards</p>
                                </div>
                                <p className='pt-5'>Use your crypto or cash instantly with our debit cards.</p>
                            </div>
                        </div>
                    </div>

                    <div className='lg:hidden block lg:space-y-0 space-y-8'>

                        <div className='flex flex-col gap-y-6'>
                            <div className='bg-black-100 backdrop-blur-md p-5 rounded-3xl bg-opacity-70 border border-white-50 border-opacity-25'>
                                <div className='flex items-center gap-5'>
                                    <img src={cash1} alt='icon'></img>
                                    <p className='md:text-2xl '>Digital<br></br> Bank Accounts</p>
                                </div>
                                <p className='pt-5'>Open GBP and EUR accounts alongside a built-in crypto wallet</p>
                            </div>

                            <div className='bg-black-100 backdrop-blur-md p-5 rounded-3xl bg-opacity-70 border border-white-50 border-opacity-25'>
                                <div className='flex items-center gap-5'>
                                    <img src={cash2} alt='icon'></img>
                                    <p className='md:text-2xl '>Buy & Sell <br></br> Crypto</p>
                                </div>
                                <p className='pt-5'>Purchase and trade Bitcoin, Ethereum, and more -- instantly.</p>
                            </div>
                        </div>

                        <img src={cash} alt='card' className='md:w-80 w-64 z-10 flex mx-auto'></img>

                        <div className='flex flex-col gap-y-6'>
                            <div className='bg-black-100 backdrop-blur-md p-5 rounded-3xl bg-opacity-70 border border-white-50 border-opacity-25'>
                                <div className='flex items-center gap-5'>
                                    <img src={cash3} alt='icon'></img>
                                    <p className='md:text-2xl '>Merchant Services</p>
                                </div>
                                <p className='pt-5'>Accept crypto payments and bank payouts with ease.</p>
                            </div>

                            <div className='bg-black-100 backdrop-blur-md p-5 rounded-3xl bg-opacity-70 border border-white-50 border-opacity-25'>
                                <div className='flex items-center gap-5'>
                                    <img src={cash2} alt='icon'></img>
                                    <p className='md:text-2xl '>Flo Pay Debit Cards</p>
                                </div>
                                <p className='pt-5'>Use your crypto or cash instantly with our debit cards.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Digital Wealth section */}

            <div className="lg:px-20 px-5 lg:py-20 py-6">
                <div className='container mx-auto'>
                    <h3 className='md:text-5xl text-2xl font-medium text-center md:mb-20 mb-8'>
                        Your Digital Wealth Partner.
                    </h3>

                    <div className='bg-[#16140E] p-8 rounded-2xl lg:w-10/12 flex flex-wrap mx-auto gap-y-8'>

                        <div className='lg:w-1/2'>

                            <div className='text-center space-y-3'>
                                <p className='text-lg'>IBAN Accounts</p>

                                <p className='md:text-2xl text-xl font-semibold'>Banking in Your Control</p>

                                <p className='text-center'>
                                    Send and receive international<br></br> payments with your own IBAN.
                                </p>
                            </div>

                            <ul className='mt-6 space-y-3'>
                                <li className='flex items-center gap-3'>
                                    <img src={account1} alt='icon'></img>

                                    Global Payments: Send and receive international payments.
                                </li>
                                <li className='flex items-center gap-3'>
                                    <img src={account2} alt='icon'></img>

                                    UK Sort Code + Account Number: Access domestic banking for GBP transfers.
                                </li>
                            </ul>

                            <button className='flex items-center gap-2 border border-yellow-100 rounded-full py-2 px-4 mt-12'>
                                Open An Account

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 text-yellow-100">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>

                            </button>
                        </div>

                        <div className='lg:w-1/2 text-center space-y-8'>
                            <p className='md:text-4xl text-2xl'>Instant Digital<br></br> Transfers</p>

                            <img src={instant} alt='card' className='lg:w-10/12 flex mx-auto'></img>

                            <p className='text-[#C1C1C1]'>
                                Transfer funds instantly with no hidden fees, domestically or internationally, while ensuring top-notch security.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <div id='features' className="lg:px-20 px-5 py-6">
                <div className='container mx-auto'>
                    <h3 className='md:text-5xl text-2xl font-medium text-center md:mb-20 mb-8'>
                        Key Features & Capabilities
                    </h3>

                    <div className="grid lg:grid-cols-3 grid-cols-1 items-center justify-evenly justify-items-center lg:gap-12 gap-16 md:pt-12 pt-6 lg:divide-x-2 divide-x-0 lg:divide-y-0 divide-y-2 divide-yellow-100">
                        {features.map((feature, index) => (

                            <div key={index} className='text-center md:space-y-8 space-y-5 lg:pl-8 lg:pt-0 pt-5'>

                                <img src={feature.feature_img} alt='icon' className='flex mx-auto md:w-32 w-28'></img>

                                <h3 className='md:text-2xl text-xl font-semibold'>{feature.feature_heading}</h3>

                                <div>{feature.feature_desc}</div>

                            </div>

                        ))}
                    </div>
                </div>
            </div>
            {/* Innovating section */}

            <div className="lg:px-20 px-5 lg:py-28 py-6 bg-merchant">
                <div className='container mx-auto'>

                    <div className='flex flex-wrap items-center justify-between'>
                        <div className='lg:w-1/2'>
                            <img src={merchant} alt='merchant' className='w-9/12 md:float-right md:block flex mx-auto'></img>
                        </div>

                        <div className='lg:w-1/2'>
                            <div className='md:text-5xl text-3xl italic font-light space-y-6 pl-12'>
                                <p data-aos='fade-up' className=''>
                                    Innovating
                                </p>

                                <p data-aos='fade-up' className=''>
                                    Payments for
                                </p>

                                <p data-aos='fade-up' className='font-medium'>
                                    MERCHANTS
                                </p>
                            </div>

                            <ul className='mt-12 space-y-5'>
                                <li className='flex items-center gap-3'>
                                    <img src={account1} alt='icon'></img>

                                    Built-in payment solutions for your business.
                                </li>
                                <li className='flex items-center gap-3'>
                                    <img src={account1} alt='icon'></img>

                                    Instant payouts with low fees.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* faq section */}

            <div id='faq' className="lg:px-20 px-5 py-12 bg-faq">
                <div className='container mx-auto'>

                    <div data-aos='fade-up' className='text-center space-y-4'>
                        <p className='md:text-3xl text-2xl  text-center'>Frequently Asked Questions</p>
                    </div>

                    <div className='md:mt-16 mt-6'>
                        <Faq items={faqItems} />
                    </div>

                    <div className='md:pt-32 pt-12 space-y-8'>

                        <div className="lg:flex justify-between gap-24 items-start lg:space-y-0 space-y-6">

                            <div className='lg:w-1/2 space-y-6'>
                                <p><strong>Contact email:</strong> contact@flopay.com</p>
                                <a href='https://wa.me/447457404644' className='flex gap-3 items-center hover:underline'><strong>Whatsapp:</strong> +44 7457 404644 <span><img src={whatsapp} alt='icon' className='w-8'></img></span></a>
                                <p><strong>Location</strong><br></br>
                                    1 Allied Business Centre, Coldharbour Lane, Harpenden AL5 4UT
                                </p>
                                <p><strong> Legal Information</strong><br></br>
                                    FLO PAYMENT SERVICES LTD is a company incorporated in the United Kingdom with a company number, 16947958. Registered office address at: 1 Allied Business Centre, Coldharbour Lane, Harpenden AL5 4UT.
                                </p>
                            </div>

                            <div className='lg:w-1/2 space-y-12'>
                                <p>
                                    <strong>Copyright</strong><br></br>
                                    © <strong>{new Date().getFullYear()} </strong>Flo Payment Services Ltd, All rights reserved.
                                </p>

                                <p>
                                    <strong>Regulatory Statement</strong><br></br>

                                    Payment services are provided by Gemba Finance Ltd, FCA Safeguarding.
                                    <br></br><br></br>

                                    Gemba Finance is authorised and regulated by the Financial Conduct Authority (FCA) as an Electronic Money Institution under reference number 804853 for the issuance of electronic money.
                                </p>
                            </div>
                        </div>

                    </div>


                </div>
            </div>



        </div>
    )
}
