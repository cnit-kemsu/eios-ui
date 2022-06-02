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

function defToView(defValue) {
    if (typeof defValue === 'undefined') return null
    if (typeof defValue === "function") return defValue.toString()
    if (typeof defValue === "object") return JSON.stringify(defValue)
    return "" + defValue
}

export default function createInteractiveDoc({ title, description, defaultProps, ...props }) {

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
                <div style={{ display: "flex" }}>
                    {groupPropViewEntries.length > 0 && (
                        <>

                            <div style={{ background: 'rgb(245, 245, 245)', padding: '8px 16px', overflow: "auto", flex: "0.5", height: "calc(100vh - 235px)" }}>
                                <h3>Интерактивные свойства</h3>
                                {
                                    groupPropViewEntries.map(([groupName, propViews]) => (
                                        <div key={groupName}>
                                            <h3>{groupName}</h3>
                                            {Object.entries(propViews).map(([propName, view]) => {

                                                const defView = defToView(defaultProps[propName])

                                                return (
                                                    <div key={propName} style={{
                                                        margin: "0.5em",
                                                        padding: "0.5em",
                                                        boxShadow: "#00000033 0px 0px 5px"
                                                    }}>
                                                        <h4>{propName}</h4>
                                                        {defView && (
                                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                                <label style={{ marginRight: "1em" }}>Значение по умолчанию:</label>
                                                                <Message flat>{defView}</Message>
                                                            </div>
                                                        )}
                                                        {interDocGen.propInfo[propName] ?
                                                            (
                                                                <div style={{ display: "flex", alignItems: "center" }}>
                                                                    <label style={{ marginRight: "1em" }}>Описание:</label>
                                                                    <Message flat>{interDocGen.propInfo[propName]}</Message>
                                                                </div>
                                                            ) : <br />}
                                                        {cloneElement(view())}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    ))
                                }
                            </div>                            
                        </>
                    )}

                    <div style={{ flex: "0.5", marginLeft: "1em" }}>
                        <h3> Вывод</h3 >
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

                    </div>
                </div>
            </>
        )
    }
}

