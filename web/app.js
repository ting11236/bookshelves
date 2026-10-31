/* The Quiet Shelf — a private, browser-local bookshelf prototype. */
const readingBook = {
  id: 'maybe-you-should-talk',
  title: '也許你該找人聊聊',
  author: '蘿蕊・葛利布',
  year: '2023',
  readYear:2026,
  heightMm:225, widthMm:160, thicknessMm:32,
  sizeSource:'https://www.cite.com.tw/book?id=96913',
  cover: 'assets/book-cover.jpg',
  accent: '#e5c642',
  featured: true,
  description: '心理師蘿蕊・葛利布在自己的人生陷入危機後，也走進心理師溫德爾的診間。她一面陪伴來談者面對關係、疾病、失落與人生困境，一面重新理解自己的痛苦與盲點。書中交織她作為心理師與求助者的經歷，以坦率而幽默的故事，探索人如何認識自己、建立連結，並把領悟化為生活中的改變。',
  synopsisSource:'https://www.cite.com.tw/book?id=96913',
  themes: [
    { title:'接受人生的不確定性', chapters:[12,37,41,52], lead:'人生不會總按原本的計畫前進。能接住失落，也能容許未知，才有空間看見另一種可能。', points:['「歡迎蒞臨荷蘭」的比喻提醒我們：沒有抵達預期的地方，不等於旅程毫無價值；失落也不必被否認。','人對死亡、孤獨、自由和無意義的焦慮，常使我們試圖控制無法控制的事。','熟悉的痛苦有時比陌生的快樂更令人安心；承認脆弱，可能是走向改變的起點。'], insight:'第 12 章的「預期落空」、第 37 章的「不確定」與第 52 章的「與無可奈何共處」，構成一條從失望走向接納的線索。' },
    { title:'理解情緒，而不是逃避情緒', chapters:[24,33,36,45,48], lead:'情緒不是需要被立即消除的障礙；有時它是一種訊息，提示我們真正重視與害怕的是什麼。', points:['有些人難以辨認或描述感受；若從小習慣忽視情緒，成年後可能更難聽見自己的內在。','壓抑感受不等於感受好。悲傷、焦慮和失落若總被擋在外面，也可能隔絕喜悅與連結。','過度求快，使人急著「解決」情緒，卻失去理解問題的時間和空間。'], insight:'從第 33 章的情緒辨識，到第 45 章的情緒麻木，再到第 48 章的悲傷經驗，你的劃線反覆回到「容許感受存在」這個主題。' },
    { title:'原生家庭與親密關係的重複劇本', chapters:[28,41,42,54,57], lead:'我們習慣的關係方式可能來自很早以前，但熟悉的互動不一定就是適合自己的互動。', points:['童年經驗會形塑成年後的期待，有些人會反覆靠近與早年傷害相似的關係模式。','穩定且不帶批判的關係，可能帶來新的情緒經驗，讓人發現世界不只有過去那一套規則。','親密不代表永遠不受傷。關係中的承認、修補與再度靠近，是重要的學習。','我們與自己的內在對話，也是一段需要練習溫柔的關係。'], insight:'第 28 章談重複舊模式，第 54 章談破裂與修復；兩章並看，會發現重點從「為何受傷」轉向「如何重新相處」。' },
    { title:'真正的改變，是慢慢學會自主', chapters:[29,33,39,46,49,50], lead:'心理治療不是替人做人生決定，而是幫助人看懂自己的選擇、抗拒和行動。', points:['抗拒不一定是阻礙，也可能指向人尚未準備好碰觸的問題。','改變可能經歷前思考、思考、準備、行動、維持等階段；過程中的猶豫和退步並不罕見。','從「知道道理」到「在生活裡用得出來」，仍需要練習；好的結束是能把學到的能力帶走。'], insight:'第 33 章強調不替別人決定，第 39 章描寫行為改變的歷程，第 46 與 50 章則把焦點放在生活中的實際運用。' },
    { title:'時間有限，才看得見重要的事', chapters:[36,37,40,43,44], lead:'人很容易為了未來而奔跑，卻忘了今天本身也值得被好好活過。', points:['追求效率不一定讓人更自由，省下的時間也可能再被更多事情填滿。','對死亡和人生有限的覺察，會迫使我們思考自己真正想投入的關係、工作與生活。','即使無法選擇遭遇，也可能保有選擇回應方式的空間。','有些工作與關係表面上合理，卻不符合心中真正重要的價值。'], insight:'第 36 章對「求快」的質疑，和第 44 章對「有意義的工作與關係」的抉擇互相呼應。' },
    { title:'療癒來自理解、陪伴與連結', chapters:[26,38,42,43,47,48,54], lead:'並非每份痛苦都有立即的答案。有時被好好聽見、容許悲傷、保持連結，就是改變的開始。', points:['沉默也可能是傾聽：不急著填補空白，心裡重要的感受才有機會浮現。','面對失去，不必以陳腔濫調催促對方振作；真誠的關心與具體陪伴可能更重要。','痛苦不是競賽，否定自己的苦惱不會讓它消失。','接納、信任與修復，是人重新建立連結的基礎。'], insight:'第 26 章的沉默、第 43 章的陪伴，以及第 47 章的承認痛苦，共同提醒：先理解，不必急著解決。' }
  ],
  chapters: [
    { no:12,title:'歡迎蒞臨荷蘭',lead:'原本期待的人生可能突然轉向。悲傷是對未實現夢想的真實反應，但也可能逐漸看見另一種美好。',points:['義大利與荷蘭的比喻，描繪理想人生與實際經驗之間的落差。','接納不是說失落不重要，而是不讓失落佔據所有的觀看角度。'] },
    { no:23,title:'喬氏超市',lead:'願望與行動之間，仍需要跨出實際的一步。',points:['只停留在心願清單，未必會讓期待成真。','這份劃線較短，暫不推論本章其他情節。'] },
    { no:24,title:'我到家囉',lead:'憂鬱、孤獨與生命中的失去，提醒人關注活力、連結和真正的痛苦。',points:['劃線談到憂鬱與自殺風險，也提醒不應以沉默避談痛苦；其中的醫療性主張需要另行查證。','有關撫觸與「皮膚飢餓」的摘錄，聚焦人類對身體接觸和連結的需要。','麗塔的故事指出，累積的失落有時不只源於年齡，而與長期感受有關。'] },
    { no:25,title:'郵差先生',lead:'成為母親之後的孤立感，推動作者重新思考自己想做的工作。',points:['原本享受的自由工作方式，因育兒與缺少成年人的陪伴而改變感受。','從訴說人的故事，走向想更深入幫助人改寫故事，是作者考慮成為心理師的轉折。'] },
    { no:26,title:'最是尷尬巧遇時',lead:'沉默不是談話的空缺，也能成為理解內在的空間。',points:['不停說話有時讓人停在理性解釋，避開尚未碰觸的情緒。','共同承受一段沉默，可能使原本被遮蓋的想法慢慢浮現。'] },
    { no:27,title:'溫德爾的媽媽',lead:'當人逐漸理解自己的不快樂，也可能減少把不舒服歸咎於外界。',points:['摘錄提到「外化」及「個人化」等認知與歸因傾向。','因原始劃線僅有片段，本章整理保留較低的完整度。'] },
    { no:28,title:'上癮',lead:'童年熟悉的關係模式可能在成年後重演；治療關係則可能帶來不同的經驗。',points:['「強迫性重複」描述人試圖在新關係中處理舊有的、未能掌控的情境。','可靠而善意的互動可能形成矯正性的情緒經驗。','既渴望親近又害怕依賴，會使關係中的距離變得複雜。'] },
    { no:29,title:'強暴犯',lead:'對心理治療的抗拒，可能是理解個案的重要線索。',points:['與其直接對抗抗拒，更值得探索它正在保護什麼。','本次摘錄主要集中於心理師如何理解抗拒，無法涵蓋本章完整情節。'] },
    { no:33,title:'業',lead:'個人自主、情緒辨識與關係模式，是這章劃線反覆觸及的三條線索。',points:['心理師可以協助澄清想法，卻不應替當事人做人生決定。','有時人會以恐懼或愛來衡量決定；理解兩者差異有助於自主。','難以辨識感受、重複不健康的關係，可能使人停留在熟悉的困境。'] },
    { no:36,title:'「要」的速度',lead:'過度追求快速解決，可能讓人失去體會當下與理解自己的空間。',points:['急著完成未來目標，可能反而錯過不會再回來的今天。','若困擾本就來自過快的步調，再以更快的方式處理，容易形成矛盾。','放慢腳步、保留沉澱時間，讓真正重要的故事有機會出現。'] },
    { no:37,title:'終極關懷',lead:'不確定性、死亡、孤獨、自由與意義，構成許多人難以迴避的生命議題。',points:['逃避有時是一種「不處理問題的處理方式」。','亞隆提出的四項終極關懷是死亡、孤獨、自由和無意義。','未知不必只代表威脅，也可能保留尚未展開的可能性。'] },
    { no:38,title:'樂高樂園',lead:'失去之後，人需要用自己的方式承受哀傷，也需要被允許表達。',points:['情緒被「淹沒」時，暫停和安定神經系統可能比繼續爭論更有幫助。','把痛苦完全藏起來，未必真的保護了身邊的人。','有些失去沒有答案；允許自己哭泣、憤怒與懷念，是面對哀傷的一部分。'] },
    { no:39,title:'人怎麼改變',lead:'改變不是一次決定，而是從察覺到實踐、再到維持的歷程。',points:['書中介紹行為改變的跨理論模式：前思考、思考、準備、行動、維持。','思考期常有矛盾與抗拒，因為放下舊模式也意味著失去熟悉感。','進入維持期後仍可能暫時退步；支持與調整可以幫助人回到方向上。'] },
    { no:40,title:'人父',lead:'人的動力不只有追求快樂，也可能是尋找意義。',points:['摘錄對照趨樂避苦的觀點與法蘭克對生命意義的重視。','在遭遇與回應之間，仍可能存在選擇態度的空間。'] },
    { no:41,title:'整全或絕望',lead:'人如何看待自己走過的一生，會影響能否接受晚年、遺憾與當下的喜悅。',points:['艾瑞克森的心理社會發展理論延伸至老年，晚年的整全感與絕望是重要議題。','長期熟悉的失望可能讓新出現的快樂也令人不安。','同情與原諒可以分開；前進不必強迫自己採用某一種原諒方式。'] },
    { no:42,title:'我的「內夏瑪」',lead:'尊重與不帶批判的關懷，是良好治療關係的核心。',points:['羅傑斯的當事人中心治療重視無條件正向關懷。','接納不是要求心理師喜歡每個選擇，而是尊重人的自主與成長能力。'] },
    { no:43,title:'別對快死的人講什麼',lead:'面對重大失去，真誠的陪伴往往比空泛鼓勵更有力量。',points:['催促對方樂觀、提供沒有根據的建議，可能讓受苦的人更加孤獨。','坦承不知道該說什麼，卻仍願意關心和協助，是更真實的靠近。','生命有限讓平凡的日子與眼前的關係格外珍貴。'] },
    { no:44,title:'男友的信',lead:'察覺時間有限，讓作者重新辨認真正想投入的工作與關係。',points:['一份外界期待的寫作計畫，不一定符合自己的生命方向。','不想再維持失去意義的關係與工作，是重新選擇的重要訊號。'] },
    { no:45,title:'溫德爾的鬍子',lead:'快速宣告「好了」有時是迴避痛苦的另一種樣貌。',points:['「溜向康復」描述人在焦慮下過早認定問題已被解決。','忽視感受不等於真的平靜；情緒仍可能以身體或行為的方式浮現。'] },
    { no:46,title:'蜂群',lead:'心理治療的目標，是讓覺察與練習真正走進日常生活。',points:['心理師不只聽過去的故事，也會觀察當下的感受與互動。','諮商室裡的練習是準備，生活才是實際上場的地方。'] },
    { no:47,title:'肯亞',lead:'痛苦不能被排名；認真看待自己的困難，是處理它的前提。',points:['把痛苦當成競賽，會使人忽略自己和他人的感受。','否認或貶低煩惱，可能讓人更難理解其背後深層的擔憂。'] },
    { no:48,title:'心理免疫系統',lead:'悲傷不必只被看成固定階段，也可以視為持續完成的生命任務。',points:['摘錄比較悲傷「五階段」和以任務理解失落的取徑。','無法選擇性地只關閉痛苦而保留快樂。','人可能比自己預想的更能適應艱難時刻，感受也會隨時間變化。'] },
    { no:49,title:'問建議？做諮商？',lead:'心理治療的介入，需要尊重倫理、關係界線與治療師自己的成熟度。',points:['書中介紹矛盾意向法等策略，並提醒這需要專業訓練與情境判斷。','親密關係中的隱私不必等同於有害的祕密。','治療者自身的成長，也會影響理解與陪伴他人的能力。'] },
    { no:50,title:'葬禮狂',lead:'好的道別是治療的一部分，目的是讓人帶走已建立的能力。',points:['結案時可以回顧過程、改變與未來應對策略。','正面的結束經驗，有時能修補過去反覆經歷的失落與未完成。','重要的不只是記得談過的話，而是日常生活裡真的發生了改變。'] },
    { no:52,title:'人母',lead:'防衛機制、害怕失去與對脆弱的接受，交織成人生的改變阻力。',points:['摘錄提到否定、反向作用、合理化、轉移與昇華等防衛方式。','人會在進步與退步之間來回，也常害怕失去已擁有的東西。','面對無可奈何之事，有時需要與它共處，而不是永遠尋找消除的方法。'] },
    { no:54,title:'別搞砸了',lead:'關係中的受傷難以完全避免，真正重要的是能否修復。',points:['親密關係有破裂與修復的空間，承認錯誤、負責與學習有助於信任。','害怕被拋棄的人，可能先把對方推開，形成自我實現的恐懼。','比起只記得治療說過什麼，能真正改變生活更重要。'] },
    { no:57,title:'溫德爾',lead:'最常陪伴我們的，是腦海中對自己說話的聲音。',points:['人對自己的說話方式，有時比對朋友還嚴苛。','自我理解包括辨認那些不真實、不溫柔的內在聲音，練習用更好的方式和自己相處。'] }
  ]
};

