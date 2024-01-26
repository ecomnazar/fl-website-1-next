import React from 'react'

interface Props {
    title: string;
    className?: string;
}

const Text: React.FC<Props> = ({ title, className }) => {
    return (
        <h2 className={`text-[22px] md:text-[28px] font-[700] ${className}`}>{title}</h2>
    )
}

export default Text