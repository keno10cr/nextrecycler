import './styles.css'; // Import your global CSS

export const metadata = {
    title: 'NextRecycler',
    description: 'Recycling app made with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Cormorant+Unicase:wght@300;400;500;600;700&family=Fredoka:wght@300..700&family=Lexend+Giga:wght@100..900&family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
