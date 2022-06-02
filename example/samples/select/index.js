
import { Select } from '../../../src/index'
import reactSample from '../reactSample'

export default [
    reactSample(Select, {
        title: 'Select~1',
        initPropValues: {
            onClick: () => alert('Нажатие по выпадающему списку'),
            onChange: (item) => alert(`Был нажат элемент выпадающегос списка с value "${item}"`),
            name: 'name-for-form',
            value: 1,
            items: [1, 2, 3, 4, 5]
        }
    }),

    reactSample(Select, {
        title: 'Select~2',
        initPropValues: {
            name: 'name-for-form',
            value: 'item1',
            onClick: () => alert('Нажатие по выпадающему списку'),
            onChange: (item) => alert(`Был нажат элемент выпадающегос списка с value "${item}"`),
            items: [
                { value: 'item1', content: 'Item 1' },
                { value: 'item2', content: 'Item 2' },
                { value: 'item3', content: 'Item 3' },
                { value: 'item4', content: 'Item 4' }
            ]
        }        
    })
]