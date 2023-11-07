
// { id: "1",
// data: [
//   ["00:00", "胸がドキドキ", "Mune ga Dokidoki", "The Pounding of My Heart", "Mune ga Dokidoki"],
//   ["02:12", "事件現場 （謎ver.）", "Jiken Genba (Nazo ver.)", "Scene of the Case (Mystery ver.)", "Detective Conan Original Soundtrack 2"],
// ]},
// { id: "2",
// data: [
//   [...],
//   [...],
// ]},

const episodesData = [
  {
    id: "1",
    data: [
      ["00:00", "胸がドキドキ", "Mune ga Dokidoki", "The Pounding of My Heart", "Mune ga Dokidoki"],
      ["02:12", "事件現場 （謎ver.）", "Jiken Genba (Nazo ver.)", "Scene of the Case (Mystery ver.)", "Detective Conan Original Soundtrack 2"],
      ["03:06", "事件現場 （オリジナルver.）", "Jiken Genba (Orijinaru ver.)", "Scene of the Case (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["04:06", "名探偵コナン・メインテーマ", "Meitantei Konan・Mein Tēma", "Detective Conan Main Theme", "Detective Conan Original Soundtrack 1"],
      ["04:50", "名探偵コナン・メインテーマ (タイトルver.)", "Meitantei Konan・Mein Tēma (Taitoru ver.)", "Detective Conan Main Theme (Title ver.)", "Unreleased"],
      ["05:20", "阿笠博士のテーマ", "Agasa Hakase no Tēma", "Professor Agasa's Theme", "Detective Conan Original Soundtrack 1"],
      ["07:15", "蘭のテーマ", "Ran no Tēma", "Ran's Theme", "Detective Conan Original Soundtrack 1"],
      ["09:07", "事件解決 （意気揚々ver.）", "Jiken Kaiketsu (Ikiyōyō ver.)", "Case Resolution (Triumphant ver.)", "Detective Conan Original Soundtrack 2"],
      ["10:14", "蘭のテーマ", "Ran no Tēma", "Ran's Theme", "Detective Conan Original Soundtrack 1"],
      ["13:08", "脅迫 （パート２）", "Kyōhaku (Pāto 2)", "Threat (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["14:03", "事件現場 （オリジナルver.）", "Jiken Genba (Orijinaru ver.)", "Scene of the Case (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["14:31", "事件現場 （ショートver.）", "Jiken Genba (Shōto ver.)", "Scene of the Case (Short ver.)", "Detective Conan Original Soundtrack 2"],
      ["15:56", "対決のテーマ （落ち着きver.）", "Taiketsu no Tēma (Ochitsuki ver.)", "Showdown Theme (Calm ver.)", "Detective Conan Original Soundtrack 2"],
      ["17:32", "コナンのテーマ （バラード・ヴァージョン)", "Konan no Tēma (Barādo・Vājon)", "Conan's Theme (Ballad Version)", "Detective Conan Original Soundtrack 1"],
      ["21:14", "推理 （オリジナルver.）", "Suiri (Orijinaru ver.)", "Deduction (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["21:53", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP"]
    ]
  },
  {
    id: "2",
    data: [
      ["00:00", "胸がドキドキ", "Mune ga Dokidoki", "The Pounding of My Heart", "Mune ga Dokidoki"],
      ["01:45", "名探偵コナン・メインテーマ (タイトルver.)", "Meitantei Konan・Mein Tēma (Taitoru ver.)", "Detective Conan Main Theme (Title ver.)", "Unreleased"],
      ["01:55", "推理 （オリジナルver.）", "Suiri (Orijinaru ver.)", "Deduction (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["03:05", "推理 （オリジナルver.）", "Suiri (Orijinaru ver.)", "Deduction (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["05:30", "小さな巨人", "Chiisana Kyojin", "A Small Great Person", "Detective Conan Original Soundtrack 1"],
      ["07:29", "対決のテーマ", "Taiketsu no Tēma", "Showdown Theme", "Detective Conan Original Soundtrack 1"],
      ["08:49", "蘭のテーマ（涙バージョン）", "Ran no Tēma (Namida ver.)", "Ran's Theme (Tearful ver.)", "Detective Conan Original Soundtrack 2"],
      ["09:43", "脅迫 （パート２）", "Kyōhaku (Pāto 2)", "Threat (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["10:55", "推理 （オリジナルver.）", "Suiri (Orijinaru ver.)", "Deduction (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["11:28", "推理 （オリジナルver.）", "Suiri (Orijinaru ver.)", "Deduction (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["11:59", "悪のテーマ （パート２）", "Aku no Tēma (Pāto 2)", "Theme of Evil (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["13:00", "事件現場 （オリジナルver.）", "Jiken Genba (Orijinaru ver.)", "Scene of the Case (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["14:26", "事件現場 （オリジナルver.）", "Jiken Genba (Orijinaru ver.)", "Scene of the Case (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["14:58", "緊迫", "Kinpaku", "Tension", "Detective Conan Original Soundtrack 2"],
      ["16:41", "コナンのテーマ <hr> コナンのテーマ （予告）", "Konan no Tēma <hr> Konan no Tēma (Yokoku)", "Conan's Theme <hr> Conan's Theme (Preview)", "Detective Conan Original Soundtrack 1<hr>Detective Conan Original Soundtrack 2"],
      ["18:49", "1996 Unreleased BGM 1<hr>事件発生！", "-<hr>Jiken Hassei!", "-<hr>A Case Springs Forth!", "Detective Conan Original Soundtrack 2"],
      ["19:11", "絶体絶命", "Zettai Zetsumei", "A Desperate Situation", "Detective Conan Original Soundtrack 2"],
      ["19:39", "名探偵コナン・メインテーマ<hr>「名探偵コナン」メイン・テーマ （予告）", "Meitantei Konan・Mein Tēma<hr>\"Meitantei Konan\" Mein・Tēma (Yokoku)", "Detective Conan Main Theme<hr>\"Detective Conan\" Main Theme (Preview)", "Detective Conan Original Soundtrack 1<hr>Detective Conan Original Soundtrack 2"],
      ["20:17", "それいけコナン （哀愁ヴァージョン）", "Soreike Konan (Aishū Vājon)", "Let's Go Conan (Sorrow Version)", "Detective Conan Original Soundtrack 1"],
      ["21:30", "蘭のテーマ", "Ran no Tēma", "Ran's Theme", "Detective Conan Original Soundtrack 1"],
      ["22:13", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP"],
      ["23:55", "事件解決 （意気揚々ver.）", "Jiken Kaiketsu (Ikiyōyō ver.)", "Case Resolution (Triumphant ver.)", "Detective Conan Original Soundtrack 2"]
    ]
  },
  {
    id: "3",
    data: [
      ["00:00", "胸がドキドキ", "Mune ga Dokidoki", "The Pounding of My Heart", "Mune ga Dokidoki"],
      ["01:46", "名探偵コナン・メインテーマ (タイトルver.)", "Meitantei Konan・Mein Tēma (Taitoru ver.)", "Detective Conan Main Theme (Title ver.)", "Unreleased"],
      ["02:22", "うたかたの夢", "Utakata no Yume", "Dream of Bubble", "Utakata no Yume"],
      ["03:08", "コナンの勝利（夜空ver.）", "Konan no Shōri (Yozora ver.)", "Conan's Victory (Night Sky ver.)", "Detective Conan Original Soundtrack 2"],
      ["05:23", "蘭のテーマ", "Ran no Tēma", "Ran's Theme", "Detective Conan Original Soundtrack 1"],
      ["06:48", "脅迫 （パート２）", "Kyōhaku (Pāto 2)", "Threat (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["07:42", "悪のテーマ（パート２）", "Aku no Tēma (Pāto 2)", "Theme of Evil (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["08:18", "悪のテーマ（パート２）", "Aku no Tēma (Pāto 2)", "Theme of Evil (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["08:47", "悪のテーマ（パート１）", "Aku no Tēma (Pāto 1)", "Theme of Evil (Part 1)", "Detective Conan Original Soundtrack 2"],
      ["10:08", "事件現場 （オリジナルver.）", "Jiken Genba (Orijinaru ver.)", "Scene of the Case (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["11:11", "推理（オリジナルver.）", "Suiri (Orijinaru ver.)", "Deduction (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["11:41", "事件現場 （謎ver.）", "Jiken Genba (Nazo ver.)", "Scene of the Case (Mystery ver.)", "Detective Conan Original Soundtrack 2"],
      ["13:35", "推理（オリジナルver.）", "Suiri (Orijinaru ver.)", "Deduction (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["15:40", "緊迫", "Kinpaku", "Tension", "Detective Conan Original Soundtrack 2"],
      ["16:44", "沈む夕陽", "Shizumu Yūhi", "Depressing Sunset", "Detective Conan Original Soundtrack 1"],
      ["18:04", "対決のテーマ （落ち着きver.）", "Taiketsu no Tēma (Ochitsuki ver.)", "Showdown Theme (Calm ver.)", "Detective Conan Original Soundtrack 2"],
      ["19:00", "それいけコナン（哀愁ヴァージョン）", "Soreike Konan (Aishū Vājon)", "Let's Go Conan (Sorrow Version)", "Detective Conan Original Soundtrack 1"],
      ["20:16", "蘭のテーマ", "Ran no Tēma", "Ran's Theme", "Detective Conan Original Soundtrack 1"],
      ["20:44", "うたかたの夢", "Utakata no Yume", "Dream of Bubble", "Utakata no Yume"],
      ["21:21", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP"],
      ["23:19", "蘭のテーマ （涙ver.）", "Ran no Tēma (Namida ver.)", "Ran's Theme (Tearful ver.)", "Detective Conan Original Soundtrack 2"]
    ]
  },
  {
    id: "4",
    data: [
      ["00:00", "胸がドキドキ", "Mune ga Dokidoki", "The Pounding of My Heart", "Mune ga Dokidoki"],
      ["01:46", "名探偵コナン・メインテーマ (タイトルver.)", "Meitantei Konan・Mein Tēma (Taitoru ver.)", "Detective Conan Main Theme (Title ver.)", "Unreleased"],
      ["02:50", "悪のテーマ （パート２）", "Aku no Tēma (Pāto 2)", "Theme of Evil (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["03:09", "前話回想", "Zenwa Kaisō", "Previous Story Recollection", "Detective Conan Original Soundtrack 1"],
      ["03:56", "悪のテーマ （パート２）", "Aku no Tēma (Pāto 2)", "Theme of Evil (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["04:23", "はずむ蘭", "Hazumu Ran", "Bouncing Ran", "Detective Conan Original Soundtrack 1"],
      ["06:25", "小さな巨人", "Chiisana Kyojin", "A Small Great Person", "Detective Conan Original Soundtrack 1"],
      ["06:54", "コナンのRock＆Roll （アナザーver.）", "Konan no Rock & Roll (Anazā ver.)", "Conan's Rock & Roll (Another ver.)", "Detective Conan Original Soundtrack 2"],
      ["08:06", "事件現場 （オリジナルver.）", "Jiken Genba (Orijinaru ver.)", "Scene of the Case (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["09:03", "事件現場 （オリジナルver.）", "Jiken Genba (Orijinaru ver.)", "Scene of the Case (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["10:18", "犯人のアジト （いよいよver.）", "Hannin no Ajito (Iyoiyo ver.)", "The Culprit's Hideout (More and More ver.)", "Detective Conan Original Soundtrack 2"],
      ["11:29", "事件現場 （オリジナルver.）", "Jiken Genba (Orijinaru ver.)", "Scene of the Case (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["12:38", "コナンのテーマ", "Konan no Tēma", "Conan's Theme", "Detective Conan Original Soundtrack 1"],
      ["14:45", "事件現場 （オリジナルver.）", "Jiken Genba (Orijinaru ver.)", "Scene of the Case (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["15:55", "対決のテーマ （落ち着きver.）", "Taiketsu no Tēma (Ochitsuki ver.)", "Showdown Theme (Calm ver.)", "Detective Conan Original Soundtrack 2"],
      ["17:37", "緊迫", "Kinpaku", "Tension", "Detective Conan Original Soundtrack 2"],
      ["20:26", "名探偵コナン・メインテーマ<hr>「名探偵コナン」メイン・テーマ （予告）", "Meitantei Konan・Mein Tēma<hr>\"Meitantei Konan\" Mein・Tēma (Yokoku)", "Detective Conan Main Theme<hr>\"Detective Conan\" Main Theme (Preview)", "Detective Conan Original Soundtrack 1<hr>Detective Conan Original Soundtrack 2"],
      ["20:49", "蘭のテーマ", "Ran no Tēma", "Ran's Theme", "Detective Conan Original Soundtrack 1"],
      ["21:27", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP"],
      ["23:35", "事件解決 （意気揚々ver.）", "Jiken Kaiketsu (Ikiyōyō ver.)", "Case Resolution (Triumphant ver.)", "Detective Conan Original Soundtrack 2"],
      ["23:40", "事件解決", "Jiken Kaiketsu", "Case Resolution", "Detective Conan Original Soundtrack 1"]
    ]
  },
  {
    id: "5",
    data: [
      ["00:00", "胸がドキドキ", "Mune ga Dokidoki", "The Pounding of My Heart", "Mune ga Dokidoki"],
      ["01:46", "名探偵コナン・メインテーマ (タイトルver.)", "Meitantei Konan・Mein Tēma (Taitoru ver.)", "Detective Conan Main Theme (Title ver.)", "Unreleased"],
      ["01:56", "蘭のテーマ", "Ran no Tēma", "Ran's Theme", "Detective Conan Original Soundtrack 1"],
      ["04:02", "沈む夕陽", "Shizumu Yūhi", "Depressing Sunset", "Detective Conan Original Soundtrack 1"],
      ["07:57", "1996 Unreleased BGM 1 - 脅迫 （パート１）", "-", "- - Threat (Part 1)", "- - Detective Conan Original Soundtrack 2"],
      ["09:40", "1996 Unreleased BGM 2", "", "", ""],
      ["11:14", "悪のテーマ （パート１）", "Aku no Tēma (Pāto 1)", "Theme of Evil (Part 1)", "Detective Conan Original Soundtrack 2"],
      ["12:16", "事件現場 （オリジナルver.）", "Jiken Genba (Orijinaru ver.)", "Scene of the Case (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["15:14", "悪のテーマ （パート３）", "Aku no Tēma (Pāto 3)", "Theme of Evil (Part 3)", "Detective Conan Original Soundtrack 2"],
      ["16:11", "緊迫", "Kinpaku", "Tension", "Detective Conan Original Soundtrack 2"],
      ["18:45", "事件現場 （オリジナルver.）", "Jiken Genba (Orijinaru ver.)", "Scene of the Case (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["19:43", "絶体絶命", "Zettai Zetsumei", "A Desperate Situation", "Detective Conan Original Soundtrack 2"],
      ["20:09", "名探偵コナン・メインテーマ - 「名探偵コナン」メイン・テーマ （予告）", "Meitantei Konan・Mein Tēma - \"Meitantei Konan\" Mein・Tēma (Yokoku)", "Detective Conan Main Theme - \"Detective Conan\" Main Theme (Preview)", "Detective Conan Original Soundtrack 1 - Detective Conan Original Soundtrack 2"],
      ["20:46", "蘭のテーマ", "Ran no Tēma", "Ran's Theme", "Detective Conan Original Soundtrack 1"],
      ["21:41", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP"],
      ["23:42", "コナンの勝利", "Konan no Shōri", "Conan's Victory", "Detective Conan Original Soundtrack 1"]
    ]
  },
  {
    id: "6",
    data: [
      ["00:00", "胸がドキドキ", "Mune ga Dokidoki", "The Pounding of My Heart", "Mune ga Dokidoki"],
      ["01:46", "名探偵コナン・メインテーマ (タイトルver.)", "Meitantei Konan・Mein Tēma (Taitoru ver.)", "Detective Conan Main Theme (Title ver.)", "Unreleased"],
      ["02:53", "蘭のテーマ", "Ran no Tēma", "Ran's Theme", "Detective Conan Original Soundtrack 1"],
      ["04:54", "蘭・愛のテーマ （ギターver.）", "Ran・Ai no Tēma (Gitā ver.)", "Ran's Love Theme (Guitar ver.)", "Detective Conan Original Soundtrack 2"],
      ["05:47", "小さな巨人", "Chiisana Kyojin", "A Small Great Person", "Detective Conan Original Soundtrack 1"],
      ["05:58", "コナンの勝利", "Konan no Shōri", "Conan's Victory", "Detective Conan Original Soundtrack 1"],
      ["09:31", "コナンの勝利 （夜空ver.）", "Konan no Shōri (Yozora ver.)", "Conan's Victory (Night Sky ver.)", "Detective Conan Original Soundtrack 2"],
      ["10:27", "1996 Unreleased BGM 2", "", "", ""],
      ["11:38", "沈む夕陽", "Shizumu Yūhi", "Depressing Sunset", "Detective Conan Original Soundtrack 1"],
      ["14:01", "脅迫 （パート２）", "Kyōhaku (Pāto 2)", "Threat (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["15:26", "悪のテーマ （パート２）", "Aku no Tēma (Pāto 2)", "Theme of Evil (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["16:15", "事件現場 （オリジナルver.）", "Jiken Genba (Orijinaru ver.)", "Scene of the Case (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["17:21", "犯人のアジト", "Hannin no Ajito", "The Culprit's Hideout", "Detective Conan Original Soundtrack 1"],
      ["18:50", "緊迫", "Kinpaku", "Tension", "Detective Conan Original Soundtrack 2"],
      ["20:42", "名探偵コナン・メインテーマ （ヴォーカル・ヴァージョン)", "Meitantei Konan・Mein Tēma (Vōkaru・Vājon)", "Detective Conan Main Theme (Vocal Version)", "Detective Conan Original Soundtrack 1"],
      ["21:18", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP"],
      ["23:26", "蘭・愛のテーマ （ギターver.）", "Ran・Ai no Tēma (Gitā ver.)", "Ran's Love Theme (Guitar ver.)", "Detective Conan Original Soundtrack 2"]
    ]
  },
  {
    id: "7",
    data: [
      ["00:00", "胸がドキドキ", "Mune ga Dokidoki", "The Pounding of My Heart", "Mune ga Dokidoki"],
      ["01:36", "蘭のテーマ", "Ran no Tēma", "Ran's Theme", "Detective Conan Original Soundtrack 1"],
      ["02:56", "小さな巨人", "Chiisana Kyojin", "A Small Great Person", "Detective Conan Original Soundtrack 1"],
      ["04:24", "犯人のアジト （忍び込みver.）", "Hannin no Ajito (Shinobikomi ver.)", "The Culprit's Hideout (Creeping In ver.)", "Detective Conan Original Soundtrack 2"],
      ["05:49", "(Unreleased Sound Effect/BGM)", "", "", ""],
      ["07:15", "(Unreleased Sound Effect/BGM)", "", "", ""],
      ["08:43", "沈む夕陽", "Shizumu Yūhi", "Depressing Sunset", "Detective Conan Original Soundtrack 1"],
      ["10:00", "(Unreleased Sound Effect/BGM)", "", "", ""],
      ["11:31", "犯人現わる！", "Hannin Arawaru!", "The Culprit is Revealed!", "Detective Conan Original Soundtrack 2"],
      ["12:50", "悪のテーマ （パート２）", "Aku no Tēma (Pāto 2)", "Theme of Evil (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["14:07", "事件発生！", "Jiken Hassei!", "A Case Springs Forth!", "Detective Conan Original Soundtrack 2"],
      ["15:34", "緊迫", "Kinpaku", "Tension", "Detective Conan Original Soundtrack 2"],
      ["16:46", "名探偵コナン・メインテーマ", "Meitantei Konan・Mein Tēma", "Detective Conan Main Theme", "Detective Conan Original Soundtrack 1"],
      ["18:12", "「名探偵コナン」メイン・テーマ（バラードバージョン）", "\"Meitantei Konan\" Mein・Tēma (Barādo ver.)", "\"Detective Conan\" Main Theme (Ballad ver.)", "Detective Conan Original Soundtrack 2"],
      ["19:37", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP"],
      ["21:05", "悪のテーマ （パート１）", "Aku no Tēma (Pāto 1)", "Theme of Evil (Part 1)", "Detective Conan Original Soundtrack 2"],
      ["22:25", "毛利小五郎のテーマ （ファンキーver.）", "Mōri Kogorō no Tēma (Fankii ver.)", "Kogoro Mouri's Theme (Funky ver.)", "Detective Conan Original Soundtrack 2"]
    ]
  },
  {
    id: "8",
    data: [
      ["00:00", "胸がドキドキ", "Mune ga Dokidoki", "The Pounding of My Heart", "Mune ga Dokidoki"],
      ["00:53", "蘭のテーマ", "Ran no Tēma", "Ran's Theme", "Detective Conan Original Soundtrack 1"],
      ["02:45", "蘭・愛のテーマ", "Ran・Ai no Tēma", "Ran's Love Theme", "Detective Conan Original Soundtrack 1"],
      ["04:05", "脅迫 （パート２）", "Kyōhaku (Pāto 2)", "Threat (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["05:19", "悪のテーマ （パート２）", "Aku no Tēma (Pāto 2)", "Theme of Evil (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["07:01", "悪のテーマ （パート１）", "Aku no Tēma (Pāto 1)", "Theme of Evil (Part 1)", "Detective Conan Original Soundtrack 2"],
      ["08:39", "沈む夕陽", "Shizumu Yūhi", "Depressing Sunset", "Detective Conan Original Soundtrack 1"],
      ["09:58", "推理 （不気味ver.）", "Suiri (Bukimi ver.)", "Deduction (Ominous ver.)", "Detective Conan Original Soundtrack 2"],
      ["10:58", "事件現場 （オリジナルver.）", "Jiken Genba (Orijinaru ver.)", "Scene of the Case (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["11:41", "推理 （オリジナルver.）", "Suiri (Orijinaru ver.)", "Deduction (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["12:48", "事件現場 （オリジナルver.）", "Jiken Genba (Orijinaru ver.)", "Scene of the Case (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["13:51", "悪のテーマ （パート２）", "Aku no Tēma (Pāto 2)", "Theme of Evil (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["15:20", "対決のテーマ （落ち着きver.）", "Taiketsu no Tēma (Ochitsuki ver.)", "Showdown Theme (Calm ver.)", "Detective Conan Original Soundtrack 2"],
      ["16:18", "名探偵コナン・メインテーマ （ヴォーカル・ヴァージョン)", "Meitantei Konan・Mein Tēma (Vōkaru・Vājon)", "Detective Conan Main Theme (Vocal Version)", "Detective Conan Original Soundtrack 1"],
      ["17:24", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP"],
      ["18:46", "事件解決 （意気揚々ver.）", "Jiken Kaiketsu (Ikiyōyō ver.)", "Case Resolution (Triumphant ver.)", "Detective Conan Original Soundtrack 2"]
    ]
  },
  {
    id: "9",
    data: [
      ["00:00", "胸がドキドキ", "Mune ga Dokidoki", "The Pounding of My Heart", "Mune ga Dokidoki"],
      ["01:46", "推理 （オリジナルver.）", "Suiri (Orijinaru ver.)", "Deduction (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["02:22", "事件現場 （謎ver.）", "Jiken Genba (Nazo ver.)", "Scene of the Case (Mystery ver.)", "Detective Conan Original Soundtrack 2"],
      ["03:08", "犯人のアジト （忍び込みver.)", "Hannin no Ajito (Shinobikomi ver.)", "The Culprit's Hideout (Creeping In ver.)", "Detective Conan Original Soundtrack 2"],
      ["05:23", "悪のテーマ （パート２）", "Aku no Tēma (Pāto 2)", "Theme of Evil (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["06:48", "(Unreleased BGM 1)", "", "", ""],
      ["07:42", "推理 （不気味ver.）", "Suiri (Bukimi ver.)", "Deduction (Ominous ver.)", "Detective Conan Original Soundtrack 2"],
      ["08:18", "事件現場 （オリジナルver.）", "Jiken Genba (Orijinaru ver.)", "Scene of the Case (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["10:08", "名探偵コナン・メインテーマ", "Meitantei Konan・Mein Tēma", "Detective Conan Main Theme", "Detective Conan Original Soundtrack 1"],
      ["11:11", "「名探偵コナン」メイン・テーマ （予告）", "\"Meitantei Konan\" Mein・Tēma (Yokoku)", "\"Detective Conan\" Main Theme (Preview)", "Detective Conan Original Soundtrack 2"],
      ["11:41", "犯人のアジト", "Hannin no Ajito", "The Culprit's Hideout", "Detective Conan Original Soundtrack 1"],
      ["13:35", "緊迫", "Kinpaku", "Tension", "Detective Conan Original Soundtrack 2"],
      ["15:40", "犯人現わる！", "Hannin Arawaru!", "The Culprit is Revealed!", "Detective Conan Original Soundtrack 2"],
      ["16:44", "それいけコナン （哀愁ヴァージョン）", "Soreike Konan (Aishū Vājon)", "Let's Go Conan (Sorrow Version)", "Detective Conan Original Soundtrack 1"],
      ["18:04", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP"],
      ["19:00", "それいけコナン（超早ver.）", "Soreike Konan (Chōhaya ver.)", "Let's Go Conan (Very Fast ver.)", "Detective Conan Original Soundtrack 2"]
    ]
  },
  {
    id: "10",
    data: [
      ["00:00", "胸がドキドキ", "Mune ga Dokidoki", "The Pounding of My Heart", "Mune ga Dokidoki"],
      ["01:46", "蘭のテーマ", "Ran no Tēma", "Ran's Theme", "Detective Conan Original Soundtrack 1"],
      ["03:13", "毛利小五郎のテーマ （ファンキーver.）", "Mōri Kogorō no Tēma (Fankii ver.)", "Kogoro Mouri's Theme (Funky ver.)", "Detective Conan Original Soundtrack 2"],
      ["05:29", "悪のテーマ （パート２）", "Aku no Tēma (Pāto 2)", "Theme of Evil (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["06:58", "悪のテーマ （パート２）", "Aku no Tēma (Pāto 2)", "Theme of Evil (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["08:20", "犯人のアジト （いよいよver.）", "Hannin no Ajito (Iyoiyo ver.)", "The Culprit's Hideout (More and More ver.)", "Detective Conan Original Soundtrack 2"],
      ["10:01", "事件現場 （オリジナルver.）", "Jiken Genba (Orijinaru ver.)", "Scene of the Case (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["11:55", "緊迫", "Kinpaku", "Tension", "Detective Conan Original Soundtrack 2"],
      ["13:17", "沈む夕陽", "Shizumu Yūhi", "Depressing Sunset", "Detective Conan Original Soundtrack 1"],
      ["14:38", "(Unreleased BGM 2)", "", "", ""],
      ["15:45", "脅迫 （パート２）", "Kyōhaku (Pāto 2)", "Threat (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["17:10", "対決のテーマ", "Taiketsu no Tēma", "Showdown Theme", "Detective Conan Original Soundtrack 1"],
      ["18:14", "コナンの夢 （夕暮れver.）", "Konan no Yume (Yūgure ver.)", "Conan's Dream (Twilight ver.)", "Detective Conan Original Soundtrack 2"],
      ["19:37", "(Unreleased BGM 2)", "", "", ""],
      ["20:43", "蘭のテーマ（涙ver.）", "Ran no Tēma (Namida ver.)", "Ran's Theme (Tearful ver.)", "Detective Conan Original Soundtrack 2"],
      ["21:50", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP"],
      ["23:48", "それいけコナン （ミディアム・テンポver.）", "Soreike Konan (Midiamu・Tenpo ver.)", "Let's Go Conan (Medium Tempo ver.)", "Detective Conan Original Soundtrack 2"]
    ]
  },
  {
    id: "11",
    data: [
      ["00:00", "胸がドキドキ", "Mune ga Dokidoki", "The Pounding of My Heart", "Mune ga Dokidoki"],
      ["00:00", "Moonlight Sonata First Movement", "", "", ""],
      ["00:00", "Moonlight Sonata First Movement", "", "", ""],
      ["00:00", "Unreleased BGM 1", "", "", ""],
      ["00:00", "Unreleased Sound Effect/BGM", "", "", ""],
      ["00:00", "Moonlight Sonata First Movement", "", "", ""],
      ["00:00", "悪のテーマ （パート２）", "Aku no Tēma (Pāto 2)", "Theme of Evil (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "事件現場 （オリジナルver.）", "Jiken Genba (Orijinaru ver.)", "Scene of the Case (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "事件現場 （謎ver.）", "Jiken Genba (Nazo ver.)", "Scene of the Case (Mystery ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "Unreleased BGM 1", "", "", ""],
      ["00:00", "Moonlight Sonata Second Movement", "", "", ""],
      ["00:00", "事件現場 （オリジナルver.）", "Jiken Genba (Orijinaru ver.)", "Scene of the Case (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "犯人のアジト （いよいよver.）", "Hannin no Ajito (Iyoiyo ver.)", "The Culprit's Hideout (More and More ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "緊迫", "Kinpaku", "Tension", "Detective Conan Original Soundtrack 2"],
      ["00:00", "脅迫 （パート２）", "Kyōhaku (Pāto 2)", "Threat (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "コナンのテーマ", "Konan no Tēma", "Conan's Theme", "Detective Conan Original Soundtrack 1"],
      ["00:00", "事件現場 （オリジナルver.）", "Jiken Genba (Orijinaru ver.)", "Scene of the Case (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "犯人のアジト", "Hannin no Ajito", "The Culprit's Hideout", "Detective Conan Original Soundtrack 1"],
      ["00:00", "沈む夕陽", "Shizumu Yūhi", "Depressing Sunset", "Detective Conan Original Soundtrack 1"],
      ["00:00", "Moonlight Sonata First Movement", "", "", ""],
      ["00:00", "Unreleased Sound Effect/BGM", "", "", ""],
      ["00:00", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP"]
    ]
  },
  {
    id: "12",
    data: [
      ["00:00", "胸がドキドキ", "Mune ga Dokidoki", "The Pounding of My Heart", "Mune ga Dokidoki"],
      ["02:36", "対決のテーマ （落ち着きver.）", "Taiketsu no Tēma (Ochitsuki ver.)", "Showdown Theme (Calm ver.)", "Detective Conan Original Soundtrack 2"],
      ["03:42", "蘭のテーマ", "Ran no Tēma", "Ran's Theme", "Detective Conan Original Soundtrack 1"],
      ["04:59", "そばにいるから", "Soba ni Iru Kara", "Because I'm By Your Side", "Mune ga Dokidoki"],
      ["07:12", "悪のテーマ （パート２）", "Aku no Tēma (Pāto 2)", "Theme of Evil (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["08:20", "緊迫", "Kinpaku", "Tension", "Detective Conan Original Soundtrack 2"],
      ["09:36", "脅迫 （パート２）", "Kyōhaku (Pāto 2)", "Threat (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["11:00", "事件現場 （オリジナルver.）", "Jiken Genba (Orijinaru ver.)", "Scene of the Case (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["12:36", "事件現場 （オリジナルver.）", "Jiken Genba (Orijinaru ver.)", "Scene of the Case (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["14:28", "(Unreleased BGM 2)", "", "", ""],
      ["16:14", "名探偵コナン・メインテーマ", "Meitantei Konan・Mein Tēma", "Detective Conan Main Theme", "Detective Conan Original Soundtrack 1"],
      ["17:32", "「名探偵コナン」メイン・テーマ （予告）", "\"Meitantei Konan\" Mein・Tēma (Yokoku)", "\"Detective Conan\" Main Theme (Preview)", "Detective Conan Original Soundtrack 2"],
      ["19:15", "名探偵コナン・メインテーマ", "Meitantei Konan・Mein Tēma", "Detective Conan Main Theme", "Detective Conan Original Soundtrack 1"],
      ["20:46", "事件解決", "Jiken Kaiketsu", "Case Resolution", "Detective Conan Original Soundtrack 1"],
      ["22:00", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP"],
      ["23:45", "事件解決 （意気揚々ver.）", "Jiken Kaiketsu (Ikiyōyō ver.)", "Case Resolution (Triumphant ver.)", "Detective Conan Original Soundtrack 2"]
    ]
  },
  {
    id: "13",
    data: [
      ["00:00", "胸がドキドキ", "Mune ga Dokidoki", "The Pounding of My Heart", "Mune ga Dokidoki"],
      ["00:00", "小さな巨人", "Chiisana Kyojin", "A Small Great Person", "Detective Conan Original Soundtrack 1"],
      ["00:00", "犯人のアジト （忍び込みver.）", "Hannin no Ajito (Shinobikomi ver.)", "The Culprit's Hideout (Creeping In ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "(Unreleased BGM 2)", "", "", ""],
      ["00:00", "事件現場 （オリジナルver.）", "Jiken Genba (Orijinaru ver.)", "Scene of the Case (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "悪のテーマ （パート１）", "Aku no Tēma (Pāto 1)", "Theme of Evil (Part 1)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "犯人のアジト （いよいよver.）", "Hannin no Ajito (Iyoiyo ver.)", "The Culprit's Hideout (More and More ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "(Unreleased Sound Effect/BGM)", "", "", ""],
      ["00:00", "沈む夕陽", "Shizumu Yūhi", "Depressing Sunset", "Detective Conan Original Soundtrack 1"],
      ["00:00", "名探偵コナン・メインテーマ", "Meitantei Konan・Mein Tēma", "Detective Conan Main Theme", "Detective Conan Original Soundtrack 1"],
      ["00:00", "「名探偵コナン」メイン・テーマ （予告）", "\"Meitantei Konan\" Mein・Tēma (Yokoku)", "\"Detective Conan\" Main Theme (Preview)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "緊迫", "Kinpaku", "Tension", "Detective Conan Original Soundtrack 2"],
      ["00:00", "対決のテーマ （落ち着きver.）", "Taiketsu no Tēma (Ochitsuki ver.)", "Showdown Theme (Calm ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "蘭のテーマ", "Ran no Tēma", "Ran's Theme", "Detective Conan Original Soundtrack 1"],
      ["00:00", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP"]
    ]
  },
  {
    id: "14",
    data: [
      ["00:00", "胸がドキドキ", "Mune ga Dokidoki", "The Pounding of My Heart", "Mune ga Dokidoki"],
      ["00:00", "悪のテーマ （パート２）", "Aku no Tēma (Pāto 2)", "Theme of Evil (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "犯人のアジト （忍び込みver.)", "Hannin no Ajito (Shinobikomi ver.)", "The Culprit's Hideout (Creeping In ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "脅迫 （パート１）", "Kyōhaku (Pāto 1)", "Threat (Part 1)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "事件現場 （オリジナルver.）", "Jiken Genba (Orijinaru ver.)", "Scene of the Case (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "犯人のアジト", "Hannin no Ajito", "The Culprit's Hideout", "Detective Conan Original Soundtrack 1"],
      ["00:00", "緊迫", "Kinpaku", "Tension", "Detective Conan Original Soundtrack 2"],
      ["00:00", "コナンのテーマ", "Konan no Tēma", "Conan's Theme", "Detective Conan Original Soundtrack 1"],
      ["00:00", "名探偵コナン・メインテーマ", "Meitantei Konan・Mein Tēma", "Detective Conan Main Theme", "Detective Conan Original Soundtrack 1"],
      ["00:00", "「名探偵コナン」メイン・テーマ （予告）", "\"Meitantei Konan\" Mein・Tēma (Yokoku)", "\"Detective Conan\" Main Theme (Preview)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "蘭のテーマ", "Ran no Tēma", "Ran's Theme", "Detective Conan Original Soundtrack 1"],
      ["00:00", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP"],
      ["00:00", "事件解決 （意気揚々ver.）", "Jiken Kaiketsu (Ikiyōyō ver.)", "Case Resolution (Triumphant ver.)", "Detective Conan Original Soundtrack 2"]
    ]
  },
  {
    id: "15",
    data: [
      ["00:00", "胸がドキドキ", "Mune ga Dokidoki", "The Pounding of My Heart", "Mune ga Dokidoki"],
      ["00:00", "前話回想", "Zenwa Kaisō", "Previous Story Recollection", "Detective Conan Original Soundtrack 1"],
      ["00:00", "脅迫 （パート２）", "Kyōhaku (Pāto 2)", "Threat (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "悪のテーマ （パート２）", "Aku no Tēma (Pāto 2)", "Theme of Evil (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "犯人のアジト （忍び込みver.)", "Hannin no Ajito (Shinobikomi ver.)", "The Culprit's Hideout (Creeping In ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "犯人のアジト", "Hannin no Ajito", "The Culprit's Hideout", "Detective Conan Original Soundtrack 1"],
      ["00:00", "事件現場 （オリジナルver.）", "Jiken Genba (Orijinaru ver.)", "Scene of the Case (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "対決のテーマ （落ち着きver.）", "Taiketsu no Tēma (Ochitsuki ver.)", "Showdown Theme (Calm ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "沈む夕陽", "Shizumu Yūhi", "Depressing Sunset", "Detective Conan Original Soundtrack 1"],
      ["00:00", "コナンのテーマ（バラード・ヴァージョン)", "Konan no Tēma (Barādo・Vājon)", "Conan's Theme (Ballad Version)", "Detective Conan Original Soundtrack 1"],
      ["00:00", "絶体絶命", "Zettai Zetsumei", "A Desperate Situation", "Detective Conan Original Soundtrack 2"],
      ["00:00", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP"],
      ["00:00", "のんびり気分", "Nonbiri Kibun", "Carefree Feeling", "Detective Conan Original Soundtrack 1"]
    ]
  },
  {
    id: "16",
    data: [
      ["1", "胸がドキドキ", "Mune ga Dokidoki", "The Pounding of My Heart", "Mune ga Dokidoki"],
      ["2", "脅迫 （パート２）", "Kyōhaku (Pāto 2)", "Threat (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["3", "事件現場 （謎ver.）", "Jiken Genba (Nazo ver.)", "Scene of the Case (Mystery ver.)", "Detective Conan Original Soundtrack 2"],
      ["4", "悪のテーマ （パート２）", "Aku no Tēma (Pāto 2)", "Theme of Evil (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["5", "事件現場 （オリジナルver.）", "Jiken Genba (Orijinaru ver.)", "Scene of the Case (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["6", "犯人のアジト （忍び込みver.)", "Hannin no Ajito (Shinobikomi ver.)", "The Culprit's Hideout (Creeping In ver.)", "Detective Conan Original Soundtrack 2"],
      ["7", "犯人のアジト （いよいよver.）", "Hannin no Ajito (Iyoiyo ver.)", "The Culprit's Hideout (More and More ver.)", "Detective Conan Original Soundtrack 2"],
      ["8", "沈む夕陽", "Shizumu Yūhi", "Depressing Sunset", "Detective Conan Original Soundtrack 1"],
      ["9", "対決のテーマ （落ち着きver.）", "Taiketsu no Tēma (Ochitsuki ver.)", "Showdown Theme (Calm ver.)", "Detective Conan Original Soundtrack 2"],
      ["10", "それいけコナン （哀愁ヴァージョン）", "Soreike Konan (Aishū Vājon)", "Let's Go Conan (Sorrow Version)", "Detective Conan Original Soundtrack 1"],
      ["11", "(Unreleased BGM 3)", "", "", ""],
      ["12", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP"],
      ["13", "毛利小五郎のテーマ （ファンキーver.）", "Mōri Kogorō no Tēma (Fankii ver.)", "Kogoro Mouri's Theme (Funky ver.)", "Detective Conan Original Soundtrack 2"]
    ]
  },
  {
    id: "17",
    data: [
      ["00:00", "胸がドキドキ", "Mune ga Dokidoki", "The Pounding of My Heart", "Mune ga Dokidoki"],
      ["01:46", "はずむ蘭", "Hazumu Ran", "Bouncing Ran", "Detective Conan Original Soundtrack 1"],
      ["03:08", "小さな巨人", "Chiisana Kyojin", "A Small Great Person", "Detective Conan Original Soundtrack 1"],
      ["05:23", "事件現場 （オリジナルver.）", "Jiken Genba (Orijinaru ver.)", "Scene of the Case (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["06:48", "事件現場（ショートver.）", "Jiken Genba (Shōto ver.)", "Scene of the Case (Short ver.)", "Detective Conan Original Soundtrack 2"],
      ["08:18", "(Unreleased BGM 2)", "", "", ""],
      ["10:08", "(Unreleased BGM 2)", "", "", ""],
      ["11:41", "緊迫", "Kinpaku", "Tension", "Detective Conan Original Soundtrack 2"],
      ["13:35", "沈む夕陽", "Shizumu Yūhi", "Depressing Sunset", "Detective Conan Original Soundtrack 1"],
      ["15:40", "Happy End", "Happy End", "Happy End", "Happy End"],
      ["16:44", "対決のテーマ", "Taiketsu no Tēma", "Showdown Theme", "Detective Conan Original Soundtrack 1"],
      ["18:04", "絶体絶命", "Zettai Zetsumei", "A Desperate Situation", "Detective Conan Original Soundtrack 2"],
      ["19:00", "名探偵コナン・メインテーマ", "Meitantei Konan・Mein Tēma", "Detective Conan Main Theme", "Detective Conan Original Soundtrack 1"],
      ["20:16", "「名探偵コナン」メイン・テーマ （予告）", "\"Meitantei Konan\" Mein・Tēma (Yokoku)", "\"Detective Conan\" Main Theme (Preview)", "Detective Conan Original Soundtrack 2"],
      ["20:44", "蘭のテーマ", "Ran no Tēma", "Ran's Theme", "Detective Conan Original Soundtrack 1"],
      ["21:21", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP"],
      ["23:19", "事件解決 （意気揚々ver.）", "Jiken Kaiketsu (Ikiyōyō ver.)", "Case Resolution (Triumphant ver.)", "Detective Conan Original Soundtrack 2"]
    ]
  },
  {
    id: "18",
    data: [
      ["00:00", "胸がドキドキ", "Mune ga Dokidoki", "The Pounding of My Heart", "Mune ga Dokidoki"],
      ["00:00", "蘭のテーマ", "Ran no Tēma", "Ran's Theme", "Detective Conan Original Soundtrack 1"],
      ["00:00", "のんびり気分", "Nonbiri Kibun", "Carefree Feeling", "Detective Conan Original Soundtrack 1"],
      ["00:00", "蘭・愛のテーマ", "Ran・Ai no Tēma", "Ran's Love Theme", "Detective Conan Original Soundtrack 1"],
      ["00:00", "蘭のテーマ（優しさver.）", "Ran no Tēma (Yasashisa ver.)", "Ran's Theme (Gentle ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "事件現場 （謎ver.）", "Jiken Genba (Nazo ver.)", "Scene of the Case (Mystery ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "悪のテーマ （パート２）", "Aku no Tēma (Pāto 2)", "Theme of Evil (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "事件現場 （オリジナルver.）", "Jiken Genba (Orijinaru ver.)", "Scene of the Case (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "犯人のアジト", "Hannin no Ajito", "The Culprit's Hideout", "Detective Conan Original Soundtrack 1"],
      ["00:00", "沈む夕陽", "Shizumu Yūhi", "Depressing Sunset", "Detective Conan Original Soundtrack 1"],
      ["00:00", "名探偵コナン・メインテーマ （ヴォーカル・ヴァージョン)", "Meitantei Konan・Mein Tēma (Vōkaru・Vājon)", "Detective Conan Main Theme (Vocal Version)", "Detective Conan Original Soundtrack 1"],
      ["00:00", "コナンのテーマ（バラード・ヴァージョン)", "Konan no Tēma (Barādo・Vājon)", "Conan's Theme (Ballad Version)", "Detective Conan Original Soundtrack 1"],
      ["00:00", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP"],
      ["00:00", "蘭のテーマ", "Ran no Tēma", "Ran's Theme", "Detective Conan Original Soundtrack 1"]
    ]
  },
  {
    id: "19",
    data: [
      ["00:00", "胸がドキドキ", "Mune ga Dokidoki", "The Pounding of My Heart", "Mune ga Dokidoki"],
      ["00:00", "(Unreleased BGM 1)", "", "", ""],
      ["00:00", "蘭のテーマ", "Ran no Tēma", "Ran's Theme", "Detective Conan Original Soundtrack 1"],
      ["00:00", "のんびり気分", "Nonbiri Kibun", "Carefree Feeling", "Detective Conan Original Soundtrack 1"],
      ["00:00", "(Unreleased BGM 1)", "", "", ""],
      ["00:00", "犯人のアジト （忍び込みver.)", "Hannin no Ajito (Shinobikomi ver.)", "The Culprit's Hideout (Creeping In ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "犯人のアジト", "Hannin no Ajito", "The Culprit's Hideout", "Detective Conan Original Soundtrack 1"],
      ["00:00", "推理 （オリジナルver.）", "Suiri (Orijinaru ver.)", "Deduction (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "事件現場 （オリジナルver.）", "Jiken Genba (Orijinaru ver.)", "Scene of the Case (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "事件現場 （謎ver.）", "Jiken Genba (Nazo ver.)", "Scene of the Case (Mystery ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "対決のテーマ （落ち着きver.）", "Taiketsu no Tēma (Ochitsuki ver.)", "Showdown Theme (Calm ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "コナンのテーマ（バラード・ヴァージョン)", "Konan no Tēma (Barādo・Vājon)", "Conan's Theme (Ballad Version)", "Detective Conan Original Soundtrack 1"],
      ["00:00", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP"],
      ["00:00", "蘭のテーマ", "Ran no Tēma", "Ran's Theme", "Detective Conan Original Soundtrack 1"]
    ]
  },
  {
    id: "20",
    data: [
      ["00:00", "胸がドキドキ", "Mune ga Dokidoki", "The Pounding of My Heart", "Mune ga Dokidoki"],
      ["00:00", "悪のテーマ2", "Aku no Tēma 2", "Theme of Evil 2", "Detective Conan Original Soundtrack 2"],
      ["00:00", "蘭のテーマ", "Ran no Tēma", "Ran's Theme", "Detective Conan Original Soundtrack 1"],
      ["00:00", "はずむ蘭 （音コンテ）", "Hazumu Ran (Oto Konte)", "Bouncing Ran (Sound Cue)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "はずむ蘭 （音コンテ）", "Hazumu Ran (Oto Konte)", "Bouncing Ran (Sound Cue)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "推理1", "Suiri 1", "Deduction 1", "Detective Conan Original Soundtrack 2"],
      ["00:00", "緊迫1", "Kinpaku 1", "Tension 1", "Detective Conan Original Soundtrack 2"],
      ["00:00", "緊迫2", "Kinpaku 2", "Tension 2", "Detective Conan Original Soundtrack 2"],
      ["00:00", "悪のテーマ1", "Aku no Tēma 1", "Theme of Evil 1", "Detective Conan Original Soundtrack 2"],
      ["00:00", "事件現場 （オリジナルver.）", "Jiken Genba (Orijinaru ver.)", "Scene of the Case (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "沈む夕陽", "Shizumu Yūhi", "Depressing Sunset", "Detective Conan Original Soundtrack 1"],
      ["00:00", "対決のテーマ （落ち着きver.）", "Taiketsu no Tēma (Ochitsuki ver.)", "Showdown Theme (Calm ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "コナンのテーマ （バラード・ヴァージョン)", "Konan no Tēma (Barādo・Vājon)", "Conan's Theme (Ballad Version)", "Detective Conan Original Soundtrack 1"],
      ["00:00", "蘭のテーマ", "Ran no Tēma", "Ran's Theme", "Detective Conan Original Soundtrack 1"],
      ["00:00", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP"],
      ["00:00", "はずむ蘭 （音コンテ）", "Hazumu Ran (Oto Konte)", "Bouncing Ran (Variation)", "Detective Conan Original Soundtrack 1"],
      ["00:00", "それいけコナン1", "Soreike Konan 1", "Let's Go Conan 1", "Detective Conan Original Soundtrack 2"]
    ]
  },
  {
    id: "21",
    data: [
      ["00:00", "胸がドキドキ", "Mune ga Dokidoki", "The Pounding of My Heart", "Mune ga Dokidoki"],
      ["00:00", "蘭のテーマ", "Ran no Tēma", "Ran's Theme", "Detective Conan Original Soundtrack 1"],
      ["00:00", "蘭・愛のテーマ", "Ran・Ai no Tēma", "Ran's Love Theme", "Detective Conan Original Soundtrack 1"],
      ["00:00", "事件現場２", "Jiken Genba 2", "Scene of the Case 2", "Detective Conan Original Soundtrack 2"],
      ["00:00", "のんびり気分２", "Nonbiri Kibun 2", "Carefree Feeling 2", "Detective Conan Original Soundtrack 2"],
      ["00:00", "事件現場 （オリジナルver.）", "Jiken Genba (Orijinaru ver.)", "Scene of the Case (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "事件現場 （謎ver.）", "Jiken Genba (Nazo ver.)", "Scene of the Case (Mystery ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "推理 （オリジナルver.）", "Suiri (Orijinaru ver.)", "Deduction (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "悪のテーマ１", "Aku no Tēma 1", "Theme of Evil 1", "Detective Conan Original Soundtrack 2"],
      ["00:00", "沈む夕陽１", "Shizumu Yūhi 1", "Depressing Sunset 1", "Detective Conan Original Soundtrack 2"],
      ["00:00", "緊迫１", "Kinpaku 1", "Tension 1", "Detective Conan Original Soundtrack 2"],
      ["00:00", "沈む夕陽３", "Shizumu Yūhi 3", "Depressing Sunset 3", "Detective Conan Original Soundtrack 2"],
      ["00:00", "対決のテーマ （落ち着きver.）", "Taiketsu no Tēma (Ochitsuki ver.)", "Showdown Theme (Calm ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "コナンの夢 （夕暮れver.）", "Konan no Yume (Yūgure ver.)", "Conan's Dream (Twilight ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "「名探偵コナン」メイン・テーマ（バラードバージョン）", "\"Meitantei Konan\" Mein・Tēma (Barādo ver.)", "\"Detective Conan\" Main Theme (Ballad ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP"]
    ]
  },
  {
    id: "22",
    data: [
      ["00:00", "胸がドキドキ", "Mune ga Dokidoki", "The Pounding of My Heart", "Mune ga Dokidoki"],
      ["00:00", "蘭のテーマ （音コンテ）", "Ran no Tēma (Oto Konte)", "Ran's Theme (Sound Cue)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "推理１", "Suiri 1", "Deduction 1", "Detective Conan Original Soundtrack 2"],
      ["00:00", "蘭・愛のテーマ （ギターver.）", "Ran・Ai no Tēma (Gitā ver.)", "Ran's Love Theme (Guitar ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "脅迫 （パート２）", "Kyōhaku (Pāto 2)", "Threat (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "事件現場 （謎ver.）", "Jiken Genba (Nazo ver.)", "Scene of the Case (Mystery ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "事件現場２", "Jiken Genba 2", "Scene of the Case 2", "Detective Conan Original Soundtrack 2"],
      ["00:00", "犯人のアジト （いよいよver.）", "Hannin no Ajito (Iyoiyo ver.)", "The Culprit's Hideout (More and More ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "事件解明 （オリジナルver.）", "Jiken Kaimei (Orijinaru ver.)", "Case Clarification (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "悪のテーマ （パート２）", "Aku no Tēma (Pāto 2)", "Theme of Evil (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "犯人のアジト１", "Hannin no Ajito 1", "The Culprit's Hideout 1", "Detective Conan Original Soundtrack 2"],
      ["00:00", "蘭のテーマ （涙ver.）", "Ran no Tēma (Namida ver.)", "Ran's Theme (Tearful ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "緊迫", "Kinpaku", "Tension", "Detective Conan Original Soundtrack 2"],
      ["00:00", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP"],
      ["00:00", "コナンのテーマ１", "Konan no Tēma 1", "Conan's Theme 1", "Detective Conan Original Soundtrack 2"]
    ]
  },
  {
    id: "23",
    data: [
      ["00:00", "胸がドキドキ", "Mune ga Dokidoki", "The Pounding of My Heart", "Mune ga Dokidoki"],
      ["00:00", "名探偵コナン・メインテーマ", "Meitantei Konan・Mein Tēma", "Detective Conan Main Theme", "Detective Conan Original Soundtrack 1"],
      ["00:00", "「名探偵コナン」メイン・テーマ （予告）", "\"Meitantei Konan\" Mein・Tēma (Yokoku)", "\"Detective Conan\" Main Theme (Preview)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "悪のテーマ （パート２）", "Aku no Tēma (Pāto 2)", "Theme of Evil (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "犯人のアジト１", "Hannin no Ajito 1", "The Culprit's Hideout 1", "Detective Conan Original Soundtrack 2"],
      ["00:00", "緊迫", "Kinpaku", "Tension", "Detective Conan Original Soundtrack 2"],
      ["00:00", "事件現場２", "Jiken Genba 2", "Scene of the Case 2", "Detective Conan Original Soundtrack 2"],
      ["00:00", "事件解明 （音コンテ）", "Jiken Kaimei (Oto Konte)", "Case Clarification (Sound Cue)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "悪のテーマ２", "Aku no Tēma 2", "Theme of Evil 2", "Detective Conan Original Soundtrack 2"],
      ["00:00", "コナンのテーマ１", "Konan no Tēma 1", "Conan's Theme 1", "Detective Conan Original Soundtrack 2"],
      ["00:00", "事件現場 （謎ver.）", "Jiken Genba (Nazo ver.)", "Scene of the Case (Mystery ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "沈む夕陽", "Shizumu Yūhi", "Depressing Sunset", "Detective Conan Original Soundtrack 1"],
      ["00:00", "推理 （オリジナルver.）", "Suiri (Orijinaru ver.)", "Deduction (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "対決のテーマ （落ち着きver.）", "Taiketsu no Tēma (Ochitsuki ver.)", "Showdown Theme (Calm ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "コナンのテーマ （バラード・ヴァージョン）", "Konan no Tēma (Barādo・Vājon)", "Conan's Theme (Ballad ver.)", "Detective Conan Original Soundtrack 1"],
      ["00:00", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP"],
      ["00:00", "コナンの夢 （夕暮れver.）", "Konan no Yume (Yūgure ver.)", "Conan's Dream (Twilight ver.)", "Detective Conan Original Soundtrack 2"]
    ]
  },
  {
    id: "24",
    data: [
      ["00:00", "胸がドキドキ", "Mune ga Dokidoki", "The Pounding of My Heart", "Mune ga Dokidoki"],
      ["00:00", "蘭のテーマ （音コンテ）", "Ran no Tēma (Oto Konte)", "Ran's Theme (Sound Cue)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "(Unreleased BGM 1)", "", "", ""],
      ["00:00", "事件現場２", "Jiken Genba 2", "Scene of the Case 2", "Detective Conan Original Soundtrack 2"],
      ["00:00", "犯人のアジト （忍び込みver.）", "Hannin no Ajito (Shinobikomi ver.)", "The Culprit's Hideout (Creeping In ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "悪のテーマ （パート２）", "Aku no Tēma (Pāto 2)", "Theme of Evil (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "事件現場２", "Jiken Genba 2", "Scene of the Case 2", "Detective Conan Original Soundtrack 2"],
      ["00:00", "沈む夕陽１", "Shizumu Yūhi 1", "Depressing Sunset 1", "Detective Conan Original Soundtrack 2"],
      ["00:00", "脅迫 （パート２）", "Kyōhaku (Pāto 2)", "Threat (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "名探偵コナン・メインテーマ", "Meitantei Konan・Mein Tēma", "Detective Conan Main Theme", "Detective Conan Original Soundtrack 1"],
      ["00:00", "「名探偵コナン」メイン・テーマ （予告）", "\"Meitantei Konan\" Mein・Tēma (Yokoku)", "\"Detective Conan\" Main Theme (Preview)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "沈む夕陽１", "Shizumu Yūhi 1", "Depressing Sunset 1", "Detective Conan Original Soundtrack 2"],
      ["00:00", "緊迫", "Kinpaku", "Tension", "Detective Conan Original Soundtrack 2"],
      ["00:00", "(Unreleased BGM 1)", "", "", ""],
      ["00:00", "推理 （オリジナルver.）", "Suiri (Orijinaru ver.)", "Deduction (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "悪のテーマ１", "Aku no Tēma 1", "Theme of Evil 1", "Detective Conan Original Soundtrack 2"],
      ["00:00", "名探偵コナン・メインテーマ", "Meitantei Konan・Mein Tēma", "Detective Conan Main Theme", "Detective Conan Original Soundtrack 1"],
      ["00:00", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP"],
      ["00:00", "それいけコナン （超早ver.）", "Soreike Konan (Chōhaya ver.)", "Let's Go Conan (Very Fast ver.)", "Detective Conan Original Soundtrack 2"]
    ]
  },
  {
    id: "25",
    data: [
      ["00:00", "胸がドキドキ", "Mune ga Dokidoki", "The Pounding of My Heart", "Mune ga Dokidoki"],
      ["00:00", "緊迫", "Kinpaku", "Tension", "Detective Conan Original Soundtrack 2"],
      ["00:00", "脅迫 （パート２）", "Kyōhaku (Pāto 2)", "Threat (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "沈む夕陽 （アコースティックver.）", "Shizumu Yūhi (Akōsutikku ver.)", "Depressing Sunset (Acoustic ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "犯人のアジト （忍び込みver.）", "Hannin no Ajito (Shinobikomi ver.)", "The Culprit's Hideout (Creeping In ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "蘭のテーマ （優しさver.）", "Ran no Tēma (Yasashisa ver.)", "Ran's Theme (Gentle ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "沈む夕陽１", "Shizumu Yūhi 1", "Depressing Sunset 1", "Detective Conan Original Soundtrack 2"],
      ["00:00", "事件現場２", "Jiken Genba 2", "Scene of the Case 2", "Detective Conan Original Soundtrack 2"],
      ["00:00", "事件現場３", "Jiken Genba 3", "Scene of the Case 3", "Detective Conan Original Soundtrack 2"],
      ["00:00", "沈む夕陽２", "Shizumu Yūhi 2", "Depressing Sunset 2", "Detective Conan Original Soundtrack 2"],
      ["00:00", "沈む夕陽１", "Shizumu Yūhi 1", "Depressing Sunset 1", "Detective Conan Original Soundtrack 2"],
      ["00:00", "緊迫", "Kinpaku", "Tension", "Detective Conan Original Soundtrack 2"],
      ["00:00", "コナンのテーマ （バラード・ヴァージョン)", "Konan no Tēma (Barādo・Vājon)", "Conan's Theme (Ballad ver.)", "Detective Conan Original Soundtrack 1"],
      ["00:00", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP"],
      ["00:00", "蘭のテーマ", "Ran no Tēma", "Ran's Theme", "Detective Conan Original Soundtrack 1"]
    ]
  },
  {
    id: "26",
    data: [
      ["00:00", "胸がドキドキ", "Mune ga Dokidoki", "The Pounding of My Heart", "Mune ga Dokidoki"],
      ["00:00", "蘭のテーマ", "Ran no Tēma", "Ran's Theme", "Detective Conan Original Soundtrack 1"],
      ["00:00", "脅迫 （パート２）", "Kyōhaku (Pāto 2)", "Threat (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "事件現場 （謎ver.）", "Jiken Genba (Nazo ver.)", "Scene of the Case (Mystery ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "Happy End", "Happy End", "Happy End", "Happy End"],
      ["00:00", "事件現場２", "Jiken Genba 2", "Scene of the Case 2", "Detective Conan Original Soundtrack 2"],
      ["00:00", "犯人のアジト （忍び込みver.）", "Hannin no Ajito (Shinobikomi ver.)", "The Culprit's Hideout (Creeping In ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "事件現場 （オリジナルver.）", "Jiken Genba (Orijinaru ver.)", "Scene of the Case (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "沈む夕陽 （アコースティックver.）", "Shizumu Yūhi (Akōsutikku ver.)", "Depressing Sunset (Acoustic ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "犯人のアジト", "Hannin no Ajito", "The Culprit's Hideout", "Detective Conan Original Soundtrack 1"],
      ["00:00", "沈む夕陽", "Shizumu Yūhi", "Depressing Sunset", "Detective Conan Original Soundtrack 1"],
      ["00:00", "蘭のテーマ （涙ver.）", "Ran no Tēma (Namida ver.)", "Ran's Theme (Tearful ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "緊迫", "Kinpaku", "Tension", "Detective Conan Original Soundtrack 2"],
      ["00:00", "コナンの夢 （夕暮れver.）", "Konan no Yume (Yūgure ver.)", "Conan's Dream (Twilight ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "名探偵コナン・メインテーマ （ヴォーカル・ヴァージョン)", "Meitantei Konan・Mein Tēma (Vōkaru・Vājon)", "Detective Conan Main Theme (Vocal ver.)", "Detective Conan Original Soundtrack 1"],
      ["00:00", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP", "STEP BY STEP"],
      ["00:00", "コナンの勝利", "Konan no Shōri", "Conan's Victory", "Detective Conan Original Soundtrack 1"]
    ]
  },
  {
    id: "27",
    data: [
      ["00:00", "胸がドキドキ", "Mune ga Dokidoki", "The Pounding of My Heart", "Mune ga Dokidoki"],
      ["00:00", "蘭のテーマ", "Ran no Tēma", "Ran's Theme", "Detective Conan Original Soundtrack 1"],
      ["00:00", "脅迫 （パート２）", "Kyōhaku (Pāto 2)", "Threat (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "小さな巨人", "Chiisana Kyojin", "A Small Great Person", "Detective Conan Original Soundtrack 1"],
      ["00:00", "事件現場２", "Jiken Genba 2", "Scene of the Case 2", "Detective Conan Original Soundtrack 2"],
      ["00:00", "蘭のテーマ", "Ran no Tēma", "Ran's Theme", "Detective Conan Original Soundtrack 1"],
      ["00:00", "蘭・愛のテーマ （ギターver.）", "Ran・Ai no Tēma (Gitā ver.)", "Ran's Love Theme (Guitar ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "蘭のテーマ （音コンテ）", "Ran no Tēma (Oto Konte)", "Ran's Theme (Sound Cue)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "コナンのRock&Roll２", "Konan no Rock & Roll 2", "Conan's Rock & Roll 2", "Detective Conan Original Soundtrack 2"],
      ["00:00", "緊迫", "Kinpaku", "Tension", "Detective Conan Original Soundtrack 2"],
      ["00:00", "沈む夕陽１", "Shizumu Yūhi 1", "Depressing Sunset 1", "Detective Conan Original Soundtrack 2"],
      ["00:00", "事件現場 （謎ver.）", "Jiken Genba (Nazo ver.)", "Scene of the Case (Mystery ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "迷宮のラヴァーズ", "Meikyū no Lovers", "Lovers' Labyrinth", "Meikyū no Lovers"],
      ["00:00", "推理 （オリジナルver.）", "Suiri (Orijinaru ver.)", "Deduction (Original ver.)", "Detective Conan Original Soundtrack 2"]
    ]
  },
  {
    id: "28",
    data: [
      ["00:00", "胸がドキドキ", "Mune ga Dokidoki", "The Pounding of My Heart", "Mune ga Dokidoki"],
      ["00:00", "蘭のテーマ", "Ran no Tēma", "Ran's Theme", "Detective Conan Original Soundtrack 1"],
      ["00:00", "(Unreleased Sound Effect/BGM)", "", "", ""],
      ["00:00", "沈む夕陽１", "Shizumu Yūhi 1", "Depressing Sunset 1", "Detective Conan Original Soundtrack 2"],
      ["00:00", "事件解明 （音コンテ）", "Jiken Kaimei (Oto Konte)", "Case Clarification (Sound Cue)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "事件現場２", "Jiken Genba 2", "Scene of the Case 2", "Detective Conan Original Soundtrack 2"],
      ["00:00", "犯人のアジト （忍び込みver.）", "Hannin no Ajito (Shinobikomi ver.)", "The Culprit's Hideout (Creeping In ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "推理 （オリジナルver.）", "Suiri (Orijinaru ver.)", "Deduction (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "阿笠博士のテーマ （音コンテ）", "Agasa Hakase no Tēma (Oto Konte)", "Professor Agasa's Theme (Sound Cue)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "事件現場 （オリジナルver.）", "Jiken Genba (Orijinaru ver.)", "Scene of the Case (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "犯人のアジト （いよいよver.）", "Hannin no Ajito (Iyoiyo ver.)", "The Culprit's Hideout (More and More ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "(Unreleased Sound Effect/BGM)", "", "", ""],
      ["00:00", "コナンのテーマ１", "Konan no Tēma 1", "Conan's Theme 1", "Detective Conan Original Soundtrack 2"],
      ["00:00", "沈む夕陽", "Shizumu Yūhi", "Depressing Sunset", "Detective Conan Original Soundtrack 1"],
      ["00:00", "それいけコナン （哀愁ヴァージョン）", "Soreike Konan (Aishū Vājon)", "Let's Go Conan (Sorrow ver.)", "Detective Conan Original Soundtrack 1"],
      ["00:00", "迷宮のラヴァーズ", "Meikyū no Lovers", "Lovers' Labyrinth", "Meikyū no Lovers"],
      ["00:00", "それいけコナン （超早ver.）", "Soreike Konan (Chōhaya ver.)", "Let's Go Conan (Very Fast ver.)", "Detective Conan Original Soundtrack 2"]
    ]
  },
  {
    id: "29",
    data: [
      ["00:00", "胸がドキドキ", "Mune ga Dokidoki", "The Pounding of My Heart", "Mune ga Dokidoki"],
      ["00:00", "蘭のテーマ", "Ran no Tēma", "Ran's Theme", "Detective Conan Original Soundtrack 1"],
      ["00:00", "(Unreleased Sound Effect/BGM)", "", "", ""],
      ["00:00", "沈む夕陽１", "Shizumu Yūhi 1", "Depressing Sunset 1", "Detective Conan Original Soundtrack 2"],
      ["00:00", "事件解明 （音コンテ）", "Jiken Kaimei (Oto Konte)", "Case Clarification (Sound Cue)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "事件現場２", "Jiken Genba 2", "Scene of the Case 2", "Detective Conan Original Soundtrack 2"],
      ["00:00", "犯人のアジト", "Hannin no Ajito", "The Culprit's Hideout", "Detective Conan Original Soundtrack 1"],
      ["00:00", "沈む夕陽１", "Shizumu Yūhi 1", "Depressing Sunset 1", "Detective Conan Original Soundtrack 2"],
      ["00:00", "悪のテーマ （パート２）", "Aku no Tēma (Pāto 2)", "Theme of Evil (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "事件現場 （オリジナルver.）", "Jiken Genba (Orijinaru ver.)", "Scene of the Case (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "沈む夕陽", "Shizumu Yūhi", "Depressing Sunset", "Detective Conan Original Soundtrack 1"],
      ["00:00", "事件現場 （謎ver.）", "Jiken Genba (Nazo ver.)", "Scene of the Case (Mystery ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "対決のテーマ （落ち着きver.）", "Taiketsu no Tēma (Ochitsuki ver.)", "Showdown Theme (Calm ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "コナンの夢 （夕暮れver.）", "Konan no Yume (Yūgure ver.)", "Conan's Dream (Twilight ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "「名探偵コナン」メイン・テーマ （ジャズver.）", "\"Meitantei Konan\" Mein・Tēma (Jazu ver.)", "\"Detective Conan\" Main Theme (Jazz ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "迷宮のラヴァーズ", "Meikyū no Lovers", "Lovers' Labyrinth", "Meikyū no Lovers"],
      ["00:00", "コナンの勝利 （夜空ver.）", "Konan no Shōri (Yozora ver.)", "Conan's Victory (Night Sky ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "事件解決（意気揚々ver.）", "Jiken Kaiketsu (Ikiyōyō ver.)", "Case Resolution (Triumphant ver.)", "Detective Conan Original Soundtrack 2"]
    ]
  },
  {
    id: "30",
    data: [
      ["00:00", "Feel Your Heart", "Feel Your Heart", "Feel Your Heart", "Feel Your Heart"],
      ["00:00", "(Unreleased Sound Effect/BGM)", "", "", ""],
      ["00:00", "Showdown Theme", "Taiketsu no Tēma", "Showdown Theme", "Detective Conan Original Soundtrack 1"],
      ["00:00", "Ran's Love Theme", "Ran・Ai no Tēma", "Ran's Love Theme", "Detective Conan Original Soundtrack 1"],
      ["00:00", "(Unreleased Sound Effect/BGM)", "", "", ""],
      ["00:00", "Threat (Part 2)", "Kyōhaku (Pāto 2)", "Threat (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "Scene of the Case (Mystery ver.)", "Jiken Genba (Nazo ver.)", "Scene of the Case (Mystery ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "The Culprit's Hideout (Creeping In ver.)", "Hannin no Ajito (Shinobikomi ver.)", "The Culprit's Hideout (Creeping In ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "\"Detective Conan\" Main Theme (Sound Cue)", "\"Meitantei Konan\" Mein・Tēma (Oto Konte)", "\"Detective Conan\" Main Theme (Sound Cue)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "Theme of Evil (Part 2)", "Aku no Tēma (Pāto 2)", "Theme of Evil (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "The Culprit's Hideout", "Hannin no Ajito", "The Culprit's Hideout", "Detective Conan Original Soundtrack 1"],
      ["00:00", "Conan's Theme 1", "Konan no Tēma 1", "Conan's Theme 1", "Detective Conan Original Soundtrack 2"],
      ["00:00", "A Small Great Person", "Chiisana Kyojin", "A Small Great Person", "Detective Conan Original Soundtrack 1"],
      ["00:00", "Scene of the Case 2", "Jiken Genba 2", "Scene of the Case 2", "Detective Conan Original Soundtrack 2"],
      ["00:00", "The Culprit's Hideout (More and More ver.)", "Hannin no Ajito (Iyoiyo ver.)", "The Culprit's Hideout (More and More ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "Showdown Theme (Calm ver.)", "Taiketsu no Tēma (Ochitsuki ver.)", "Showdown Theme (Calm ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "Conan's Dream", "Konan no Yume", "Conan's Dream", "Detective Conan Original Soundtrack 1"],
      ["00:00", "Lovers' Labyrinth", "Meikyū no Lovers", "Lovers' Labyrinth", "Meikyū no Lovers"],
      ["00:00", "Ran's Theme", "Ran no Tēma", "Ran's Theme", "Detective Conan Original Soundtrack 1"]
    ]
  },
  {
    id: "31",
    data: [
      ["00:00", "Feel Your Heart", "Feel Your Heart", "Feel Your Heart", "Feel Your Heart"],
      ["00:00", "(Unreleased Sound Effect/BGM)", "", "", ""],
      ["00:00", "Showdown Theme", "Taiketsu no Tēma", "Showdown Theme", "Detective Conan Original Soundtrack 1"],
      ["00:00", "Ran's Love Theme", "Ran・Ai no Tēma", "Ran's Love Theme", "Detective Conan Original Soundtrack 1"],
      ["00:00", "(Unreleased Sound Effect/BGM)", "", "", ""],
      ["00:00", "Threat (Part 2)", "Kyōhaku (Pāto 2)", "Threat (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "Scene of the Case (Mystery ver.)", "Jiken Genba (Nazo ver.)", "Scene of the Case (Mystery ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "The Culprit's Hideout (Creeping In ver.)", "Hannin no Ajito (Shinobikomi ver.)", "The Culprit's Hideout (Creeping In ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "\"Detective Conan\" Main Theme (Sound Cue)", "\"Meitantei Konan\" Mein・Tēma (Oto Konte)", "\"Detective Conan\" Main Theme (Sound Cue)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "Theme of Evil (Part 2)", "Aku no Tēma (Pāto 2)", "Theme of Evil (Part 2)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "The Culprit's Hideout", "Hannin no Ajito", "The Culprit's Hideout", "Detective Conan Original Soundtrack 1"],
      ["00:00", "Conan's Theme 1", "Konan no Tēma 1", "Conan's Theme 1", "Detective Conan Original Soundtrack 2"],
      ["00:00", "A Small Great Person", "Chiisana Kyojin", "A Small Great Person", "Detective Conan Original Soundtrack 1"],
      ["00:00", "Scene of the Case 2", "Jiken Genba 2", "Scene of the Case 2", "Detective Conan Original Soundtrack 2"],
      ["00:00", "The Culprit's Hideout (More and More ver.)", "Hannin no Ajito (Iyoiyo ver.)", "The Culprit's Hideout (More and More ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "Showdown Theme (Calm ver.)", "Taiketsu no Tēma (Ochitsuki ver.)", "Showdown Theme (Calm ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "Conan's Dream", "Konan no Yume", "Conan's Dream", "Detective Conan Original Soundtrack 1"],
      ["00:00", "Lovers' Labyrinth", "Meikyū no Lovers", "Lovers' Labyrinth", "Meikyū no Lovers"],
      ["00:00", "Ran's Theme", "Ran no Tēma", "Ran's Theme", "Detective Conan Original Soundtrack 1"]
    ]
  },
  {
    id: "32",
    data: [
      ["00:00", "Feel Your Heart", "Feel Your Heart", "Feel Your Heart", "Feel Your Heart"],
      ["00:00", "Ran no Tēma", "Ran's Theme", "Ran's Theme", "Detective Conan Original Soundtrack 1"],
      ["00:00", "Chiisana Kyojin", "A Small Great Person", "A Small Great Person", "Detective Conan Original Soundtrack 1"],
      ["00:00", "Chiisana Kyojin", "A Small Great Person", "A Small Great Person", "Detective Conan Original Soundtrack 1"],
      ["00:00", "Happy End", "Happy End", "Happy End", "Happy End"],
      ["00:00", "Jiken Genba (Orijinaru ver.)", "Scene of the Case (Original ver.)", "Scene of the Case (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "Chiisana Kyojin", "A Small Great Person", "A Small Great Person", "Detective Conan Original Soundtrack 1"],
      ["00:00", "Chiisana Kyojin", "A Small Great Person", "A Small Great Person", "Detective Conan Original Soundtrack 1"],
      ["00:00", "Konan no Tēma (Yokoku)", "Conan's Theme (Preview)", "Conan's Theme (Preview)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "Taiketsu no Tēma (Ochitsuki ver.)", "Showdown Theme (Calm ver.)", "Showdown Theme (Calm ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "Jiken Hassei!", "A Case Springs Forth!", "A Case Springs Forth!", "Detective Conan Original Soundtrack 2"],
      ["00:00", "Konan no Shōri (Yozora ver.)", "Conan's Victory (Night Sky ver.)", "Conan's Victory (Night Sky ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "Ran no Tēma (Yasashisa ver.)", "Ran's Theme (Gentle ver.)", "Ran's Theme (Gentle ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "Meikyū no Lovers", "Lovers' Labyrinth", "Lovers' Labyrinth", "Meikyū no Lovers"],
      ["00:00", "Ran・Ai no Tēma (Gitā ver.)", "Ran's Love Theme (Guitar ver.)", "Ran's Love Theme (Guitar ver.)", "Detective Conan Original Soundtrack 2"]
    ]
  },
  {
    id: "33",
    data: [
      ["00:00", "Feel Your Heart", "Feel Your Heart", "Feel Your Heart", "Feel Your Heart"],
      ["00:00", "Ran no Tēma", "Ran's Theme", "Ran's Theme", "Detective Conan Original Soundtrack 1"],
      ["00:00", "Chiisana Kyojin", "A Small Great Person", "A Small Great Person", "Detective Conan Original Soundtrack 1"],
      ["00:00", "Chiisana Kyojin", "A Small Great Person", "A Small Great Person", "Detective Conan Original Soundtrack 1"],
      ["00:00", "Happy End", "Happy End", "Happy End", "Happy End"],
      ["00:00", "Jiken Genba (Orijinaru ver.)", "Scene of the Case (Original ver.)", "Scene of the Case (Original ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "Chiisana Kyojin", "A Small Great Person", "A Small Great Person", "Detective Conan Original Soundtrack 1"],
      ["00:00", "Chiisana Kyojin", "A Small Great Person", "A Small Great Person", "Detective Conan Original Soundtrack 1"],
      ["00:00", "Konan no Tēma (Yokoku)", "Conan's Theme (Preview)", "Conan's Theme (Preview)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "Taiketsu no Tēma (Ochitsuki ver.)", "Showdown Theme (Calm ver.)", "Showdown Theme (Calm ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "Jiken Hassei!", "A Case Springs Forth!", "A Case Springs Forth!", "Detective Conan Original Soundtrack 2"],
      ["00:00", "Konan no Shōri (Yozora ver.)", "Conan's Victory (Night Sky ver.)", "Conan's Victory (Night Sky ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "Ran no Tēma (Yasashisa ver.)", "Ran's Theme (Gentle ver.)", "Ran's Theme (Gentle ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "Meikyū no Lovers", "Lovers' Labyrinth", "Lovers' Labyrinth", "Meikyū no Lovers"],
      ["00:00", "Ran・Ai no Tēma (Gitā ver.)", "Ran's Love Theme (Guitar ver.)", "Ran's Love Theme (Guitar ver.)", "Detective Conan Original Soundtrack 2"]
    ]
  },
  {
    id: "34",
    data: [
      ["00:00", "Feel Your Heart", "Feel Your Heart", "Feel Your Heart", "Feel Your Heart"],
      ["00:00", "のんびり気分", "Nonbiri Kibun", "Carefree Feeling", "Detective Conan Original Soundtrack 1"],
      ["00:00", "蘭のテーマ （音コンテ）", "Ran no Tēma (Oto Konte)", "Ran's Theme (Sound Cue)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "謎解き （その１）", "Nazotoki (Sono 1)", "Riddle Solution (Part 1)", "Detective Conan Original Soundtrack 3"],
      ["00:00", "新一の名推理", "Shin'ichi no Meisuiri", "Shinichi's Great Deduction", "Detective Conan Original Soundtrack 3"],
      ["00:00", "謎解き （その１）", "Nazotoki (Sono 1)", "Riddle Solution (Part 1)", "Detective Conan Original Soundtrack 3"],
      ["00:00", "陰謀", "Inbō", "Conspiracy", "Detective Conan Original Soundtrack 3"],
      ["00:00", "犯人のアジト （忍び込みver.）", "Hannin no Ajito (Shinobikomi ver.)", "The Culprit's Hideout (Creeping In ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "蘭・愛のテーマ", "Ran・Ai no Tēma", "Ran's Love Theme", "Detective Conan Original Soundtrack 1"],
      ["00:00", "迷宮のラヴァーズ", "Meikyū no Lovers", "Lovers' Labyrinth", "Meikyū no Lovers"],
      ["00:00", "新一の事件解明", "Shin'ichi no Jiken Kaimei", "Shinichi's Case Clarification", "Detective Conan Original Soundtrack 3"]
    ]
  },
  {
    id: "35",
    data: [
      ["00:00", "Feel Your Heart", "Feel Your Heart", "Feel Your Heart", "Feel Your Heart"],
      ["00:00", "コナンの勇気", "Konan no Yūki", "Conan's Courage", "Detective Conan Original Soundtrack 3"],
      ["00:00", "コナンの危機", "Konan no Kiki", "Conan's Crisis", "Detective Conan Original Soundtrack Super Best"],
      ["00:00", "事件現場２", "Jiken Genba 2", "Scene of the Case 2", "Detective Conan Original Soundtrack 2"],
      ["00:00", "謎解き （その１）", "Nazotoki (Sono 1)", "Riddle Solution (Part 1)", "Detective Conan Original Soundtrack 3"],
      ["00:00", "陰謀", "Inbō", "Conspiracy", "Detective Conan Original Soundtrack 3"],
      ["00:00", "新一の名推理", "Shin'ichi no Meisuiri", "Shinichi's Great Deduction", "Detective Conan Original Soundtrack 3"],
      ["00:00", "謎解き （その２）", "Nazotoki (Sono 2)", "Riddle Solution (Part 2)", "Detective Conan Original Soundtrack 3"],
      ["00:00", "陰謀", "Inbō", "Conspiracy", "Detective Conan Original Soundtrack 3"],
      ["00:00", "緊迫１", "Kinpaku 1", "Tension 1", "Detective Conan Original Soundtrack 2"],
      ["00:00", "対決のテーマ （落ち着きver.）", "Taiketsu no Tēma (Ochitsuki ver.)", "Showdown Theme (Calm ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "コナンの夢 （夕暮れver.）", "Konan no Yume (Yūgure ver.)", "Conan's Dream (Twilight ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "コナンの夢", "Konan no Yume", "Conan's Dream", "Detective Conan Original Soundtrack 1"],
      ["00:00", "迷宮のラヴァーズ", "Meikyū no Lovers", "Lovers' Labyrinth", "Meikyū no Lovers"],
      ["00:00", "コナンの勝利", "Konan no Shōri", "Conan's Victory", "Detective Conan Original Soundtrack 1"]
    ]
  },
  {
    id: "36",
    data: [
      ["00:00", "Feel Your Heart", "Feel Your Heart", "Feel Your Heart", "Feel Your Heart"],
      ["00:00", "新一の名推理", "Shin'ichi no Meisuiri", "Shinichi's Great Deduction", "Detective Conan Original Soundtrack 3"],
      ["00:00", "新一の名推理", "Shin'ichi no Meisuiri", "Shinichi's Great Deduction", "Detective Conan Original Soundtrack 3"],
      ["00:00", "事件現場２", "Jiken Genba 2", "Scene of the Case 2", "Detective Conan Original Soundtrack 2"],
      ["00:00", "事件現場 （謎ver.）", "Jiken Genba (Nazo ver.)", "Scene of the Case (Mystery ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "コナンの危機", "Konan no Kiki", "Conan's Crisis", "Detective Conan Original Soundtrack Super Best"],
      ["00:00", "謎解き （その１）", "Nazotoki (Sono 1)", "Riddle Solution (Part 1)", "Detective Conan Original Soundtrack 3"],
      ["00:00", "夢をとめないでいて", "Yume o Tomenaide Ite", "Don't Stop Dreaming", "Feel Your Heart"],
      ["00:00", "怪人包帯男２", "Kaijin Hōtai Otoko 2", "The Mysterious Bandaged Man 2", "Detective Conan Original Soundtrack 3"],
      ["00:00", "事件の謎", "Jiken no Nazo", "Mystery of the Case", "Detective Conan Original Soundtrack 3"],
      ["00:00", "蘭のテーマ （涙ver.）", "Ran no Tēma (Namida ver.)", "Ran's Theme (Tearful ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "迷宮のラヴァーズ", "Meikyū no Lovers", "Lovers' Labyrinth", "Meikyū no Lovers"],
      ["00:00", "はずむ蘭", "Hazumu Ran", "Bouncing Ran", "Detective Conan Original Soundtrack 1"]
    ]
  },
  {
    id: "37",
    data: [
      ["00:00", "Feel Your Heart", "Feel Your Heart", "Feel Your Heart", "Feel Your Heart"],
      ["00:00", "新一の名推理", "Shin'ichi no Meisuiri", "Shinichi's Great Deduction", "Detective Conan Original Soundtrack 3"],
      ["00:00", "新一の名推理", "Shin'ichi no Meisuiri", "Shinichi's Great Deduction", "Detective Conan Original Soundtrack 3"],
      ["00:00", "事件現場２", "Jiken Genba 2", "Scene of the Case 2", "Detective Conan Original Soundtrack 2"],
      ["00:00", "事件現場 （謎ver.）", "Jiken Genba (Nazo ver.)", "Scene of the Case (Mystery ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "コナンの危機", "Konan no Kiki", "Conan's Crisis", "Detective Conan Original Soundtrack Super Best"],
      ["00:00", "謎解き （その１）", "Nazotoki (Sono 1)", "Riddle Solution (Part 1)", "Detective Conan Original Soundtrack 3"],
      ["00:00", "夢をとめないでいて", "Yume o Tomenaide Ite", "Don't Stop Dreaming", "Feel Your Heart"],
      ["00:00", "怪人包帯男２", "Kaijin Hōtai Otoko 2", "The Mysterious Bandaged Man 2", "Detective Conan Original Soundtrack 3"],
      ["00:00", "事件の謎", "Jiken no Nazo", "Mystery of the Case", "Detective Conan Original Soundtrack 3"],
      ["00:00", "蘭のテーマ （涙ver.）", "Ran no Tēma (Namida ver.)", "Ran's Theme (Tearful ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "迷宮のラヴァーズ", "Meikyū no Lovers", "Lovers' Labyrinth", "Meikyū no Lovers"],
      ["00:00", "はずむ蘭", "Hazumu Ran", "Bouncing Ran", "Detective Conan Original Soundtrack 1"]
    ]
  },
  {
    id: "38",
    data: [
      ["00:00", "Feel Your Heart", "Feel Your Heart", "Feel Your Heart", "Feel Your Heart"],
      ["00:00", "事件解決（意気揚々ver.）", "Jiken Kaiketsu (Ikiyōyō ver.)", "Case Resolution (Triumphant ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "蘭のテーマ （音コンテ）", "Ran no Tēma (Oto Konte)", "Ran's Theme (Sound Cue)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "事件現場２", "Jiken Genba 2", "Scene of the Case 2", "Detective Conan Original Soundtrack 2"],
      ["00:00", "新一の名推理", "Shin'ichi no Meisuiri", "Shinichi's Great Deduction", "Detective Conan Original Soundtrack 3"],
      ["00:00", "犯人のアジト （忍び込みver.）", "Hannin no Ajito (Shinobikomi ver.)", "The Culprit's Hideout (Creeping In ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "悪のテーマ （パート１）", "Aku no Tēma (Pāto 1)", "Theme of Evil (Part 1)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "新一の名推理", "Shin'ichi no Meisuiri", "Shinichi's Great Deduction", "Detective Conan Original Soundtrack 3"],
      ["00:00", "サスペンス～危機感", "Sasupensu ~ Kikikan", "Suspense ~ Impending Crisis", "Detective Conan Original Soundtrack 3"],
      ["00:00", "怪人包帯男１", "Kaijin Hōtai Otoko 1", "The Mysterious Bandaged Man 1", "Detective Conan Original Soundtrack 3"],
      ["00:00", "謎解き （その１）", "Nazotoki (Sono 1)", "Riddle Solution (Part 1)", "Detective Conan Original Soundtrack 3"],
      ["00:00", "名探偵コナン・メインテーマ", "Meitantei Konan・Mein Tēma", "Detective Conan Main Theme", "Detective Conan Original Soundtrack 1"],
      ["00:00", "迷宮のラヴァーズ", "Meikyū no Lovers", "Lovers' Labyrinth", "Meikyū no Lovers"],
      ["00:00", "コナンの勝利", "Konan no Shōri", "Conan's Victory", "Detective Conan Original Soundtrack 1"]
    ]
  },
  {
    id: "39",
    data: [
      ["00:00", "Feel Your Heart", "Feel Your Heart", "Feel Your Heart", "Feel Your Heart"],
      ["00:00", "想い出", "Omoide", "Memories", "Detective Conan Original Soundtrack 3"],
      ["00:00", "蘭のテーマ （音コンテ）", "Ran no Tēma (Oto Konte)", "Ran's Theme (Sound Cue)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "新一の名推理", "Shin'ichi no Meisuiri", "Shinichi's Great Deduction", "Detective Conan Original Soundtrack 3"],
      ["00:00", "新一の名推理", "Shin'ichi no Meisuiri", "Shinichi's Great Deduction", "Detective Conan Original Soundtrack 3"],
      ["00:00", "忍び寄る影", "Shinobiyoru Kage", "Creeping Shadow", "Detective Conan Original Soundtrack 3"],
      ["00:00", "陰謀", "Inbō", "Conspiracy", "Detective Conan Original Soundtrack 3"],
      ["00:00", "コナンの危機", "Konan no Kiki", "Conan's Crisis", "Detective Conan Original Soundtrack Super Best"],
      ["00:00", "事件現場２", "Jiken Genba 2", "Scene of the Case 2", "Detective Conan Original Soundtrack 2"],
      ["00:00", "迷宮のラヴァーズ", "Meikyū no Lovers", "Lovers' Labyrinth", "Meikyū no Lovers"]
    ]
  },
  {
    id: "40",
    data: [
      ["00:00", "Feel Your Heart", "Feel Your Heart", "Feel Your Heart", "Feel Your Heart"],
      ["00:00", "のんびり気分", "Nonbiri Kibun", "Carefree Feeling", "Detective Conan Original Soundtrack 1"],
      ["00:00", "Shin'ichi no Meisuiri", "Shin'ichi no Meisuiri", "Shinichi's Great Deduction", "Detective Conan Original Soundtrack 3"],
      ["00:00", "Jiken Genba (Nazo ver.)", "Jiken Genba (Nazo ver.)", "Scene of the Case (Mystery ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "Jiken Genba 2", "Jiken Genba 2", "Scene of the Case 2", "Detective Conan Original Soundtrack 2"],
      ["00:00", "Inbō", "Inbō", "Conspiracy", "Detective Conan Original Soundtrack 3"],
      ["00:00", "Konan no Kiki", "Konan no Kiki", "Conan's Crisis", "Detective Conan Original Soundtrack Super Best"],
      ["00:00", "Nishi no Meitantei", "Nishi no Meitantei", "The Great Detective of the West", "Detective Conan Original Soundtrack 3"],
      ["00:00", "Kaijin Hōtai Otoko 2", "Kaijin Hōtai Otoko 2", "The Mysterious Bandaged Man 2", "Detective Conan Original Soundtrack 3"],
      ["00:00", "Kaijin Hōtai Otoko 1", "Kaijin Hōtai Otoko 1", "The Mysterious Bandaged Man 1", "Detective Conan Original Soundtrack 3"],
      ["00:00", "Soreike Konan (Aishū Vājon)", "Soreike Konan (Aishū Vājon)", "Let's Go Conan (Sorrow ver.)", "Detective Conan Original Soundtrack 1"],
      ["00:00", "Meikyū no Lovers", "Meikyū no Lovers", "Lovers' Labyrinth", "Meikyū no Lovers"],
      ["00:00", "Omoide", "Omoide", "Memories", "Detective Conan Original Soundtrack 3"]
    ]
  },
  {
    id: "41",
    data: [
      ["00:00", "Feel Your Heart", "Feel Your Heart", "Feel Your Heart", "Feel Your Heart"],
      ["00:00", "のんびり気分", "Nonbiri Kibun", "Carefree Feeling", "Detective Conan Original Soundtrack 1"],
      ["00:00", "Shin'ichi no Meisuiri", "Shin'ichi no Meisuiri", "Shinichi's Great Deduction", "Detective Conan Original Soundtrack 3"],
      ["00:00", "Jiken Genba (Nazo ver.)", "Jiken Genba (Nazo ver.)", "Scene of the Case (Mystery ver.)", "Detective Conan Original Soundtrack 2"],
      ["00:00", "Jiken Genba 2", "Jiken Genba 2", "Scene of the Case 2", "Detective Conan Original Soundtrack 2"],
      ["00:00", "Inbō", "Inbō", "Conspiracy", "Detective Conan Original Soundtrack 3"],
      ["00:00", "Konan no Kiki", "Konan no Kiki", "Conan's Crisis", "Detective Conan Original Soundtrack Super Best"],
      ["00:00", "Nishi no Meitantei", "Nishi no Meitantei", "The Great Detective of the West", "Detective Conan Original Soundtrack 3"],
      ["00:00", "Kaijin Hōtai Otoko 2", "Kaijin Hōtai Otoko 2", "The Mysterious Bandaged Man 2", "Detective Conan Original Soundtrack 3"],
      ["00:00", "Kaijin Hōtai Otoko 1", "Kaijin Hōtai Otoko 1", "The Mysterious Bandaged Man 1", "Detective Conan Original Soundtrack 3"],
      ["00:00", "Soreike Konan (Aishū Vājon)", "Soreike Konan (Aishū Vājon)", "Let's Go Conan (Sorrow ver.)", "Detective Conan Original Soundtrack 1"],
      ["00:00", "Meikyū no Lovers", "Meikyū no Lovers", "Lovers' Labyrinth", "Meikyū no Lovers"],
      ["00:00", "Omoide", "Omoide", "Memories", "Detective Conan Original Soundtrack 3"]
    ]
  },
  
  
  






















  






  
  








];


export default episodesData;








