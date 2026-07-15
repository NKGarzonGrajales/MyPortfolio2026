'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Contact() {
  const t = useTranslations();
  const [copied, setCopied] = useState(false);
  const emailToCopy = "karycyber22@hotmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(emailToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // El mensaje desaparece tras 2 segundos
    } catch (err) {
      console.error('No se pudo copiar el correo: ', err);
    }
  };

  return (
    <section id="contact" className="bg-slate-900 py-20 px-6" suppressHydrationWarning>
      <div className="max-w-4xl mx-auto" suppressHydrationWarning>
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              {t('contact.title')}
            </span>
          </h2>
          <p className="text-slate-400 text-lg">{t('contact.description')}</p>
        </div>

       
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-colors">
            <h3 className="text-blue-400 font-semibold mb-3 text-lg">📧 Email</h3>
            <div className="space-y-2">
              <Link
                href="mailto:karycyber21@gmail.com"
                className="text-slate-300 hover:text-blue-400 transition-colors break-all"
              >
                karycyber21@gmail.com
              </Link>
              <br />
              <Link
                href="mailto:karycyber22@hotmail.com"
                className="text-slate-300 hover:text-blue-400 transition-colors break-all"
              >
                karycyber22@hotmail.com
              </Link>
            </div>
          </div>

          {/* Tarjeta Copiar Correo Secundario (¡Adiós Teléfono!) */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-colors">
            <h3 className="text-blue-400 font-semibold mb-3 text-lg">
              {copied ? '✅' : '📋'} {copied ? t('contact.copied') : t('contact.copyEmail')}
            </h3>
            <button
              onClick={handleCopy}
              className="text-slate-300 hover:text-blue-400 transition-colors text-lg text-left w-full focus:outline-none cursor-pointer"
            >
              {copied ? (
                <span className="text-green-400 font-medium animate-pulse">
                  {t('contact.copiedSuccess')}
                </span>
              ) : (
                "karycyber22@hotmail.com"
              )}
            </button>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://github.com/NKGarzonGrajales"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-blue-400 rounded-lg font-semibold transition-all"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/nidiag22"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-blue-400 rounded-lg font-semibold transition-all"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </section>
  );
}