readingBook.stories = [{"title": "約翰｜指向外界的怒氣", "kind": "案例人物", "people": "約翰：來談者；羅蕊：他的心理師，也是敘事者。", "chapters": [1], "lead": "他想讓心理師幫忙管好別人；作者卻在他的反應裡，看見自己也正在掩蓋悲傷。", "timeline": ["約翰因壓力、睡眠與婚姻困擾來談，把周遭的人稱作白痴。", "晤談中，他不斷抱怨，作者很難插話。", "作者想起自己前一晚遭遇分手，隔天仍只容許自己在晤談空檔哭泣。"], "turn": "作者察覺兩人的共同點是掩蓋憂傷；這是作者的自我覺察，不能當成約翰已承認的原因。", "meaning": "整理者理解：把注意力從「別人該改」移向自己的失落與可選擇的行動，才可能打開改變的空間。", "uncertain": "本段未交代約翰具體失去什麼，也未提供後續治療結局，不補寫。", "source": "N1｜個人筆記第 1 章〈白痴〉"}, {"title": "羅蕊｜失去原本想像的未來", "kind": "作者本人", "people": "羅蕊：作者，此時也成為接受治療的人；男友：未具名；札克：她的兒子。", "chapters": [1, 2], "lead": "40 多歲、育有 8 歲兒子的羅蕊，在準備走向婚姻時遭遇意外分手。", "timeline": ["她與男友交往兩年，原本預期結婚；分手前幾天仍談著一起看電影。", "男友表示自己的女兒即將上大學，不願再過有年幼孩子的生活，關係結束。", "羅蕊尋求治療，起初盼望幾次晤談就能度過難關。", "筆記將理解推向更深的失落：除了眼前的伴侶，也失去了原本想像的未來。"], "turn": "就診原因是分手，但痛苦同時牽動過去、現在與未來；不是只把對方的離去解釋清楚就能結束。", "meaning": "整理者理解：改變與失去相連；接納不能重來的過去，也包含重新調整對未來的期待。", "uncertain": "本卡依第 1、2 章筆記與後附作者故事合併；後附段落未逐段標章。37 歲那次分手另屬生育故事，不能合併。", "source": "N1、N2｜第 1、2 章個人筆記＋N3「作者的故事」"}, {"title": "羅蕊｜從好萊塢走進急診室", "kind": "作者本人", "people": "羅蕊：影視工作者；喬伊：筆記中的急診醫師。", "chapters": [], "lead": "對影視工作的熱情漸退，卻在接觸急診室與人的故事時，找到新的投入方向。", "timeline": ["大學畢業後進入好萊塢，從電影經紀人助理、劇情編審，轉到會議與飯局應酬的工作。", "參與《急診室的春天》製作時，因醫療問題接觸喬伊。", "聽醫療故事後，她到急診室研究、反覆跟診，發現自己非常投入。", "喬伊鼓勵她仍來得及念醫學院；依筆記，她在 28 歲時認真決定探索醫學。"], "turn": "新方向來自實際接觸後的投入感，而不是原本職位的升遷。", "meaning": "整理者理解：價值與興趣可以在行動中被辨認；人生方向允許修正。這不是對作者的臨床診斷。", "uncertain": "章次待核對；28 歲與職稱均依個人筆記保留，未核原書細節或曆年。", "source": "N3｜前半段個人筆記「作者的故事」；章次待核對"}, {"title": "羅蕊｜醫學探索之後，選擇寫作", "kind": "作者本人", "people": "羅蕊：醫學生／寫作者；教授：筆記未具名。", "chapters": [], "lead": "她想聽人說故事，也想成家；重新衡量醫療工作的方式後，選擇寫作。", "timeline": ["在醫學探索之後，進入考慮專科與未來工作形式的階段。", "教授問她：既然能寫，為什麼要當醫生？", "她思考日常醫療是否容許自己深入聽人說故事，也看見成家、生育的願望。", "依筆記，她放下當醫生的方向，選擇寫作。"], "turn": "從「我能成為什麼」轉向「什麼工作形式符合我想過的生活」。", "meaning": "整理者理解：放下一條路也包含失去，但可以使選擇更靠近自己的價值。", "uncertain": "筆記未標章次、學位完成狀態與確切年份，不推定已取得醫師資格；後來成為心理師是另一階段。", "source": "N3｜前半段個人筆記「作者的故事」；章次待核對"}, {"title": "羅蕊｜尋求生育，札克出生", "kind": "作者本人", "people": "羅蕊：希望生育的作者；亞歷克斯：27 歲、曾被請求提供精子的人；札克：兒子。", "chapters": [], "lead": "37 歲一段感情結束後，她持續尋找實現生育願望的途徑。", "timeline": ["37 歲時結束一段兩年的感情，仍很想要孩子，開始尋找精子銀行的合適捐贈者。", "她標準很高，找到合適選擇時卻因熱門而無法取得。", "她請求在同業聯誼會認識的亞歷克斯提供精子；他先答應，後來因承諾的重量退縮。", "原先精子銀行的選擇重新可用；依筆記，九個月後兒子札克出生。"], "turn": "亞歷克斯退出後，原先的路徑重新出現機會；最後採用的是筆記所述精子銀行途徑。", "meaning": "整理者理解：當關係、時間與生育願望不能同時按計畫實現，人仍可能調整路徑；不把結果寫成勵志必然。", "uncertain": "這是 37 歲那次分手，不是兒子 8 歲時的分手。筆記以「退貨」描述重新釋出，實際程序、捐贈者身分與受孕方式均未提供。", "source": "N3｜前半段個人筆記「作者的故事」；章次待核對"}, {"title": "羅蕊｜育兒與寫作之後，走向心理治療", "kind": "作者本人", "people": "羅蕊：在家寫作的母親；史丹佛前院長：給予進修建議的人。", "chapters": [25], "lead": "原本喜愛的自由寫作，成為母親後也帶來孤立感；她開始尋找更深的人際連結。", "timeline": ["生育後專職在家寫稿，發現自己渴望整裝上班、與成年人相處。", "想起醫學院時希望與病人建立更深關係的願望。", "致電史丹佛前院長，得到攻讀臨床心理學研究所的建議。", "她看見寫作與心理治療可以並行：訴說故事，也幫助人改寫故事。"], "turn": "不是單純離開寫作，而是看見兩種工作可以結合。", "meaning": "整理者理解：相同工作在不同生命階段會有不同感受；新角色帶來的需要可以成為重新選擇的線索。", "uncertain": "畫線未提供入學、畢業或取得資格的年份；本卡停在動機與方向的辨認。", "source": "H25｜第 25 章〈郵差先生〉畫線，2026/09/25 12:33–12:35；與 N3 職涯筆記銜接"}, {"title": "荷蘭｜未抵達原定目的地", "kind": "書中比喻", "people": "敘事中的旅人：比喻角色，不能等同作者親身旅遊或特定案例。", "chapters": [12], "lead": "準備去義大利，卻抵達荷蘭；失落與欣賞眼前，可以同時存在。", "timeline": ["滿懷期待地規劃義大利之旅、閱讀旅遊書與打包。", "降落後聽見歡迎抵達荷蘭，驚訝於人生偏離預期。", "沒能實現夢想的痛仍在；若只盯著沒去成的地方，也可能錯失眼前的美好。"], "turn": "不需要否認原本的失落，才有資格發現新的價值。", "meaning": "整理者理解：呼應羅蕊對「失去原本的未來」的筆記；兩者是概念對照，不是同一事件。", "uncertain": "畫線從準備生育的比喻起頭，未提供此篇作者或完整背景，不推定人物身分。", "source": "H12｜第 12 章〈歡迎蒞臨荷蘭〉畫線，2026/09/25 11:53–11:54"}, {"title": "夏綠蒂｜渴望靠近，也害怕依賴", "kind": "案例人物", "people": "夏綠蒂：25 歲來談者；羅蕊：她的心理師。", "chapters": [28, 33], "lead": "沒有自述重大事件，卻感到焦慮與工作倦怠；關係中既期待連結又不信任穩定。", "timeline": ["第 28 章個案記錄：與父母有摩擦，不適應繁忙社交，談到焦慮、工作倦怠與每晚飲酒。", "治療關係提供有限度的靠近；她在晤談之間想著心理師，也擔心太依賴。", "第 33 章畫線提到她少談生活中的好事，並對穩定及伴隨而來的快樂感到不安。"], "turn": "可靠而有界線的關係，與原有負面預期之間出現差異。", "meaning": "整理者理解：用跨章片段觀察重複模式與矯正性情緒經驗，不把一般理論當成完整病史。", "uncertain": "依章序呈現，不能換算真實時間；未據此診斷成癮，也不補寫戀愛史或治療結果。", "source": "H28、H33｜第 28、33 章畫線，2026/09/25、09/27"}, {"title": "麗塔｜不敢相信好事", "kind": "案例人物", "people": "麗塔：來談者；羅蕊：她的心理師。", "chapters": [24, 41], "lead": "晚年的失落牽動一生的失去；美好的事物有時反而引發對下一次受傷的警覺。", "timeline": ["第 24 章畫線指出：她隨年老逐漸意識到，一生都在經歷失去。", "第 41 章片段呈現她預期事情總會變糟，難以安心接受喜悅。", "作者探索停留在痛苦中可能具有的保護功能，以及不值得擁有美好的內在聲音。"], "turn": "把痛苦也看作可能的自我保護，讓「不敢享受」的模式可以被理解。", "meaning": "整理者理解：熟悉的痛苦可能比未知的快樂更安全；這是書中對麗塔的理解，不應推廣為所有憂鬱者的原因。", "uncertain": "僅能依章序串連片段，沒有完整生平、會談日期與結局；不將她與作者混為一人。", "source": "H24、H41｜第 24、41 章畫線，2026/09/25、09/27"}, {"title": "茱莉｜有限的日子，仍有喜悅", "kind": "案例人物", "people": "茱莉：面對癌症與生命有限的來談者；馬特：她的伴侶；羅蕊：心理師。", "chapters": [43, 50], "lead": "她需要的不是催促樂觀，而是有人承認難過，願意陪她活過眼前的日子。", "timeline": ["第 43 章，她談到空泛鼓勵讓自己更孤單，說明真誠關心與具體協助更有用。", "她逐漸享受微小日常；與馬特把有限時間裡的相處比作婚姻速成班。", "第 50 章，她分享時間旅行的想法，想到自己甚至來不及累積許多可以彌補的遺憾，既笑又哭。"], "turn": "對人生短促的憤怒，也映照生命如此美好；悲傷與喜悅並不互相排斥。", "meaning": "整理者理解：陪伴不必消除失落；有限性也使當下的關係與日常更鮮明。", "uncertain": "畫線未提供完整病程與結局；不補寫死亡場景。章序不等於精確會談時間。", "source": "H43、H50｜第 43、50 章畫線，2026/09/27、09/28"}];
readingBook.chapters.unshift(...[{"no": 1, "title": "白痴", "lead": "約翰帶著對外界的不滿來談；心理師也在他的反應裡，照見自己尚未面對的失落。", "points": ["人物分清：睡眠、壓力與婚姻困擾屬於約翰；前一晚遭男友分手的是作者羅蕊。", "約翰期待別人改變，作者則思考治療如何幫人為可選擇的生活負責。這不等於否認外在困境。", "治療的鏡子是雙向的：理解別人的同時，心理師也需要辨認自己的感受與防衛。", "探索父母是為了理解早期經驗如何影響當下，分開過去與現在；不是只為責備。", "改變伴隨失去，但本段未交代約翰具體失去什麼。"], "source": "N1｜使用者個人筆記明確標示第 1 章；並非完整原章。"}, {"no": 2, "title": "如果王后有蛋蛋", "lead": "作者由心理師轉為求助者：意外分手使她需要面對自己敘事裡未看見的部分。", "points": ["40 多歲的作者因分手求助，最初希望幾次晤談便能度過難關。", "人生轉折是就診入口；治療仍可能帶向原本沒有看見的問題與未知。", "不可靠的敘述者不等於故意說謊，而是每個人都可能省略不符合自身視角的面向。", "完美的假設可能讓人停在「如果當初」，難以接住眼前已有的美好。", "筆記在第 2 章標題後連續記錄多項概念，未再逐段標章；其餘內容另列「前半段補充」，避免全部斷定屬於本章。"], "source": "N2｜使用者個人筆記第 2 章明確可辨識段落；後附作者故事用於故事卡補充。"}, {"no": 0, "title": "前半段補充｜章次待核對", "lead": "以下整合第 2 章標題後的連續筆記與「作者的故事」。原筆記未逐段提供章號，保留為前半段補充。", "points": ["全書提問：人如何在關係裡改變？筆記把共同人性、自我理解與好奇心放在中心。", "從小步行動累積改變：不要求先看見完整出路，再開始下一步。", "就診原因可能只是入口；麻木可能是承受過多感受，防衛原本保護人，後來也可能限制人。", "真誠的同理包含指出難題；一味保護感受的「白痴慈悲」，可能讓人避開需要面對的事。", "失去不只是人或物，也包含其意義與預想的未來。接納過去不能重來，也要鬆動對未來的固定想像。", "病人需要對自己保持好奇、承受一定的不自在，並逐步領悟自己的真相；心理師不能代替病人走完。", "關係裡心理師的感受可能提供互動線索，但不能直接等同所有人對病人的感受。", "作者的時間線：影視工作 → 醫學探索 → 寫作 → 37 歲尋求生育、札克出生 → 育兒與工作重新調整；40 多歲、兒子 8 歲時另遭分手。階段間的精確年份未提供。", "筆記提及班托對快樂分類的反諷，以及榮格、康菲爾德引語；目前只保留為讀者記錄，未核原文或出處，不作診斷標準。"], "source": "N2 延續段、N3「作者的故事」｜前半段個人筆記；確切章次待核對。與第 25 章畫線銜接的部分有另外標明。"}]);


