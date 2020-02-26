var tanggal = 88
var bulan = 11
var tahun = 2201

if (tanggal>=1 && tanggal<=31){
    if  (tahun >= 1900 && tahun <= 2200){
        switch(bulan){
            case 1 : console.log(`${tanggal} Januari ${tahun}`)
            break
            case 2 : console.log(`${tanggal} Februari ${tahun}`)
            break
            case 3 : console.log(`${tanggal} Maret ${tahun}`)
            break
            case 4 : console.log(`${tanggal} April ${tahun}`)
            break
            case 5 : console.log(`${tanggal} Mei ${tahun}`)
            break
            case 6 : console.log(`${tanggal} Juni ${tahun}`)
            break
            case 7 : console.log(`${tanggal} Juli ${tahun}`)
            break
            case 8 : console.log(`${tanggal} Agustus ${tahun}`)
            break
            case 9 : console.log(`${tanggal} September ${tahun}`)
            break
            case 10 : console.log(`${tanggal} Oktober ${tahun}`)
            break
            case 11 : console.log(`${tanggal} November ${tahun}`)
            break
            case 12 : console.log(`${tanggal} Desember ${tahun}`)
            break
            default : console.log("Bulan melewati batas")
            break
        }
    }
    else {
        console.log("Tahun Melewati Batas")
    }
} 
else {
    console.log("Tanggal melewati batas")
}


// console.log(`${tanggal} ${bulan} ${tahun}`)