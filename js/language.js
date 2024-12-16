const translation = {
    en: {
        khwae : "Khwae Om",
        homee : "Home",
        khwaeomm : "Khwae Om",
        khwaeommm : "Khwae Om",
        mapp : "Map",
        mappp : "Street View & Map",
        templee : "Temple",
        templeee : "Temple",
        aboutt : "About",
        abouttt : "About",
        aboutadvisor : "About Project Advisor",
        advisor : "Assoc.Prof.Dr.Sumitra Nuanmeesri",
        aboutme : "About Me",
        pars : "Suan Sunandha Rajabhat University",
        parss : "Faculty of Science and Technology",
        parsss : "Deparyment Information Technology",
        text : "Welcome To Khwae Om",
        title : "Khwae Om",
        par : "Khlong Khwae Om, also known as Mae Nam Khwae Om, is a canal that branches off from the right side of the Mae Klong River at Ban Salao, Khung Krathin Subdistrict, Mueang Ratchaburi District, Ratchaburi Province. It flows as a natural boundary between Mueang Ratchaburi District and Wat Phleng District in Ratchaburi Province, and Bang Khonthi District and Amphawa District in Samut Songkhram Province. The canal eventually rejoins the right side of the Mae Klong River at the boundary between Bang Kung Subdistrict, Bang Khonthi District, and Khwae Om Subdistrict, Amphawa District. The canal is approximately 18 kilometers long.",
        bang : "Bang Sakae",
        mueang : "Mueang Mai",
        wat1 : "Wat InTha Ram",
        wat2 : "Wat LaMut",
        wat3 : "Wat Kaew Charoen",
        wat4 : "Wat Bang Wan Thong",
        wat5 : "Wat Bang Sa Kae",
        wat6 : "Wat Mueang Mai",
        wat7 : "Wat Sadet",
        wat8 : "Wat RatBurana",
        wat9 : "Wat Bang Ko ThepSak",
        btn1 : "Learn More",
        btn2 : "Learn More",
        btn3 : "Learn More",
        btn4 : "Learn More",
        btn5 : "Learn More",
        btn6 : "Learn More",
        btn7 : "Learn More",
        btn8 : "Learn More",
        btn9 : "Learn More",
    },

    th: {
        khwae : "คลองแควอ้อม",
        homee : "หน้าหลัก",
        khwaeomm : "คลองแควอ้อม",
        khwaeommm: "คลองแควอ้อม",
        mapp : "แผนที่",
        mappp : "สตรีตวิว และ แผนที่",
        templee : "วัด",
        templeee : "วัด",
        aboutt : "เกี่ยวกับ",
        abouttt : "เกี่ยวกับ",
        aboutadvisor : "เกี่ยวกับที่ปรึกษาโปรเจกต์",
        advisor : "รองศาสตร์จารย์ ดร.สุมิตรา นวลมีศรี",
        aboutme : "เกี่ยวกับพวกเรา",
        pars : "มหาวิทยาลัยราชภัฏสวนสุนันทา",
        parss : "คณะวิทยาศาสตร์และเทคโนโลยี",
        parsss : "สาขาเทคโนโลยีสารสนเทศ",
        text : "ยินดีต้อนรับสู่คลองแควอ้อม",
        title : "คลองแควอ้อม",
        par : "คลองแควอ้อม หรือที่เรียกกันว่า แม่น้ำแควอ้อม เป็นคลองที่แยกออกจากฝั่งขวาของแม่น้ำแม่กลองที่บ้านเสลา ตำบลคุ้งกระถิน อำเภอเมืองราชบุรี จังหวัดราชบุรี ไหลเป็นเขตแดนตามธรรมชาติระหว่างอำเภอเมืองราชบุรีกับอำเภอวัดเพลง จังหวัดราชบุรี และอำเภอบางคนทีและอำเภออัมพวา จังหวัดสมุทรสงคราม ในที่สุดคลองก็จะไหลกลับมาบรรจบกันทางด้านขวาของแม่น้ำแม่กลองบริเวณรอยต่อระหว่างตำบลบางกุ้ง อำเภอบางคนที และตำบลแควอ้อม อำเภออัมพวา คลองมีความยาวประมาณ 18 กิโลเมตร",
        bang : "บางสะแก",
        mueang : "เหมืองใหม่",
        wat1 : "วัดอินทาราม",
        wat2 : "วัดละมุด",
        wat3 : "วัดแก้วเจริญ",
        wat4 : "วัดบางวันทอง",
        wat5 : "วัดบางสะแก",
        wat6 : "วัดเหมืองใหม่",
        wat7 : "วัดเสด็จ ",
        wat8 : "วัดราษฎร์บูรณะ",
        wat9 : "วัดบางเกาะเทพศักดิ์",
        btn1 : "เรียนรู้เพิ่มเติม",
        btn2 : "เรียนรู้เพิ่มเติม",
        btn3 : "เรียนรู้เพิ่มเติม",
        btn4 : "เรียนรู้เพิ่มเติม",
        btn5 : "เรียนรู้เพิ่มเติม",
        btn6 : "เรียนรู้เพิ่มเติม",
        btn7 : "เรียนรู้เพิ่มเติม",
        btn8 : "เรียนรู้เพิ่มเติม",
        btn9 : "เรียนรู้เพิ่มเติม",
    }
}

