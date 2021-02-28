import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Toolbar from "@material-ui/core/Toolbar";
import ApartmentRoundedIcon from '@material-ui/icons/ApartmentRounded';
import AppBar from "@material-ui/core/AppBar";
import SearchAppBar from '../search-bar.component';
import FooterComponent from "../footer.component";
import AddProperty from './AddProperty';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { orange } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    homepropertycss: {
        marginTop: theme.spacing(10)
    },
    tablecontainer: {
        maxHeight: 440,
    },
}));

const columns = [
    { id: 'name', label: 'Property Name', minWidth: 170, align:'center' },
    { id: 'booked', label: 'Booked', minWidth: 100 , align:'center'},
    { id: 'propertyAvailableDate', label: 'Available Date', minWidth: 100, align:'center' },
    { id: 'propertyRate', label: 'Rate', minWidth: 100, align:'center' },
    { id: 'edit', label: 'Edit', minWidth: 100, align:'center' },
    { id: 'delete', label: 'Delete', minWidth: 100, align:'center' },
  ];
  
  function createData(name, booked, propertyAvailableDate, propertyRate) {
    return { name, booked, propertyAvailableDate, propertyRate };
  }
  
  const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
  ];
  

export default function AdminHome() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
    return (
        <div>
        <Container component="main">
        <SearchAppBar />
        <CssBaseline />
            

        <div className={classes.homepropertycss}>
            <Typography component="h1" variant="h5">
               Welcome
            </Typography>
            <Link to="/admin/AddProperty">
                <Button variant="contained" color="primary">
                    Add Property
                </Button>
            </Link>  

            {/* Table Container Starts Here */}
            <TableContainer className={classes.tablecontainer}>
                <Table stickyHeader aria-label="sticky table">

                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                        <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }} >
                            {column.label}
                        </TableCell>
                    ))}
                    </TableRow>
                </TableHead>

                <TableBody >
                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code} >
                            <TableCell component="th" scope="row"  align={'center'}>
                                {row.name}
                            </TableCell>
                            <TableCell  align={'center'}>{row.booked}</TableCell>
                            <TableCell  align={'center'}>{row.propertyAvailableDate}</TableCell>
                            <TableCell  align={'center'}>{row.propertyRate}</TableCell>
                            <TableCell  align={'center'}>
                                <Link to="/admin/EditProperty">
                                <Button
                                    variant="contained"
                                    style={{backgroundColor: 'orange'}}
                                    className={classes.button}
                                    
                                    startIcon={<EditIcon />}
                                >Edit</Button>
                                </Link>
                            </TableCell>
                            <TableCell align={'center'}>
                            <Button
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                                startIcon={<DeleteIcon />}
                            >Delete</Button>
                            </TableCell>
                        </TableRow>
                    );
                    })}
                </TableBody>

                </Table>
            </TableContainer>


            <TablePagination
                rowsPerPageOptions={[10, 25, 50]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />

        </div>
            
        </Container>
        <FooterComponent />
        </div>


      

    );
}