readingBook.themes[0].chapters.unshift(2);
readingBook.themes[0].points.push('前半段筆記補充：失落也包含原本想像的未來。與第 12 章荷蘭比喻對照，接納不要求抹除遺憾。');
readingBook.themes[1].chapters.unshift(1);
readingBook.themes[1].points.push('第 1 章補充：作者在約翰的抱怨裡照見自己掩蓋悲傷的方式。前半段未標章筆記也提醒，麻木可能是被太多感受吞沒。');
readingBook.themes[2].chapters.unshift(1);
readingBook.themes[2].points.push('第 1 章補充：探索父母是理解舊經驗如何影響現在，並尋找應對方式；不是把一切責任停在父母身上。');
readingBook.themes[3].chapters.unshift(1,2);
readingBook.themes[3].points.push('第 1、2 章與前半段補充：從責任、自我好奇到小步行動，改變需要當事人承受一定的不自在，逐步形成自己的領悟。');
readingBook.themes[4].points.push('前半段作者故事（章次待核）：從影視、醫學探索到寫作與生育，她反覆調整工作與生活的優先順序；第 25 章則銜接後來走向心理治療。');
readingBook.themes[5].chapters.unshift(1,2);
readingBook.themes[5].points.push('第 1、2 章與前半段補充：治療關係具有雙向性；同理也包括誠實指出需要面對的問題，不只是安慰。');
readingBook.chapters.find(x=>x.no===25).points.push('與前半段作者故事銜接：早先選擇寫作、後來生育，再因育兒中的孤立與渴望更深連結，重新尋找工作方向；這些不是同一次職涯決定。');
function renderStory(item){
 return `<div class="article-kicker">${escapeHTML(item.kind)} · 故事卡片</div><h2>${escapeHTML(item.title)}</h2><p class="story-people">${escapeHTML(item.people)}</p><p class="article-lead">${escapeHTML(item.lead)}</p><div class="article-section-label">事件順序</div><ol class="story-timeline">${item.timeline.map(x=>`<li>${escapeHTML(x)}</li>`).join('')}</ol><div class="article-section-label">轉折</div><p class="article-lead">${escapeHTML(item.turn)}</p><div class="article-section-label">心理學意義 · 整理者理解</div><p class="article-lead">${escapeHTML(item.meaning)}</p><aside class="story-uncertain"><strong>保留的不確定處</strong><p>${escapeHTML(item.uncertain)}</p></aside><div class="article-source">${escapeHTML(item.source)}<div class="related-pills">${item.chapters.map(no=>`<button type="button" onclick="goChapter(${no})">讀第 ${no} 章 ↗</button>`).join('')}</div></div>`;
}
function goChapter(no){state.mode='chapters';state.index=readingBook.chapters.findIndex(x=>x.no===no);renderReader();}
let sourceCache;
function sourcePanel(item){
 if(state.currentBook.sourceTextPath){setTimeout(()=>loadSourceExcerpt(item),0);return `<details class="source-panel"><summary>查看原始筆記</summary><p>來源：你的 Notion 筆記。依段落濃縮，未提供原書章次；整理者的示例解讀不等於原書完整案例。</p><pre id="sourceExcerpt">正在載入…</pre><a href="${escapeHTML(state.currentBook.noteSource)}" target="_blank" rel="noopener">開啟 Notion 原筆記 ↗</a></details>`;}
 setTimeout(()=>loadSourceExcerpt(item),0);
 return `<details class="source-panel"><summary>查看原始筆記與畫線</summary><p>N：個人讀書筆記；H：匯出畫線。整理者的串連與詮釋已另行標示。未核對原書全文。</p><pre id="sourceExcerpt">正在載入來源…</pre><a href="reading-sources.json" target="_blank" rel="noopener">開啟完整來源資料 ↗</a></details>`;
}
async function loadSourceExcerpt(item){
 const target=el('sourceExcerpt');
 try{sourceCache ||= await fetch('reading-sources.json').then(r=>{if(!r.ok)throw Error();return r.json()});
 if(!target?.isConnected)return;
 const nos=item.chapters|| (item.no?[item.no]:[]);
 const chunks=sourceCache.highlights.split(/(?=^\d{1,2} .+\n2026\/)/m);
 const h=chunks.filter(x=>nos.includes(Number(x.match(/^(\d+) /)?.[1]))).join('\n');
 const showNotes=state.mode==='themes'||item.source?.includes('N');
 target.textContent=(showNotes?'【N｜個人筆記原文；章號僅以原始標題為準】\n'+sourceCache.notes+'\n\n':'')+(h?'【H｜相關章節畫線】\n'+h:'');
 if(!target.textContent)target.textContent='本項完整畫線請見下方來源資料。';
 }catch{if(target)target.textContent='來源暫時無法載入，請使用下方完整來源連結。';}
}

