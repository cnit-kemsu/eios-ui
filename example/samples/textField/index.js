import { TextField } from '../../../src/index'
import reactSample from '../reactSample'

export default [
    reactSample(TextField, {
        initPropValues: {
            onChange: e => console.log(e.target.value)
        }
    }),
]