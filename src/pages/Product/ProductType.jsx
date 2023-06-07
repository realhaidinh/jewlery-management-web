import React, {useState, useMemo} from 'react'
import { SearchContainer, TableContainer } from '../../components/Container'
import productTypeData from '../productTypeData'
import { ControlButton } from '../../components/Controls'
import ProductTypeUpdateModal from '../../components/Modal/ProductTypeUpdateModel'


const ProductType = () => {

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
      { field: 'id', headerName: 'Mã loại sản phẩm', width: 100, disableColumnMenu: true },
      { field: 'name', headerName: 'Tên loại sản phẩm', width: 350, disableColumnMenu: true },
      {
        field: 'interest',
        headerName: 'Phần trăm',
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
        field: 'unit',
        headerName: 'Đơn vị',
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
    return productTypeData.map((type, index) => {
      return {
        key: index,
        no: index + 1,
        id: type.id,
        name: type.name,
        interest: `${type.interest} %`,
        unit: type.unit
      };
    });
  }, [productTypeData]);

  return (
    <SearchContainer
      show={true}
      title="Danh mục loại sản phẩm"
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      onClick={(e) => setSearchInput("")}
    >
      <ProductTypeUpdateModal open={open} onButtonClose={handleClose} title="Chi tiết loại sản phẩm" data={productTypeData[rowID]} />
      {!isLoading && !error ? <TableContainer columns={columns} rows={rows} SearchInput={searchInput} /> : 'Loading...'}
    </SearchContainer>
  )
}

export default ProductType