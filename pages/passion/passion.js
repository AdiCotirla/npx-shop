const container = document.getElementById('container')

class Section {
    constructor(poza, paragraf, clasa) {
        this.section = poza
        this.speech = paragraf
        this.class = clasa
    }
    createSection() {
        const imgEl = document.createElement('img')
        imgEl.src = this.section
        const pEl = document.createElement('p')
        pEl.innerText = this.speech
        const newDiv = document.createElement('div')
        newDiv.classList.add(this.class)
        newDiv.appendChild(imgEl)
        newDiv.appendChild(pEl)
        return newDiv
    }
    show(parentEl)
    {
        this.nou = this.createSection()
        parentEl.append(this.nou)
    }

   

}

let speechs =[
    new Section("/assets/reghin.jpg", "One of my biggest passion is playing football . I’ve started practicing this sport since 11 years old . I moved a lot from town to town . Everything started in my hometown Reghin in 2012 where i was playing for CSS Reghin." , "normala"),
    new Section("/assets/cluj.jpg", "Then in 2018 I got transfered from CSS Reghin to LPS Cluj-Napoca . It was a rough start but after some months together we found our way through . First championship we finished in the 3th place , but the next season was more succesfull." , "invers"),
    new Section("/assets/anu2.jpg", "In 2019 the second year , we won the championship and went forward for the play-offs in the north section of romania . Here we encountered LPS Satu-Mare and after 90 rough minutes we managed to win 1-0 at Satu-Mare Stadium." , "normala"),
    new Section("/assets/buftea.jpg", "Here we won the national championshit at U17 . In the semi-finals we played against Academia Gica Hagi and we score in the first 20 minutes of the game and ended up wining 3-1 . In the big final we fought against Clinceni . It was a rought match , we were preparing for penalties because in the minute 90 it was 1-1 . But we scored in 90+1 and 90+3 and won 3-1 at Buftea." , "invers"),
    new Section("/assets/Developer.jpg", "Another passion I just discovered is programming . Due some problems with paperwork i had 1 year vacantion from college and I wanted to learn something new in the freetime . I went trought Intro-IT at scoala informala thinking about becoming a junior tester . But after some session and some lessons i found programming really interesting and a tool you can do anything you re willing from anywhere you want . All you need is a laptop and some internet to listen some music because they are doing dreamwork together . I’m now learning and trying to become an experienced front-end developer . In this domain you can learn so much from others and everyone is helping each other and that is a big plus for begining a new career in this domain .." , "it")
]

speechs.forEach(element => {
   element.show(container)
});