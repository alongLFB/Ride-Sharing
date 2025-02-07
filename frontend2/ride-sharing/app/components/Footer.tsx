import React from "react";

const Footer = () => {
    return (
        <footer className="bg-blue-600 text-white p-4 text-center text-xl">
            <p>
                Developed by{' '}
                <a
                    href="https://github.com/alongLFB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-gray-300"
                >
                    Along Li
                </a>
                , All Rights Reserved &copy; {new Date().getFullYear()}
            </p>
        </footer>
    );
};

export default Footer;
