<!--  Tabel Users -->

GET: /users

data: [
    {
    "id": "2",
    "nama": "David Suka Laksana",
    "deskripsi": "Mahasiswa Sistem Informasi UAD",
    "instagram_url": "https://www.instagram.com/davidskl78/",
    "github_url": "https://github.com/DavidSKL78",
    "twitter_url": "https://mobile.twitter.com/Betok78",
    "fecebook_url": "",
    "avatar_url": "https://daisuna.my.id/img/profil.jpg"
}

]


GET: /users/[2]

data:{
    "id": "2",
    "nama": "David Suka Laksana",
    "deskripsi": "Mahasiswa Sistem Informasi UAD",
    "instagram_url": "https://www.instagram.com/davidskl78/",
    "github_url": "https://github.com/DavidSKL78",
    "twitter_url": "https://mobile.twitter.com/Betok78",
    "fecebook_url": "",
    "avatar_url": "https://daisuna.my.id/img/profil.jpg"
}


POST: /users

data:{
    "nama": "David Suka Laksana",
    "deskripsi": "Mahasiswa Sistem Informasi UAD",
    "instagram_url": "https://www.instagram.com/davidskl78/",
    "github_url": "https://github.com/DavidSKL78",
    "twitter_url": "https://mobile.twitter.com/Betok78",
    "fecebook_url": "https://www.facebook.com/profile.php?id=100012042752958",
    "avatar_url": "https://daisuna.my.id/img/profil.jpg"
}

PUT: /users/[3]

data:{
     "nama": "Jindan ",
    "deskripsi": "Mahasiswa Sistem Informasi UAD",
    "instagram_url": "https://www.instagram.com/davidskl78/",
    "github_url": "https://github.com/DavidSKL78",
    "twitter_url": "https://mobile.twitter.com/Betok78",
    "fecebook_url": "https://www.facebook.com/profile.php?id=100012042752958",
    "avatar_url": "https://daisuna.my.id/img/profil.jpg"
}



<!--  Tabel Portofolio -->

GET: /portofolio

data:[
{
    id": "1",
"deskripsi": "Nama Saya David Suka Laksana, saya lahir dan besar di Lampung tepatnya di Desa Sukabanjar, pesawaran. Saat ini saya sedang menempuh pendidikan di universitas Ahmad Dahlah Yogyakarta",
"gambar_url": "https://daisuna.my.id/img/motoran.jpeg"
}

]

GET: /portofolio/[1]

data:{
    id": "1",
"deskripsi": "Nama Saya David Suka Laksana, saya lahir dan besar di Lampung tepatnya di Desa Sukabanjar, pesawaran. Saat ini saya sedang menempuh pendidikan di universitas Ahmad Dahlah Yogyakarta",
"gambar_url": "https://daisuna.my.id/img/motoran.jpeg"
}


POST: /portofolio

data:{
    "deskripsi": "Nama Saya David Suka Laksana, saya lahir dan besar di Lampung tepatnya di Desa Sukabanjar, pesawaran. Saat ini saya sedang menempuh pendidikan di universitas Ahmad Dahlah Yogyakarta",
"gambar_url": "https://daisuna.my.id/img/motoran.jpeg"
}


PUT: /portofolio/[3]

data:{
    "deskripsi": "Nama Saya Daffa Alim, saya lahir dan besar di Lampung tepatnya di Desa Sukabanjar, pesawaran. Saat ini saya sedang menempuh pendidikan di universitas Ahmad Dahlah Yogyakarta",
"gambar_url": "https://daisuna.my.id/img/motoran.jpeg"
}


<!--  Tabel Article -->

GET: /article

data:[
{
"id": "1",
"thumbnail": "https://daisuna.my.id/img/1.jpg",
"title": "Keunikan Burung Elang",
"subtitle": "Burung elang adalah burung karnivora alias pemakan daging yang sangat buas."
},
{
"id": "2",
"thumbnail": "https://daisuna.my.id/img/2.jpeg",
"title": "Turnamen AIC",
"subtitle": "Arena of Valor akan mengadakan turnamen internasional dengan hadiah besar."
},
{
"id": "3",
"thumbnail": "https://daisuna.my.id/img/3.jpg",
"title": "ROG Phone",
"subtitle": "ROG mengeluarkan Hp terbaru dengan spesifikasi tinggi untuk game barat."
},
{
"id": "4",
"thumbnail": "https://daisuna.my.id/img/4.jpg",
"title": "C++",
"subtitle": "Bahasa Pemrograman C++ saat ini sangat digandrungi oleh para programer."
},
{
"id": "5",
"thumbnail": "https://images.newyorkredbulls.com/image/private/t_editorial_landscape_8_desktop_mobile/f_auto/mls-rbny-prd/g7d8fkcewsm2ahfhciqh.jpg",
"title": "Final UCL 2022",
"subtitle": "real Madrid Vs Man City akan melakukan pertandingan final UCL pada tanggal 29 Mei 2022.\r\n\r\n"
}
]


GET: /article/[3]

data:{
    id": "3",
"thumbnail": "https://daisuna.my.id/img/3.jpg",
"title": "ROG Phone",
"subtitle": "ROG mengeluarkan Hp terbaru dengan spesifikasi tinggi untuk game barat."
}
}


POST: /article

data:{
    "thumbnail": "https://daisuna.my.id/img/3.jpg",
"title": "ROG Phone",
"subtitle": "ROG mengeluarkan Hp terbaru dengan spesifikasi tinggi untuk game barat."
}


PUT: /article/[6]

data:{
   "thumbnail": "https://daisuna.my.id/img/3.jpg",
"title": "Iphone 13",
"subtitle": "Iphone mengeluarkan Hp terbaru dengan spesifikasi tinggi untuk game barat."
}
