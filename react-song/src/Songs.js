import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Music from "./songData_valid.json";


function Songs(){    

const [song,setdata] = useState(Music)
const [order,setorder] = useState("Ascending")
const [search_id,setsearch_id] = useState("")

//This method will sort the string based column based on the list selected, in an Ascending and Descending toggle order.

const sorting =(table_col) => {
    if(order === "Ascending") {
        const sorted = [...song].sort((a,b) =>
        a[table_col].toLowerCase() > b[table_col].toLowerCase() ? 1: -1
        );
        setdata(sorted);
        setorder("Descending");
    }
    if(order === "Descending") {
        const sorted = [...song].sort((a,b) =>
        a[table_col].toLowerCase() < b[table_col].toLowerCase() ? 1: -1
        );
        setdata(sorted);
        setorder("Ascending");
    }
}

//This method will sort the number based column based on the list selected, in an Ascending and Descending toggle order.

const sortingnum =(table_col) => {
    if(order === "Ascending") {
        const sorted = [...song].sort((a,b) =>
        a[table_col]> b[table_col] ? 1: -1
        );
        setdata(sorted);
        setorder("Descending");
    }
    if(order === "Descending") {
        const sorted = [...song].sort((a,b) =>
        a[table_col]< b[table_col]? 1: -1
        );
        setdata(sorted);
        setorder("Ascending");
    }
}


return (
    <div className="container">
        <h2>Displaying all the Valid Dated Songs from songData.json file </h2>
        <h2>Clicking on the Column name would sort the list based on that column</h2>
         <input type= 'text' placeholder="Search Song or Artist" className='form-control' style={{marginTop:30,marginBottom:20,width:"20%"}}
        onChange = {(e) => {
            setsearch_id(e.target.value);
        }}   
        /> 

        
        <table className="table table-striped table-bordered table-hover">
        <thead>
        <tr>
            <th onClick={ ()=>sorting("song")}>Song</th>
            <th onClick={ ()=>sorting("artist")}>Artist</th>
            <th>SongReleaseDate</th>
            <th onClick={ ()=>sortingnum("playCount")}>PlayCount</th>
            <th onClick={ ()=>sortingnum("metricA")}>MetricA</th>
            <th onClick={ ()=>sortingnum("metricB")}>MetricB</th>
            <th onClick={ ()=>sortingnum("metricC")}>MetricC</th>
            <th onClick={ ()=>sortingnum("metricD")}>MetricD</th>
            <th onClick={ ()=>sortingnum("metricE")}>MetricE</th>
            <th onClick={ ()=>sortingnum("metricF")}>MetricF</th>
            <th onClick={ ()=>sortingnum("metricG")}>MetricG</th>
            <th onClick={ ()=>sortingnum("metricH")}>MetricH</th>
            <th onClick={ ()=>sortingnum("metricI")}>MetricI</th>
            <th onClick={ ()=>sortingnum("metricJ")}>MetricJ</th>
            <th onClick={ ()=>sortingnum("metricK")}>MetricK</th>
            <th onClick={ ()=>sortingnum("metricL")}>MetricL</th>
            <th onClick={ ()=>sortingnum("metricM")}>MetricM</th>
            <th onClick={ ()=>sortingnum("metricN")}>MetricN</th>
            <th onClick={ ()=>sortingnum("metricO")}>MetricO</th>
            <th onClick={ ()=>sortingnum("metricP")}>MetricP</th>
        </tr>
        </thead>
        <tbody>
        {   
            song.filter(value =>{
                if(value.song.toLowerCase().includes(search_id.toLowerCase()) || value.artist.toLowerCase().includes(search_id.toLowerCase())){
                    return value;
                }

            }).map((idx) =>
            <tr>
                <td width = "100%">{idx.song}</td>
                <td>{idx.artist}</td>
                <td>{idx.songReleaseDate}</td>
                <td>{idx.playCount}</td>
                <td>{idx.metricA}</td>
                <td>{idx.metricB}</td>
                <td>{idx.metricC}</td>
                <td>{idx.metricD}</td>
                <td>{idx.metricE}</td>
                <td>{idx.metricF}</td>
                <td>{idx.metricG}</td>
                <td>{idx.metricH}</td>
                <td>{idx.metricI}</td>
                <td>{idx.metricJ}</td>
                <td>{idx.metricK}</td>
                <td>{idx.metricL}</td>
                <td>{idx.metricM}</td>
                <td>{idx.metricN}</td>
                <td>{idx.metricO}</td>
                <td>{idx.metricP}</td>

            </tr>    
            )
        }
        </tbody>
    </table>
    
</div>
)
}

export default Songs;
