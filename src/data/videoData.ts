export interface Video {
  id: string;
  title: string;
  description: string;
  published_at: string;
  channeltitle: string;
  thumbnailurl: string;
}

export interface ApiResponse {
  status: string;
  data: Video[];
  pagination: {
    hasNext: boolean;
    nextCursor: string;
    totalCount: number;
  };
}

export const videoData: ApiResponse = {
  "status": "success",
  "data": [
    {
      "id": "4HX4QiN0Cag",
      "title": "PAKISTAN VS SOUTH AFRICA 1ST TEST 2024 MATCH HIGHLIGHTS DAY 3 | PAK VS SA",
      "description": "PAKISTAN VS SOUTH AFRICA 1ST TEST 2024 MATCH HIGHLIGHTS DAY 3 | PAK VS SA 1ST TEST 2024 MATCH HIGHLIGHTS ...",
      "published_at": "2024-12-28T14:15:56Z",
      "channeltitle": "New Jalsha Clip Update",
      "thumbnailurl": "https://i.ytimg.com/vi/4HX4QiN0Cag/default.jpg"
    },
    {
      "id": "GsQtdlHQEVk",
      "title": "Bihar Politics News Live : बिहार में टूट जाएगा JDU-BJP का गठबंधन? नीतीश करेंगे बड़ा खेल! | ABP News",
      "description": "Bihar Politics News Live : बिहार में टूट जाएगा JDU-BJP का गठबंधन? नीतीश करेंगे बड़ा ...",
      "published_at": "2024-12-28T13:51:00Z",
      "channeltitle": "ABP NEWS",
      "thumbnailurl": "https://i.ytimg.com/vi/GsQtdlHQEVk/default_live.jpg"
    },
    {
      "id": "82ycQvc3Mk0",
      "title": "Mo. Siraj ने Team India समेत Nitish के पिता को सजदे में झुकाया! Nitish शतक बनवाया! AUS घुटनों पर आया",
      "description": "mohammadsiraj #teamindia #nitishreddy #century #australia #indiavsaustralia #news24sports Mo. Siraj ने Team India ...",
      "published_at": "2024-12-28T13:38:43Z",
      "channeltitle": "News24 Sports",
      "thumbnailurl": "https://i.ytimg.com/vi/82ycQvc3Mk0/default.jpg"
    },
    {
      "id": "NZdPXFVdNQ0",
      "title": "Bihar Politics News Live : बिहार में टूट जाएगा JDU-BJP का गठबंधन? नीतीश करेंगे बड़ा खेल!",
      "description": "ABP News TV | Bihar Politics News Live : बिहार में टूट जाएगाJDU-BJP का गठबंधन? नीतीश ...",
      "published_at": "2024-12-28T13:28:37Z",
      "channeltitle": "ABP NEWS",
      "thumbnailurl": "https://i.ytimg.com/vi/NZdPXFVdNQ0/default.jpg"
    },
    {
      "id": "6Q-z4JaxYXQ",
      "title": "Nitish Reddy - the problem and the solution | #cricket",
      "description": "Check out Best of Cricket for the latest cricket stories: https://2ly.link/22mLE Nitish Reddy, a top-order batter amongst middle-order ...",
      "published_at": "2024-12-28T13:20:08Z",
      "channeltitle": "Good Areas with Jarrod Kimber",
      "thumbnailurl": "https://i.ytimg.com/vi/6Q-z4JaxYXQ/default.jpg"
    },
    {
      "id": "O59Pkfqxn1w",
      "title": "Bihar Politics News Live : Tejashwi Yadav Exclusive Interview On Abp News | Breaking News",
      "description": "Bihar Politics News Live : Tejashwi Yadav Exclusive Interview On Abp News | Breaking News #biharpolitics #nitishkumar ...",
      "published_at": "2024-12-28T13:17:30Z",
      "channeltitle": "ABP NEWS",
      "thumbnailurl": "https://i.ytimg.com/vi/O59Pkfqxn1w/default.jpg"
    },
    {
      "id": "9Gtb_iMgTLA",
      "title": "\"New low in Indian politics,\" BJP's Sambit Patra berates Gandhis as Manmohan memorial row peaks",
      "description": "BJP MP Sambit Patra said, \"This is a new low in politics of India, thanks to the Congress party. Due to the Congres party - we are ...",
      "published_at": "2024-12-28T13:15:34Z",
      "channeltitle": "ANI News",
      "thumbnailurl": "https://i.ytimg.com/vi/9Gtb_iMgTLA/default.jpg"
    },
    {
      "id": "xYv8dQaMEMg",
      "title": "PAKISTAN VS SOUTH AFRICA 1ST TEST MATCH HIGHLIGHTS 2024 DAY 3 | PAK VS SA",
      "description": "PAKISTAN VS SOUTH AFRICA 1ST TEST MATCH HIGHLIGHTS 2024 DAY 3 | PAK VS SA 1ST TEST MATCH HIGHLIGHTS 2024 ...",
      "published_at": "2024-12-28T13:12:52Z",
      "channeltitle": "AA TV HD",
      "thumbnailurl": "https://i.ytimg.com/vi/xYv8dQaMEMg/default.jpg"
    },
    {
      "id": "QVVf3AJp4g0",
      "title": "India vs Aus Nitish Kumar Reddy National Hero | Joker Kohli is the waste star Australian Crowd",
      "description": "India vs Aus Nitish Kumar Reddy National Hero | Joker Kohli is the waste star Australian Crowd My First Channel Link   ...",
      "published_at": "2024-12-28T12:37:19Z",
      "channeltitle": "Pathan Bhai Reaction",
      "thumbnailurl": "https://i.ytimg.com/vi/QVVf3AJp4g0/default.jpg"
    },
    {
      "id": "RpWf2m89-Pk",
      "title": "Bihar Politics News Live : नीतीश फिर आएंगे RJD के साथ?  तेजस्वी ने किया साफ | ABP News | BJP | JDU",
      "description": "Bihar Politics News Live : नीतीश फिर आएंगे RJD के साथ? तेजस्वी ने किया साफ | ABP News ...",
      "published_at": "2024-12-28T12:01:30Z",
      "channeltitle": "ABP NEWS",
      "thumbnailurl": "https://i.ytimg.com/vi/RpWf2m89-Pk/default_live.jpg"
    }
  ],
  "pagination": {
    "hasNext": true,
    "nextCursor": "MjAyNC0xMi0yOFQxMjowMTozMFo=",
    "totalCount": 169
  }
};

