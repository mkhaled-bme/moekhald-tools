import { ThemeProvider } from '@/components/theme-provider';
import '@/app/globals.css';

export const metadata = {
    title: 'Password Generator',
    description: 'Generate a secure password with a single click',
};

export default function PasswordGeneratorLayout({ children }) {
    return <>{children}</>;
}
