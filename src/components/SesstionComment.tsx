import Image from 'next/image'
import React from 'react'

interface Props {
    sessionNum: string;
    date: string;
    className?: string;
    rate: number;
}

const SesstionComment: React.FC<Props> = ({ sessionNum, date, className, rate }) => {
    return (
        <div className={`border border-[#ffffff] rounded-xl p-2 md:w-[70%] mt-4 flex justify-between items-start ${className}`}>
            <div>
                <p className='text-[18px]'>{sessionNum}</p>
                <p className="text-[10px] my-4">Мое самочувствие</p>
                <h4 className="text-[10px]">{date}</h4>
            </div>
            <div>
                <div className='flex justify-end gap-x-2'>
                    <Image width={24} height={24} src={"/images/smile-icon.svg"} alt={""} />
                    <Image width={24} height={24} src={"/images/three-dots.svg"} alt={""} />
                </div>
                <div className='w-[165px] h-[40px]'>
                    <div className='flex items-center justify-between'>
                        <p className='text-[14px]'>0</p>
                        <p className='text-[14px]'>10</p>
                    </div>
                    <div className='relative h-[2px] w-[162px] rounded-3px bg-gradient-to-r from-[#0094FF] via-[#A97AF5] to-[#FFC700] mt-2'>
                        <div style={{ left: rate + '%' }} className='absolute w-[15px] h-[15px] bg-[#ffffff] rounded-full -translate-y-1/2'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SesstionComment