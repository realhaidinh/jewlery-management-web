import { useMemo } from 'react';
import { Typography, Box } from '@mui/material';
import { ModalButton, ControlButton, SearchBox } from '../Controls';
import { TableContainer } from '../Container';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import productData from '../../pages/productData';

export default function ProductSelectModal({
  AddItem,
  onButtonClick,
  onButtonClose,
  open,
  SearchInput = '',
  handleSearchInput,
  deleteSearchInput,
}) {
  const modalTitle = (
    <Box width="100%" display="flex" alignItems="center" mt="8px">
      <Box width="60%">
        <Typography variant="h4" component="h4">
          <b>Thêm sản phẩm</b>
        </Typography>
      </Box>
      <SearchBox value={SearchInput} onChange={handleSearchInput} onClick={deleteSearchInput} />
    </Box>
  );

  const columns = useMemo(
    () => [
      {
        field: 'numOrder',
        headerName: '#',
        headerAlign: 'center',
        align: 'center',
        width: 50,
        disableColumnMenu: true,
      },
      { field: 'productID', headerName: 'Mã sản phẩm', width: 100, disableColumnMenu: true },
      { field: 'productName', headerName: 'Tên sản phẩm', width: 300, disableColumnMenu: true },
      { field: 'productType', headerName: 'Loại sản phẩm', width: 150, disableColumnMenu: true },
      {
        field: 'productPrice',
        headerName: 'Đơn giá',
        headerAlign: 'center',
        align: 'center',
        width: 150,
        sortComparator: (v1, v2) => {
          const num1 = Number(v1.replace(/\D/g, ''));
          const num2 = Number(v2.replace(/\D/g, ''));
          return num1 - num2;
        },
        disableColumnMenu: true,
      },
      {
        field: 'actions',
        type: 'actions',
        align: 'center',
        width: 100,
        getActions: (param) => [
          <ControlButton value={param.row.id} onClick={AddItem} variant="text" color="success">
            + Thêm
          </ControlButton>,
        ],
      },
    ],
    [],
  );

  const rows = useMemo(() => {
    return productData.map((product, index) => {
      return {
        id: index,
        numOrder: index + 1,
        productID: product.productID,
        productName: product.productName,
        productType: product.productType,
        productPrice: `₫${product.productPrice.toLocaleString()}`,
      };
    });
  }, [productData]);

  return (
    <ModalButton
      buttonName="Thêm"
      open={open}
      onClick={onButtonClick}
      onClose={onButtonClose}
      startIcon={<AddShoppingCartIcon />}
      title={modalTitle}
    >
      <TableContainer columns={columns} rows={rows} SearchInput={SearchInput} />
    </ModalButton>
  );
}
