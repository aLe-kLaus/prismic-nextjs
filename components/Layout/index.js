import React from 'react';
import { Navbar } from '../../styles/layout';
import Link from 'next/link';
import Image from 'next/image';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar>
                <Link href="/">
                    <a>
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={140}
                            height={60}
                        />
                    </a>
                </Link>
                <Link href="/quemsomos">
                    <a> <p> Quem somos | </p> </a>
                </Link>
                <Link href="/cursos">
                    <a> <p> Cursos | </p> </a>
                </Link>
                <Link href="/materiasgratuitos">
                    <a> <p> Materias Gratuitos | </p> </a>
                </Link>
                <Link href="/noticias">
                    <a> <p> Notícias </p> </a>
                </Link>
            </Navbar>
            {children}
            <footer>Issso é um footer</footer>
        </>
    )
};

export default Layout;
