'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { ArrowRight, Copy } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import * as React from 'react';
import generator from 'generate-password';
import { toast } from '../ui/use-toast';
import { Toaster } from '../ui/toaster';

export default function PasswordGenerator() {
    const [length, setLength] = React.useState([10]);
    const [password, setPassword] = React.useState('');
    const [uppercaseChecked, setUppercaseChecked] = React.useState(true);
    const [lowercaseChecked, setLowercaseChecked] = React.useState(true);
    const [numbersChecked, setNumbersChecked] = React.useState(true);
    const [symbolsChecked, setSymbolsChecked] = React.useState(true);
    const handleSliderChange = (value) => {
        setLength(value);
    };

    const handleUppercaseChange = () => {
        setUppercaseChecked(!uppercaseChecked);
    };

    const handleLowercaseChange = () => {
        setLowercaseChecked(!lowercaseChecked);
    };

    const handleNumbersChange = () => {
        setNumbersChecked(!numbersChecked);
    };

    const handleSymbolsChange = () => {
        setSymbolsChecked(!symbolsChecked);
    };

    const handeCopyClick = () => {
        navigator.clipboard.writeText(password);
        toast({
            description: 'Password copied to clipboard.',
        });
    };

    const generatePassword = React.useCallback(() => {
        if (!uppercaseChecked && !lowercaseChecked && !numbersChecked && !symbolsChecked) {
            toast({
                description: 'At least one option must be selected.',
            });
            return;
        }

        const password = generator.generate({
            length: length,
            uppercase: uppercaseChecked,
            lowercase: lowercaseChecked,
            numbers: numbersChecked,
            symbols: symbolsChecked,
            strict: true,
        });

        setPassword(password);
    }, [uppercaseChecked, lowercaseChecked, numbersChecked, symbolsChecked, length]);

    React.useEffect(() => {
        generatePassword();
    }, [generatePassword]);

    const handleGenerateClick = () => {
        generatePassword();
    };

    return (
        <>
            <Card className='w-full max-w-3xl'>
                <CardHeader className='pb-0' />
                <CardContent className='flex justify-between items-center space-x-4'>
                    <div className='text-xl sm:text-2xl text-slate-500 tracking-widest w-full'>{password}</div>
                    <Button variant='ghost' size='icon' className='text-emerald-500' onClick={handeCopyClick}>
                        <Copy />
                    </Button>
                </CardContent>
            </Card>
            <Card className='w-full max-w-3xl'>
                <CardHeader className='pb-0' />
                <CardContent className='flex flex-col space-y-4'>
                    <div>
                        <div className='flex justify-between items-center pb-2'>
                            <div className=''>Character Length</div>
                            <div className='text-2xl text-emerald-500'>{length}</div>
                        </div>
                        <Slider defaultValue={[10]} max={20} step={1} onValueChange={handleSliderChange} />
                    </div>
                    <div className='flex items-center'>
                        <Checkbox id='uppercase' checked={uppercaseChecked} onCheckedChange={handleUppercaseChange} />
                        <label htmlFor='uppercase' className='dark:text-white'>
                            Include Uppercase Letters
                        </label>
                    </div>
                    <div className='flex items-center'>
                        <Checkbox id='lowercase' checked={lowercaseChecked} onCheckedChange={handleLowercaseChange} />
                        <label htmlFor='lowercase' className='dark:text-white'>
                            Include Lowercase Letters
                        </label>
                    </div>
                    <div className='flex items-center'>
                        <Checkbox id='numbers' checked={numbersChecked} onCheckedChange={handleNumbersChange} />
                        <label htmlFor='numbers' className='dark:text-white'>
                            Include Numbers
                        </label>
                    </div>
                    <div className='flex items-center'>
                        <Checkbox id='symbols' checked={symbolsChecked} onCheckedChange={handleSymbolsChange} />
                        <label htmlFor='symbols' className='dark:text-white text-base'>
                            Include Symbols
                        </label>
                    </div>
                </CardContent>
                <CardFooter className='flex'>
                    <Button size='lg' className='uppercase w-full' onClick={handleGenerateClick}>
                        Generate <ArrowRight className='ml-4 h-5 w-5' />
                    </Button>
                </CardFooter>
            </Card>
            <Toaster />
        </>
    );
}
