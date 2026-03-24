import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import { useTranslation } from 'react-i18next';

export default function Home() {
    usePageTitle('Home · Sandra Araujo');
    const { t, i18n } = useTranslation();

    const getEventImage = () => {
        const language = i18n.language;
        return `https://ogwdc3ynajjlgs4y.public.blob.vercel-storage.com/events-${language}.jpg`;
    };

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

            <section className="bg-crema rounded-xl shadow-lg p-8 space-y-6 animate-fadeUp text-center">
                <img
                    src={getEventImage()}
                    alt={t('home.upcomingEventsTitle')}
                    className="w-full h-full object-cover"
                />
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
