function ListSiswa(props) {
    const siswa = props.judul.map((item,i) => 
        <li key={i}>{item}</li>
        )

    return (
        <div className="App">
            {/* <h1>{props.judul[0]}</h1> */}

            <ul>
                {siswa}
            </ul>
        </div>
    );
}

export default ListSiswa;