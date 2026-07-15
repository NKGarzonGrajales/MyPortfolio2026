'use client';

export default function RotatingNKSphere() {
  return (
    <div className="flex items-center justify-center py-10 mt-10" suppressHydrationWarning>
     
      <div className="relative w-40 h-40" style={{ perspective: '1000px' }} suppressHydrationWarning>
       
        <div
            suppressHydrationWarning
          className="w-full h-full rounded-full bg-linear-to-br from-gray-300 via-gray-400 to-gray-500 shadow-2xl flex items-center justify-center"
          style={{
            animation: 'spin 30s linear infinite',
            backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 60%)`,
            boxShadow: '0 0 40px rgba(100,100,100,0.3), inset -2px -20px 10px rgba(0,0,0,0.2), inset 2px 2px 10px rgba(255,255,255,0.5)',
          }}
        >
         
          <span className="text-2xl font-bold text-gray-500 drop-shadow-lg">
            PORTFOLIO NK
          </span>
        </div>

        {/* Estilos de animación */}
        <style>{`
          @keyframes spin {
            from {
              transform: rotateX(-90deg) rotateY(0deg);
            }
            to {
              transform: rotateX(360deg) rotateY(360deg);
            }
          }
        `}</style>
      </div>
    </div>
  );
}