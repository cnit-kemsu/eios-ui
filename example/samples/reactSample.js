
export default function reactSample(ReactComponent, { initPropValues = {}, propInfo = {}, target, propTypes = {}, defaultProps = {}, ...props } = {}) {
    return {
        title: ReactComponent.name,
        target: target || (({ children, ...props }) => {
            if (children) {
                return <ReactComponent {...props}>{children}</ReactComponent>
            } else {
                return <ReactComponent {...props} />
            }
        }),
        propInfo: {
            ...ReactComponent.propInfo,
            ...propInfo
        },
        defaultProps: {
            ...ReactComponent.defaultProps,
            ...defaultProps
        },
        initPropValues: {
            ...ReactComponent.defaultProps,
            ...initPropValues
        },
        propTypes: {
            ...ReactComponent.propTypes,
            ...propTypes
        },
        ...props
    }
}