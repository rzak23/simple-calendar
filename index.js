var moment = require('moment');

var tgl = document.getElementById('tgl');
var blyear = document.getElementById('bl-year');
var hari = document.getElementById('hari');

tgl.innerHTML = moment().date();
hari.innerHTML = moment().locale('id').format('dddd');
var bulan = moment().locale('id').format('MMMM');
var tahun = moment().year();
blyear.innerHTML = `${bulan} ${tahun}`;