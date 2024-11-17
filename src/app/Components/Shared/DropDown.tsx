"use client"


import React, { useState } from 'react';
import Link from 'next/link';

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    React.useEffect(() => {
        const closeDropdown = (e) => {
            if (!e.target.closest('.dropdown')) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', closeDropdown);
        return () => document.removeEventListener('click', closeDropdown);
    }, []);

    return (
        <div className="dropdown">
            <button onClick={toggleDropdown} className="dropdown-toggle">
                Services ▼
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    <li>
                        <Link href="/consultation">
                            <a>Consultation and Advisory Services</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/training">
                            <a>Training and Development</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/outsourcing">
                            <a>Outsourcing Services</a>
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;
