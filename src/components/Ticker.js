import Icon from './Icon';
import './Ticker.css';

const phrases = ['GOOD THINGS COME IN TWOS', 'LITTLE GIFTS. BIG FEELINGS.', 'A LITTLE MORE COLOR.'];

function TickerGroup() {
  return (
    <div className="ticker-group">
      {Array.from({ length: 4 }, (_, repeat) =>
        phrases.map((phrase, index) => (
          <span className="ticker-item" key={repeat + '-' + index}>
            {phrase}<Icon name="asterisk" />
          </span>
        ))
      )}
    </div>
  );
}

export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        <TickerGroup />
        <TickerGroup />
      </div>
    </div>
  );
}