const el = id => document.getElementById(id);
const state = { currentBook:null, mode:'themes', index:0, extras:[], font:16, yearOnly:false, readYears:{}, canEdit:false, cloudReady:false, order:[], suppressedClick:0 };
const storeKey = 'quiet-shelf-books-v1';
const accentColors = ['#b78d70','#90a7a4','#a596b3','#c3aa76','#bd8d7c','#8da18a'];
const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function loadExtras(){ try { const data=JSON.parse(localStorage.getItem(storeKey)||'[]'); state.extras=Array.isArray(data)?data.filter(x=>x&&typeof x.title==='string').slice(0,60):[]; } catch { state.extras=[]; } }
function persistExtras(){ try { localStorage.setItem(storeKey,JSON.stringify(state.extras)); return true; } catch { return false; } }
function currentReadingYear(){return Number(new Intl.DateTimeFormat('en',{year:'numeric',timeZone:'Asia/Taipei'}).format(new Date()));}
function readingYear(book){return Object.hasOwn(state.readYears,book.id)?state.readYears[book.id]:book.readYear||null;}
function visibleBooks(){return allBooks().filter(book=>!state.yearOnly||readingYear(book)===currentReadingYear());}
function loadReadingYears(){try{const data=JSON.parse(localStorage.getItem('quiet-shelf-reading-years-v1')||'{}');state.readYears=data&&typeof data==='object'&&!Array.isArray(data)?data:{};}catch{state.readYears={};}}
function allBooks(){ const books=[readingBook,...state.extras];const rank=new Map(state.order.map((id,i)=>[id,i]));return books.sort((a,b)=>(rank.get(a.id)??1e6)-(rank.get(b.id)??1e6)); }
function fallbackCover(book){
  const lines = (book.title||'讀過的書').match(/.{1,7}/gu)?.slice(0,4) || ['讀過的書'];
  const titleLines = lines.map((line,i)=>`<text x="150" y="${128+i*45}" font-size="27" font-family="serif" text-anchor="middle" fill="#f5e5c9">${escapeHTML(line)}</text>`).join('');
  return 'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 420"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#68543f"/><stop offset="1" stop-color="#30251c"/></linearGradient></defs><rect width="300" height="420" fill="url(#g)"/><rect x="18" y="18" width="264" height="384" fill="none" stroke="#c5a171" stroke-width="1"/><text x="150" y="75" font-size="15" fill="#cfaa75" letter-spacing="5" text-anchor="middle">THE QUIET SHELF</text>${titleLines}<path d="M95 350H205" stroke="#bc9e74"/><text x="150" y="380" font-family="serif" font-size="14" fill="#d6b88c" text-anchor="middle">${escapeHTML(book.author||'我的收藏')}</text></svg>`);
}
function updateCounts(){ const count=allBooks().length; el('headerCount').textContent=`已收藏 ${String(count).padStart(2,'0')} 本`; el('introCount').textContent=`目前收藏 ${count} 本書`;
 el('yearFilter').setAttribute('aria-pressed',String(state.yearOnly));
 el('yearFilter').classList.toggle('active',state.yearOnly);
 el('yearFilter').textContent=`今年閱讀 ${allBooks().filter(book=>readingYear(book)===currentReadingYear()).length} 本書`;
 el('filterSummary').hidden=true;
 el('filterSummary').textContent='';
 el('shelfEmpty').hidden=!(state.yearOnly&&visibleBooks().length===0); }
