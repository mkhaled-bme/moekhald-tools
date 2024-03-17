import Link from 'next/link';
import { Button } from '@/components/ui/button';
import * as React from 'react';
import Board from '@/components/tic-tac-toe/board';

export default function PasswordGeneratorPage() {
    return (
        <main className='flex min-h-screen flex-col items-center p-8 space-y-8'>
            <Board mode={'cpu'} />
            <Link href='/tic-tac-toe'>
                <Button variant='link'>Quit</Button>
            </Link>
        </main>
    );
}
