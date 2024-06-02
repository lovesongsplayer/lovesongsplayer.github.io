let allMusic = [
  {
    name: "The Lady In Red",
    artist: "Chris De Burgh",
    img: "./covers/cover-1.jpg",
    src: "https://archive.org/download/chris-de-burgh-lady-in-red/Chris%20DeBurgh%20%20Lady%20In%20Red.mp3"
  },
  {
    name: "Hazard",
    artist: "Richard Marx",
    img: "./covers/cover-2.jpg",
    src: "https://archive.org/download/richard-marx-hazard/Richard-Marx-Hazard.mp3"
  },
  {
    name: "Hero",
    artist: "Mariah Carey",
    img: "./covers/cover-3.jpg",
    src: "https://archive.org/download/mariah-carey-hero_202401/Mariah_Carey_Hero.mp3"
  },
  {
    name: "There’s Never a Forever Thing",
    artist: "A-ha",
    img: "./covers/cover-4.jpg",
    src: "https://archive.org/download/a-ha-theres-never-a-forever-thing/A-HA-There's-Never-A-Forever-Thing.mp3"
  },
  {
    name: "Amazing",
    artist: "Aerosmith",
    img: "./covers/cover-5.jpg",
    src: "https://archive.org/download/a-ha-theres-never-a-forever-thing/AEROSMITH-Amazing.mp3"
  },
  {
    name: "Ordinary World",
    artist: "Duran Duran",
    img: "./covers/cover-6.jpg",
    src: "https://archive.org/download/duran-duran-ordinary-world_202309/Duran-Duran_Ordinary_World.mp3"
  },
  {
    name: "Breathe",
    artist: "Faith Hill",
    img: "./covers/cover-7.jpg",
    src: "https://archive.org/download/duran-duran-ordinary-world_202309/Faith-Hill_Breathe.mp3"
  },
  {
    name: "Broken Wings",
    artist: "Mr. Mister",
    img: "./covers/cover-8.jpg",
    src: "https://archive.org/download/mr-mister-broken-wings_202309/MrMister-Broken_Wings.mp3"
  },
  {
    name: "Do You Remenber?",
    artist: "Phil Collins",
    img: "./covers/cover-9.jpg",
    src: "https://archive.org/download/do-you-remember/Do%20You%20Remember.mp3"
  },
  {
    name: "Jesus to a Child",
    artist: "George Michael",
    img: "./covers/cover-10.jpg",
    src: "https://archive.org/download/jesus-to-a-child-96/Jesus%20to%20a%20Child96.mp3"
  },
  {
    name: "Thought Id Died and Gone to Heaven",
    artist: "Love Songs player",
    img: "./covers/cover.jpg",
    src: "https://backingtrackbrasil.com/mp3download/bt/Bryan_Adams_-_Thought_Id_Died_and_Gone_to_Heaven-sv.mp3"
  },
  {
    name: "I'Li",
    artist: "Alan Jackson - Tradução (Josinaldo Moreira)",
    img: "./covers/cover-12.jpg",
    src: "https://65381g.ha.azioncdn.net/d/e/6/e/josinaldomoreira2016-alan-jackson-ill-try-traducao-voz-josinaldo-moreira-5fccc7d7.mp3"
  },
  {
    name: "Love Hurts",
    artist: "Nazareth - Tradução (Josinaldo Moreira)",
    img: "./covers/cover-13.jpg",
    src: "https://65381g.ha.azioncdn.net/b/9/0/c/josinaldomoreira2016-nazareth-love-hurts-traducao-voz-josinaldo-moreira-7cdd76ed.mp3"
  },
  {
    name: "Lady",
    artist: "Kenny Rogers",
    img: "./covers/cover-14.jpg",
    src: "https://highlifeng.com.ng/swahilisongs/wp-content/uploads/2023/06/Kenny_Rogers_-_Lady.mp3"
  },
  {
    name: "Nazareth",
    artist: "Where Are You Now",
    img: "./covers/cover-15.jpg",
    src: "https://archive.org/download/where-are-you-now-96k/Where_Are_You%20Now_96k.mp3"
  },
  {
    name: "Right Here Waiting",
    artist: "Richard Marx",
    img: "./covers/cover-2.jpg",
    src: "https://archive.org/download/right-here-waiting/Right_Here_Waiting.mp3"
  },
  {
    name: "A Love So Beautiful",
    artist: "Michael Bolton",
    img: "./covers/cover-16.jpg",
    src: "https://archive.org/download/a-love-so-beautiful_202401/A_Love_So_Beautiful.mp3"
  },
  {
    name: "I Will Always Love You",
    artist: "Whitney Houston",
    img: "./covers/cover-17.jpg",
    src: "https://archive.org/download/i-will-always-love-you/I%20Will%20Always%20Love%20You.mp3"
  },
  {
    name: "Alone",
    artist: "Heart",
    img: "./covers/cover-18.jpg",
    src: "https://archive.org/download/alone_202401/Alone.mp3"
  },
  {
    name: "Stuck On You",
    artist: "Lionel Richie",
    img: "./covers/cover-19.jpg",
    src: "https://archive.org/download/stuck-on-you_202401/Stuck%20On%20You.mp3"
  },
  {
    name: "So Beautiful",
    artist: "Chris De Burgh",
    img: "./covers/cover-20.jpg",
    src: "https://archive.org/download/so-beautiful/So_Beautiful.mp3"
  },
  {
    name: "Heaven",
    artist: "Bryan Adams",
    img: "./covers/bryan-adams.jpg",
    src: "https://archive.org/download/bryanadamspleaseforgiveme_201908/Bryan%20Adams%20-%20Heaven%20%28Official%20Music%20Video%29.mp3"
  },
  {
    name: "Truly Madly Deeply",
    artist: "Savage Garden",
    img: "./covers/savage-garden.jpg",
    src: "https://archive.org/download/Trullymadlydeedly-savageGarden/05-trullymadlydeedly-savageGarden..mp3"
  },
  {
    name: "A Matter of Feeling",
    artist: "Duran Duran",
    img: "./covers/duranduran.jpg",
    src: "https://archive.org/download/a-matter-of-feeling-1/A_Matter_of_Feeling~1.mp3"
  },
  {
    name: "She's Like The Wind",
    artist: "Patrick Swayze",
    img: "./covers/patrick-swayze.jpg",
    src: "https://archive.org/download/patrick-swayze-she-s-like-the-wind/Patrick%20Swayze%20-%20She_s%20Like%20The%20Wind.mp3"
  },
  {
    name: "You're Still The One",
    artist: "Shania Twain",
    img: "./covers/shania.jpg",
    src: "https://archive.org/download/patrick-swayze-she-s-like-the-wind/Shania%20Twain%20-%20You_re%20Still%20The%20One.mp3"
  },
  {
    name: "Coming Around Again",
    artist: "Carly Simon",
    img: "./covers/carly-simon.jpg",
    src: "https://archive.org/download/carly-simon-coming-around-again_202406/Carly-Simon%20-%20Coming_Around_Again.mp3"
  },
  {
    name: "Wish I Could Fly",
    artist: "Roxette",
    img: "./covers/roxette.jpg",
    src: "https://archive.org/download/roxette-wish-i-could-fly/Roxette-Wish_I_Could_Fly.mp3"
  },
];
