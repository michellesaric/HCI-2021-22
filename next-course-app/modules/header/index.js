import React from 'react';
import styles from './index.module.css';
import Image from 'next/image';
import Logo from '../../assets/logo.png';

const Header = () => {
    return (
        <header className={styles.main}>
            <main className={styles.content}>
                <Image src={Logo} />
                <nav>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Showcase</li>
                    <li>Blog</li>
                    <li>Contact us</li>
                    <li>Sign in</li>
                </nav>
            </main>
        </header>
    );
};

export default Header;
