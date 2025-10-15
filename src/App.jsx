import './styles.css';
import LineupBoard from './components/LineupBoard';
import StarterForm from './components/StarterForm';

export default function App() {
  return (
    <div className='container'>
      <header style={{ marginBottom: 18 }}>
        <h1 className='h1'>
          <span className='kit' aria-hidden="true" />
          Starting Lineup
        </h1>
        <p className='helper'>See who's starting. Add a new starter. Test it all!</p>
      </header>

      <div className='row'>
        <div className='col'><LineupBoard /></div>
        <div className='col'><StarterForm /></div>
      </div>
    </div>
  );
}
