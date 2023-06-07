import React, { useState, useMemo } from 'react';
import AppHeader from '../../components/AppHeader';
import { SearchContainer, TableContainer } from '../../components/Container';
import SupplierUpdateModal from '../../components/Modal/SupplierUpdateModal';
import SupplierData from '../supplierData'
import { ControlButton } from '../../components/Controls';

const Supplier = () => {

  const [searchInput, setSearchInput] = useState("");
  const [rowID, setRowID] = useState(0)
  const [open, setOpen] = useState(false)

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
      { field: 'id', headerName: 'Mã nhà cung cấp', width: 100, disableColumnMenu: true },
      { field: 'name', headerName: 'Tên nhà cung cấp', width: 200, disableColumnMenu: true },
      {
        field: 'phone',
        headerName: 'Số điện thoại',
        headerAlign: 'center',
        align: 'center',
        width: 200,
        disableColumnMenu: true,
      },
      {
        field: 'address',
        headerName: 'Địa chỉ',
        headerAlign: 'center',
        align: 'center',
        width: 300,
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
    return SupplierData.map((supplier, index) => {
      return {
        key: index,
        no: index + 1,
        id: supplier.id,
        name: supplier.name,
        phone: supplier.phone,
        address: supplier.address,
      };
    });
  }, [SupplierData]);

  return (
    <>
      <AppHeader>NHÀ CUNG CẤP</AppHeader>
      <SearchContainer
      show={true}
      title="Danh mục nhà cung cấp"
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      onClick={(e) => setSearchInput("")}
    >
      <SupplierUpdateModal open={open} onButtonClose={handleClose} title="Chi tiết nhà cung cấp" data={SupplierData[rowID]} />
      {!isLoading && !error ? <TableContainer columns={columns} rows={rows} SearchInput={searchInput} /> : 'Loading...'}
    </SearchContainer>
    </>
  );
};

export default Supplier;
