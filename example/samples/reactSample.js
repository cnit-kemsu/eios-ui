
export default function reactSample(ReactComponent, { initPropValues = {}, target, propTypes = {}, ...props } = {}) {
    return {
        title: ReactComponent.name,
        target: target || (({ children, ...props }) => {
            if (children) {
                return <ReactComponent {...props}>{children}</ReactComponent>
            } else {
                return <ReactComponent {...props} />
            }
        }),
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