import React, { useCallback, useEffect, cloneElement } from 'react'
import ErrorBoundary from './ErrorBoundary'
import reactElementToJSXString from 'react-element-to-jsx-string'

import InteractiveDocGenerator from './InteractiveDocGenerator'
import generators from './generators'

import 'highlight.js/styles/dark.css'
import hljs from 'highlight.js'

import {
    Button, Message
} from '../src/index'


function copyToClipboard(str) {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

const interDocGenStaticParams = {
    generators,
    getCode(targetResult, _, filterProps) {
        return reactElementToJSXString(targetResult, {
            maxInlineAttributesLineLength: 100, showDefaultProps: false,
            functionValue: fn => fn.name || 'handler',
            //filterProps: filterProps
        })
    },
    getResult(target, props) {
        return target(props)
    },
    filterProps: ['className', 'style', 'css'] 
}

export default function createInteractiveDoc({ title, description, ...props }) {

    const interDocGen = new InteractiveDocGenerator({ ...interDocGenStaticParams, ...props })

    return function InteractiveDoc() {

        const handleCopyBtnClick = useCallback(() => copyToClipboard(code))

        useEffect(() => {
            hljs.highlightBlock(document.querySelector('code'))
        })

        const { code, result } = interDocGen.generate()        
        
        const groupPropViewEntries = Object.entries(interDocGen.groupPropViews)         
        
        return (
            <>                
                <h2>{title}</h2>
                <hr />
                {description && <><Message>{description}</Message> <hr /></>}
                {groupPropViewEntries.length > 0 && (
                    <>

                        <div style={{ zIndex: 1000000, background: 'rgb(245, 245, 245)', padding: '8px 16px' }}>
                            <h3>Интерактивные свойства</h3>
                            {
                                groupPropViewEntries.map(([groupName, propViews]) => (
                                    <div key={groupName}>
                                        <h4>{groupName}</h4>
                                        {Object.entries(propViews).map(([propName, view]) => (
                                            cloneElement(view(), { key: propName }))
                                        )}
                                    </div>
                                ))
                            }
                        </div>
                        <hr />
                    </>
                )}
                <h3>Вывод</h3>
                <ErrorBoundary>
                    <div>
                        {result}
                    </div>
                </ErrorBoundary>
                <hr />
                <h3>Код</h3>
                <pre><code className="html">{code}</code></pre>
                <Button style={{ padding: '8px' }} onClick={handleCopyBtnClick}>
                    <i style={{ fontSize: '16px' }} className='material-icons'>file_copy</i>
                    Скопировать код
                </Button>
            </>
        )
    }
}

