import './Icon.css';

export default function Icon({ name = 'arrow', className = '' }) {
  return (
    <svg className={'icon ' + className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {name === 'asterisk' ? <path d="M12 3v18M3 12h18M5.64 5.64l12.72 12.72M5.64 18.36 18.36 5.64" /> : name === 'up' ? <path d="M12 21V3m-7 7 7-7 7 7" /> : <path d="M4 20 20 4M5 4h15v15" />}
    </svg>
  );
}
