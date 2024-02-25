const encrypt=document.getElementById("button__Encrypt");
const decrypt=document.getElementById("button__Decrypt");
const copy=document.getElementById("button__copy");
const initialText=document.getElementById("inputtext");
const finalText=document.getElementById("finalText");
const centralImage=document.getElementById("imf1");
const infoText=document.getElementById("textInfo")
const rigthSpace=document.getElementById("rigth");

var remplace=(newvalue)=>{
    finalText.innerHTML=newvalue;
    finalText.classList.add("ajustar");
    rigthSpace.classList.add("ajuste");
    initialText.value="";
    initialText.style.height="auto";
    initialText.placehollder ="Insert your text here:";
    centralImage.classList.add("ocultar");
    infoText.classList.add("ocultar");
    copy.classList.remove("bn_hide");
}

var reset=()=>{
    initialText.value="";
    initialText.style.height="auto";
    finalText.innerHTML="";
    rigthSpace.classList.remove("ajuste");
    finalText.classList.remove("ajustar");
    centralImage.classList.remove("ocultar");
    finalText.placehollder="No message found";
    infoText.classList.remove("ocultar");
    initialText.focus();

}

let change=[
    ["e", "enter"],
	["o", "ober"],
	["i", "imes"],
	["a", "ai"],
	["u", "ufat"]
];

encrypt.addEventListener('click',()=>{
    let text = initialText.value.toLowerCase();
    if (text != ""){
        function cipher(newtext){
            for(let i = 0; i< change.length; i++){
                if (newtext.includes(change[i][0])){
                    newtext=newtext.replaceAll(change[i][0], change[i][1]);
                };
            };
            return newtext;
        };
        remplace(cipher(text));
    }else{
        alert("Enter the text you want to encrypt or decryp");
        reset();
    };
});

decrypt.addEventListener('click', () => {
    let text = initialText.value.toLowerCase();
    if(text!= ""){
        function  decipher(newtext){
            for (let i = 0; i<change.length; i++){
                if(newtext.includes(change[i][0])){
                    newtext=newtext.replaceAll(change[i][1],change[i][0]);
                };
            };
            return newtext;
        };
        remplace(decipher(text));
    }else{
        alert("Enter the text you want to encrypt or decryp");
    reset();
    };
});

copy.addEventListener("click", () => {
    let text = finalText;
    text.select();
    document.execCommand('copy');
    alert("copied text");
    reset();
});
/*
initialText.addEventListener("change", e=>{
    initialText.style.height="auto";
    let scHeight= e.target.scrolHeight;
    initialText.style.height=`${scHeight}px`;
});
initialText.addEventListener("keyup", e=>{
    initialText.style.height="auto";
    let scHeight= e.target.scrolHeight;
    initialText.style.height=`${scHeight}px`;
});
*/

