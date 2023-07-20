import { Container } from "react-bootstrap";
import Pattern from "../assets/pattern.png";
import NavTop from "../elements/NavTop";
import './HowToPlay.css';

function HowToPlay() {
    return (
        <>
            <NavTop />
            <Container className="my-5 px-4">
                <h1 className="how-title pb-3">📰&nbsp;&nbsp;Cara Main</h1>
                <ol className="how-list">
                    <li>kamu dapat main sendiri atau bersama teman, jadi kamu bisa nebak untuk diri sendiri ataupun untuk teman kalian.</li>
                    <li>kamu akan diminta untuk memilih berapa huruf yang terdapat di nama yang akan ditebak. Contohnya M-O-B-I-L yang terdiri dari 5 huruf. Untuk panjang huruf nama yang bisa ditebak oleh <strong>TebakCrush</strong> itu <i><u>minimal memasukan 3 huruf dan maksimal terdiri dari 7 huruf</u>.</i></li>
                    <li>kamu diminta untuk memilih baris yang terdapat huruf pada nama yang akan ditebak dan pastikan berurutan dari huruf awal sampai akhir.<br />
                    </li>
                    <li>sama seperti langkah ketiga kamu akan diminta kembali untuk memilih baris yang terdapat huruf pada nama yang akan ditebak.</li>
                    <li><strong>TebakCrush</strong> akan menampikan hasil tebakannya, sesuai dengan apa yang kamu pilih sebelumnya. <strong>Jadi pastikan kamu pilih yang benar</strong>.</li>
                </ol>
            </Container>
            <Container className="my-5 px-4">
                <h1 className="how-title pb-3">📃&nbsp;&nbsp;Note</h1>
                <ol className="how-list">
                    <li>Pastikan nama yang akan ditebak merupakan nama panggilan, bukan nama lengkap.</li>
                    <li>Jika kamu melakukan kesalahan atau salah tekan, kamu dapat gunakan fitur <strong>"Ulang"</strong> pada halaman tersebut.</li>
                    <li>Pastikan kamu sudah menentukan nama yang akan ditebak dari awal, karena jika kamu berubah pikiran untuk mengganti dengan nama lain di pertengahan permainan, maka hasilnya akan <strong>salah/tidak sesuai harapan</strong>.</li>
                    <li>Jika ingin bermain kembali, kamu dapat menekan tombol <strong>"Tebak Lagi"</strong> pada akhir permainan.</li>
                </ol>
            </Container>
        </>
    )
}

export default HowToPlay;