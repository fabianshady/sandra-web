import { usePageTitle } from '../hooks/usePageTitle';
import { useTranslation } from 'react-i18next';

export default function Services() {
    usePageTitle('Services · Sandra Araujo');
    const { t } = useTranslation();

    return (
        <div className="space-y-10">
            <h1 className="text-3xl font-bold text-lavanda-dark text-center">{t('services.title')}</h1>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-verde-dark">{t('services.online')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {['individual', 'family', 'couples'].map((key) => (
                        <div key={key} className="bg-white shadow p-4 rounded-lg flex flex-col items-center text-center transition transform hover:-translate-y-1 hover:shadow-lg">
                            <img src={`/images/${key}.png`} alt={t(`services.cards.${key}.title`)} className="w-full h-40 object-cover rounded-md mb-4" />
                            <span className="text-xs bg-lavanda-light text-white px-2 py-1 rounded-full uppercase tracking-wider mb-2">
                                {t('services.labels.online')}
                            </span>
                            <h3 className="text-xl font-medium">{t(`services.cards.${key}.title`)}</h3>
                            <p>{t(`services.cards.${key}.desc`)}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-verde-dark">{t('services.inPerson')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {['group', 'business'].map((key) => (
                        <div key={key} className="bg-white shadow p-4 rounded-lg flex flex-col items-center text-center transition transform hover:-translate-y-1 hover:shadow-lg">
                            <img src={`/images/${key}.png`} alt={t(`services.cards.${key}.title`)} className="w-full h-40 object-cover rounded-md mb-4" />
                            <span className="text-xs bg-lavanda-light text-white px-2 py-1 rounded-full uppercase tracking-wider mb-2">
                                {t('services.labels.inPerson')}
                            </span>
                            <h3 className="text-xl font-medium">{t(`services.cards.${key}.title`)}</h3>
                            <p>{t(`services.cards.${key}.desc`)}</p>
                        </div>
                    ))}
                </div>
            </section>

            <div className="text-center mt-12">
                <a
                    href="/contact"
                    className="bg-verde-dark text-white px-6 py-3 rounded-full hover:bg-verde-light hover:text-verde-dark transition"
                >
                    {t('services.cta')}
                </a>
            </div>
        </div>
    );
}
