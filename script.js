const videos = [
    {
      title: "Talking Tech and AI with Google CEO Sundar Pichai!",
      videoUrl: "https://www.youtube.com/watch?v=n2RNcPRtAiY",
      thumbnail: "img/thumbnails/thumbnail-1.webp",
      time: "14:20",
      author: "Marques Brownlee",
      channelUrl: "https://www.youtube.com/c/mkbhd",
      profilePicture: "img/channel-pictures/channel-1.jpeg",
      tooltipName: "Marques brownlee",
      subscribers: "15M subscribers",
      views: "3.4M views",
      posted: "6 months ago"
    },
    {
      title: "Try Not To Laugh Challenge #9",
      videoUrl: "https://www.youtube.com/watch?v=mP0RAo9SKZk",
      thumbnail: "img/thumbnails/thumbnail-2.webp",
      time: "8:22",
      author: "Markiplier",
      channelUrl: "https://www.youtube.com/c/markiplier",
      profilePicture: "img/channel-pictures/channel-2.jpeg",
      tooltipName: "Markiplier",
      subscribers: "37,4M subscribers",
      views: "19M views",
      posted: "4 years ago"
    },
    {
      title: "Crazy Tik Toks Taken Moments Before DISASTER",
      videoUrl: "https://www.youtube.com/watch?v=FgjPQQeTh1w",
      thumbnail: "img/thumbnails/thumbnail-3.webp",
      time: "9:13",
      author: "SSSniperWolf",
      channelUrl: "https://www.youtube.com/user/SSSniperWolf",
      profilePicture: "img/channel-pictures/channel-3.jpeg",
      tooltipName: "SSSniperWolf",
      subscribers: "34,9M subscribers",
      views: "12M views",
      posted: "1 year ago"
    },
    {
      title: "The Simplest Math Problem No One Can Solve - Collatz Conjecture",
      videoUrl: "https://www.youtube.com/watch?v=094y1Z2wpJg",
      thumbnail: "img/thumbnails/thumbnail-4.webp",
      time: "22:09",
      author: "Veritasium",
      channelUrl: "https://www.youtube.com/c/veritasium",
      profilePicture: "img/channel-pictures/channel-4.jpeg",
      tooltipName: "Veritasium",
      subscribers: "17,7M subscribers",
      views: "18M views",
      posted: "4 months ago"
    },
    {
      title: "Kadane's Algorithm to Maximum Sum Subarray Problem",
      videoUrl: "https://www.youtube.com/watch?v=86CQq3pKSUw",
      thumbnail: "img/thumbnails/thumbnail-5.webp",
      time: "11:17",
      author: "CS Dojo",
      channelUrl: "https://www.youtube.com/c/CSDojo",
      profilePicture: "img/channel-pictures/channel-5.jpeg",
      tooltipName: "CS Dojo",
      subscribers: "1,95M subscribers",
      views: "519K views",
      posted: "5 years ago"
    },
    {
      title: "Anything You Can Fit In The Circle I’ll Pay For",
      videoUrl: "https://www.youtube.com/watch?v=yXWw0_UfSFg",
      thumbnail: "img/thumbnails/thumbnail-6.webp",
      time: "19:59",
      author: "MrBeast",
      channelUrl: "https://www.youtube.com/channel/UCX6OQ3DkcsbYNE6H8uQQuVA",
      profilePicture: "img/channel-pictures/channel-6.jpeg",
      tooltipName: "MrBeast",
      subscribers: "385M subscribers",
      views: "141M views",
      posted: "1 year ago"
    },
    {
      title: "Why Planes Don't Fly Over Tibet",
      videoUrl: "https://www.youtube.com/watch?v=fNVa1qMbF9Y",
      thumbnail: "img/thumbnails/thumbnail-7.webp",
      time: "10:13",
      author: "RealLifeLore",
      channelUrl: "https://www.youtube.com/channel/UCP5tjEmvPItGyLhmjdwP7Ww",
      profilePicture: "img/channel-pictures/channel-7.jpeg",
      tooltipName: "RealLifeLore",
      subscribers: "7,76M subscribers",
      views: "6.6M views",
      posted: "1 year ago"
    },
    {
      title: "Inside The World's Biggest Passenger Plane",
      videoUrl: "https://www.youtube.com/watch?v=lFm4EM1juls",
      thumbnail: "img/thumbnails/thumbnail-8.webp",
      time: "7:12",
      author: "Tech Vision",
      channelUrl: "https://www.youtube.com/channel/UCHAK6CyegY22Zj2GWrcaIxg",
      profilePicture: "img/channel-pictures/channel-8.jpeg",
      tooltipName: "Tech Vision",
      subscribers: "845k subscribers",
      views: "3.7M views",
      posted: "10 months ago"
    },
    {
      title: "The SECRET to Super Human STRENGTH",
      videoUrl: "https://www.youtube.com/watch?v=ixmxOlcrlUc",
      thumbnail: "img/thumbnails/thumbnail-9.webp",
      time: "13:17",
      author: "ThenX",
      channelUrl: "https://www.youtube.com/c/OFFICIALTHENXSTUDIOS",
      profilePicture: "img/channel-pictures/channel-9.jpeg",
      tooltipName: "ThenX",
      subscribers: "7M subscribers",
      views: "20M views",
      posted: "3 years ago"
    },
    {
      title: "How The World's Largest Cruise Ship Makes 30,000 Meals Every Day",
      videoUrl: "https://www.youtube.com/watch?v=R2vXbFp5C9o",
      thumbnail: "img/thumbnails/thumbnail-10.webp",
      time: "7:53",
      author: "Business Insider",
      channelUrl: "https://www.youtube.com/user/businessinsider",
      profilePicture: "img/channel-pictures/channel-10.jpeg",
      tooltipName: "Business Insider",
      subscribers: "483K subscribers",
      views: "14M views",
      posted: "1 year ago"
    },
    {
      title: "Dubai's Crazy Underwater Train and Other Things #Only in Dubai",
      videoUrl: "https://www.youtube.com/watch?v=0nZuYyXET3s",
      thumbnail: "img/thumbnails/thumbnail-11.webp",
      time: "4:10",
      author: "Destination Tips",
      channelUrl: "https://www.youtube.com/c/Destinationtips",
      profilePicture: "img/channel-pictures/channel-11.jpeg",
      tooltipName: "Destination Tips",
      subscribers: "9M subscribers",
      views: "3M views",
      posted: "1 year ago"
    },
    {
      title: "What would happen if you didn’t drink water? - Mia Nacamulli",
      videoUrl: "https://www.youtube.com/watch?v=9iMGFqMmUFs",
      thumbnail: "img/thumbnails/thumbnail-12.webp",
      time: "4:51",
      author: "TED-Ed",
      channelUrl: "https://www.youtube.com/teded",
      profilePicture: "img/channel-pictures/channel-12.jpeg",
      tooltipName: "TED-Ed",
      subscribers: "88M subscribers",
      views: "12M views",
      posted: "5 years ago"
    },
    { //teste
      title: "test",
      videoUrl: "#",
      thumbnail: "https://imgs.search.brave.com/v5MAL7eLaLrrElDiHIfSrZjhdqAlrXmqKnqXvzKtTMg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hbmlt/ZW5ldy5jb20uYnIv/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDIvU291c291LW5v/LUZyaWVyZW4tRmVy/bi1qcGcud2VicA",
      time: "2:38",
      author: "S1lb",
      channelUrl: "#",
      profilePicture: "https://pbs.twimg.com/profile_images/1907178060744474624/V8YkoXRY_400x400.jpg",
      tooltipName: "S1lb",
      subscribers: "8B subscribers",
      views: "172M views",
      posted: "2 seconds ago"
    }

  
  ];
  
  
   const container = document.querySelector('.video-grid'); // container aonde os videos serão carregados
  
  videos.forEach(video => {
    const html = `
      <div class="video-preview">
        <div class="thumbnail-row">
          <a href="${video.videoUrl}" target="_blank">
            <img class="thumbnail" src="${video.thumbnail}">
          </a>
          <div class="video-time">${video.time}</div>
        </div>
        <div class="video-info-grid">
          <div class="channel-picture">
            <div class="profile-picture-container">
              <a href="${video.channelUrl}">
                <img class="profile-picture" src="${video.profilePicture}">
              </a>
              <div class="tooltip">
                <div class="leftside"><img class="tooltip-img" src="${video.profilePicture}"></div>
                <div class="rightside">
                  <div class="name">${video.tooltipName}</div>
                  <div class="subscribers">${video.subscribers}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="video-info">
            <div class="title">
              <p class="video-title">
                <a class="video-link" href="${video.videoUrl}" target="_blank">${video.title}</a>
              </p>
            </div>
            <div class="author">
              <p class="video-author">${video.author}</p>
            </div>
            <div class="stats">
              <p class="video-stats">${video.views} &middot; ${video.posted}</p>
            </div>
          </div>
        </div>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', html);
  });
  