import React from 'react'

interface Props {
    title: string;
    className?: string;
}

const Button: React.FC<Props> = ({ title, className }) => {
    return (
        <button className={`block mx-auto text-[20px] h-[50px] w-[185px] rounded-[12px] bg-primary ${className}`}>{title}</button>
    )
}

export default Button