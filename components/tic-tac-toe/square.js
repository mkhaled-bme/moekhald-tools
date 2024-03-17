import XComponent from '@/components/tic-tac-toe/x';
import OComponent from '@/components/tic-tac-toe/o';

export default function Square({ value, onClick, winner, isWinningSquare }) {
    return (
        <button
            className={`w-full aspect-square ${
                winner === 'X' ? 'bg-teal-500' : winner === 'O' ? 'bg-yellow-500' : 'dark:bg-slate-700 bg-slate-300'
            } shadow-lg hover:shadow-2xl hover:-translate-y-1 duration-300 text-[12vw] sm:text-7xl`}
            onClick={onClick}
        >
            {value === 'X' ? (
                <XComponent colored={!isWinningSquare} />
            ) : value === 'O' ? (
                <OComponent colored={!isWinningSquare} />
            ) : null}
        </button>
    );
}
