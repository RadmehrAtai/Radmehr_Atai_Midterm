var i = 0;
var txt;
var speed = 50;
var choose = 2;

function typeWriter() {
    txt = document.getElementById("text").innerHTML;
    for (var j = 0; j < 3; j++, choose++) {
        document.getElementById("text").innerHTML.replace(txt, "");
        if (choose === 1) {
            txt = 'beautiful logo.';
        } else if (choose === 2) {
            txt = 'successful brand.';
        } else if (choose === 3) {
            txt = 'thriving business.';
        }

        if (i < txt.length) {
            txt += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    choose = 1;
}

setTimeout(typeWriter, speed);