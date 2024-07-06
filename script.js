function yn(){
    if(document.getElementById("yn").value === "yes"||document.getElementById("yn").value === "y"||document.getElementById("yn").value === "Yes"){
        document.getElementById("text1").style.display="inline"
        document.getElementById("yno").style.display="none"
        document.getElementById("r").style.top = "40px"
        document.getElementById("text").style.borderRight = "none"
        setTimeout(known, 8000)
    }
    if(document.getElementById("yn").value === "no"||document.getElementById("yn").value === "n"||document.getElementById("yn").value === "No"){
        document.getElementById("yno").style.display="inline-block"
        document.getElementById("text1").style.display="none"
        document.getElementById("r").style.top = "40px"
        document.getElementById("text").style.borderRight = "none"
        document.getElementById("submit").style.display="inline"
        document.getElementById("answer").style.display="inline"
    }
    
}
function known(){
    document.getElementById("submit").style.display="inline"
    document.getElementById("answer").style.display="inline"
}
function know(){
    document.getElementById("answer").style.display="inline"
    document.getElementById("know").style.display="none"
    document.getElementById("submit").style.display="inline"
}
/*first question*/
function submit(){
    document.getElementById("r").style.top="120px"
    document.getElementById("text1").style.borderRight="none";
    
    if(document.getElementById("answer").value === "physcopath"||document.getElementById("answer").value === "physcopaths"){
        document.getElementById("live").style.display="inline"
        document.getElementById("dead").style.display="none"
        setTimeout(lvl2, 4000)
    } else {
        document.getElementById("dead").style.display="inline"
        document.getElementById("live").style.display="none"
        document.getElementById("lvl2").style.display="none"
    }
    
}
function lvl2(){
    document.getElementById("lvl2").style.display="inline"
}
/*second question*/
function nextlvl(){
    document.getElementById("lvl2").style.display="none"
    document.getElementById("back").style.display="inline"
    document.getElementById("live").style.borderRight="none";
    document.getElementById("r").style.top="152px";
    setTimeout(newlvl, 9500)
    document.getElementById("lvl2").style.display="none"
}
function lvl3(){
    document.getElementById("q2").style.display="inline"                                                                
}
function newlvl(){
    document.getElementById("q2").style.display="inline"
    document.getElementById("submit1").style.display="inline"
}
function question2(){
    if(document.getElementById("q2").value === "promise"||document.getElementById("q2").value === "promises"){
        document.getElementById("dead1").style.display="none"
        document.getElementById("live1").style.display="inline"
    } else {
        document.getElementById("dead1").style.display="inline"
        document.getElementById("live1").style.display="none"
    }
    document.getElementById("r").style.top="236px"
    document.getElementById("back").style.borderRight="none"
}
