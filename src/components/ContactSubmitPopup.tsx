import Link from 'next/link';
import React from 'react';

type ContactSubmitPopupProps = {
    title: string;
    message: string;
};

const ContactSubmitPopup: React.FC<ContactSubmitPopupProps> = ({ title, message }) => {
    return (
        <div>
            <div className="p-8 bg-white border border-blue-100 shadow-lg rounded-2xl" role="alert">
                <div className="items-left sm:flex">
                    <p className="mt-8 text-lg font-medium sm:mt-0">{title}</p>
                </div>

                <p className="mt-4 text-gray-500">
                    {message}
                </p>

                <div className="mt-6 sm:flex">
                    <Link href='/'>
                        <a
                            className='px-12 py-3 text-sm font-medium text-culturedWhite bg-mnBlue rounded shadow active:bg-blue-500 hover:bg-carolinaBlue focus:outline-none focus:ring'
                        >
                            OK
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ContactSubmitPopup;
