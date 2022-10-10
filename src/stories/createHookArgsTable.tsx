export function createHookArgsTable(args, header = 'Аргументы') {
    return (
`
<table>
    <thead>
        <tr><td colspan="3"><b>${header}</b></td></tr>
    </thead>
    <tbody>
    ${args.map(({name, type, description}) => `<tr>
            <td><b>${name}</b></td>
            <td><i>${type}</i></td>
            <td>${description}</td>
        </tr>
`).join('')}
    </tbody>
</table>`
    );
}