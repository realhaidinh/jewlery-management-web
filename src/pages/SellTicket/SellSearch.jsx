import { useState, useMemo } from 'react';
import { SearchContainer, TableContainer } from '../../components/Container/';
import formData from '../formData';
import ProductDetailModal from '../../components/Modal/ProductDetailModal';
import { ControlButton } from '../../components/Controls';

const initialSearchInput = '';

const SellSearch = ({ show }) => {
  const [open, setOpen] = useState(false);

  const [rowID, setRowID] = useState(0);

  const handleDetailButton = (rowID) => {
    setRowID(rowID);
    handleOpen();
  };

  const handleOpen = () => {
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
      { field: 'formID', headerName: 'Mã phiếu', width: 100, disableColumnMenu: true },
      { field: 'customerName', headerName: 'Khách hàng', width: 350, disableColumnMenu: true },
      {
        field: 'totalPaid',
        headerName: 'Tổng thanh toán',
        headerAlign: 'center',
        align: 'center',
        width: 170,
        disableColumnMenu: true,
      },
      {
        field: 'formDate',
        headerName: 'Ngày thanh toán',
        headerAlign: 'center',
        align: 'center',
        width: 170,
        disableColumnMenu: true,
      },
      {
        field: 'actions',
        type: 'actions',
        align: 'center',
        width: 100,
        getActions: (param) => [
          <ControlButton onClick={() => handleDetailButton(param.row.id)} color="secondary">
            Chi tiết
          </ControlButton>,
        ],
      },
    ],
    [handleDetailButton],
  );

  const rows = useMemo(() => {
    return formData.map((form, index) => {
      return {
        id: index,
        numOrder: index + 1,
        formID: form.id,
        customerName: form.user,
        totalPaid: `₫${form.totalPaid.toLocaleString()}`,
        formDate: form.date,
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
      <ProductDetailModal open={open} onButtonClose={handleClose} title="Phiếu bán hàng" detail={formData[rowID]} />
      {show ? <TableContainer columns={columns} rows={rows} SearchInput={SearchInput} /> : 'Loading...'}
    </SearchContainer>
  );
};

export default SellSearch;
