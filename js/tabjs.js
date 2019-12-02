function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";


}

document.getElementById("defaultOpen").click();

/*
function sleptiSheetus(){
    for(let i =0; i < sheetai.lenght;i++){
        let sheet = sheetai[i];
        sheet.style.display = 'none';
    }
}

function rodytiSheeta(event){
    let id =event.element.data.sheet;
    document.getElementById(id).style.display='block';
}

for(let i =0;i<tabai.lenght;i++){
    let tab = tabai[i];
    tab.addEventListener('click',rodytiSheeta);
}*/
