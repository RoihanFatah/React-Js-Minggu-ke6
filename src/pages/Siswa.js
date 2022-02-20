import ListSiswa from './ListSiswa';

function Siswa() {
    const judul = ['Roihan', 'Fance', 'Deni'];

    return (
        <div className="App">
            <ListSiswa judul={judul}/>
        </div>
    );
}

export default Siswa;