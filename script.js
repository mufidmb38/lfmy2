let nama, val;
const url_string = document.URL;
const url = new URL(url_string);
let doi;

if (url.searchParams.get('in') != null) {
  doi = url.searchParams.get('in');
} else {
  doi = "Mbak ku";
}

let footer = document.getElementById("credit");
footer.href = "https://www.instagram.com /mufidmb38/";

function time() {
  var d = new Date();
  var n = d.getHours();
  console.log(n);
  if (n >= 4 && n <= 10) {
    return "Pagi"
  } else if (n >= 10 && n <= 15) {
    return "Siang"
  } else if (n >= 15 && n <= 17) {
    return "Sore"
  } else if (n >= 17 && n <= 24) {
    return "Malam"
  }
}

function shmm() {
  switch (time()) {
    case "Pagi":
      return "semoga hari mu menyenangkan >///<"
      break;
    case "Siang":
      return "ku harap kamu masih semangat untuk menjalani hari ini >///<"
      break;
    case "Malam":
      return "selamat menikmati tenangnya malam  >///<"
      break;
      case "Sore":
      return "kamu harus tetap semangat >///<"
      break;
    default:
      break;
  }
}

function selesai() {
  const teks = document.getElementById('teks');
  const btn = document.querySelector('.tombol');
  teks.innerHTML = `Semangat ${doi} tercinta terkasih dan ter-ter lainnya, aku pada mu <i
  class="fas fa-heart text-danger animate__animated animate__heartBeat animate__repeat-3"></i>`;
  btn.classList.add('d-none');
  teks.classList.remove('d-none');  
}


document.querySelector(".tombol").addEventListener('click', function () {
	Swal.fire({
	title: 'Hai!',
    html: `Selamat ${time()}, ${shmm()}`,
    timer: 2500,
    timerProgressBar: true,
    showConfirmButton: false }).then((result) => {
    	
    	Swal.fire('Aku tau kok mbak lagi sibuk banget (｡•́︿•̀｡)').then((result) => {
    
    		Swal.fire({
			title: '',
    		html: `Lagi pusing banget, lagi capek banget (╯︵╰,)`,
    		timer: 2000,
    		timerProgressBar: true,
    		showConfirmButton: false}).then((result) => {
    			
    			Swal.fire({
				title: '',
    			html: `Semangat terus ya mbak ku di sana ( ◜‿◝ )♡`,
    			timer: 2000,
    			timerProgressBar: true,
    			showConfirmButton: false}).then((result) => {
    			
    				Swal.fire('Jangan telat makan ya mbak ku! &#128545;', '', 'error').then((result) => {
    	
                    	Swal.fire( 'Jangan kurang waktu tidur juga! &#128545;', '', 'error').then((result) => {
                    	
                    		Swal.fire('Soalnya aku sedih kalau tau mbak sakit (っ˘̩╭╮˘̩)っ', '', '').then((result) => {
                    		
                    			Swal.fire('Aku juga suka sedih kalau tau mbak lagi sedih &#128532;', '', '').then((result) => {
                    				selesai()
								})
							})
						})
					})
				 })
			})
    	})
	})
});