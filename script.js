window.onload = function(){

    const ageBox = document.getElementById("ageBox");
    const photo = document.getElementById("photo");
    const loveMsg = document.getElementById("loveMessage");
    const btn = document.getElementById("surpriseBtn");

    /* Create 27 candles */
    const candleGroup = document.getElementById("candles");
    for(let i=0;i<27;i++){
        const x = 90 + i*7;
        candleGroup.innerHTML += `<rect x="${x}" y="70" width="6" height="25" fill="#ff4d4d"/>
        <circle cx="${x+3}" cy="65" r="4" fill="gold">
        <animate attributeName="r" values="3;5;3" dur="0.6s" repeatCount="indefinite"/></circle>`;
    }

    /* Surprise Button Click */
    btn.addEventListener("click", function(){
        btn.disabled = true; // prevent double click
        let age = 0;
        const targetAge = 27;
        const counter = setInterval(()=>{
            age++;
            ageBox.textContent = age + " Years";
            if(age>=targetAge){
                clearInterval(counter);
                loveMsg.style.display="block";
                const photos = ["pic1.jpg","pic2.jpg","pic3.jpg"];
                let current=0;
                photo.src=photos[current];
                photo.style.opacity=1;

                setInterval(()=>{
                    current = (current+1)%photos.length;
                    photo.style.opacity=0;
                    setTimeout(()=>{
                        photo.src=photos[current];
                        photo.style.opacity=1;
                    },500);
                },3000);
            }
        },100);
    });

};
