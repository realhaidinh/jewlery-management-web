import { useState, useMemo } from 'react';
import { SearchContainer, TableContainer } from '../../components/Container/';
import formData from '../formData';
import ProductDetailModal from '../../components/Modal/ProductDetailModal';

const initialSearchInput = '';

const SellSearch = ({ show }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const deleteSearchInput = () => {
    setSearchInput(initialSearchInput);
  };

  const [SearchInput, setSearchInput] = useState(initialSearchInput);

  const columns = [
    {
      field: 'numOrder',
      headerClassName: 'table-header',
      headerName: '#',
      headerAlign: 'center',
      align: 'center',
      width: 50,
    },
    { field: 'formID', headerClassName: 'table-header', headerName: 'Mã phiếu', width: 100 },
    { field: 'customerName', headerClassName: 'table-header', headerName: 'Khách hàng', width: 350 },
    {
      field: 'totalPaid',
      headerClassName: 'table-header',
      headerName: 'Tổng thanh toán',
      headerAlign: 'center',
      align: 'center',
      width: 170,
    },
    {
      field: 'formDate',
      headerClassName: 'table-header',
      headerName: 'Ngày thanh toán',
      headerAlign: 'center',
      align: 'center',
      width: 170,
    },
    {
      field: 'actions',
      type: 'actions',
      headerClassName: 'table-header',
      align: 'center',
      width: 100,
      getActions: (param) => [
        <ProductDetailModal open={open} onButtonClick={handleClickOpen} onButtonClose={handleClose} />,
      ],
    },
  ];

  const rows = useMemo(() => {
    return formData.map((form, index) => {
      return {
        id: index,
        numOrder: index + 1,
        formID: form.formID,
        customerName: form.customerName,
        totalPaid: form.totalPaid,
        formDate: form.dateCreated,
      };
    });
  }, [formData]);

  return (
    <SearchContainer
      show={show}
      title="Tra cứu phiếu bán"
      value={SearchInput}
      onChange={handleSearchInput}
      onClick={deleteSearchInput}
    >
      {show ? <TableContainer columns={columns} rows={rows} SearchInput={SearchInput} /> : 'Loading...'}
    </SearchContainer>
  );
};

export default SellSearch;
