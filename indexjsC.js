//Exercise-1
let divisi = "HR"
if (divisi = "HR"){
    console.log ("Tugas saya melakukan rekrutment pegawai")
} else if (divisi == "Web developer"){
    console.log ("Tugas saya bekerja membuat coding suatu software")
} else if (divisi == "CEO"){
    console.log ("Tugas saya mengawasi seluruh karyawan bekerja")
} else if (divisi == "Cleaning sevice"){
    console.log ("Tugas saya membuat lingkungan kantor lebih nyaman")
} else {
    console.log ("Saya pengangguran!")
}

//Exercise-2
let a = 10
let b = 12
if (a <= b){
    console.log('betul')
} else if (a == b){
    console.log('gamungkin')
} else if (a => b){
    console.log('lebih gamungkin')
}

//Exercise-3
let hariHari = 1
switch (hariHari) {
    case 1: {console.log('Hari Minggu'); break;}
    case 2: {console.log('Hari Senin'); break;}
    case 3: {console.log('Hari Selasa'); break;}
    case 4: {console.log('Hari Rabu'); break;}
    case 5: {console.log('Hari Kamis'); break;}
    case 6: {console.log('Hari Jumat'); break;}
    case 7: {console.log('Hari Sabtu'); }
}

//Exercise-4
let simpleGame = 1
switch (simpleGame) {
    case 'up': 
        {console.log('Bergerak ke atas'); 
        break;}
    case 'down': 
        {console.log('Bergerak ke bawah'); 
        break;}
    case 'right': 
        {console.log('Bergerak ke kanan'); 
        break;}
    case 'left': 
        {console.log('Bergerak ke kiri'); 
        break;}
    default: {console.log('Diam di tempat')};
}