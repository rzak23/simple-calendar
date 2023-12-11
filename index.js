var moment = require('moment');

setInterval(() => {
    only_up();
}, 1000);

var tgl = document.getElementById('tgl');
var blyear = document.getElementById('bl-year');
var hari = document.getElementById('hari');

tgl.innerHTML = moment().date();
hari.innerHTML = moment().locale('id').format('dddd');
var bulan = moment().locale('id').format('MMMM');
var tahun = moment().year();
blyear.innerHTML = `${bulan} ${tahun}`;

function only_up(){
    let jam = moment().format('HH');
    let menit = moment().format('mm');
    let detik = moment().format('ss');

    document.getElementById('time-clock').innerHTML = `${jam} : ${menit} : ${detik}`;
}