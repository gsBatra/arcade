import { render } from 'react-dom'
import Example from './example'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const style = {
        position: 'fixed',
        left: '50%',
        top: '60%',
        transform: 'translate(-50%, -50%)',
        height: '450px',
        width: '450px',
    };
    return (
        <div className="App" style={style}>
            <DndProvider backend={HTML5Backend}>
                <Example />
            </DndProvider>
        </div>
    )
}

const rootElement = document.getElementById('app-root')
render(<App />, rootElement)
