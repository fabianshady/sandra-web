import { usePageTitle } from '../hooks/usePageTitle';
import { useTranslation } from 'react-i18next';

export default function About() {
    usePageTitle('About · Sandra Araujo');
    const { t } = useTranslation();

    return (
        <div className="space-y-12">
            <section className="bg-gradient-to-br from-lavanda-light via-crema to-verde-light rounded-lg p-8 shadow-md text-center space-y-4 animate-fadeUp">
                <img
                    src="/images/sandra2.jpg"
                    alt="Sandra portrait"
                    className="w-36 h-36 mx-auto rounded-full object-cover border-4 border-white shadow"
                />
                <h1 className="text-3xl font-bold text-lavanda-dark">{t('about.title')}</h1>
                <p className="text-verde-dark text-lg max-w-3xl mx-auto">{t('about.intro')}</p>
            </section>

            <section className="space-y-6 animate-fadeUp">
                <h2 className="text-2xl font-semibold text-lavanda-dark text-center">{t('about.journey')}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg shadow p-4">
                        <h3 className="font-bold text-verde-dark">{t('about.move.title')}</h3>
                        <p>{t('about.move.text')}</p>
                    </div>
                    <div className="bg-white rounded-lg shadow p-4">
                        <h3 className="font-bold text-verde-dark">{t('about.growth.title')}</h3>
                        <p>{t('about.growth.text')}</p>
                    </div>
                </div>
            </section>

            <section className="mt-12 animate-fadeUp text-center">
                
                <blockquote className="text-2xl italic text-verde-dark max-w-3xl mx-auto p-8 bg-crema rounded-lg shadow-lg">
                    "{t('about.beliefQuote')}"
                    <footer className="mt-4 text-right text-lg text-lavanda-dark">- {t('about.beliefAuthor')}</footer>
                </blockquote>
            </section>
        </div>
    );
}
