import '../css/ResultTable.css';

const ResultTable = (props) => {
    return (
        <table className="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.yearData.year}</td>
                    <td>{props.yearData.savingsEndOfYear}</td>
                    <td>{props.yearData.yearlyInterest}</td>
                    <td>{props.yearData.year}</td>
                    <td>{props.yearData.yearlyContribution}</td>
                </tr>
            </tbody>
        </table>
    )
};

export default ResultTable;