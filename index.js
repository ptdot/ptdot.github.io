// Một số bài hát có thể bị lỗi do liên kết bị hỏng. Vui lòng thay thế liên kết khác để có thể phát
// Some songs may be faulty due to broken links. Please replace another link so that it can be played

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PlAYER_STORAGE_KEY = "F8_PLAYER";

const player = $(".player");
const cd = $(".cd");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const progress = $("#progress");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playlist = $(".playlist");

const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  config: {},
  // (1/2) Uncomment the line below to use localStorage
  // config: JSON.parse(localStorage.getItem(PlAYER_STORAGE_KEY)) || {},
  songs: [
    {
      name: "a thousand years",
      singer: "Raftaar x Fortnite",
      path: "/music/a thousand years.mp3",
      image: "/picture/a thousand years.jpg"
    },
    {
        path: 'music/abcdefu.mp3',
        name: 'abcdefu',
        image: 'picture/abcdefu.jpg',
        singer: 'GAYLE',
    },
    {
        path: 'music/All of Me.mp3',
        name: 'All of Me',
        image: 'picture/All of Me.jpg',
        singer: 'John Legend',
    },
    {
        path: 'music/Alone.mp3',
        name: 'Alone',
        image: 'picture/Alone.jpg',
        singer: 'Marshmello',
    },
    {
        path: 'music/As It Was.mp3',
        name: 'As It Was',
        image: 'picture/As It Was.jpg',
        singer: 'Harry Styles',
    },
    {
        path: 'music/Baby.mp3',
        name: 'Baby',
        image: 'picture/Baby.jpg',
        singer: 'Justin Bieber/Ludacris',
    },
    {
        path: 'music/Bad Habits.mp3',
        name: 'Bad Habits',
        image: 'picture/Bad Habits.jpg',
        singer: 'Ed Sheeran',
    },
    {
        path: 'music/Bad Liar.mp3',
        name: 'Bad Liar',
        image: 'picture/Bad Liar.jpg',
        singer: 'Imagine Dragons',
    },
    {
        path: 'music/Be Alright.mp3',
        name: 'Be Alright',
        image: 'picture/Be Alright.jpg',
        singer: 'Dean Lewis',
    },
    {
        path: 'music/Beautiful Things.mp3',
        name: 'Beautiful Things',
        image: 'picture/Beautiful Things.jpg',
        singer: 'Benson Boone',
    },
    {
        path: 'music/Believer.mp3',
        name: 'Believer',
        image: 'picture/Believer.jpg',
        singer: 'Imagine Dragons',
    },
    {
        path: 'music/Calm Down (with Selena Gomez).mp3',
        name: 'Calm Down (with Selena Gomez)',
        image: 'picture/Calm Down (with Selena Gomez).jpg',
        singer: 'Rema/Selena Gomez',
    },
    {
        path: 'music/Cheap Thrills (feat. Sean Paul).mp3',
        name: 'Cheap Thrills (feat. Sean Paul)',
        image: 'picture/Cheap Thrills (feat. Sean Paul).jpg',
        singer: 'Sia/Sean Paul',
    },
    {
        path: 'music/Closer.mp3',
        name: 'Closer',
        image: 'picture/Closer.jpg',
        singer: 'The Chainsmokers/Halsey',
    },
    {
        path: 'music/Counting Stars.mp3',
        name: 'Counting Stars',
        image: 'picture/Counting Stars.jpg',
        singer: 'OneRepublic',
    },
    {
        path: 'music/Dance Monkey.mp3',
        name: 'Dance Monkey',
        image: 'picture/Dance Monkey.jpg',
        singer: 'Tones And I',
    },
    {
        path: 'music/Dark Horse.mp3',
        name: 'Dark Horse',
        image: 'picture/Dark Horse.jpg',
        singer: 'Katy Perry/Juicy J',
    },
    {
        path: 'music/Daylight.mp3',
        name: 'Daylight',
        image: 'picture/Daylight.jpg',
        singer: 'David Kushner',
    },
    {
        path: 'music/death bed (coffee for your head).mp3',
        name: 'death bed (coffee for your head)',
        image: 'picture/death bed (coffee for your head).jpg',
        singer: 'Powfu/beabadoobee',
    },
    {
        path: 'music/Despacito.mp3',
        name: 'Despacito',
        image: 'picture/Despacito.jpg',
        singer: 'Luis Fonsi/Daddy Yankee',
    },
    {
        path: 'music/Dusk Till Dawn (feat. Sia) - Radio Edit.mp3',
        name: 'Dusk Till Dawn (feat. Sia) - Radio Edit',
        image: 'picture/Dusk Till Dawn (feat. Sia) - Radio Edit.jpg',
        singer: 'ZAYN/Sia',
    },
    {
        path: 'music/Espresso.mp3',
        name: 'Espresso',
        image: 'picture/Espresso.jpg',
        singer: 'Sabrina Carpenter',
    },
    {
        path: 'music/Flowers.mp3',
        name: 'Flowers',
        image: 'picture/Flowers.jpg',
        singer: 'Miley Cyrus',
    },
    {
        path: 'music/FRIENDS.mp3',
        name: 'FRIENDS',
        image: 'picture/FRIENDS.jpg',
        singer: 'Marshmello/Anne-Marie',
    },
    {
        path: 'music/Ghost.mp3',
        name: 'Ghost',
        image: 'picture/Ghost.jpg',
        singer: 'Justin Bieber',
    },
    {
        path: 'music/Girls Like You (feat. Cardi B) - Cardi B Version.mp3',
        name: 'Girls Like You (feat. Cardi B) - Cardi B Version',
        image: 'picture/Girls Like You (feat. Cardi B) - Cardi B Version.jpg',
        singer: 'Maroon 5/Cardi B',
    },
    {
        path: 'music/golden hour.mp3',
        name: 'golden hour',
        image: 'picture/golden hour.jpg',
        singer: 'JVKE',
    },
    {
        path: 'music/Grenade.mp3',
        name: 'Grenade',
        image: 'picture/Grenade.jpg',
        singer: 'Bruno Mars',
    },
    {
        path: 'music/Hall of Fame (feat. will.i.am).mp3',
        name: 'Hall of Fame (feat. will.i.am)',
        image: 'picture/Hall of Fame (feat. will.i.am).jpg',
        singer: 'The Script/will.i.am',
    },
    {
        path: 'music/Happier.mp3',
        name: 'Happier',
        image: 'picture/Happier.jpg',
        singer: 'Marshmello/Bastille',
    },
    {
        path: 'music/Heat Waves.mp3',
        name: 'Heat Waves',
        image: 'picture/Heat Waves.jpg',
        singer: 'Glass Animals',
    },
    {
        path: 'music/Heathens.mp3',
        name: 'Heathens',
        image: 'picture/Heathens.jpg',
        singer: 'Twenty One Pilots',
    },
    {
        path: 'music/Hero (feat. Christina Perri).mp3',
        name: 'Hero (feat. Christina Perri)',
        image: 'picture/Hero (feat. Christina Perri).jpg',
        singer: 'Cash Cash/Christina Perri',
    },
    {
        path: 'music/House of Memories.mp3',
        name: 'House of Memories',
        image: 'picture/House of Memories.jpg',
        singer: 'Panic! At The Disco',
    },
    {
        path: 'music/How Do I Say Goodbye.mp3',
        name: 'How Do I Say Goodbye',
        image: 'picture/How Do I Say Goodbye.jpg',
        singer: 'Dean Lewis',
    },
    {
        path: 'music/Hymn for the Weekend.mp3',
        name: 'Hymn for the Weekend',
        image: 'picture/Hymn for the Weekend.jpg',
        singer: 'Coldplay',
    },
    {
        path: 'music/I Aint Worried.mp3',
        name: 'I Aint Worried',
        image: 'picture/I Aint Worried.jpg',
        singer: 'OneRepublic',
    },
    {
        path: 'music/In the Name of Love.mp3',
        name: 'In the Name of Love',
        image: 'picture/In the Name of Love.jpg',
        singer: 'Martin Garrix/Bebe Rexha',
    },
    {
        path: 'music/INDUSTRY BABY (feat. Jack Harlow).mp3',
        name: 'INDUSTRY BABY (feat. Jack Harlow)',
        image: 'picture/INDUSTRY BABY (feat. Jack Harlow).jpg',
        singer: 'Lil Nas X/Jack Harlow',
    },
    {
        path: 'music/Into Your Arms (feat. Ava Max).mp3',
        name: 'Into Your Arms (feat. Ava Max)',
        image: 'picture/Into Your Arms (feat. Ava Max).jpg',
        singer: 'Witt Lowry/Ava Max',
    },
    {
        path: 'music/Just the Way You Are.mp3',
        name: 'Just the Way You Are',
        image: 'picture/Just the Way You Are.jpg',
        singer: 'Bruno Mars',
    },
    {
        path: 'music/Let Me Down Slowly.mp3',
        name: 'Let Me Down Slowly',
        image: 'picture/Let Me Down Slowly.jpg',
        singer: 'Alec Benjamin',
    },
    {
        path: 'music/Let Me Love You.mp3',
        name: 'Let Me Love You',
        image: 'picture/Let Me Love You.jpg',
        singer: 'DJ Snake/Justin Bieber',
    },
    {
        path: 'music/Like Im Gonna Lose You (feat. John Legend).mp3',
        name: 'Like Im Gonna Lose You (feat. John Legend)',
        image: 'picture/Like Im Gonna Lose You (feat. John Legend).jpg',
        singer: 'Meghan Trainor/John Legend',
    },
    {
        path: 'music/Locked out of Heaven.mp3',
        name: 'Locked out of Heaven',
        image: 'picture/Locked out of Heaven.jpg',
        singer: 'Bruno Mars',
    },
    {
        path: 'music/Love Me Like You Do.mp3',
        name: 'Love Me Like You Do',
        image: 'picture/Love Me Like You Do.jpg',
        singer: 'Ellie Goulding',
    },
    {
        path: 'music/Love Yourself.mp3',
        name: 'Love Yourself',
        image: 'picture/Love Yourself.jpg',
        singer: 'Justin Bieber',
    },
    {
        path: 'music/lovely (with Khalid).mp3',
        name: 'lovely (with Khalid)',
        image: 'picture/lovely (with Khalid).jpg',
        singer: 'Billie Eilish/Khalid',
    },
    {
        path: 'music/Maps.mp3',
        name: 'Maps',
        image: 'picture/Maps.jpg',
        singer: 'Maroon 5',
    },
    {
        path: 'music/Night Changes.mp3',
        name: 'Night Changes',
        image: 'picture/Night Changes.jpg',
        singer: 'One Direction',
    },
    {
        path: 'music/Old Town Road.mp3',
        name: 'Old Town Road',
        image: 'picture/Old Town Road.jpg',
        singer: 'Lil Nas X',
    },
    {
        path: 'music/Paradise.mp3',
        name: 'Paradise',
        image: 'picture/Paradise.jpg',
        singer: 'Coldplay',
    },
    {
        path: 'music/Past Lives.mp3',
        name: 'Past Lives',
        image: 'picture/Past Lives.jpg',
        singer: 'sapientdream/Slushii',
    },
    {
        path: 'music/Payphone.mp3',
        name: 'Payphone',
        image: 'picture/Payphone.jpg',
        singer: 'Maroon 5/Wiz Khalifa',
    },
    {
        path: 'music/Perfect.mp3',
        name: 'Perfect',
        image: 'picture/Perfect.jpg',
        singer: 'Ed Sheeran',
    },
    {
        path: 'music/Photograph.mp3',
        name: 'Photograph',
        image: 'picture/Photograph.jpg',
        singer: 'Ed Sheeran',
    },
    {
        path: 'music/Roar.mp3',
        name: 'Roar',
        image: 'picture/Roar.jpg',
        singer: 'Katy Perry',
    },
    {
        path: 'music/Rockabye (feat. Sean Paul & Anne-Marie).mp3',
        name: 'Rockabye (feat. Sean Paul & Anne-Marie)',
        image: 'picture/Rockabye (feat. Sean Paul & Anne-Marie).jpg',
        singer: 'Clean Bandit/Sean Paul/Anne-Marie',
    },
    {
        path: 'music/Rude.mp3',
        name: 'Rude',
        image: 'picture/Rude.jpg',
        singer: 'MAGIC!',
    },
    {
        path: 'music/Savage Love (Laxed - Siren Beat).mp3',
        name: 'Savage Love (Laxed - Siren Beat)',
        image: 'picture/Savage Love (Laxed - Siren Beat).jpg',
        singer: 'Jawsh 685/Jason Derulo',
    },
    {
        path: 'music/Say You Wont Let Go.mp3',
        name: 'Say You Wont Let Go',
        image: 'picture/Say You Wont Let Go.jpg',
        singer: 'James Arthur',
    },
    {
        path: 'music/See You Again (feat. Charlie Puth).mp3',
        name: 'See You Again (feat. Charlie Puth)',
        image: 'picture/See You Again (feat. Charlie Puth).jpg',
        singer: 'Wiz Khalifa/Charlie Puth',
    },
    {
        path: 'music/Señorita.mp3',
        name: 'Señorita',
        image: 'picture/Señorita.jpg',
        singer: 'Shawn Mendes/Camila Cabello',
    },
    {
        path: 'music/Shallow - Radio Edit.mp3',
        name: 'Shallow - Radio Edit',
        image: 'picture/Shallow - Radio Edit.jpg',
        singer: 'Lady Gaga/Bradley Cooper',
    },
    {
        path: 'music/Shape of You.mp3',
        name: 'Shape of You',
        image: 'picture/Shape of You.jpg',
        singer: 'Ed Sheeran',
    },
    {
        path: 'music/Shivers.mp3',
        name: 'Shivers',
        image: 'picture/Shivers.jpg',
        singer: 'Ed Sheeran',
    },
    {
        path: 'music/Somebody That I Used To Know.mp3',
        name: 'Somebody That I Used To Know',
        image: 'picture/Somebody That I Used To Know.jpg',
        singer: 'Gotye/Kimbra',
    },
    {
        path: 'music/Someone You Loved.mp3',
        name: 'Someone You Loved',
        image: 'picture/Someone You Loved.jpg',
        singer: 'Lewis Capaldi',
    },
    {
        path: 'music/Something Just Like This.mp3',
        name: 'Something Just Like This',
        image: 'picture/Something Just Like This.jpg',
        singer: 'The Chainsmokers/Coldplay',
    },
    {
        path: 'music/Sorry.mp3',
        name: 'Sorry',
        image: 'picture/Sorry.jpg',
        singer: 'Justin Bieber',
    },
    {
        path: 'music/STAY (with Justin Bieber).mp3',
        name: 'STAY (with Justin Bieber)',
        image: 'picture/STAY (with Justin Bieber).jpg',
        singer: 'The Kid LAROI/Justin Bieber',
    },
    {
        path: 'music/Stereo Hearts (feat. Adam Levine).mp3',
        name: 'Stereo Hearts (feat. Adam Levine)',
        image: 'picture/Stereo Hearts (feat. Adam Levine).jpg',
        singer: 'Gym Class Heroes/Adam Levine',
    },
    {
        path: 'music/Stitches.mp3',
        name: 'Stitches',
        image: 'picture/Stitches.jpg',
        singer: 'Shawn Mendes',
    },
    {
        path: 'music/Sugar.mp3',
        name: 'Sugar',
        image: 'picture/Sugar.jpg',
        singer: 'Maroon 5',
    },
    {
        path: 'music/Sunflower - Spider-Man: Into the Spider-Verse.mp3',
        name: 'Sunflower - Spider-Man: Into the Spider-Verse',
        image: 'picture/Dusk Till Dawn (feat. Sia) - Radio Edit.jpg',
        singer: 'Post Malone/Swae Lee',
    },
    {
        path: 'music/Sunroof.mp3',
        name: 'Sunroof',
        image: 'picture/Sunroof.jpg',
        singer: 'Nicky Youre/dazy',
    },
    {
        path: 'music/Symphony (feat. Zara Larsson).mp3',
        name: 'Symphony (feat. Zara Larsson)',
        image: 'picture/Symphony (feat. Zara Larsson).jpg',
        singer: 'Clean Bandit/Zara Larsson',
    },
    {
        path: 'music/Take Me To Church.mp3',
        name: 'Take Me To Church',
        image: 'picture/Take Me To Church.jpg',
        singer: 'Hozier',
    },
    {
        path: 'music/Takeaway.mp3',
        name: 'Takeaway',
        image: 'picture/Takeaway.jpg',
        singer: 'The Chainsmokers/ILLENIUM/Lennon Stella',
    },
    {
        path: 'music/The Lazy Song.mp3',
        name: 'The Lazy Song',
        image: 'picture/The Lazy Song.jpg',
        singer: 'Bruno Mars',
    },
    {
        path: 'music/The Nights.mp3',
        name: 'The Nights',
        image: 'picture/The Nights.jpg',
        singer: 'Avicii',
    },
    {
        path: 'music/There is Nothing Holding Me Back.mp3',
        name: 'There is Nothing Holding Me Back',
        image: 'picture/There is Nothing Holding Me Back.jpg',
        singer: 'Shawn Mendes',
    },
    {
        path: 'music/Thinking out Loud.mp3',
        name: 'Thinking out Loud',
        image: 'picture/Thinking out Loud.jpg',
        singer: 'Ed Sheeran',
    },
    {
        path: 'music/Timber.mp3',
        name: 'Timber',
        image: 'picture/Timber.jpg',
        singer: 'Pitbull/Kesha',
    },
    {
        path: 'music/Titanium (feat. Sia).mp3',
        name: 'Titanium (feat. Sia)',
        image: 'picture/Titanium (feat. Sia).jpg',
        singer: 'David Guetta/Sia',
    },
    {
        path: 'music/Treat You Better.mp3',
        name: 'Treat You Better',
        image: 'picture/Treat You Better.jpg',
        singer: 'Shawn Mendes',
    },
    {
        path: 'music/Unstoppable.mp3',
        name: 'Unstoppable',
        image: 'picture/Unstoppable.jpg',
        singer: 'Sia',
    },
    {
        path: 'music/Until I Found You (with Em Beihold) - Em Beihold Version.mp3',
        name: 'Until I Found You (with Em Beihold) - Em Beihold Version',
        image: 'picture/Until I Found You (with Em Beihold) - Em Beihold Version.jpg',
        singer: 'Stephen Sanchez/Em Beihold',
    },
    {
        path: 'music/Viva La Vida.mp3',
        name: 'Viva La Vida',
        image: 'picture/Viva La Vida.jpg',
        singer: 'Coldplay',
    },
    {
        path: 'music/Waiting For Love.mp3',
        name: 'Waiting For Love',
        image: 'picture/Waiting For Love.jpg',
        singer: 'Avicii',
    },
    {
        path: 'music/Wake Me Up.mp3',
        name: 'Wake Me Up',
        image: 'picture/Wake Me Up.jpg',
        singer: 'Avicii',
    },
    {
        path: 'music/We Dont Talk Anymore .mp3',
        name: 'We Dont Talk Anymore ',
        image: 'picture/We Dont Talk Anymore.jpg',
        singer: 'Charlie Puth/Selena Gomez',
    },
    {
        path: 'music/When I Was Your Man.mp3',
        name: 'When I Was Your Man',
        image: 'picture/When I Was Your Man.jpg',
        singer: 'Bruno Mars',
    },
    {
        path: 'music/Without You (feat. Sandro Cavazza).mp3',
        name: 'Without You (feat. Sandro Cavazza)',
        image: 'picture/Without You (feat. Sandro Cavazza).jpg',
        singer: 'Avicii/Sandro Cavazza',
    },
    {
        path: 'music/7 Years.mp3',
        name: '7 Years',
        image: 'picture/7 Years.jpg',
        singer: 'Lukas Graham',
    },
    {
        path: 'music/2002.mp3',
        name: '2002',
        image: 'picture/2002.jpg',
        singer: 'Anne-Marie',
    }
  ],
  setConfig: function (key, value) {
    this.config[key] = value;
    // (2/2) Uncomment the line below to use localStorage
    // localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
  },
  render: function () {
    const htmls = this.songs.map((song, index) => {
      return `
                        <div class="song ${
                          index === this.currentIndex ? "active" : ""
                        }" data-index="${index}">
                            <div class="thumb"
                                style="background-image: url('${song.image}')">
                            </div>
                            <div class="body">
                                <h3 class="title">${song.name}</h3>
                                <p class="author">${song.singer}</p>
                            </div>
                            <div class="option">
                                <i class="fas fa-ellipsis-h"></i>
                            </div>
                        </div>
                    `;
    });
    playlist.innerHTML = htmls.join("");
  },
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      }
    });
  },
  handleEvents: function () {
    const _this = this;
    const cdWidth = cd.offsetWidth;
    // Xử lý khi nhấn phím Space
    document.onkeydown = function (e) {
    if (e.code === "Space") {
      e.preventDefault(); // Ngăn không cho trang bị cuộn xuống khi nhấn phím Space
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    }
  };

    // Xử lý CD quay / dừng
    // Handle CD spins / stops
    const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
      duration: 10000, // 10 seconds
      iterations: Infinity
    });
    cdThumbAnimate.pause();

    // Xử lý phóng to / thu nhỏ CD
    // Handles CD enlargement / reduction
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newCdWidth = cdWidth - scrollTop;

      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      cd.style.opacity = newCdWidth / cdWidth;
    };

    // Xử lý khi click play
    // Handle when click play
    playBtn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };

    // Khi song được play
    // When the song is played
    audio.onplay = function () {
      _this.isPlaying = true;
      player.classList.add("playing");
      cdThumbAnimate.play();
    };

    // Khi song bị pause
    // When the song is pause
    audio.onpause = function () {
      _this.isPlaying = false;
      player.classList.remove("playing");
      cdThumbAnimate.pause();
    };

    // Khi tiến độ bài hát thay đổi
    // When the song progress changes
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = progressPercent;
      }
    };

    // Xử lý khi tua song
    // Handling when seek
    progress.onchange = function (e) {
      const seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;
    };

    // Khi next song
    // When next song
    nextBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.nextSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Khi prev song
    // When prev song
    prevBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.prevSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Xử lý bật / tắt random song
    // Handling on / off random song
    randomBtn.onclick = function (e) {
      _this.isRandom = !_this.isRandom;
      _this.setConfig("isRandom", _this.isRandom);
      randomBtn.classList.toggle("active", _this.isRandom);
    };

    // Xử lý lặp lại một song
    // Single-parallel repeat processing
    repeatBtn.onclick = function (e) {
      _this.isRepeat = !_this.isRepeat;
      _this.setConfig("isRepeat", _this.isRepeat);
      repeatBtn.classList.toggle("active", _this.isRepeat);
    };

    // Xử lý next song khi audio ended
    // Handle next song when audio ended
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        nextBtn.click();
      }
    };

    // Lắng nghe hành vi click vào playlist
    // Listen to playlist clicks
    playlist.onclick = function (e) {
      const songNode = e.target.closest(".song:not(.active)");

      if (songNode || e.target.closest(".option")) {
        // Xử lý khi click vào song
        // Handle when clicking on the song
        if (songNode) {
          _this.currentIndex = Number(songNode.dataset.index);
          _this.loadCurrentSong();
          _this.render();
          audio.play();
        }

        // Xử lý khi click vào song option
        // Handle when clicking on the song option
        if (e.target.closest(".option")) {
        }
      }
    };
  },
  scrollToActiveSong: function () {
    setTimeout(() => {
      $(".song.active").scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }, 300);
  },
  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = this.currentSong.path;
  },
  loadConfig: function () {
    this.isRandom = this.config.isRandom;
    this.isRepeat = this.config.isRepeat;
  },
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },
  playRandomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);

    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },
  start: function () {
    // Gán cấu hình từ config vào ứng dụng
    // Assign configuration from config to application
    this.loadConfig();

    // Định nghĩa các thuộc tính cho object
    // Defines properties for the object
    this.defineProperties();

    // Lắng nghe / xử lý các sự kiện (DOM events)
    // Listening / handling events (DOM events)
    this.handleEvents();

    // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
    // Load the first song information into the UI when running the app
    this.loadCurrentSong();

    // Render playlist
    this.render();

    // Hiển thị trạng thái ban đầu của button repeat & random
    // Display the initial state of the repeat & random button
    randomBtn.classList.toggle("active", this.isRandom);
    repeatBtn.classList.toggle("active", this.isRepeat);
  }
};

app.start();
