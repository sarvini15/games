import React from "react";
import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
  } from "@mui/material";

export default function GamesTable(props) {
    const { games, isLoading, isError } = props;
    const { type, rows = [], genres = [], genre = "all", setGenre } = props;
    /* INSTRUCTION: Show "loading..." when isLoading is true */

    /* INSTRUCTION: Show "error" when isError is true */

    return (
        <>
        
        <div style={{ display: "flex", justifyContent: "space-between"}}>
           <div style={{ marginTop: "8px", marginBottom: "8px" }}>
           <formContol style= {{ width: "300px" }}>
            <InputLabel id="demo-simple-select-label">Genre</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              label="Genre"
              id="demo-simple-select"
              value={genre}
              onChange={(event) => {
                setGenre(event.target.value);
              }}
            >
              <MenuItem value="all">All Genres</MenuItem>
              {genres.map((genre) => {
                return (
                  <MenuItem key={genre} value={genre}>
                    {genre}
                  </MenuItem>
                );
              })}
            </Select>
            </formContol>
            </div>  
        </div>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genres</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell>{row.genre}</TableCell>
                <TableCell>{row.rating}</TableCell>
              </TableRow>
            ))}
          </TableBody>
            
        </table>
        </>
    );
}


