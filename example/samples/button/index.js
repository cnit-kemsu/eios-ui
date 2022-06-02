import React from 'react'
import PropTypes from 'prop-types'

import { Button, Spinner } from '../../../src/index'
import reactSample from '../reactSample'

export default [

    reactSample(Button, {
        title: 'Button~1',
        description: <>По умолчанию, кнопка представляет собой обёртку вокруг нативного элемента button.</>,
        propTypes: {
            onClick: PropTypes.func
        },
        initPropValues: {
            children: 'Нажми Меня!',
            onClick: () => alert('Хороший человек :)')
        }
    }),

    reactSample(Button, {
        title: 'Button~2',
        description: <>Вместо нативного элемента button вы можете использовать другой элемент, например элемент "a".</>,
        propTypes: {
            href: PropTypes.string
        },
        dynamicPropValues({ href }) {
            return { children: `Перейти к ${href}` }
        },
        initPropValues: {
            elementType: 'a',
            href: '/'
        }
    }),

    reactSample(Spinner, {
        title: 'Button~3',
        target(props) {
            return (
                <Button borderless disabled transparent style={{ width: '64px', height: '64px', borderRadius: '100%' }}>
                    <span>Loading</span>
                    <Spinner style={{ position: 'absolute' }} {...props} />
                </Button>
            )
        }
    })
]
