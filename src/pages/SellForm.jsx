import { useState } from "react";
import "./form.css";

const SellForm = () => {

  const [username, setUsername] = useState("");
  const [productName,  setProductName] = useState("");
  const [productQty,  setProductQty] = useState(1);


  let sellTicketId = "Lấy từ db + 1 hoặc generate";
  const Date = "tạo từ components";


  return (
    <>
      <h1>Hóa đơn bán hàng</h1>

      <div className="form-semiheader">
        <h4>Số hóa đơn: {sellTicketId}</h4>
        <h4>Ngày lập: {Date}</h4>
      </div>

      <label for="customer">Tên khách hàng: 
        <input type="text" name="customer" id="customer" onChange={(event) => setUsername(event.target.value)} value={username} />
      </label>

      <section className="product-selector">
        <label for="product-name"> Chọn sản phẩm
          <input type="text" list="product-name-dropdown" name="product-name" onChange={(event) => setProductName(event.target.value)} value={productName} />
          <select id="product-name-dropdown" onChange={(event) => setProductName(event.target.value)} value={productName}>
            <option value="something1">
              something1
            </option>
            <option value="something2">
              something2
            </option>
            <option value="something3">
              something3
            </option>
            <option value="something4">
              something4
            </option>
          </select>
        </label>

        <label for="product-qty">Số lượng: 
          <input type="number" name="product-qty" min="1" value={productQty} onChange={(event) => {setProductQty(event.target.value)}} />
        </label>
      </section>

    </>
  )
}

export default SellForm;