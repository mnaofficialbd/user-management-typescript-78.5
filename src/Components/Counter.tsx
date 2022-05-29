import React, { ChangeEvent, FormEvent, useState } from 'react';

interface User {
    name?: string,
    job?: string
}

const Counter = () => {
    const [counter, setCounter] = useState<number>(0);
    const [user, setUser] = useState<User | null>(null);

    const handleIncrease = (): void => {
        setCounter(counter + 1)
    }

    const handleUserSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userData = {
            name: 'Azam',
            job: 'Dev'
        }
        setUser(userData)
    }

    const handleNameChange=(e:ChangeEvent<HTMLInputElement>):void=>{

    }

    return (
        <div>
            <h2>This is Counter</h2>
            <h3>{counter}</h3>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    );
};

export default Counter;