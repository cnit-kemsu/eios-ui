import { css } from '@emotion/react'

export const dynTableCss = ({ theme, borderless, flat, selectableRows, selectableCell }) => css`

    width: 100%;
    border-collapse: collapse; 

    ${flat ? '' : 'box-shadow: 0px 2px 4px rgba(0,0,0,0.4);'}

    td, th {
        ${borderless ? 'border: none' : `border: 1px solid ${theme.table.borderColor}`};        
        padding: 15px;

        ${/*!flat && !borderless ? css`
            
            &:last-of-type {
                border-right: none;
            }

            &:first-of-type {
                border-left: none;
            }      
        ` : */''}
    }

    ${/*!flat && !borderless ? 
    css`
        tr:last-of-type {
            td, th {
                border-bottom: none;
            }
        }

        tr:first-of-type {
            td, th {
                border-top: none;
            }
        }
    ` : */''}

    thead td{
        background: ${theme.table.headerColBg};
    }    

    tbody td{
        background: ${theme.table.bodyColBg};; 
    }

    ${selectableRows ? css`
        tbody tr:hover td {                               
            background: ${theme.table.hoverColor};            
        }
    ` : ''}

    ${selectableCell ? css`
        tbody td:hover {
            background: ${theme.table.hoverColor};            
        }
    ` : ''}    
`