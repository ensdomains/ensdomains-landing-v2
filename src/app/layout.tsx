import 'normalize.css';

import { ReactNode } from 'react';

export const metadata = {
    title: 'Next.js',
    description: 'Generated by Gatsby',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