function renderShelf(){
  const shelf=el('shelfBooks'); shelf.replaceChildren();
  visibleBooks().forEach((book,i)=>{
    const spine=document.createElement('button'); spine.className='shelf-book'+(book.id===readingBook.id?' featured-spine':'');
    spine.style.setProperty('--book-accent',book.accent||accentColors[i%accentColors.length]);
    spine.style.setProperty('--book-height',`${(book.heightMm||210)*1.25}px`);
    spine.style.setProperty('--book-width',`${(book.thicknessMm||27)*1.25}px`);
    spine.setAttribute('aria-label',`抽出《${book.title}》`); spine.title=`抽出《${book.title}》`;
    const title=document.createElement('span');title.className='shelf-book-title'; title.textContent=book.spineTitle||book.title;spine.append(title);
    const author=document.createElement('span');author.className='shelf-book-author';author.textContent=book.author||'私人藏書';spine.append(author);
    const edge=document.createElement('span');edge.className='book-cover-edge';edge.setAttribute('aria-hidden','true');spine.append(edge);
    spine.dataset.bookId=book.id;spine.draggable=false;spine.dataset.canReorder=String(state.canEdit);spine.style.setProperty('--author-chars',String((book.author||'私人藏書').length));
    for(const cls of ['spine-rule-top','spine-rule-bottom','book-page-top','book-bottom-face']){const face=document.createElement('span');face.className=cls;face.setAttribute('aria-hidden','true');spine.append(face);}
    for(const cls of ['book-side-left','book-side-right']){const face=document.createElement('span');face.className=cls;face.setAttribute('aria-hidden','true');face.style.backgroundColor=book.accent||'#b5a081';if(book.cover){const image=document.createElement('img');image.alt='';image.src=book.cover;image.loading='lazy';image.onerror=()=>image.hidden=true;face.append(image);}spine.append(face);}
    spine.addEventListener('click',()=>{if(Date.now()<state.suppressedClick)return;openPullout(book);});
    if(state.canEdit)attachBookReorder(spine);shelf.append(spine);
  });
  updateCounts();requestAnimationFrame(updateBookPerspective);
}
function lockScroll(isLocked){document.body.style.overflow=isLocked?'hidden':'';}
function openPullout(book){
  state.currentBook=book; el('pulledTitle').textContent=book.title; el('pulledAuthor').textContent=book.author||'私人藏書';el('pulledEnglishTitle').textContent=book.id===readingBook.id?'Maybe You Should Talk to Someone':book.englishTitle||'';el('pulledEnglishAuthor').textContent=book.id===readingBook.id?'Lori Gottlieb':book.englishAuthor||'';
  const intro=typeof book.description==='string'?book.description.trim():'';
  el('pulledDesc').textContent=intro;el('pulledDesc').hidden=!intro;
  el('pulloutDivider').hidden=!intro;
  const source=el('pulledIntroSource');let sourceUrl='';
  try{const url=new URL(book.synopsisSource);if(['https:','http:'].includes(url.protocol))sourceUrl=url.href;}catch{}
  source.hidden=true;if(sourceUrl)source.href=sourceUrl;
  el('pulledCover').src=book.cover||fallbackCover(book); el('pulledCover').onerror=()=>{el('pulledCover').onerror=null;el('pulledCover').src=fallbackCover(book);};
  el('openReaderButton').innerHTML=book.featured?'翻開這本書 <span aria-hidden="true">↗</span>':'查看書籍檔案 <span aria-hidden="true">↗</span>';
  el('bookOverlay').hidden=false;lockScroll(true);
}
function closePullout(){el('bookOverlay').hidden=true;if(el('readerLayer').hidden&&el('addOverlay').hidden&&el('aboutOverlay').hidden)lockScroll(false);}
function getSections(){
  if(state.currentBook?.featured)return state.mode==='themes'?state.currentBook.themes:state.mode==='stories'?state.currentBook.stories:state.currentBook.chapters;
  return [{title:'等待你的閱讀筆記',lead:'這本書已收藏。下一階段可以匯入你輸出的畫線與筆記，讓 AI 為它建立六大主題與逐章濃縮。',points:['目前只有書名與作者，沒有書籍內容。','我們不會只憑書名假裝已讀過整本書。'],chapters:[]}];
}
function openReader(){
  if(!state.currentBook)return;
  state.mode='themes';state.index=0; el('bookOverlay').hidden=true;el('readerLayer').hidden=false; lockScroll(true);
  el('readerBookTitle').textContent=state.currentBook.title;
  el('tocExplain').textContent=state.currentBook.featured?'用你畫下的段落，重新拼起這本書的思考脈絡。':'這本書目前只有收藏資訊，閱讀整理尚待加入。';
  el('themeTab').innerHTML=state.currentBook.sourceTextPath?'主題整理':'<span>✳</span> 六大主題';el('storyTab').hidden=!(state.currentBook.stories?.length);
  el('chapterTab').innerHTML=state.currentBook.chaptersLabel||'<span>☷</span> 逐章濃縮';
  el('tocExplain').textContent=state.currentBook.sourceTextPath?'依你的筆記段落整理，未標原書章次。':el('tocExplain').textContent;
  renderReader();
}
function closeReader(){el('readerLayer').hidden=true;state.currentBook=null;lockScroll(false);}
function switchMode(mode){state.mode=mode;state.index=0;renderReader();}
function setPage(index){const sections=getSections();state.index=Math.max(0,Math.min(index,sections.length-1));renderReader();}
function renderReader(){
  const sections=getSections(); const isThemes=state.mode==='themes'; const index=state.index; const item=sections[index]; const isStory=state.mode==='stories';
  ['themeTab','chapterTab','storyTab'].forEach((id,i)=>{const active=['themes','chapters','stories'][i]===state.mode;el(id).classList.toggle('active',active);el(id).setAttribute('aria-selected',String(active));});
  const toc=el('tocList'); toc.replaceChildren();
  sections.forEach((section,i)=>{
    const btn=document.createElement('button');btn.className='toc-item'+(i===index?' active':'');btn.type='button';btn.setAttribute('aria-current',i===index?'page':'false');
    btn.innerHTML=`<span class="toc-item-index">${String(i+1).padStart(2,'0')}</span><span class="toc-item-title">${escapeHTML((isThemes||isStory)?section.title:`${section.no||''} ${section.title}`)}</span><span class="toc-item-arrow">↗</span>`;
    btn.addEventListener('click',()=>setPage(i));toc.append(btn);
  });
  toc.querySelector('.active')?.scrollIntoView({block:'nearest',inline:'nearest'});
  const total=sections.length; el('tocFooterCount').textContent=`${String(index+1).padStart(2,'0')} / ${String(total).padStart(2,'0')}`;
  el('articleCategory').textContent=state.currentBook.sourceTextPath&&!isStory?(isThemes?'閱讀主題':'筆記段落'):isStory?`STORY ${String(index+1).padStart(2,'0')} · ${item.kind||''}`:isThemes?`PERSONAL THEME ${String(index+1).padStart(2,'0')}`:`CHAPTER ${item.no||String(index+1).padStart(2,'0')}`;
  el('articlePageNum').textContent=`${String(index+1).padStart(2,'0')} — ${String(total).padStart(2,'0')}`;
  el('pageIndicator').textContent=`${index+1} / ${total}`;
  el('prevPage').disabled=index===0; el('nextPage').disabled=index===total-1;
  el('progressBar').style.width=`${((index+1)/total)*100}%`;
  const sourceInfo=item.source|| (state.currentBook?.featured?(isThemes?`整理自你的第 ${(item.chapters||[]).join('、')} 章相關畫線與前半段個人筆記（未標章處另註）。這是融合理解的個人知識主題，並非原書目錄。`:`資料依據：你匯出的第 ${item.no} 章劃線。這是劃線內容的濃縮，不代表完整章節摘要。`):'資料狀態：尚未匯入劃線；沒有生成原書內容。');
  el('articleContent').innerHTML=isStory ? renderStory(item) : `<div class="article-kicker">${isThemes?'MY READING THEMES':'CHAPTER NOTES'}</div><h2>${escapeHTML(isThemes?item.title:`${item.no?`第 ${item.no} 章｜`:''}${item.title}`)}</h2><p class="article-lead">${escapeHTML(item.lead)}</p><div class="article-section-label">${isThemes?'從畫線與筆記融合理解':'這一章的濃縮'}</div>${item.points.map(point=>`<p class="article-point">${escapeHTML(point)}</p>`).join('')}${item.insight?`<div class="article-section-label">跨章思考</div><blockquote class="article-quote">${escapeHTML(item.insight)}</blockquote>`:''}<div class="article-source">✳ ${escapeHTML(sourceInfo)}${isThemes&&item.chapters?.length?`<div class="related-pills">${item.chapters.map(no=>`<span>第 ${no} 章</span>`).join('')}</div>`:''}</div>`;
  if(state.currentBook?.featured) el('articleContent').insertAdjacentHTML('beforeend',sourcePanel(item));
  el('articleContent').scrollTop=0;
  el('readerArticle').classList.remove('page-changing');void el('readerArticle').offsetWidth;el('readerArticle').classList.add('page-changing');
}
function openUtility(which){if(which==='add'&&!state.canEdit){showToast('請先使用管理登入');return;}el(which+'Overlay').hidden=false;lockScroll(true);if(which==='add')setTimeout(()=>el('newTitle').focus(),80);}
function closeUtility(which){el(which+'Overlay').hidden=true;if(el('bookOverlay').hidden&&el('readerLayer').hidden)lockScroll(false);}
let toastTimer;
function showToast(message){const toast=el('toast');toast.textContent=message;toast.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('visible'),3300)}
async function submitBook(event){
 event.preventDefault();if(!state.canEdit)return;
 const title=el('newTitle').value.trim();if(!title)return;
 if(allBooks().some(book=>book.title===title)){showToast('這本書已經在書櫃裡囉');return;}
 const btn=event.submitter;if(btn)btn.disabled=true;
 const payload={title,author:el('newAuthor').value.trim(),cover:el('newCover').value.trim(),readYear:null};
 try{const result=await cloudRequest('/api/books',{method:'POST',body:JSON.stringify(payload)});state.extras.push(result.book);renderShelf();el('addBookForm').reset();closeUtility('add');showToast('已收藏到雲端書櫃');}
 catch(error){showToast(error.message);}
 finally{if(btn)btn.disabled=false;}
}
function bindEvents(){
  el('importLocal').addEventListener('click',importLocalBooks);
  el('yearFilter').addEventListener('click',()=>{state.yearOnly=!state.yearOnly;renderShelf();});
  el('homeLink').addEventListener('click',event=>{event.preventDefault();window.scrollTo({top:0,behavior:'smooth'});});
  el('headerAddButton').addEventListener('click',()=>openUtility('add'));
  el('addBookSlot').addEventListener('click',()=>openUtility('add'));
  el('aboutButton').addEventListener('click',()=>openUtility('about'));
  document.querySelectorAll('[data-action="close-pullout"]').forEach(x=>x.addEventListener('click',closePullout));
  document.querySelectorAll('[data-action="close-add"]').forEach(x=>x.addEventListener('click',()=>closeUtility('add')));
  document.querySelectorAll('[data-action="close-about"]').forEach(x=>x.addEventListener('click',()=>closeUtility('about')));
  el('openReaderButton').addEventListener('click',openReader);
  el('readerBack').addEventListener('click',closeReader);
  el('themeTab').addEventListener('click',()=>switchMode('themes'));
  el('chapterTab').addEventListener('click',()=>switchMode('chapters'));
  el('storyTab').addEventListener('click',()=>switchMode('stories'));
  el('prevPage').addEventListener('click',()=>setPage(state.index-1));
  el('nextPage').addEventListener('click',()=>setPage(state.index+1));
  el('fontDown').addEventListener('click',()=>{state.font=Math.max(13,state.font-1);document.documentElement.style.setProperty('--reading-size',state.font+'px');});
  el('fontUp').addEventListener('click',()=>{state.font=Math.min(21,state.font+1);document.documentElement.style.setProperty('--reading-size',state.font+'px');});
  el('addBookForm').addEventListener('submit',submitBook);
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'){if(!el('readerLayer').hidden)closeReader();else if(!el('bookOverlay').hidden)closePullout();else if(!el('addOverlay').hidden)closeUtility('add');else if(!el('aboutOverlay').hidden)closeUtility('about');}
    if(!el('readerLayer').hidden&&event.key==='ArrowRight')setPage(state.index+1);
    if(!el('readerLayer').hidden&&event.key==='ArrowLeft')setPage(state.index-1);
  });
  let touchStartX=0;
  el('readerArticle').addEventListener('touchstart',event=>{touchStartX=event.changedTouches[0]?.screenX||0;},{passive:true});
  el('readerArticle').addEventListener('touchend',event=>{const diff=(event.changedTouches[0]?.screenX||0)-touchStartX;if(Math.abs(diff)>85)setPage(state.index+(diff<0?1:-1));},{passive:true});
}
renderShelf();bindEvents();

