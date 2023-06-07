import React, {useState, useMemo} from 'react'
import { SearchContainer, TableContainer } from '../../components/Container'
import productData from '../productData'
import ProductUpdateModal from '../../components/Modal/ProductUpdateModal'
import { ControlButton } from '../../components/Controls'

const Products = () => {

  const [searchInput, setSearchInput] = useState("")
  const [open, setOpen] = useState(false)
  const [rowID, setRowID] = useState(0)


  // TODO: call api and change initials to true;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleClose = (event, reason) => {
      setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleDetailButton = (rowID) => {
    setRowID(rowID);
    handleOpen();
  };

  const columns = useMemo(
    () => [
      {
        field: 'no',
        headerName: '#',
        headerAlign: 'center',
        align: 'center',
        width: 50,
        disableColumnMenu: true,
      },
      { field: 'id', headerName: 'Mã sản phẩm', width: 100, disableColumnMenu: true },
      { field: 'name', headerName: 'Tên sản phẩm', width: 350, disableColumnMenu: true },
      {
        field: 'price',
        headerName: 'Giá',
        headerAlign: 'center',
        align: 'center',
        width: 100,
        sortComparator: (v1, v2) => {
          const num1 = Number(v1.replace(/\D/g, ''));
          const num2 = Number(v2.replace(/\D/g, ''));
          return num1 - num2;
        },
        disableColumnMenu: true,
      },
      {
        field: 'ProductTypeId',
        headerName: 'Loại sản phẩm',
        headerAlign: 'center',
        align: 'center',
        width: 150,
        disableColumnMenu: true,
      },
      {
        field: 'stock',
        headerName: 'Số lượng trong kho',
        headerAlign: 'center',
        align: 'center',
        width: 150,
        disableColumnMenu: true,
      },
      {
        field: 'actions',
        type: 'actions',
        align: 'center',
        width: 100,
        getActions: (param) => [
          <ControlButton onClick={() => handleDetailButton(param.row.key)} color="secondary" variant="text">
            <b>Chỉnh sửa</b>
          </ControlButton>,
        ],
      },
    ],
    [handleDetailButton],
  );

  const rows = useMemo(() => {
    return productData.map((product, index) => {
      return {
        key: index,
        no: index + 1,
        id: product.productID,
        name: product.productName,
        price: `₫${product.productPrice.toLocaleString()}`,
        ProductTypeId: product.productType,
        stock: product.stock
      };
    });
  }, [productData]);

  return (
    <SearchContainer
      show={true}
      title="Danh mục sản phẩm"
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      onClick={(e) => setSearchInput("")}
    >
      <ProductUpdateModal open={open} onButtonClose={handleClose} title="Chi tiết sản phẩm" data={productData[rowID]} />
      {!isLoading && !error ? <TableContainer columns={columns} rows={rows} SearchInput={searchInput} /> : 'Loading...'}
    </SearchContainer>
  )
}

export default Products