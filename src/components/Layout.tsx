import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
} from 'react-icons/fa';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-2 py-1 rounded transition ${isActive ? 'bg-white text-lavanda-dark font-semibold' : 'text-white hover:underline'}`;

  return (
    <div className="min-h-screen bg-crema text-verde-dark font-sans flex flex-col justify-between">
      <nav className="sticky top-0 z-50 bg-lavanda-dark text-white py-4 px-6 shadow-md">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
          <NavLink to="/">
            <img src="/images/s_logo.png" alt="Sandra Logo" className="h-10" />
          </NavLink>
          <div className="flex items-center space-x-2 md:space-x-4">
            <NavLink to="/" className={navLinkClass}>{t('nav.home')}</NavLink>
            <NavLink to="/about" className={navLinkClass}>{t('nav.about')}</NavLink>
            <NavLink to="/services" className={navLinkClass}>{t('nav.services')}</NavLink>
            <NavLink to="/contact" className={navLinkClass}>{t('nav.contact')}</NavLink>
            <select
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              value={i18n.language.startsWith('es') ? 'es' : 'en'}
              className="bg-white text-lavanda-dark rounded px-2 py-1 text-sm"
            >
              <option value="en">EN 🇺🇸</option>
              <option value="es">ES 🇲🇽</option>
            </select>
          </div>
        </div>
      </nav>

      <main key={location.pathname} className="p-6 grow animate-slideFade">
        {children}
      </main>

      <footer className="bg-verde-dark text-white py-8 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="font-semibold text-base mb-2">{t('footer.contact')}</h4>
            <p className="flex items-center gap-2"><FaEnvelope /> sandra@araujomz.com</p>
            <p className="flex items-center gap-2"><FaPhoneAlt /> (818) 660-6186</p>
          </div>

          <div>
            <h4 className="font-semibold text-base mb-2">{t('footer.quickLinks')}</h4>
            <ul className="space-y-1">
              <li><NavLink to="/" className={({ isActive }) => isActive ? 'underline' : ''}>{t('nav.home')}</NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) => isActive ? 'underline' : ''}>{t('nav.about')}</NavLink></li>
              <li><NavLink to="/services" className={({ isActive }) => isActive ? 'underline' : ''}>{t('nav.services')}</NavLink></li>
              <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'underline' : ''}>{t('nav.contact')}</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-base mb-2">{t('footer.follow')}</h4>
            <div className="flex gap-4 mt-2">
              <a href="https://www.instagram.com/sandra.araujo.mdza/" target="_blank" rel="noopener noreferrer" className="hover:text-lavanda-light">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61563092142723" target="_blank" rel="noopener noreferrer" className="hover:text-lavanda-light">
                <FaFacebookF size={20} />
              </a>
              <a href="https://www.linkedin.com/in/sandra-araujo-536444193/" target="_blank" rel="noopener noreferrer" className="hover:text-lavanda-light">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-xs mt-6 border-t border-white/30 pt-4">
          © {new Date().getFullYear()} Sandra Araujo Mendoza. {t('footer.rights')}
        </div>
      </footer>
    </div>
  );
}
