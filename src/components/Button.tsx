import React from 'react'

interface Props {
    title: string;
    className?: string;
}

const Button: React.FC<Props> = ({ title, className }) => {
    return (
        <button className={`block mx-auto text-2xl py-3 w-[200px] rounded-xl bg-primary ${className}`}>{title}</button>
    )
}

export default Button