function panggilObject(){
  var adekkelas = {
    nama : 'Samjaya',
    umur : 19,
    jurusan : 'Teknik Pemesinan',
    asal : 'Magelang'
  }
  for ( var x in adekkelas){
    console.log(adekkelas[x])
  }
}
panggilObject()
