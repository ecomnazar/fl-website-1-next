import React from 'react'

interface Props {
    children: React.ReactNode;
    className?: string;
}

const MainText: React.FC<Props> = ({ children, className }) => {
    return (
        <h2 className={`text-[22px] md:text-[35px] font-[700] ${className}`}>{children}</h2>
    )
}

export default MainText