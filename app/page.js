import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center p-24 space-y-8'>
            <h1 className='text-3xl'>MOEKHALD Toolkit</h1>
            <ul className='flex flex-col justify-center items-center space-y-4'>
                <li>
                    <Link href='/password-generator'>
                        <Button variant='link'>Password Generator</Button>
                    </Link>
                </li>
                <li>
                    <Link href='/tic-tac-toe'>
                        <Button variant='link'>Tic Tac Toe Game</Button>
                    </Link>
                </li>
            </ul>
        </main>
    );
}
