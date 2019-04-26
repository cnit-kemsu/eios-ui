import React, { useCallback, useEffect, cloneElement } from 'react'
import ErrorBoundary from './ErrorBoundary'
import reactElementToJSXString from 'react-element-to-jsx-string'

import InteractiveDocGenerator from './InteractiveDocGenerator'
import generators from './generators'

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

        const handleEffect = useCallback(() => {
            hljs.highlightBlock(document.querySelector('code'))
        })
        const handleCopyBtnClick = useCallback(() => copyToClipboard(code))

        useEffect(handleEffect)

        const { code, result } = interDocGen.generate()        
        
        const groupPropViewEntries = Object.entries(interDocGen.groupPropViews)         
        
        return (
            <>                
                <h1>{title}</h1>
                <hr />
                {description && <><Message>{description}</Message> <hr /></>}
                {groupPropViewEntries.length > 0 && (
                    <>

                        <div style={{ zIndex: 1000000, background: 'rgb(245, 245, 245)', padding: '8px 16px' }}>
                            <h2>Interactive props</h2>
                            {
                                groupPropViewEntries.map(([groupName, propViews]) => (
                                    <div key={groupName}>
                                        <h3>{groupName}</h3>
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
                <h2>View</h2>
                <ErrorBoundary>
                    <div>
                        {result}
                    </div>
                </ErrorBoundary>
                <hr />
                <h2>Code</h2>
                <pre><code className="html">{code}</code></pre>
                <Button style={{ padding: '8px' }} onClick={handleCopyBtnClick}>
                    <i style={{ fontSize: '16px' }} className='material-icons'>file_copy</i>
                    Copy Code to Clipboard
                </Button>
            </>
        )
    }
}

