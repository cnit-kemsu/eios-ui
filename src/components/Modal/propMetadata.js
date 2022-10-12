import PropTypes from 'prop-types'

/*const modalLayerNode = document.createElement('div')
modalLayerNode.id = '__modal_layer__'
modalLayerNode.style.position = 'fixed'
modalLayerNode.style.zIndex = '99999'
document.body.insertBefore(modalLayerNode, document.body.firstChild)*/


export default {
    modalLayerDOMElement: { type: PropTypes.instanceOf(Element), /*def: modalLayerNode*/ },
    children: { type: PropTypes.node },
    title: { type: PropTypes.string },
    onClose: { type: PropTypes.func },
    open: { type: PropTypes.bool }
}