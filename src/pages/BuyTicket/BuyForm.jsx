import { useState, React } from "react";


const BuyForm = () => {

  const [username, setUsername] = useState("");

  return (
    <section>
      <h1>Lập hóa đơn mua hàng</h1>

      <label>Tên khách hàng: 
        <input type="text" name="customer" onChange={(event) => setUsername(event.target.value)} />
      </label>

    </section>
  )
}

export default BuyForm;