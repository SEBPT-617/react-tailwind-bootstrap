import TailwindCard from "./components/TailwindCard";
import BootstrapCard from "./components/BootstrapCard";
import {  Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function App() {
  return (
    <div className='App'>
      <h1 className='text-center my-4'>
        Testing Tailwind and Bootstrap in React
      </h1>
      <div className='flex justify-center gap-4'>
        <TailwindCard />
        <BootstrapCard />
      </div>
    
{/* Tailwind Button Example */}
      <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:scale-105"
      >Tailwind</button>

{/* Bootstrap Bautton Component */}
<div className="flex align-items-start gap-4 flex-col my-6">
      <Button 
      style={{
        border: 'none',
        backgroundColor: 'purple'
        }}>
      Bootstrap</Button>

    </div>

{/* Bootstrap card component example */}
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default App;
