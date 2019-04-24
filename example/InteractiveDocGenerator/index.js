export default class InteractiveDocGenerator {

    constructor({
        generators,
        getCode,
        getResult,
        target,
        propTypes = {},
        initPropValues = {},
        dynamicPropValues,
        filterProps = []
    }) {
        this.generators = generators
        this.getCode = getCode
        this.getResult = getResult
        this.target = target
        this.propTypes = propTypes
        this.initPropValues = initPropValues
        this.dynamicPropValues = dynamicPropValues
        this.filterProps = filterProps

        this.init()
    }

    init() {

        this.groupPropViews = {}
        this.propGenerators = {}

        const propTypeEntries = Object.entries(this.propTypes)

        for (const [propName, propType] of propTypeEntries) {

            if(this.filterProps.includes(propName)) continue

            const g = this.searchGeneratorFor(propType, propName)

            if (!g) continue

            const { groupName, Generator } = g

            if (!this.groupPropViews[groupName]) this.groupPropViews[groupName] = {}

            const generator = new Generator(propName, this.initPropValues[propName])

            this.groupPropViews[groupName][propName] = generator.createView()
            this.propGenerators[propName] = generator
        }

    }

    searchGeneratorFor(propType, propName) {
        return this.generators.find((generator => (
            generator.propNames && generator.propNames.includes(propName)
        ) || (
            generator.propTypes && generator.propTypes.includes(propType)))
        ) 
    }

    generate() {

        let propValues = {}

        const propGeneratorEntries = Object.entries(this.propGenerators)

        for (const [propName, generator] of propGeneratorEntries) {
            propValues[propName] = generator.getValue()
        }

        if (this.dynamicPropValues) {
            const dpv = this.dynamicPropValues(propValues)

            propValues = Object.assign({}, propValues, dpv)
        }

        propValues = Object.assign({}, this.initPropValues, propValues)

        Object.entries(propValues).forEach(([propName, propValue]) => {
            if (propValue === undefined) delete propValues[propName]
        })

        const result = this.getResult(this.target, propValues)

        return { code: this.getCode(result, propValues, this.filterProps), result }

    }
}