import { ThemeProvider } from '@/components/theme-provider';
import '@/app/globals.css';

export const metadata = {
    title: 'MOEKHALD Toolkit',
    description: 'A collection of useful tools for developers and designers',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body className='dark:bg-slate-800 bg-slate-200 font-mono'>
                <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
