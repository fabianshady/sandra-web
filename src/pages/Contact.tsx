import { usePageTitle } from '../hooks/usePageTitle';
import { useTranslation } from 'react-i18next';

export default function Contact() {
    usePageTitle('Book a Session · Sandra Araujo');
    const { t } = useTranslation();

    return (
        <div className="max-w-3xl mx-auto space-y-12">
            <section className="text-center">
                <h1 className="text-3xl font-bold text-lavanda-dark">{t('contact.title')}</h1>
                <p className="text-verde-dark mt-2">{t('contact.subtitle')}</p>
            </section>

            <form
                action="https://formsubmit.co/sandra.systemicmindset@gmail.com"
                method="POST"
                className="grid md:grid-cols-2 gap-4 text-sm"
            >
                <input
                    type="text"
                    name="name"
                    placeholder={t('contact.form.name')}
                    required
                    className="p-3 border border-verde-dark rounded w-full"
                />
                <input
                    type="email"
                    name="email"
                    placeholder={t('contact.form.email')}
                    required
                    className="p-3 border border-verde-dark rounded w-full"
                />
                <input
                    type="text"
                    name="subject"
                    placeholder={t('contact.form.subject')}
                    className="p-3 border border-verde-dark rounded w-full md:col-span-2"
                />
                <textarea
                    name="message"
                    rows={5}
                    placeholder={t('contact.form.message')}
                    required
                    className="p-3 border border-verde-dark rounded w-full md:col-span-2"
                />
                <button
                    type="submit"
                    className="bg-verde-dark text-white px-6 py-3 rounded-full hover:bg-verde-light hover:text-verde-dark transition md:col-span-2"
                >
                    {t('contact.form.send')}
                </button>
            </form>

            <section className="bg-white shadow p-6 rounded-lg text-center space-y-2 text-sm">
                <p>
                    <strong>{t('contact.info.email')}:</strong> sandra.systemicmindset@gmail.com
                </p>
                <p>
                    <strong>{t('contact.info.phone')}:</strong> (818) 660-6186
                </p>
                <p>
                    <strong>{t('contact.info.languages')}:</strong> {t('contact.info.languageList')}
                </p>
            </section>

            <section className="text-sm space-y-6">
                <h2 className="text-xl font-semibold text-lavanda-dark">{t('contact.faq.title')}</h2>
                <div className="space-y-4">
                    {(t('contact.faq.questions', { returnObjects: true }) as Array<{ q: string; a: string }>).map((item, i) => (
                        <div key={i}>
                            <h3 className="font-medium text-verde-dark">{item.q}</h3>
                            <p>{item.a}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
