import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#192733] text-white">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-100 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-300 mb-4">
                    Page Not Found
                </h2>
                <p className="text-gray-500 mb-8">
                    The page you are looking for doesn't exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="px-6 py-3 border text-white rounded-md hover:bg-[#ff4a20] transition-colors"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;