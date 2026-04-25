// 1. Kamus Terjemahan
const terjemahan = {
    en: {
        // Navbar
        nav_home: "Home",
        nav_about: "About",
        nav_projects: "Projects",
        nav_certificates: "Certificates",
        nav_contact: "Contact",
        //Header
        status_avail: "Available",
        home_title: "Hello, I'm Alfa",
        home_subtitle: "Future Fullstack Developer",
        home_desc1: "I love turning creative ideas into functional and interactive websites.",
        home_desc2: "Transforming complex problems into elegant, efficient, and scalable web solutions.",
        home_desc3: "Passionate about clean code, continuous learning, and building applications that make an impact.",
        btn_hire: "Hire Me",
        btn_cv: "Download CV",
        follow: "Follow me",
        // About
        about_title: "ABOUT ME",
        about_title2: "Building Meaningful Digital Experiences",
        about_desc1: "I'm a creative front-end developer passionate about building modern and responsive web experiences. My journey began with a love for design and evolved into a deep curiosity for how the web works — combining logic with creativity to bring ideas to life.",
        about_desc2: "When I'm not coding, I enjoy learning new technologies, improving my projects, and exploring better ways to make the web faster and more engaging. I believe in continuous learning, attention to detail, and the power of clean, meaningful design",
        about_title3: "What Drives Me",
        about_languages: "Languages",
        about_education: "Vocational High School Telkom Purwokerto in the field of Software Engineering",
        about_projects: "Built more than 5 projects",
        // Projects
        project_title: "PROJECTS",
        project_title2: "Featured Work",
        project_p: "A showcase of my recent projects demonstrating expertise in full-stack development, modern frameworks, and creative problem-solving.",
        project1_title: "E-Commerce Website (ARTS)",
        project1_desc: "A modern online store featuring product filtering, a shopping cart, and a seamless payment system.",
        project2_title: "Portfolio Website",
        project2_desc: "A personal portfolio built to showcase my web development, design, and coding projects.",
        project3_title: "Eatscape",
        project3_desc: "A responsive web application that provides detailed nutritional information for various foods and drinks.",
        project4_title: "Library Website (Page Station)",
        project4_desc: "A digital library platform designed for users to comfortably read and access ebooks.",
        project5_title: "Booking Website (Raketin)",
        project5_desc: "A dedicated landing page and booking system designed for easily reserving badminton courts.",
        project6_title: "Education Finance Website (FundiVest)",
        project6_desc: "An interactive, pixel-art themed educational platform focused on financial literacy and investment simulation.",
        project7_title: "Choice of Major (Jalurku)",
        project7_desc: "A guidance web app built to assist students in discovering, exploring, and selecting their ideal university majors.",
        project8_title: "Wedding Invitation Website",
        project8_desc: "An elegant digital wedding invitation featuring event schedules, location details, and an online RSVP system.",
        project9_title: "Aksara Jawa Website",
        project9_desc: "An interactive educational website dedicated to learning, reading, and preserving the traditional Aksara Jawa script.",
        // Certificates
        certificates_title: "CERTIFICATES",
        certificates_title2: "My Certificates",
        certificates1_desc: "Competency certification in fundamental artificial intelligence concepts using Microsoft Azure technology.",
        certificates2_desc: "Completion of intensive training programs for developing technical skills in modern technology fields.",
        certificates3_desc: "Participation in a national-scale technology innovation competition held by Udayana University.",
        certificates4_desc: "Awarded as a semi-finalist in the Jagoan Hosting Infra Competition for web infrastructure.",
        ertificates5_desc: "Digital training certification to enhance career readiness in the creative and technology industries.",
        certificates6_desc: "National-level competition focused on software development and digital solution design.",
        certificates7_desc: "Appreciation for participation and achievement in the FitpactCup competition event.",
        // Contact
        contact_title: "CONTAC",
        contac_title2: "Get in Touch with Me",
        contac_desc: "I'm always open to discuss exciting projects and new opportunities. Let's collaborate!",
        // Footer
        footer_home: "Home",
        footer_about: "About",
        footer_projects: "Projects",
        footer_certificates: "Certificates",
        footer_contact: "Contact",
    },
    id: {
        // Navbar
        nav_home: "Beranda",
        nav_about: "Tentang",
        nav_projects: "Proyek",
        nav_certificates: "Sertifikat",
        nav_contact: "Kontak",
        
        // Header
        status_avail: "Tersedia",
        home_title: "Halo, Saya Alfa",
        home_subtitle: "Calon Fullstack Developer",
        home_desc1: "Saya suka mengubah ide kreatif menjadi website yang fungsional dan interaktif.",
        home_desc2: "Mengubah masalah kompleks menjadi solusi web yang elegan, efisien, dan terukur.",
        home_desc3: "Sangat antusias dengan penulisan kode yang rapi, terus belajar, dan membangun aplikasi yang berdampak.",
        btn_hire: "Rekrut Saya",
        btn_cv: "Unduh CV",
        follow: "Ikuti saya",
        
        // About
        about_title: "TENTANG SAYA",
        about_title2: "Membangun Pengalaman Digital yang Bermakna",
        about_desc1: "Saya adalah seorang front-end developer kreatif yang bersemangat membangun pengalaman web modern dan responsif. Perjalanan saya dimulai dari kecintaan pada desain dan berkembang menjadi rasa ingin tahu yang mendalam tentang cara kerja web — menggabungkan logika dengan kreativitas untuk mewujudkan ide.",
        about_desc2: "Saat tidak sedang ngoding, saya senang mempelajari teknologi baru, mengembangkan proyek-proyek saya, dan mengeksplorasi cara yang lebih baik untuk membuat web menjadi lebih cepat dan menarik. Saya percaya pada pembelajaran berkelanjutan, ketelitian, dan kekuatan desain yang rapi serta bermakna.",
        about_title3: "Yang Memotivasi Saya",
        about_languages: "Bahasa Pemrograman",
        about_education: "SMK Telkom Purwokerto jurusan Pengembangan Perangkat Lunak dan Gim (PPLG)",
        about_projects: "Telah membangun lebih dari 5 proyek",
        
        // Projects
        project_title: "PROYEK",
        project_title2: "Karya Unggulan",
        project_p: "Pameran dari proyek-proyek terbaru saya yang menunjukkan keahlian dalam pengembangan full-stack, framework modern, dan pemecahan masalah yang kreatif.",
        project1_title: "Website E-Commerce (ARTS)",
        project1_desc: "Toko online modern yang dilengkapi fitur penyaringan produk, keranjang belanja, dan sistem pembayaran yang mulus.",
        project2_title: "Website Portofolio",
        project2_desc: "Portofolio pribadi yang dibangun untuk memamerkan proyek pengembangan web, desain, dan koding saya.",
        project3_title: "Eatscape",
        project3_desc: "Aplikasi web responsif yang menyajikan informasi nilai gizi terperinci untuk berbagai makanan dan minuman.",
        project4_title: "Website Perpustakaan (Page Station)",
        project4_desc: "Platform perpustakaan digital yang dirancang agar pengguna dapat membaca dan mengakses ebook dengan nyaman.",
        project5_title: "Website Booking (Raketin)",
        project5_desc: "Landing page dan sistem pemesanan khusus yang dirancang untuk memudahkan penyewaan lapangan bulu tangkis.",
        project6_title: "Website Keuangan Pendidikan (FundiVest)",
        project6_desc: "Platform edukasi interaktif bertema pixel-art yang berfokus pada literasi keuangan dan simulasi investasi.",
        project7_title: "Pemilihan Jurusan (Jalurku)",
        project7_desc: "Aplikasi web panduan yang dibangun untuk membantu siswa menemukan, mengeksplorasi, dan memilih jurusan kuliah ideal mereka.",
        project8_title: "Website Undangan Pernikahan",
        project8_desc: "Undangan pernikahan digital yang elegan, menampilkan jadwal acara, detail lokasi, dan sistem RSVP online.",
        project9_title: "Website Aksara Jawa",
        project9_desc: "Website edukasi interaktif yang didedikasikan untuk belajar, membaca, dan melestarikan tulisan tradisional Aksara Jawa.",
        
        // Certificates
        certificates_title: "SERTIFIKAT",
        certificates_title2: "Sertifikat Saya",
        certificates1_desc: "Sertifikasi kompetensi dalam pemahaman dasar kecerdasan buatan.",
        certificates2_desc: "Penyelesaian program pelatihan intensif untuk pengembangan skill teknis di bidang teknologi modern.",
        certificates3_desc: "Partisipasi dalam kompetisi inovasi teknologi berskala nasional yang diselenggarakan oleh Universitas Udayana.",
        certificates4_desc: "Penghargaan sebagai semifinalis dalam ajang Jagoan Hosting Infra Competition di bidang infrastruktur web.",
        certificates5_desc: "Sertifikasi pelatihan digital untuk meningkatkan kesiapan kerja di industri kreatif dan teknologi.",
        certificates6_desc: "Kompetisi tingkat nasional yang berfokus pada pengembangan perangkat lunak dan desain solusi digital.",
        certificates7_desc: "Apresiasi atas partisipasi dan prestasi dalam ajang kompetisi FitpactCup.",
        
        // Contact
        contact_title: "KONTAK",
        contac_title2: "Hubungi Saya",
        contac_desc: "Saya selalu terbuka untuk mendiskusikan proyek-proyek menarik dan peluang baru. Mari berkolaborasi!",
        
        // Footer
        footer_home: "Beranda",
        footer_about: "Tentang",
        footer_projects: "Proyek",
        footer_certificates: "Sertifikat",
        footer_contact: "Kontak"
    }
};