const cloudOrigin='https://my-reading-atelier-2026.ting00236.chatgpt.site';
async function cloudRequest(path,options={}){
 const response=await fetch(cloudOrigin+path,{...options,credentials:location.origin===cloudOrigin?'same-origin':'omit',headers:{...(options.body?{'content-type':'application/json'}:{}),...options.headers},cache:'no-store'});
 const result=await response.json();if(!response.ok)throw new Error(result.error||'雲端同步失敗，請稍後再試');return result;
}
function applyAccess(){
 el('headerAddButton').hidden=!state.canEdit;el('addBookSlot').hidden=!state.canEdit;el('manageLink').hidden=state.canEdit;
 let local=[];try{local=JSON.parse(localStorage.getItem(storeKey)||'[]');}catch{}
 el('importLocal').hidden=!(state.canEdit&&Array.isArray(local)&&local.length);
}
async function loadCloud(){
 applyAccess();
 try{const [data,session,catalog]=await Promise.all([cloudRequest('/api/library'),cloudRequest('/api/session'),fetch('books/catalog.json').then(r=>{if(!r.ok)throw Error();return r.json();})]);
 state.extras=data.books.filter(book=>book.id!==readingBook.id).map(book=>{const notes=catalog.find(x=>x.id===book.id);return notes?{...book,...notes,cover:notes.cover||book.cover,readYear:book.readYear}:book;});state.order=Array.isArray(data.order)?data.order:[];state.readYears={};
 for(const book of data.books)if(Object.hasOwn(book,'readYear'))state.readYears[book.id]=book.readYear;
 state.canEdit=session.canEdit;state.cloudReady=true;renderShelf();applyAccess();
 }catch{showToast('雲端暫時無法連線，請重新整理後再試');}
}
async function importLocalBooks(){
 if(!state.canEdit)return;let local=[];try{local=JSON.parse(localStorage.getItem(storeKey)||'[]');}catch{}
 const button=el('importLocal');button.disabled=true;let count=0;
 try{for(const book of local){if(!book?.title||allBooks().some(x=>x.title===book.title))continue;
 const result=await cloudRequest('/api/books',{method:'POST',body:JSON.stringify({title:book.title,author:book.author||'',cover:book.cover||'',readYear:Number.isInteger(book.readYear)?book.readYear:null})});state.extras.push(result.book);count++;}
 renderShelf();showToast('已匯入 '+count+' 本書到雲端');button.hidden=true;
 }catch(error){renderShelf();showToast(error.message);}finally{button.disabled=false;}
}
window.addEventListener('pageshow',()=>{if(state.cloudReady)loadCloud();});
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&state.cloudReady&&el('bookOverlay').hidden&&el('addOverlay').hidden)loadCloud();});

