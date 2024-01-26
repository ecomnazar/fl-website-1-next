import React from 'react';
import Text from './Text';
import Image from 'next/image';
import SesstionComment from './SesstionComment';

interface Props {
    className?: string;
}

const SecondSession: React.FC<Props> = ({ className }) => {
    return (
        <div className={`p-2 sm:p-8 pb-12 bg-[url('/images/radial-gradient-1.png')] rounded-xl bg-cover bg-center relative ${className}`}>
            <Text title={"Оценка каждой сессии"} className="mb-4 sm:mb-8 text-center sm:text-left" />
            <p className="text-[14px] md:text-[18px] text-center sm:text-left">После, ваш дневник прогресса доступен в личном кабинете</p>
            <SesstionComment className='sm:!w-[80%]' sessionNum={'Сессия №1'} date={'14 февраля 24г.'} rate={70} />
            <SesstionComment className='sm:hidden' sessionNum={'Сессия №2'} date={'14 февраля 24г.'} rate={90} />
            <p className='text-[14px] sm:hidden text-center mt-4'>Проводите сессии, когда удобно вам и следите за результатами</p>
            <Image width={35} height={35} src="/images/like.svg" className="absolute bottom-5 right-5" alt='' />
        </div>
    )
}

export default SecondSession