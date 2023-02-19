import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {
  useEffect(() => {
    api.get('transactions')
    .then(response => response.data) 
  }, [])
  


  return (
    <Container>
      <h1>Transactions</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>WebSite Development</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Development</td>
            <td>19/02/23</td>
          </tr>
          <tr>
            <td>Rent</td>
            <td className="withdraw">- R$ 1.000,00</td>
            <td>House</td>
            <td>15/02/23</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
