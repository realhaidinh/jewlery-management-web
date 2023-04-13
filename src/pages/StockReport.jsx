import { useState } from "react";


const StockReport = () => {

  const [username, setUsername] = useState("");

  return (
    <section>
      <h1>Báo cáo kho</h1>

      <label>Tên khách hàng: 
        <input type="text" name="customer" onChange={(event) => setUsername(event.target.value)} />
      </label>

    </section>
  )
}

export default StockReport;