// 2. Fungsi Utama Ganti Bahasa
function gantiBahasa(bahasa) {
    // Simpan pilihan bahasa ke localStorage biar gak hilang saat refresh
    localStorage.setItem('bahasa_pilihan', bahasa);
    document.documentElement.lang = bahasa;

    // Cari semua elemen yang punya atribut data-key
    const elemenTeks = document.querySelectorAll('[data-key]');
    // Timpa teks sesuai kamus
    elemenTeks.forEach(elemen => {
        const kunci = elemen.getAttribute('data-key');
        if (terjemahan[bahasa] && terjemahan[bahasa][kunci]) {
            elemen.textContent = terjemahan[bahasa][kunci];
        }
    });
    const btnEn = document.getElementById('lang-en');
    const btnId = document.getElementById('lang-id');

    // Pastikan tombolnya ketemu di HTML
    if (btnEn && btnId) {
        // Hapus warna biru dari kedua tombol
        btnEn.classList.remove('active');
        btnId.classList.remove('active');

        // Kasih warna biru ke tombol yang lagi dipencet
        document.getElementById('lang-' + bahasa).classList.add('active');
    }
}

// 3. Jalankan saat halaman pertama kali diload
document.addEventListener("DOMContentLoaded", () => {
    // Cek apakah user sudah pernah milih bahasa sebelumnya, kalau belum default 'en'
    const bahasaSimpanan = localStorage.getItem('bahasa_pilihan') || 'en';
    
    // Terapkan bahasa
    gantiBahasa(bahasaSimpanan);
});