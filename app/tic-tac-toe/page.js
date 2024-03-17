import Link from 'next/link';
import { Button } from '@/components/ui/button';
import * as React from 'react';
import Board from '@/components/tic-tac-toe/board';

export default function PasswordGeneratorPage() {
    return (
        <main className='flex min-h-screen flex-col items-center px-8 py-24 sm:p-24 space-y-8'>
            <h1 className='font-bold'>Tic Tac Toe Game</h1>
            <Board />
            <Link href='/'>
                <Button variant='link'>Home</Button>
            </Link>
        </main>
    );
}
