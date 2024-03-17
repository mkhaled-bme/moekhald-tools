import PasswordGenerator from '@/components/password-generator/password-generator';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import * as React from 'react';

export default function PasswordGeneratorPage() {
    return (
        <main className='flex min-h-screen flex-col items-center px-8 py-24 sm:p-24 space-y-8'>
            <h1 className='font-bold'>Password Generator</h1>
            <PasswordGenerator />
            <Link href='/'>
                <Button variant='link'>Home</Button>
            </Link>
        </main>
    );
}
