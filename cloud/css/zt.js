function reloadcode(){
    	var verify=document.getElementById('safecode');
    	verify.setAttribute('src','https://api.wdvipa.com/sj?'+Math.random());
    	}