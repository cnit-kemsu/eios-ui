import { InputField } from '../../../src/index'
import reactSample from '../reactSample'

export default [
    reactSample(InputField, {
        initPropValues: {
            onChange: e => console.log(e.target.value)
        }
    }),
]