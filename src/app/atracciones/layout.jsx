
import * as React from 'react';
import Footer from "../components/footer";
import Header from "../components/header/header";
import imagen from "../../../public/images/banners/banner-galeria.png";




export const metadata = {
    title: "Galería",
    description: "Generated by create next app",
};

export default function GalleryLayout({ children }) {
    return (
        <html lang="es">
            <body>
                <Header backgroundColor="var(--fondo)"></Header>
                {children}
                <Footer></Footer>
            </body>
        </html>
    );

}
