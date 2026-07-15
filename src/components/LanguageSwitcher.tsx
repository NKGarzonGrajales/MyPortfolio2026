'use client';

import {  usePathname } from '../navigation'; 
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
 // const router = useRouter();
  const pathname = usePathname(); 
  const locale = useLocale();

  const handleSwitch = (newLocale: 'es' | 'en') => {
    // 💡 COMENTAMOS EL ROUTER TEMPORALMENTE:
    // router.replace(pathname, { locale: newLocale });

   
    const cleanPath = pathname === '/' ? '' : pathname;
    window.location.href = `/${newLocale}${cleanPath}`;
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => handleSwitch('es')}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          locale === 'es'
            ? 'bg-blue-500 text-white'
            : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
        }`}
      >
        ES
      </button>
      <button
        onClick={() => handleSwitch('en')}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          locale === 'en'
            ? 'bg-blue-500 text-white'
            : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
        }`}
      >
        EN
      </button>
    </div>
  );
}