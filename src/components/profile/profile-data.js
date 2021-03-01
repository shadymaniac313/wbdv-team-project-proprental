import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export const ProfileData = () => {

    const classes = useStyles();

    const rows = [
        {id: 1, col1: 'Email', col2: 'adalovelace@gmail.com'},
        {id: 2, col1: 'Password', col2: '****'},
        {id: 3, col1: 'First Name', col2: 'Ada'},
        {id: 4, col1: 'Last Name', col2: 'Lovelace'},
        {id: 5, col1: 'Phone', col2: '+15456362198'}
    ];

    return (
    <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
            <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.id} >
                        <TableCell component="th" scope="row">
                            {row.col1}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {row.col2}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
    )

}

export default ProfileData;