const languageSelectop = document.querySelector("select")
let khwae = document.getElementById("khwae")
let homee = document.getElementById("homee")
let khwaeomm = document.getElementById("khwaeomm")
let khwaeommm = document.getElementById("khwaeommm")
let mapp = document.getElementById("mapp")
let mappp = document.getElementById("mappp")
let templee = document.getElementById("templee")
let templeee = document.getElementById("templeee")
let aboutt = document.getElementById("aboutt")
let abouttt = document.getElementById("abouttt")
let aboutadvisor = document.getElementById("aboutadvisor")
let advisor = document.getElementById("advisor")
let aboutme = document.getElementById("aboutme")
let pars = document.getElementById("pars")
let parss = document.getElementById("parss")
let parsss = document.getElementById("parsss")
let text = document.getElementById("text")
let title = document.getElementById("title")
let par = document.getElementById("par")
let bang = document.getElementById("bang")
let mueang = document.getElementById("mueang")
let wat1 = document.getElementById("wat1")
let wat2 = document.getElementById("wat2")
let wat3 = document.getElementById("wat3")
let wat4 = document.getElementById("wat4")
let wat5 = document.getElementById("wat5")
let wat6 = document.getElementById("wat6")
let wat7 = document.getElementById("wat7")
let wat8 = document.getElementById("wat8")
let wat9 = document.getElementById("wat9")
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")
let btn6 = document.getElementById("btn6")
let btn7 = document.getElementById("btn7")
let btn8 = document.getElementById("btn8")
let btn9 = document.getElementById("btn9")


languageSelectop.addEventListener("change", (event) => {
    setLanguage(event.target.value)
})

const setLanguage = (language) => {
    if(language == "th"){
        khwae.innerText = translation.th.khwae;
        homee.innerText = translation.th.homee;
        khwaeomm.innerText = translation.th.khwaeomm;
        khwaeommm.innerText = translation.th.khwaeommm;
        mapp.innerText = translation.th.mapp;
        mappp.innerText = translation.th.mappp;
        templee.innerText = translation.th.templee;
        templeee.innerText = translation.th.templeee;
        aboutt.innerText = translation.th.aboutt;
        abouttt.innerText = translation.th.abouttt;
        aboutadvisor.innerText = translation.th.aboutadvisor;
        advisor.innerText = translation.th.advisor;
        aboutme.innerText = translation.th.aboutme;
        pars.innerText = translation.th.pars;
        parss.innerText = translation.th.parss;
        parsss.innerText = translation.th.parsss;
        text.innerText = translation.th.text;
        title.innerText = translation.th.title;
        par.innerText = translation.th.par;
        bang.innerText = translation.th.bang;
        mueang.innerText = translation.th.mueang;
        wat1.innerText = translation.th.wat1;
        wat2.innerText = translation.th.wat2;
        wat3.innerText = translation.th.wat3;
        wat4.innerText = translation.th.wat4;
        wat5.innerText = translation.th.wat5;
        wat6.innerText = translation.th.wat6;
        wat7.innerText = translation.th.wat7;
        wat8.innerText = translation.th.wat8;
        wat9.innerText = translation.th.wat9;
        btn1.innerText = translation.th.btn1;
        btn2.innerText = translation.th.btn2;
        btn3.innerText = translation.th.btn3;
        btn4.innerText = translation.th.btn4;
        btn5.innerText = translation.th.btn5;
        btn6.innerText = translation.th.btn6;
        btn7.innerText = translation.th.btn7;
        btn8.innerText = translation.th.btn8;
        btn9.innerText = translation.th.btn9;


    }else if(language == "en"){
        khwae.innerText = translation.en.khwae;
        homee.innerText = translation.en.homee;
        khwaeomm.innerText = translation.en.khwaeomm;
        khwaeommm.innerText = translation.en.khwaeommm;
        mapp.innerText = translation.en.mapp;
        mappp.innerText = translation.en.mappp;
        templee.innerText = translation.en.templee;
        templeee.innerText = translation.en.templeee;
        aboutt.innerText = translation.en.aboutt;
        abouttt.innerText = translation.en.abouttt;
        aboutadvisor.innerText = translation.en.aboutadvisor;
        advisor.innerText = translation.en.advisor;
        aboutme.innerText = translation.en.aboutme;
        pars.innerText = translation.en.pars;
        parss.innerText = translation.en.parss;
        parsss.innerText = translation.en.parsss;
        text.innerText = translation.en.text;
        title.innerText = translation.en.title;
        par.innerText = translation.en.par;
        bang.innerText = translation.en.bang;
        mueang.innerText = translation.en.mueang;
        wat1.innerText = translation.en.wat1;
        wat2.innerText = translation.en.wat2;
        wat3.innerText = translation.en.wat3;
        wat4.innerText = translation.en.wat4;
        wat5.innerText = translation.en.wat5;
        wat6.innerText = translation.en.wat6;
        wat7.innerText = translation.en.wat7;
        wat8.innerText = translation.en.wat8;
        wat9.innerText = translation.en.wat9;
        btn1.innerText = translation.en.btn1;
        btn2.innerText = translation.en.btn2;
        btn3.innerText = translation.en.btn3;
        btn4.innerText = translation.en.btn4;
        btn5.innerText = translation.en.btn5;
        btn6.innerText = translation.en.btn6;
        btn7.innerText = translation.en.btn7;
        btn8.innerText = translation.en.btn8;
        btn9.innerText = translation.en.btn9;

    }
}