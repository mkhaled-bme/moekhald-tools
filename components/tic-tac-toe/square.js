import XComponent from '@/components/tic-tac-toe/x';
import OComponent from '@/components/tic-tac-toe/o';

export default function Square({ value, onClick }) {
    return (
        <button
            className='w-full aspect-square dark:bg-slate-700 bg-slate-300 shadow-lg text-[12vw] sm:text-7xl'
            onClick={onClick}
        >
            {value === 'X' ? <XComponent /> : value === 'O' ? <OComponent /> : null}
        </button>
    );
}
