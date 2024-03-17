import Link from 'next/link';
import { Button } from '@/components/ui/button';
import * as React from 'react';
import Board from '@/components/tic-tac-toe/board';

export default function PasswordGeneratorPage() {
    return (
        <main className='flex min-h-screen flex-col items-center px-8 py-24 sm:p-24 space-y-8'>
            <div className='flex flex-col items-center space-y-4'>
                <h1 className='font-bold text-xl'>Tic Tac Toe Game</h1>
                <p className='w-full max-w-xl text-center pb-4'>
                    Tic-tac-toe is a game in which two players take turns in drawing either an 'O' or an 'X' in one
                    square of a grid consisting of nine squares.
                </p>
            </div>
            <div className='flex flex-col items-stretch space-y-4'>
                <Link href='/tic-tac-toe/cpu'>
                    <Button className='w-full'>New Game (VS CPU)</Button>
                </Link>
                <Link href='/tic-tac-toe/multiplayer'>
                    <Button>New Game (VS Player)</Button>
                </Link>
            </div>
            <Link href='/'>
                <Button variant='link'>Home</Button>
            </Link>
        </main>
    );
}
