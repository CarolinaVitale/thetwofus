import './Ticker.css';

const message = 'GOOD THINGS COME IN TWOS　 ✳　 LITTLE GIFTS. BIG FEELINGS.　 ✳　 A LITTLE MORE COLOR.　 ✳';

const repeatedMessage = Array(4).fill(message).join('　 ');

export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        <span className="ticker-group">{repeatedMessage}</span>
        <span className="ticker-group">{repeatedMessage}</span>
      </div>
    </div>
  );
}
