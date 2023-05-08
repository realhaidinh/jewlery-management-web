import { useState } from 'react';
import { Button } from '@mui/material';
import { ControlButton } from '../../components/Controls';
import { SearchContainer, TableContainer } from '../../components/Container/';
import InfoIcon from '@mui/icons-material/Info';
import formData from '../formData';

const initialSearchInput = '';
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
      <ControlButton variant="text" color="secondary" endIcon={<InfoIcon />}>
        Chi tiết
      </ControlButton>,
    ],
  },
];
const rows = formData.map((form, index) => {
  return {
    id: index,
    numOrder: index + 1,
    formID: form.formID,
    customerName: form.customerName,
    totalPaid: form.totalPaid,
    formDate: form.dateCreated,
  };
});

const SellSearch = ({ show }) => {
  const [SearchInput, setSearchInput] = useState(initialSearchInput);
  // console.log(SearchInput);
  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };
  const deleteSearchInput = () => {
    setSearchInput(initialSearchInput);
  };
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
