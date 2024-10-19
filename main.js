// Thay đổi nội dung búc thư ở đây
var letterContent = "Chúc Vân Anh 20/10 thật nhiều niềm vui, hạnh phúc và thành công với mọi điều mong ước. Mong rằng nụ cười của cậu luôn rạng ngời, và mỗi ngày đều là một ngày tràn đầy những điều tuyệt vời nhất.";
letterContent += "$$Ngày 20 tháng 10 nhẹ ghé qua,";
letterContent += "$Tớ gửi cậu đôi lời thật thiết tha.";
letterContent += "$Chẳng cần hoa hồng hay lời bay bổng,";
letterContent += "$Chỉ mong thấy cậu luôn nở nụ cười.";
letterContent += "$$Trong tim tớ, cậu vẫn là ánh sáng,";
letterContent += "$Ngọt ngào, dịu êm giữa những tháng ngày.";
letterContent += "$Chúc cậu mãi vui, bình yên mỗi sáng,";
letterContent += "$Để ngày trôi qua đẹp tựa trời xanh.";
letterContent += "$@#";
// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50;

// Hiệu ứng gõ chữ

function effectWrite() {
    var boxLetter = document.querySelector(".letterContent");
    letterContentSplited = letterContent.split("");

    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val=="$"?"<br>":val=="@"?"<pre id='gva'>":val=="#"?"</pre>":val;
            if(index == letterContentSplited.length - 1){
                document.getElementById("gva").innerHTML = "                 --- Gửi Vân Anh ---"
                document.getElementById("gva").classList.add("letterContent")
            }
        }, durationWrite * index);
    });
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active");
    }, 500);
});

var openBtn = document.querySelector(".openBtn");
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active");
    document.querySelector(".container").classList.add("close");
});

var cardValentine = document.querySelector(".cardValentine");

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open");
    document.getElementById("box-img").style.display = document.getElementById("box-img").style.display=="none"?"block":"none"


    if (cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500);
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = "";
        }, 1000);
    }
});
