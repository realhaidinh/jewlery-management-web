import { useState } from "react";


const ServiceForm = () => {

  const [username, setUsername] = useState("");

  return (
    <section>
      <div>
        <h1>Lập phiếu dịch vụ</h1>
        <h1>Tra cứu phiếu dịch vụ</h1>
      </div>

      <label>Tên khách hàng: 
        <input type="text" name="customer" onChange={(event) => setUsername(event.target.value)} />
      </label>

    </section>
  )
}

export default ServiceForm;