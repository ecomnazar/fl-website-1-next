'use client'
import Button from "@/components/Button";
import Clouds from "@/components/Clouds";
import SecondSession from "@/components/SecondSesstion";
import Text from "@/components/Text";
import Image from "next/image";
import React from "react";

export default function Home() {


  return (
    <div>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-8">
          <Image src="/images/logo.svg" width={170} height={100} alt={""} />
          <h4 className="text-xl font-[400]">Вход</h4>
        </nav>
      </div>

      <Clouds />

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-center text-4xl mx-auto font-[700] mb-8">Попробуйте передовые возможности в сфере искусственного интеллекта и психологии</h2>
        <div className="bg-cream w-full rounded-lg p-12">
          <h3 className="text-primary text-3xl font-[700] text-center">Наш сервис</h3>
          <p className="text-[#000000] text-center text-xl my-4">Это удобно: без очереди на запись и предоплаты, просто и выгодно - ваш персональный психолог всегда под рукой.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden p-6 bg-primary relative">
              <div className="relative z-[10]">
                <Text title={"Общительный"} />
                <p className="text-[18px] max-w-[250px]">Искусственный интеллект, применяющий практики психологии</p>
              </div>
              <Image src="/images/icon-1.png" className="absolute bottom-0 right-0 z-[1]" width={180} height={180} alt={""} />
            </div>

            {/*  */}

            <div className="md:hidden rounded-xl overflow-hidden p-6 bg-gradient-to-br from-[#000000] to-primary relative">
              <div className="relative z-[10]">
                <Text title={"Реалистичный"} />
                <p className="text-[18px] max-w-[250px]">Разговаривает как реальный человек: эмпатичный и дружелюбный</p>
              </div>
              <Image width={150} height={150} src="/images/icon-3.png" className="absolute top-0 right-0 z-[1]" alt="" />
            </div>

            {/*  */}
            <div className="rounded-xl overflow-hidden p-6 bg-primary relative">
              <div className="relative z-[10]">
                <Text title={"Поддерживает"} />
                <p className="text-[18px] max-w-[250px]">Умеет разговаривать на любые темы, полностью конфиденциально</p>
              </div>
              <Image width={150} height={150} src="/images/icon-2.png" className="absolute bottom-0 right-0 z-[1]" alt="" />
            </div>
            <div className="hidden md:block rounded-xl overflow-hidden p-6 bg-gradient-to-br from-[#000000] to-primary relative">
              <div className="relative z-[10]">
                <Text title={"Реалистичный"} />
                <p className="text-[18px] max-w-[250px]">Разговаривает как реальный человек: эмпатичный и дружелюбный</p>
              </div>
              <Image width={130} height={130} src="/images/icon-3.png" className="absolute top-0 right-0 z-[1]" alt="" />
            </div>
            <div className="rounded-xl overflow-hidden p-6 bg-gradient-to-bl from-[#000000] to-primary relative">
              <div className="relative z-[10]">
                <Text title={"Помогает"} />
                <p className="text-[18px] max-w-[250px]">Подбирает нужную методику помощи, исходя из вашей ситуации</p>
              </div>
              <Image width={150} height={150} src="/images/icon-4.png" className="absolute top-0 right-0 z-[1]" alt="" />
            </div>
          </div>
          <Button title={"Начать"} className="mt-8 mb-6" />
          <h3 className="text-[#000000] text-2xl text-center">Попробуйте <span className="font-[700]">бесплатно на 1 день</span></h3>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-y-4">
            <div className="p-8 pb-12 bg-[url('/images/radial-gradient-1.png')] rounded-xl bg-cover bg-center relative">
              <Text title={"Как это выглядит?"} className="mb-8" />
              <p className="text-lg">
                Как чат с живым человеком. <br /><br />
                Сеанс психотерапии проходит в формате вашего привычного общения с человеком.<br /><br />
                Вы задаете тему, вопросы, общаетесь и получаете все необходимое: советы, эмоциональную поддержку, и ответы, которые помогут.
              </p>
              <Image width={35} height={35} src="/images/chat.svg" className="absolute bottom-5 right-5" alt="" />
            </div>
            <SecondSession className="hidden md:block" />
          </div>
          <div className="flex justify-end">
            <Image width={340} height={50} alt="" src="/images/screenshot.png" className="mx-auto object-cover" />
          </div>
          <SecondSession className="block md:hidden" />
        </div>
        <Button title={"Попробовать"} className="mt-8" />
      </section>

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-[32px] font-[700] text-center mb-12">Сеанс.<span className="text-primary">online</span> - это:</h2>
        <div className="p-8 bg-[url(/images/radial-gradient-3.png)] bg-center bg-cover rounded-xl">
          <div className="mb-12">
            <Text title={"Удобно"} className="text-primary text-center mb-4" />
            <p className="text-[20px]">Встроенный мессенджер - вам не нужен другой</p>
          </div>
          <div className="mb-12">
            <Text title={"Анонимно"} className="text-primary text-center mb-4" />
            <p className="text-[20px]">Сессии зашифрованы end-to-end encryption, хранятся только у вас</p>
          </div>
          <div>
            <Text title={"Профессионально"} className="text-primary text-center mb-4" />
            <p className="text-[20px]">
              <span className="text-[#FF7081]"> За немалые деньги вы могли приобрести сессию у одного психолога в кабинете.</span>
              <br /> <br />
              А теперь, вам доступны многие практики психологии и огромный опыт человечества онлайн: передовые технологии в виде искусственного интеллекта, собранный в одном лице.
              <br /> <br />
              И это лицо - сеанс.онлайн
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-[32px] font-[700] text-center mb-6">Сеанс<span className="text-primary">.online</span> - поможет <span className="text-primary">прямо сейчас</span></h2>
        <p className="text-[20px] text-center">не ждите ухудшения или очереди на запись у психолога</p>
        <Button title={"Попробовать"} className="mt-6" />
      </section>

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-[32px] font-[700] text-center mb-6">Сеанс<span className="text-[#4D4E4E]">.online</span> - это <span className="text-primary">выгодно</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg relative pb-8 overflow-hidden bg-[#ffffff]">
            <div className="bg-[#B53535] h-[100px] absolute top-0 left-0 w-full z-[0]">
              <img src="/images/red-bg.svg" className="w-full [min-w: 300px]:hidden translate-y-[30px] lg:translate-y-[10px] xl:translate-y-[-10px]" />
            </div>
            {/* <img src="/images/red-bg-big.svg" className="absolute h-[200px] object-cover object-bottom -top-1/4 left-0 w-screen z-[0]" /> */}
            <div className="relative z-[10]">
              <div className="text-[#000000] bg-[#ffffff] rounded-bl-2xl w-fit rounded-br-2xl px-10 py-2 font-[700] mx-auto text-[16px] mb-4">Психолог</div>
              <p className="text-center text-[24px]">3500 руб <br /><span className="text-[16px]">средняя цена за 1 час</span></p>
              <div className="flex flex-col w-fit mx-auto mt-24 md:mt-12">
                <div className="flex items-center gap-x-8">
                  <Image width={35} height={35} src="/images/x-icon.svg" className="w-[18px]" alt="" />
                  <p className="max-w-[200px] text-[#000000] text-lg">Дорого</p>
                </div>
                <div className="flex items-center gap-x-8">
                  <Image width={35} height={35} src="/images/x-icon.svg" className="w-[18px]" alt="" />
                  <p className="max-w-[200px] text-[#000000] text-lg">Долго ждать запись</p>
                </div>
                <div className="flex items-center gap-x-8">
                  <Image width={35} height={35} src="/images/x-icon.svg" className="w-[18px]" alt="" />
                  <p className="max-w-[200px] text-[#000000] text-lg">Одна рабочая методика</p>
                </div>
                <div className="flex items-center gap-x-8">
                  <Image width={35} height={35} src="/images/x-icon.svg" className="w-[18px]" alt="" />
                  <p className="max-w-[200px] text-[#000000] text-lg">Шанс не понравиться друг другу</p>
                </div>
              </div>
              <button className="block mx-auto bg-[#202020] w-[170px] py-2.5 rounded-xl mt-8">:(</button>
              {/* <Button title={":("} className="bg-[#202020]" /> */}
            </div>
          </div>
          <div className="rounded-lg relative pb-8 overflow-hidden bg-[#ffffff]">
            <div className="bg-[#0094FF] h-[100px] absolute top-0 left-0 w-full z-[0]">
              <img src="/images/blue-bg.svg" className="w-full [min-w: 300px]:hidden translate-y-[30px] lg:translate-y-[10px] xl:translate-y-[-10px]" />
            </div>
            <div className="relative z-[10]">
              <div className="text-primary bg-[#ffffff] rounded-bl-2xl w-fit rounded-br-2xl px-10 py-2 font-[700] mx-auto text-[16px] mb-4">Психолог</div>
              <p className="text-center text-[24px]">390 руб <br /><span className="text-[16px]">Целый день</span></p>
              <div className="flex flex-col w-fit mx-auto mt-12">
                <div className="flex items-center gap-x-8">
                  <Image width={35} height={35} src="/images/tick-icon.svg" className="w-[18px]" alt="" />
                  <p className="max-w-[200px] text-[#000000] text-lg">Бесплатная пробная сессия</p>
                </div>
                <div className="flex items-center gap-x-8">
                  <Image width={35} height={35} src="/images/tick-icon.svg" className="w-[18px]" alt="" />
                  <p className="max-w-[200px] text-[#000000] text-lg">Круглосуточно</p>
                </div>
                <div className="flex items-center gap-x-8">
                  <Image width={35} height={35} src="/images/tick-icon.svg" className="w-[18px]" alt="" />
                  <p className="max-w-[200px] text-[#000000] text-lg">Все методики</p>
                </div>
                <div className="flex items-center gap-x-8">
                  <Image width={35} height={35} src="/images/tick-icon.svg" className="w-[18px]" alt="" />
                  <p className="max-w-[200px] text-[#000000] text-lg">Дружелюбный и отзывчивый</p>
                </div>
              </div>
              <button className="block mx-auto bg-primary w-[170px] py-2.5 rounded-xl mt-8">Попробовать</button>
              {/* <Button title={":("} className="bg-[#202020]" /> */}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-[32px] font-[700] text-center mb-6">Общайтесь на любые темы</h2>
        <div className="grid grid-cols-2 gap-4 md:gap-8 relative">
          <img src="/images/circle.png" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]" />
          <div className="bg-[#ffffff] rounded-xl h-[175px] md:h-[300px] p-2 md:p-4">
            <h3 className="text-[#000000] font-[700] text-[18px] md:text-[35px]">Ваши эмоции...</h3>
            <p className="text-[11px] md:text-[22px] text-[#000000]">Справьтесь с эмоциями, которые вас беспокоят прямо сейчас. Используйте специальные упражнения и техники для разных ситуаций.</p>
          </div>
          <div className="bg-[#ffffff] rounded-xl h-[175px] md:h-[300px] p-2 md:p-4">
            <h3 className="text-[#000000] font-[700] text-[18px] md:text-[35px]">Проблемы?</h3>
            <p className="text-[11px] md:text-[22px] text-[#000000]">Расскажите о том, что вас тревожит. Получите поддержку мгновенно. Просто напишите, что произошло.</p>
          </div>
          <div className="bg-[#ffffff] rounded-xl h-[175px] md:h-[300px] p-2 md:p-4">
            <h3 className="text-[#000000] font-[700] text-[18px] md:text-[35px]">Отношения</h3>
            <p className="text-[11px] md:text-[22px] text-[#000000]">Давайте разберемся, что необходимо изменить, а главное: как это сделать правильно и безболезненно для вас обоих.</p>
          </div>
          <div className="bg-[#ffffff] rounded-xl h-[175px] md:h-[300px] p-2 md:p-4">
            <h3 className="text-[#000000] font-[700] text-[18px] md:text-[35px]">Разобраться в себе</h3>
            <p className="text-[11px] md:text-[22px] text-[#000000]">Принять себя и повысить самооценку, узнать себя ближе и выслушать себя - дать себе все необходимое для гармонии.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-[32px] font-[700] text-center mb-6">Мы вдохновляемся вашими отзывами!</h2>
        <div className="min-h-[250px] relative">
          <Image width={50} height={50} alt="" src="/images/bugday-right.svg" className="absolute z-[-1] top-1/2 -translate-y-1/2 right-0" />
          <Image width={50} height={50} alt="" src="/images/bugday-left.svg" className="absolute z-[-1] top-1/2 -translate-y-1/2 left-0" />
          <div className="h-full bg-[#ffffff] text-[#000000] w-[80%] mx-auto rounded-2xl p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-[700]">Ольга</h3>
                <p className="text-[13px]">9 декабря 2023 г.</p>
              </div>
              <div className="flex items-center  sm:gap-x-1">
                {Array.from({ length: 6 }).map((_, i) => {
                  return (
                    <Image width={50} height={50} alt="" key={i} src="/images/star.svg" className="w-[20px]" />
                  )
                })}
              </div>
            </div>
            <p className="mt-12 text-[20px]">Это невероятный новый опыт! Никогда бы не подумала что так просто и легко получить помощь </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <Image width={170} height={100} src="/images/logo.svg" className="w-[250px] mx-auto mb-24" alt="" />
        <div className="grid grid-cols-1  md:grid-cols-3 gap-8">
          <div className="relative bg-[#000000] p-4 h-[300px] overflow-hidden flex flex-col items-center justify-center md:justify-start py-12 rounded-lg bg-gradient-to-br from-[#000000] via-[#232427] to-[#000000]">
            <div className="absolute -translate-x-1/2 -translate-y-1/2  top-0 left-0 rotate-[45deg] w-[150px] h-[150px] bg-primary flex items-center justify-end">
              <Image width={50} height={50} alt="" src="/images/energy-icon.svg" className="rotate-[135deg] -translate-x-1/2 w-[30px]" />
            </div>
            <div className="flex items-center justify-center w-[70px] h-[70px] mx-auto border-2 border-primary rounded-full">
              3K
            </div>
            <p className="max-w-[200px] text-[16px] md:text-[19px] text-center mx-auto mt-8">человек, уже ощутили преимущества сервиса</p>
          </div>
          <div className="relative bg-[#000000] p-4 h-[300px] overflow-hidden flex flex-col items-center justify-center md:justify-start py-12 rounded-lg bg-gradient-to-br from-[#000000] via-[#232427] to-[#000000]">
            <div className="absolute -translate-x-1/2 -translate-y-1/2  top-0 left-0 rotate-[45deg] w-[150px] h-[150px] bg-primary flex items-center justify-end">
              <Image width={50} height={50} alt="" src="/images/energy-icon.svg" className="rotate-[135deg] -translate-x-1/2 w-[30px]" />
            </div>
            <div className="flex items-center justify-center w-[70px] h-[70px] mx-auto border-2 border-primary rounded-full">
              1,4K
            </div>
            <p className="max-w-[200px] text-[16px] md:text-[19px] text-center mx-auto mt-8">положительных отзывов</p>
          </div>
          <div className="relative bg-[#000000] p-4 h-[300px] overflow-hidden flex flex-col items-center justify-center md:justify-start py-12 rounded-lg bg-gradient-to-br from-[#000000] via-[#232427] to-[#000000]">
            <div className="absolute -translate-x-1/2 -translate-y-1/2  top-0 left-0 rotate-[45deg] w-[150px] h-[150px] bg-primary flex items-center justify-end">
              <Image width={50} height={50} alt="" src="/images/energy-icon.svg" className="rotate-[135deg] -translate-x-1/2 w-[30px]" />
            </div>
            <div className="flex items-center justify-center w-[70px] h-[70px] mx-auto border-2 border-primary rounded-full">
              24
            </div>
            <p className="max-w-[200px] text-[16px] md:text-[19px] text-center mx-auto mt-8">часа бесплатного первого пользования, попробуйте</p>
          </div>
        </div>
      </section>

      {/*  */}

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-[32px] font-[700] text-center mb-6">Когда начать?<span className="text-primary">Сейчас.</span></h2>
        <p className="text-[20px] text-center">Попробуйте сервис <span className="text-primary">бесплатно на <span className="font-[700]">24 часа</span></span></p>
        <Button title={"Попробовать"} className="mt-6" />
      </section>

      {/*  */}

      <section className="container mx-auto px-4 py-8">
        <div className="h-[400px] bg-[#ffffff] rounded-xl flex items-center gap-x-8 relative p-4 overflow-hidden">
          <Image fill alt="" src="/images/update-section-image.svg" className="h-[80%] md:h-full absolute top-1/2  -translate-x-[70%] sm:-translate-x-[50%]" />
          <div className="w-1/2 ml-auto mt-[-50px] sm:mr-[50px] lg:mr-[150px]">
            <Text title={"Новое обновление"} className="text-[#000000] mb-8" />
            <ul className="text-[#000000] flex flex-col gap-y-3 md:gap-y-8 text-[12px] sm:text-[18px] max-w-[600px]">
              <li>эффективных видов и методик психотерапии, на которых обучен интеллект</li>
              <li>секунды, столько требуется сервису, чтобы дать вам ответ</li>
              <li>безгранично: сеанс психотерапии доступен круглосуточно, когда удобно вам</li>
            </ul>
          </div>
        </div>
      </section>

      {/*  */}

      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="h-[100px] p-4 border border-[#ffffff]/20 rounded-xl flex items-start justify-between">
            <p className="text-[14px]">Правовая информация</p>
            <Image width={35} height={35} src="/images/footer-icon-1.svg" className="" alt="" />
          </div>
          <div className="h-[100px] p-4 border border-[#ffffff]/20 rounded-xl flex items-start justify-between">
            <p className="text-[14px]">Политика конфиденциальности</p>
            <Image width={35} height={35} src="/images/footer-icon-2.svg" className="" alt="" />
          </div>
          <div className="h-[100px] p-4 border border-[#ffffff]/20 rounded-xl flex items-start justify-between">
            <p className="text-[14px]">Обратная связь</p>
            <Image width={35} height={35} src="/images/footer-icon-3.svg" className="" alt="" />
          </div>
          <div className="h-[100px] p-4 border border-[#ffffff]/20 rounded-xl flex items-start justify-between">
            <p className="text-[14px]">Соискателям & Инвесторам</p>
            <Image width={35} height={35} src="/images/footer-icon-4.svg" className="" alt="" />
          </div>
        </div>
      </section>

      {/*  */}

      <footer className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center gap-x-4">
          <a target="_blank" href="https://vk.com/seance.online"><Image width={50} height={50} src="/images/vk-logo.svg" alt="" /></a>
          <a target="_blank" href="https://t.me/seanceonline"><Image width={50} height={50} src="/images/telegram-logo.svg" alt="" /></a>
          <a href="#"><Image width={50} height={50} src="/images/dzen-logo.svg" alt="" /></a>
        </div>
        <p className="text-center mt-8">Сеанс.online - все права защищены (с) 2024 г.</p>
      </footer>

    </div>
  );
}
