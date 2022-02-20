import Tabel from './Tabel';
import { useState } from 'react';

function Menu() {
    const titel = "Daftar Menu Restoran";
    const [menus, setMenu] = useState(
        [
            {idmenu:8, idkategori:17, menu:"Beef Burger",  gambar:"beefburger.jpg", harga:25000},
            {idmenu:9, idkategori:17, menu:"Chicken Wings",  gambar:"ayam.jpg", harga:15000},
            {idmenu:10, idkategori:16, menu:"Beef Steak",  gambar:"steak.jpg", harga:30000},
            {idmenu:11, idkategori:16, menu:"Papperoni Pizza",  gambar:"pizza.jpg", harga:25000},
            {idmenu:12, idkategori:16, menu:"Beef Taco",  gambar:"taco.jpg", harga:20000},
            {idmenu:13, idkategori:17, menu:"Spaghetti",  gambar:"spaghetti.jpg", harga:20000},
        ]
    );

    return (
        <div className="App">
            <Tabel menu={menus} titel={titel}/>
            <Tabel menu={menus.filter((data) => (data.idkategori===16))} titel="Western Foods"/>
        </div>
    );
}

export default Menu;