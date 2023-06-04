import { useMemo } from 'react';
import { Typography, Box } from '@mui/material';
import { ModalButton, ControlButton, SearchBox } from '../Controls';
import { TableContainer } from '../Container';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import productData from '../../pages/productData';
import servicces from '../../pages/serviceData';

export default function ProductSelectModal({
  AddItem,
  onButtonClick,
  onButtonClose,
  open,
  varient,
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

  // console.log(varient);
  const tableHeading = useMemo(
    () => [
      {
        field: 'no',
        headerName: '#',
        headerAlign: 'center',
        align: 'center',
        width: 50,
        disableColumnMenu: true,
      },
      ...(varient === 'ticket'
        ? [
            { field: 'id', headerName: 'Mã sản phẩm', width: 100, disableColumnMenu: true },
            { field: 'name', headerName: 'Tên sản phẩm', width: 300, disableColumnMenu: true },
            { field: 'type', headerName: 'Loại sản phẩm', width: 150, disableColumnMenu: true },
          ]
        : [
            { field: 'id', headerName: 'Mã loại dịch vụ', width: 200, disableColumnMenu: true },
            { field: 'name', headerName: 'Tên loại dịch vụ', width: 300, disableColumnMenu: true },
          ]),
      {
        field: 'price',
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
          <ControlButton value={param.row.key} onClick={AddItem} variant="text" color="success">
            + Thêm
          </ControlButton>,
        ],
      },
    ],
    [],
  );

  const tableBody = useMemo(() => {
    return varient === 'ticket'
      ? productData.map((row, index) => {
          return {
            key: index,
            no: index + 1,
            id: row.productID,
            name: row.productName,
            type: row.productType,
            price: `₫${row.productPrice.toLocaleString()}`,
          };
        })
      : servicces.map((row, index) => {
          return {
            key: index,
            no: index + 1,
            id: row.id,
            name: row.name,
            type: row.type,
            price: `₫${row.price.toLocaleString()}`,
          };
        });
  }, [productData, servicces]);

  return (
    <ModalButton
      buttonName="Thêm"
      open={open}
      onClick={onButtonClick}
      onClose={onButtonClose}
      startIcon={<AddShoppingCartIcon />}
      title={modalTitle}
    >
      <TableContainer columns={tableHeading} rows={tableBody} SearchInput={SearchInput} />
    </ModalButton>
  );
}
