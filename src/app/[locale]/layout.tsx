import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server'; 
import { notFound } from 'next/navigation';
import './globals.css';
import { locales } from '../../../i18n.config';

export const metadata: Metadata = {
  title: 'Nidia Karina Garzón - Full Stack Developer',
  description: 'Portfolio de desarrolladora Full Stack.',
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; 
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  
  const { locale } = await params;

  
  if (!locales.includes(locale as typeof locales[number])) {
    notFound();
  }

  
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="bg-slate-950 text-slate-100 "  suppressHydrationWarning data-gramm="false" >
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}