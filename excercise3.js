var nama = "jono"
var peran = "penyihir"

if (nama === "" && peran === "") {
    console.log('Nama harus diisi!')
}   else if (nama !== "" && peran === "") {
        console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`)
}   else if (nama !== "" && peran === "Ksatria" || peran === "ksatria") {
        console.log(`Selamat datang di Dunia Proxytia, ` + nama)
        console.log(`Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!`)
}   else if (nama !== "" && peran === "Tabib" || peran === "tabib") {
        console.log(`Selamat datang di Dunia Proxytia, ` + nama)
        console.log(`Halo ${peran} ${nama}, kamu akan membantu temanmu yang terluka.`)
}   else if (nama !== "" && peran === "Penyihir" || peran === "penyihir") {
        console.log(`Selamat datang di Dunia Proxytia, ` + nama)
        console.log(`Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)
}   else {
        console.log("Program ini tidak dapat berjalan")
}
