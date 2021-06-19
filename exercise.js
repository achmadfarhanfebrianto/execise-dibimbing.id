function showBiodata() {
    let nama = document.getElementById("nama_pribadi").value;
    document.getElementById("name").innerHTML = nama;
    let ele = document.getElementsByName('jenis_kelamin');
        console.log('ele', ele);
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked)
            document.getElementById("gender").innerHTML
                    = ele[i].value;
        }
    let ttl = document.getElementById("tgl_lahir").value;
    document.getElementById("dob").innerHTML = ttl;
    let pekerjaan = document.getElementById("alamat").value;
    document.getElementById("address").innerHTML = pekerjaan;
    let alamat = document.getElementById("pekerjaan").value;
    document.getElementById("job").innerHTML = alamat;
    let hobi = document.getElementById("hobi").value;
    document.getElementById("hobby").innerHTML = hobi;
}