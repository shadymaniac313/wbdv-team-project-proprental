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

export const ProfileData = ({rows}) => {

    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableBody>
                    {
                        Object.keys(rows).map((row) => (
                            <TableRow key={row}>
                                <TableCell component="td" scope="row">
                                    <h6>{row}</h6>
                                </TableCell>
                                <TableCell component="td" scope="row">
                                    {rows[row]}
                                </TableCell>
                            </TableRow>
                        ))
                    }
                    {/*{rows.map((row) => (*/}
                    {/*    <TableRow key={row.id} >*/}
                    {/*        <TableCell component="th" scope="row">*/}
                    {/*            <h6>{row.col1}</h6>*/}
                    {/*        </TableCell>*/}
                    {/*        <TableCell component="th" scope="row">*/}
                    {/*            {row.col2}*/}
                    {/*        </TableCell>*/}
                    {/*    </TableRow>*/}
                    {/*))}*/}
                </TableBody>
            </Table>
        </TableContainer>
    )

}

export default ProfileData;