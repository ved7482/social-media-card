// Jai Shree Ram

function select(elem) {
    return document.querySelector(elem)
}


function linksHandler() {
    const links = {
        "discord": "https://discordapp.com/users/ved4782/",
        "ig": "https://instagram.com/divyanshu_nikhade",
        "linkedin": "https://www.linkedin.com/in/divyanshu-nikhade-a887b5331/",
        "github": "https://github.com/ved7482",
        "twitter": "https://x.com/div_nikhade"
    };

    ["discord", "ig", "linkedin", "github", "twitter"].forEach(function(val , idx) {
        document.querySelector(`.${val}`).addEventListener("click", function() {
            window.open(links[val], '_blank');
        });
    });
}

linksHandler()



function BGM() {

    // var bgm;
    
    // try{
    //     bgm = new Audio("https://vgmsite.com/soundtracks/minecraft/esiyjzozpe/1-08.%20Minecraft.mp3") 
    // } catch {
    //     bgm = new Audio("../assets/img/bgm.mp3")
    // }

    const bgm = new Audio("./assets/img/bgm.mp3")

    
    bgm.loop = true

    bgm.currentTime = 15
     
    let flag = true;
    
    function volumeBtn() {
        document.querySelector(".volumeBtn").addEventListener("click", function() {
            if (flag) {
                document.querySelector(".volumeBtn").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.88889 16.0001H2C1.44772 16.0001 1 15.5524 1 15.0001V9.00007C1 8.44778 1.44772 8.00007 2 8.00007H5.88889L11.1834 3.66821C11.3971 3.49335 11.7121 3.52485 11.887 3.73857C11.9601 3.8279 12 3.93977 12 4.05519V19.9449C12 20.2211 11.7761 20.4449 11.5 20.4449C11.3846 20.4449 11.2727 20.405 11.1834 20.3319L5.88889 16.0001ZM20.4142 12.0001L23.9497 15.5356L22.5355 16.9498L19 13.4143L15.4645 16.9498L14.0503 15.5356L17.5858 12.0001L14.0503 8.46454L15.4645 7.05032L19 10.5859L22.5355 7.05032L23.9497 8.46454L20.4142 12.0001Z"></path></svg>`
                flag = !flag;
                bgm.pause();
            } else {
                document.querySelector(".volumeBtn").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 16.0001H5.88889L11.1834 20.3319C11.2727 20.405 11.3846 20.4449 11.5 20.4449C11.7761 20.4449 12 20.2211 12 19.9449V4.05519C12 3.93977 11.9601 3.8279 11.887 3.73857C11.7121 3.52485 11.3971 3.49335 11.1834 3.66821L5.88889 8.00007H2C1.44772 8.00007 1 8.44778 1 9.00007V15.0001C1 15.5524 1.44772 16.0001 2 16.0001ZM23 12C23 15.292 21.5539 18.2463 19.2622 20.2622L17.8445 18.8444C19.7758 17.1937 21 14.7398 21 12C21 9.26016 19.7758 6.80629 17.8445 5.15557L19.2622 3.73779C21.5539 5.75368 23 8.70795 23 12ZM18 12C18 10.0883 17.106 8.38548 15.7133 7.28673L14.2842 8.71584C15.3213 9.43855 16 10.64 16 12C16 13.36 15.3213 14.5614 14.2842 15.2841L15.7133 16.7132C17.106 15.6145 18 13.9116 18 12Z"></path></svg>`
                flag = !flag;
                bgm.play()
            }
        })
    }
    
    volumeBtn()

    // Check if the user accepts the dialog

    document.querySelector(".yes").addEventListener("click" , function() {
        bgm.play()
        select(".overlay").classList.add("hidden")
        select(".dialog").classList.add("hidden")
    })    
    
    document.querySelector(".no").addEventListener("click" , function() {
        document.querySelector(".volumeBtn").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.88889 16.0001H2C1.44772 16.0001 1 15.5524 1 15.0001V9.00007C1 8.44778 1.44772 8.00007 2 8.00007H5.88889L11.1834 3.66821C11.3971 3.49335 11.7121 3.52485 11.887 3.73857C11.9601 3.8279 12 3.93977 12 4.05519V19.9449C12 20.2211 11.7761 20.4449 11.5 20.4449C11.3846 20.4449 11.2727 20.405 11.1834 20.3319L5.88889 16.0001ZM20.4142 12.0001L23.9497 15.5356L22.5355 16.9498L19 13.4143L15.4645 16.9498L14.0503 15.5356L17.5858 12.0001L14.0503 8.46454L15.4645 7.05032L19 10.5859L22.5355 7.05032L23.9497 8.46454L20.4142 12.0001Z"></path></svg>`
        flag = !flag
        select(".overlay").classList.add("hidden")
        select(".dialog").classList.add("hidden")
    })






}

BGM()
