import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import { useTranslation } from 'react-i18next';

export default function Home() {
    usePageTitle('Home · Sandra Araujo');
    const { t } = useTranslation();

    return (
        <div className="space-y-12">
            <section className="relative overflow-hidden rounded-lg shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-lavanda-light via-crema to-verde-light opacity-30" />
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-8">
                    <img
                        src="https://ogwdc3ynajjlgs4y.public.blob.vercel-storage.com/sandra.jpg"
                        alt={t('home.name')}
                        className="w-48 h-48 rounded-full object-cover shadow-md border-4 border-white"
                    />
                    <div className="text-center md:text-left max-w-xl">
                        <h1 className="text-4xl font-bold text-lavanda-dark">{t('home.name')}</h1>
                        <p className="text-lg text-verde-dark mt-2">{t('home.title')}</p>
                        <p className="mt-4">{t('home.intro')}</p>
                        <div className="mt-6 flex flex-col sm:flex-row gap-4">
                            <a
                                href="/contact"
                                className="inline-block bg-verde-dark text-white px-6 py-3 rounded-full hover:bg-verde-light hover:text-verde-dark transition"
                            >
                                {t('home.cta')}
                            </a>
                            <Link
                                to="/about"
                                className="inline-block text-lavanda-dark underline hover:text-lavanda-light transition self-center"
                            >
                                {t('home.learnMore')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="animate-fadeUp my-16 px-4">
                <div className="max-w-lg md:max-w-2xl lg:max-w-5xl xl:max-w-6xl mx-auto bg-verde-dark rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative text-white border-8 border-crema/10 flex flex-col lg:flex-row">

                    {/* Left Column (Image & Header) */}
                    <div className="lg:w-1/2 relative flex flex-col justify-between overflow-hidden min-h-[400px]">
                        <div className="absolute inset-0">
                            <img
                                src="https://ogwdc3ynajjlgs4y.public.blob.vercel-storage.com/couple.png"
                                alt="Pareja"
                                className="w-full h-full object-cover grayscale-[30%] contrast-125 lg:object-[center_30%]"
                            />
                            {/* Gradients to blend image flawlessly into the background */}
                            <div className="absolute inset-0 bg-gradient-to-t from-verde-dark via-verde-dark/70 to-verde-dark/30 lg:hidden" />
                            {/* Desktop specific gradient - fading right to blend with text */}
                            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-transparent via-verde-dark/60 to-[#3a4d41]" />
                            <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-[#3a4d41] via-transparent to-transparent opacity-80" />
                        </div>

                        {/* Flyer Header Top */}
                        <div className="text-center lg:text-left pt-10 pb-8 px-6 lg:p-12 relative z-20">
                            <span className="inline-block bg-black/30 backdrop-blur-md text-crema font-bold text-xs md:text-sm tracking-[0.2em] uppercase px-5 py-2 rounded-full mb-6 border border-crema/30">
                                {t('home.flyer.tag')}
                            </span>
                            <h2 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-white leading-none mb-4 tracking-tighter uppercase drop-shadow-md">
                                {t('home.flyer.title1')} <br />
                                <span className="text-lavanda-light">{t('home.flyer.title2')}</span>
                            </h2>
                            <p className="text-lg md:text-xl font-medium text-crema leading-snug max-w-sm mx-auto lg:mx-0 opacity-90 backdrop-blur-sm sm:bg-black/10 sm:p-2 sm:rounded-lg lg:bg-transparent lg:p-0">
                                {t('home.flyer.subtitle')}
                            </p>
                        </div>

                        {/* Circular Badge - typical flyer element */}
                        <div className="relative z-20 mb-8 lg:mb-12 mx-auto lg:ml-12 w-40 h-40 md:w-48 md:h-48 flex-shrink-0 bg-lavanda-dark rounded-full flex flex-col items-center justify-center p-6 text-center shadow-2xl border-4 border-verde-dark rotate-[-10deg] hover:rotate-0 transition-transform duration-300">
                            <span className="text-white text-[10px] md:text-xs uppercase tracking-widest font-bold mb-1 opacity-90">{t('home.flyer.badge.top')}</span>
                            <span className="text-crema font-black text-2xl md:text-[28px] leading-tight shadow-sm mb-1 uppercase px-1">{t('home.flyer.badge.middle')}</span>
                            <span className="text-white text-[10px] md:text-[13px] leading-tight uppercase font-semibold mb-1">{t('home.flyer.badge.bottom')}</span>
                            <div className="border-t border-white/20 w-3/4 my-1.5" />
                            <span className="text-white text-[9px] md:text-[11px] leading-tight uppercase font-bold opacity-90 tracking-tighter">{t('home.flyer.badge.time')}</span>
                        </div>
                    </div>

                    {/* Right Column (Details Section) */}
                    <div className="lg:w-1/2 flex flex-col justify-center bg-gradient-to-b from-verde-dark via-[#3a4d41] to-verde-dark lg:from-[#3a4d41] lg:to-verde-dark px-6 md:px-12 py-10 lg:py-12 relative z-20">

                        {/* Quote / Hook */}
                        <div className="mb-8 text-center lg:text-left relative">
                            <span className="absolute -top-6 -left-2 text-6xl text-crema/20 font-serif hidden lg:block">"</span>
                            <div className="relative z-10 lg:pl-6 leading-relaxed lg:border-l-2 border-lavanda-light">
                                <p className="text-base md:text-lg italic text-white/90 font-light mb-2">
                                    <span className="lg:hidden text-2xl text-crema/40 font-serif leading-none mr-1">"</span>
                                    {t('home.flyer.quote')}
                                    <span className="lg:hidden text-2xl text-crema/40 font-serif leading-none ml-1">"</span>
                                </p>
                                <p className="text-base md:text-lg italic text-crema font-bold">
                                    {t('home.flyer.quote2')}
                                </p>
                            </div>
                        </div>

                        {/* Informative Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 mb-8 flex-grow">
                            {/* column 1 */}
                            <div className="bg-black/20 rounded-2xl p-5 border border-white/5">
                                <h4 className="text-crema font-bold uppercase mb-3 tracking-wider text-sm flex items-center gap-2">
                                    <span className="text-xl">🎯</span> {t('home.flyer.objectiveTitle')}
                                </h4>
                                <p className="text-sm text-white/80 leading-relaxed">
                                    {t('home.flyer.objectiveDesc')}
                                </p>
                            </div>
                            {/* column 2 */}
                            <div className="bg-black/20 rounded-2xl p-5 border border-white/5 flex flex-col justify-between gap-4">
                                <div>
                                    <h4 className="text-crema font-bold uppercase mb-2 tracking-wider text-sm flex items-center gap-2">
                                        <span className="text-xl">💡</span> {t('home.flyer.learnTitle')}
                                    </h4>
                                    <ul className="text-sm text-white/80 space-y-1">
                                        <li className="flex items-start gap-2"><div className="w-1 h-1 rounded-full bg-lavanda-light mt-2 flex-shrink-0" />{t('home.flyer.learn1')}</li>
                                        <li className="flex items-start gap-2"><div className="w-1 h-1 rounded-full bg-lavanda-light mt-2 flex-shrink-0" />{t('home.flyer.learn2')}</li>
                                        <li className="flex items-start gap-2"><div className="w-1 h-1 rounded-full bg-lavanda-light mt-2 flex-shrink-0" />{t('home.flyer.learn3')}</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-crema font-bold uppercase mb-1 tracking-wider text-sm flex items-center gap-2">
                                        <span className="text-xl">👥</span> {t('home.flyer.whoTitle')}
                                    </h4>
                                    <p className="text-[13px] text-white/80 leading-tight">
                                        {t('home.flyer.whoDesc')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Footer / Speaker Section */}
                        <div className="bg-crema text-verde-dark rounded-2xl p-5 flex flex-col sm:flex-row items-center sm:items-start gap-4 shadow-inner relative overflow-hidden text-center sm:text-left mb-6">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-crema shadow-[inset_0_0_50px_rgba(0,0,0,0.1)] rounded-full -mr-12 -mt-12 pointer-events-none" />

                            <img
                                src="https://ogwdc3ynajjlgs4y.public.blob.vercel-storage.com/speaker.png"
                                alt={t('home.flyer.speaker.name')}
                                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md relative z-10 flex-shrink-0"
                            />
                            <div className="relative z-10 w-full">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-1">
                                    <div>
                                        <p className="text-[10px] font-bold text-lavanda-dark uppercase tracking-widest mb-0.5">{t('home.flyer.speaker.label')}</p>
                                        <h4 className="text-lg font-bold leading-none">{t('home.flyer.speaker.name')}</h4>
                                    </div>
                                    <span className="inline-block bg-verde-dark text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full self-center sm:self-auto shrink-0 mt-2 sm:mt-0">
                                        {t('home.flyer.speaker.lang')}
                                    </span>
                                </div>

                                <p className="text-xs font-semibold mb-1.5">{t('home.flyer.speaker.desc')}</p>
                                <div className="text-[10px] text-verde-dark/90 flex flex-col gap-1 mt-2">
                                    {(t('home.flyer.speaker.bullets', { returnObjects: true }) as string[]).map((bullet, idx) => (
                                        <div key={idx} className="flex items-start text-left gap-1.5">
                                            <span className="text-lavanda-dark mt-0.5">•</span> <span>{bullet}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Information tailored for Image Export */}
                        <div className="mt-auto border-t border-verde-light/20 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                            <div>
                                <p className="text-[10px] uppercase font-bold tracking-widest text-crema/70 mb-0.5">{t('home.flyer.registrationContact')}</p>
                                <p className="text-sm font-semibold text-white/90">📞 (818) 660-6186 &nbsp;|&nbsp; ✉️ sandra@araujomz.com</p>
                            </div>
                            <div className="text-base font-bold text-verde-light tracking-wide">
                                sandra.araujomz.com
                            </div>
                        </div>

                    </div>
                </div>

                {/* CTA Button below the flyer */}
                <div className="max-w-max mx-auto mt-8 text-center animate-fadeIn pb-8">
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center bg-lavanda-dark text-white px-10 py-4 rounded-full font-bold hover:bg-lavanda-light hover:text-lavanda-dark transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 transform w-full sm:w-auto text-lg uppercase tracking-wide"
                    >
                        {t('home.flyer.cta')}
                    </a>
                </div>
            </section>

            <section className="py-12 animate-fadeUp">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="bg-white rounded-lg shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
                            <h3 className="text-2xl font-bold text-lavanda-dark mb-4 text-center">{t('about.mission')}</h3>
                            <p className="text-verde-dark text-lg text-center">{t('about.missionText')}</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
                            <h3 className="text-2xl font-bold text-lavanda-dark mb-4 text-center">{t('about.vision')}</h3>
                            <p className="text-verde-dark text-lg text-center">{t('about.visionText')}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white rounded-xl shadow-lg p-6 space-y-4 animate-fadeUp">
                <h3 className="text-2xl font-semibold text-lavanda-dark text-center">{t('home.servicesTitle')}</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center text-verde-dark text-sm">
                    <div className="bg-verde-light bg-opacity-20 rounded-lg p-4">{t('home.services.individual')}</div>
                    <div className="bg-verde-light bg-opacity-20 rounded-lg p-4">{t('home.services.family')}</div>
                    <div className="bg-verde-light bg-opacity-20 rounded-lg p-4">{t('home.services.couples')}</div>
                    <div className="bg-verde-light bg-opacity-20 rounded-lg p-4">{t('home.services.group')}</div>
                </div>

                <div className="text-center mt-4">
                    <a
                        href="/services"
                        className="inline-block bg-verde-dark text-white px-6 py-3 rounded-full hover:bg-verde-light hover:text-verde-dark transition"
                    >
                        {t('home.services.viewAll')}
                    </a>
                </div>
            </section>
        </div>
    );
}
