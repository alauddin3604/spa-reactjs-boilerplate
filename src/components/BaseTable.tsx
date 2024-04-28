import { Table } from 'react-bootstrap'

const BaseTable = ({data}: { data: Array<any>}) => {
    const renderTableHeader = () => {
        if (data.length === 0) return null

        const headers = Object.keys(data[0])

        return (
            <tr>
                {headers.map(header => (
                    <th key={header}>{header}</th>
                ))}
            </tr>
        )
    }

    const renderTableRows = () => {
        return data.map((row, index) => (
            <tr key={index}>
                {Object.values(row).map((value: any, index) => (
                    <td key={index}>{value}</td>
                ))}
            </tr>
        ))
    }

    return (
        <Table>
            <thead>{renderTableHeader()}</thead>
            <tbody>{renderTableRows()}</tbody>
        </Table>
    )
}

export default BaseTable