loadCloud();

let draggedBook=null,touchDrag=null;
function updateBookPerspective(){
 const shelf=el('shelfBooks'),buttons=[...shelf.querySelectorAll('.shelf-book')];if(!buttons.length)return;
 const box=shelf.getBoundingClientRect(),center=box.left+box.width/2;
 for(const book of buttons){const r=book.getBoundingClientRect();const normalized=Math.max(-1,Math.min(1,(r.left+r.width/2-center)/Math.max(1,box.width/2)));book.style.setProperty('--book-yaw',(normalized*14)+'deg');book.style.setProperty('--page-opacity',String(.8-Math.abs(normalized)*.5));}
}
function moveBookBeforePoint(book,x,y){
 const target=document.elementFromPoint(x,y)?.closest('.shelf-book');if(!target||target===book||target.parentElement!==book.parentElement)return;
 const rect=target.getBoundingClientRect();target.parentElement.insertBefore(book,x<rect.left+rect.width/2?target:target.nextSibling);updateBookPerspective();
}
async function persistBookOrder(){
 const ids=[...el('shelfBooks').querySelectorAll('.shelf-book')].map(x=>x.dataset.bookId);const visible=new Set(ids);let i=0;const order=allBooks().map(book=>visible.has(book.id)?ids[i++]:book.id);state.suppressedClick=Date.now()+600;
 try{await cloudRequest('/api/order',{method:'PUT',body:JSON.stringify({order})});state.order=order;showToast('書籍排列已同步到雲端');}
 catch(error){showToast(error.message);await loadCloud();}
}
function attachBookReorder(book){
 book.title+=' · 拖曳調整位置';
 book.addEventListener('pointerdown',event=>{
  if(event.button!==0&&event.pointerType==='mouse')return;
  const entry={book,x:event.clientX,y:event.clientY,id:event.pointerId,mouse:event.pointerType==='mouse',active:false};
  if(!entry.mouse)entry.timer=setTimeout(()=>{if(touchDrag!==entry)return;entry.active=true;book.classList.add('is-dragging');book.setPointerCapture(entry.id);state.suppressedClick=Date.now()+10000;},260);
  touchDrag=entry;
 });
 book.addEventListener('keydown',event=>{if(!event.altKey||!['ArrowLeft','ArrowRight'].includes(event.key))return;event.preventDefault();const sibling=event.key==='ArrowLeft'?book.previousElementSibling:book.nextElementSibling;if(!sibling)return;book.parentElement.insertBefore(book,event.key==='ArrowLeft'?sibling:sibling.nextSibling);persistBookOrder();book.focus();updateBookPerspective();});
}
document.addEventListener('pointermove',event=>{
 const drag=touchDrag;if(!drag)return;const distance=Math.abs(event.clientX-drag.x)+Math.abs(event.clientY-drag.y);
 if(!drag.active&&drag.mouse&&distance>5){drag.active=true;drag.book.classList.add('is-dragging');drag.book.setPointerCapture(drag.id);state.suppressedClick=Date.now()+10000;}
 if(!drag.active){if(distance>12){clearTimeout(drag.timer);touchDrag=null;}return;}
 event.preventDefault();moveBookBeforePoint(drag.book,event.clientX,event.clientY);
},{passive:false});
document.addEventListener('pointerup',()=>{if(!touchDrag)return;const drag=touchDrag;clearTimeout(drag.timer);touchDrag=null;drag.book.classList.remove('is-dragging');if(drag.active)persistBookOrder();});
document.addEventListener('pointercancel',()=>{if(touchDrag){clearTimeout(touchDrag.timer);touchDrag.book.classList.remove('is-dragging');}touchDrag=null;state.suppressedClick=Date.now()+500;renderShelf();});
window.addEventListener('resize',updateBookPerspective);
