import ReactDOM from 'react-dom/client'
import {Button} from "./components/Button";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <div>
        <div>
            <label>Button</label>
            <Button onClick={() => console.log("Test")}>Test</Button>
        </div>
    </div>
)
