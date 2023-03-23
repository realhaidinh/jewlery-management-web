import { useEffect, useState } from "react";


const SellForm = () => {

  const [username, setUsername] = useState("");

  return (
    <section>
      <h1>Lập hóa đơn bán hàng</h1>

      <label>Tên khách hàng: 
        <input type="text" name="customer" onChange={(event) => setUsername(event.target.value)} />
      </label>

    </section>
  )
}

export default SellForm;