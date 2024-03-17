'use client';

import * as React from 'react';
import Square from '@/components/tic-tac-toe/square';
import XComponent from '@/components/tic-tac-toe/x';
import OComponent from '@/components/tic-tac-toe/o';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';

export default function Board({ mode }) {
    const [squares, setSquares] = React.useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = React.useState(true);
    const [winner, setWinner] = React.useState(null);
    const [xScore, setXScore] = React.useState(0);
    const [oScore, setOScore] = React.useState(0);
    const [tieScore, setTieScore] = React.useState(0);

    const handleClick = (i) => {
        if (winner || squares[i]) {
            return;
        }
        const squaresCopy = [...squares];
        squaresCopy[i] = xIsNext ? 'X' : 'O';
        setSquares(squaresCopy);
        setWinner(calculateWinner(squaresCopy));
        incrementScore(calculateWinner(squaresCopy));
        setXIsNext(!xIsNext);
    };

    const incrementScore = (winner) => {
        if (winner === 'X') {
            setXScore(xScore + 1);
        } else if (winner === 'O') {
            setOScore(oScore + 1);
        } else if (squares.filter((square) => square === null).length === 0) {
            setTieScore(tieScore + 1);
        }
    };

    React.useEffect(() => {
        if (mode === 'cpu' && !xIsNext && !winner) {
            setTimeout(() => {
                const cpuMove = cpuCounterMove() ?? cpuRandomMove();
                const squaresCopy = [...squares];
                squaresCopy[cpuMove] = 'O';
                setSquares(squaresCopy);
                setWinner(calculateWinner(squaresCopy));
                incrementScore(calculateWinner(squaresCopy));
                setXIsNext(!xIsNext);
            }, 500);
        }
    }, [squares, xIsNext]);

    const cpuRandomMove = () => {
        const emptySquares = squares.map((square, i) => (square === null ? i : null)).filter((i) => i !== null);
        const randomIndex = Math.floor(Math.random() * emptySquares.length);
        return emptySquares[randomIndex];
    };

    const cpuCounterMove = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] === 'O' && squares[b] === 'O' && squares[c] === null) {
                return c;
            } else if (squares[a] === 'O' && squares[c] === 'O' && squares[b] === null) {
                return b;
            } else if (squares[b] === 'O' && squares[c] === 'O' && squares[a] === null) {
                return a;
            }
        }

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] === 'X' && squares[b] === 'X' && squares[c] === null) {
                return c;
            } else if (squares[a] === 'X' && squares[c] === 'X' && squares[b] === null) {
                return b;
            } else if (squares[b] === 'X' && squares[c] === 'X' && squares[a] === null) {
                return a;
            }
        }
        return null;
    };

    const reset = () => {
        setSquares(Array(9).fill(null));
        setWinner(null);
        setXIsNext(true);
    };

    const renderSquare = (i) => {
        return <Square value={squares[i]} onClick={() => handleClick(i)} />;
    };
    let status;
    if (winner) {
        status = (
            <div className='flex space-x-2'>
                {winner === 'X' ? <XComponent /> : <OComponent />} <div>WON</div>
            </div>
        );
    } else if (!squares.includes(null)) {
        status = <div>It's a Tie!</div>;
    } else {
        status = (
            <div className='flex space-x-2'>
                {xIsNext ? <XComponent /> : <OComponent />} <div>TURN</div>
            </div>
        );
    }
    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };
    return (
        <div className='flex flex-col space-y-4 w-full max-w-2xl'>
            <div className='flex w-full justify-between items-center'>
                <div className='flex space-x-2 font-bold text-4xl w-20'>
                    <XComponent />
                    <OComponent />
                </div>
                <div className='bg-slate-300 dark:bg-slate-700 py-2 px-4 shadow-lg'>{status}</div>
                <div className='w-20 flex justify-end'>
                    <Button size='icon' onClick={() => reset()}>
                        <RotateCcw />
                    </Button>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col items-center bg-teal-500  p-2'>
                    <div className='text-lg flex space-x-1 items-center'>
                        <XComponent colored={false} />
                        <div className='uppercase'>Score</div>
                    </div>
                    <div className='text-4xl'>{xScore}</div>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='text-lg uppercase'>Ties</div>
                    <div className='text-4xl'>{tieScore}</div>
                </div>
                <div className='flex flex-col items-center bg-yellow-500 p-2'>
                    <div className='text-lg flex space-x-1 items-center'>
                        <OComponent colored={false} />
                        <div className='uppercase'>Score</div>
                    </div>
                    <div className='text-4xl'>{oScore}</div>
                </div>
            </div>
        </div>
    );
}
