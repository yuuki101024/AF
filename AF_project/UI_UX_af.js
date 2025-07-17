// --- 多言語辞書 ---
const translations = {
  ja: {
    navInput: "入力",
    navConvert: "変換",
    navSetting: "設定",
    navRun: "実行",
    centerText: "単語もしくは、文を入力してください",
    placeholder: "ここに入力",
    submit: "送信",
    added: v => v + "を追加しました。",
    addedListTitle: "追加リスト",
    mainTitle: "単語ボタン読み上げ",
    confirm: "決定",
    volume: "音量: ",
    runList: [
      "りんご","ばなな","みかん","ぶどう","パイナップル","すいか","もも","さくらんぼ","メロン","レモン","キウイ","グレープフルーツ","マンゴー","ブルーベリー","ラズベリー","いちご","カシス","ライチ","ドリアン","アボカド","トマト","なす","きゅうり","キャベツ","レタス","にんじん","だいこん","たまねぎ","じゃがいも","さつまいも","かぼちゃ","ほうれんそう","ブロッコリー","カリフラワー","ピーマン","とうもろこし","ごぼう","れんこん","しいたけ","しめじ","まいたけ","えのき","たけのこ","こんにゃく","もやし","みつば","せり","みょうが","パセリ","うさぎ","ぞう","きつね","くま","さる","とら","いぬ","ねこ","しか","たぬき","かめ","かえる","へび","とり","すずめ","はと","からす","わし","たか","ぺんぎん","らいおん","ひつじ","やぎ","うし","うま","ぶた","にわとり","あひる","かも","さかな","いくら","たこ","いか","えび","かに","ほたて","しじみ","あさり","まぐろ","さけ","さば","いわし","さんま","たら","かれい","ひらめ","あじ","さより","すずき"
    ]
  },
  en: {
    navInput: "Input",
    navConvert: "Convert",
    navSetting: "Settings",
    navRun: "Run",
    centerText: "Please enter a word or sentence",
    placeholder: "Enter here",
    submit: "Submit",
    added: v => `"${v}" has been added.`,
    addedListTitle: "Added List",
    mainTitle: "Word Button Speech",
    confirm: "Confirm",
    volume: "Volume: ",
    runList: [
      "Apple","Banana","Mandarin","Grape","Pineapple","Watermelon","Peach","Cherry","Melon","Lemon","Kiwi","Grapefruit","Mango","Blueberry","Raspberry","Strawberry","Cassis","Lychee","Durian","Avocado","Tomato","Eggplant","Cucumber","Cabbage","Lettuce","Carrot","Radish","Onion","Potato","Sweet potato","Pumpkin","Spinach","Broccoli","Cauliflower","Green pepper","Corn","Burdock","Lotus root","Shiitake","Shimeji","Maitake","Enoki","Bamboo shoot","Konjac","Bean sprout","Mitsuba","Seri","Myoga","Parsley","Rabbit","Elephant","Fox","Bear","Monkey","Tiger","Dog","Cat","Deer","Raccoon dog","Turtle","Frog","Snake","Bird","Sparrow","Pigeon","Crow","Eagle","Hawk","Penguin","Lion","Sheep","Goat","Cow","Horse","Pig","Chicken","Duck","Wild duck","Fish","Salmon roe","Octopus","Squid","Shrimp","Crab","Scallop","Shijimi","Asari","Tuna","Salmon","Mackerel","Sardine","Pacific saury","Cod","Flatfish","Flounder","Horse mackerel","Halfbeak","Sea bass"
    ]
  },
  zh: {
    navInput: "输入",
    navConvert: "转换",
    navSetting: "设置",
    navRun: "执行",
    centerText: "请输入单词或句子",
    placeholder: "在此输入",
    submit: "提交",
    added: v => `已添加：${v}`,
    addedListTitle: "添加列表",
    mainTitle: "单词按钮朗读",
    confirm: "确定",
    volume: "音量: ",
    runList: [
      "苹果","香蕉","橘子","葡萄","菠萝","西瓜","桃子","樱桃","哈密瓜","柠檬","猕猴桃","葡萄柚","芒果","蓝莓","覆盆子","草莓","黑加仑","荔枝","榴莲","鳄梨","番茄","茄子","黄瓜","卷心菜","生菜","胡萝卜","白萝卜","洋葱","土豆","红薯","南瓜","菠菜","西兰花","菜花","青椒","玉米","牛蒡","莲藕","香菇","蟹味菇","舞茸","金针菇","竹笋","魔芋","豆芽","三叶芹","水芹","茗荷","欧芹","兔子","大象","狐狸","熊","猴子","老虎","狗","猫","鹿","狸猫","乌龟","青蛙","蛇","鸟","麻雀","鸽子","乌鸦","鹰","隼","企鹅","狮子","绵羊","山羊","牛","马","猪","鸡","鸭","野鸭","鱼","鲑鱼子","章鱼","鱿鱼","虾","螃蟹","扇贝","蜆","蛤蜊","金枪鱼","三文鱼","鲭鱼","沙丁鱼","秋刀鱼","鳕鱼","比目鱼","鲽鱼","竹荚鱼","细鳞鱼","鲈鱼"
    ]
  }
};

// --- ページ切り替え ---
function showPage(page) {
  document.getElementById('page-input').style.display = (page === 'input') ? '' : 'none';
  document.getElementById('page-convert').style.display = (page === 'convert') ? '' : 'none';
  document.getElementById('page-setting').classList.remove('show-setting');
  document.getElementById('page-setting').style.display = 'none';
  document.getElementById('page-run').style.display = (page === 'run') ? '' : 'none';
  document.getElementById('page-run-result').style.display = (page === 'run-result') ? '' : 'none';
  if (page === 'setting') {
    document.getElementById('page-setting').classList.add('show-setting');
    document.getElementById('page-setting').style.display = '';
  }
  // ページごとの初期化
  if (page === 'run-result') initRunPage();
  if (page === 'input') resetInputPage();
  if (page === 'run') resetConvertPage();
  if (page === 'convert') initConvertPage();
}

// --- 入力ページ ---
const form = document.getElementById('inputForm');
const input = document.getElementById('inputText');
const result = document.getElementById('resultMessage');
const centerText = document.getElementById('centerText');
const submitBtn = document.getElementById('submitBtn');
const addedListUl = document.getElementById('addedListUl');

let addedWords = [];
let deleteMode = false;
let runWords = [];

function resetInputPage() {
  result.textContent = "";
  input.value = "";
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const value = input.value.trim();
  if (value) {
    if (value.length > 20) {
      result.textContent = "20文字以内で入力してください。";
      return;
    }
    result.textContent = translations[currentLang].added(value);
    addedWords.push(value);
    updateAddedList();
    input.value = "";
  } else {
    result.textContent = "";
  }
});

function updateAddedList() {
  addedListUl.innerHTML = '<h1 id="addedListTitle">' + translations[currentLang].addedListTitle + '</h1>';
  addedWords.forEach((word, idx) => {
    const li = document.createElement('li');
    li.textContent = word;
    if (deleteMode) {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'delete-checkbox';
      checkbox.style.marginLeft = '10px';
      checkbox.dataset.idx = idx;
      li.appendChild(checkbox);
    }
    addedListUl.appendChild(li);
  });
}

// 削除モード切替
const toggleDeleteModeBtn = document.getElementById('toggleDeleteModeBtn');
const deleteCheckedBtn = document.getElementById('deleteCheckedBtn');
toggleDeleteModeBtn.addEventListener('click', () => {
  deleteMode = !deleteMode;
  updateAddedList();
  deleteCheckedBtn.style.display = deleteMode ? '' : 'none';
  toggleDeleteModeBtn.textContent = deleteMode ? '削除モード解除' : '削除モード';
});

deleteCheckedBtn.addEventListener('click', () => {
  const checkboxes = document.querySelectorAll('.delete-checkbox');
  const toDelete = [];
  checkboxes.forEach(cb => {
    if (cb.checked) toDelete.push(Number(cb.dataset.idx));
  });
  // インデックスの大きい順に削除
  toDelete.sort((a,b)=>b-a).forEach(idx => addedWords.splice(idx,1));
  updateAddedList();
});

// --- 実行ページ（run-result） ---
let selectedWords = [];
function initRunPage() {
  const btnsDiv = document.getElementById('buttons');
  btnsDiv.innerHTML = '';
  selectedWords = [];
  document.getElementById('output').textContent = '';
  // runWordsが空ならtranslations[currentLang].runListを使う（初期化用）(一旦無し)
  //const words = runWords.length > 0 ? runWords : translations[currentLang].runList;
    // 単語を最大10つまでに制限
  const allWords = runWords.length > 0 ? runWords : translations[currentLang].runList;
  const words = allWords.slice(0, 10);
  words.forEach(word => {
    const btn = document.createElement('button');
    btn.className = 'word-button';
    btn.textContent = word;
    btn.onclick = () => {
      selectedWords.push(btn.textContent);
      document.getElementById('output').textContent = selectedWords.join(' ');
    };
    btnsDiv.appendChild(btn);
  });
}
document.getElementById('speak').addEventListener('click', () => {
  const phrase = selectedWords.join(' ');
  // 設定ページの音量値を常に参照
  const volume = parseFloat(document.getElementById('volume').value);
  document.getElementById('volume').value = volume; // スライダーも同期
  if (phrase) {
    const utterance = new SpeechSynthesisUtterance(phrase);
    utterance.lang = (currentLang === 'en') ? 'en-US' : (currentLang === 'zh' ? 'zh-CN' : 'ja-JP');
    utterance.volume = volume;
    speechSynthesis.speak(utterance);
    selectedWords = [];
    document.getElementById('output').textContent = '';
  }
});

// --- 実行ページ（run/追加リスト） ---
function resetConvertPage() {
  document.getElementById('addedListTitle').textContent = translations[currentLang].addedListTitle;
  updateAddedList();
  deleteMode = false;
  deleteCheckedBtn.style.display = 'none';
  toggleDeleteModeBtn.textContent = '削除モード';
}

// --- 多言語切替 ---
const langSelect = document.getElementById('langSelect');
let currentLang = 'ja';

function updateLang(lang) {
  currentLang = lang;
  langSelect.value = lang;
  // ヘッダー
  document.getElementById('navInput').textContent = translations[lang].navInput;
  document.getElementById('navConvert').textContent = translations[lang].navConvert;
  document.getElementById('navSetting').textContent = translations[lang].navSetting;
  document.getElementById('navRun').textContent = translations[lang].navRun;
  // 入力ページ
  centerText.textContent = translations[lang].centerText;
  input.placeholder = translations[lang].placeholder;
  submitBtn.value = translations[lang].submit;
  // 返還後の実行ページ
  document.getElementById('mainTitle').textContent = translations[lang].mainTitle;
  document.getElementById('speak').textContent = translations[lang].confirm;
  document.getElementById('volumeLabel').textContent = translations[lang].volume;
  // 実行ページ（run/追加リスト）
  resetConvertPage();
  // 返還後の実行ページのボタン再生成
  if (document.getElementById('page-run-result').style.display !== 'none') {
    initRunPage();
  }
  // 入力ページリセット
  resetInputPage();
  // 設定ページのラベルも言語対応したい場合はここで追加
  // 設定ページの音量スライダーもリセット
  settingVolume.value = volumeSlider.value;
  settingVolumeValue.textContent = volumeSlider.value;
}

langSelect.addEventListener('change', (e) => {
  localStorage.setItem('uiux_lang', e.target.value);
  updateLang(e.target.value);
});

// --- ナビゲーション ---
document.querySelectorAll('.header-cell a').forEach(a => {
  a.addEventListener('click', function(e) {
    e.preventDefault();
    showPage(this.dataset.page);
  });
});
// 実行ボタンでrun-resultへ遷移
document.getElementById('enterBtn').addEventListener('click', function() {
  // 追加リストの内容をrunWordsにコピー
  runWords = [...addedWords];
  showPage('run-result');
});
/**
 * 変換ページの看板メッセージ初期化
 *  – 通常は準備中_01
 *  – 10% の確率で 準備中_02
 */
function initConvertPage() {
//    const sign = document.getElementById('convertSignboard');
//  let msg = '準備中_01';
//  if (Math.random() < 0.1) {
//    msg = '準備中_02';
//  }
//  sign.textContent = msg;
  const img = document.getElementById('convertSignboardImg');
  // 90% で「準備中_01」、10% で「準備中_02」を表示
  const suffix = Math.random() < 0.1 ? '02' : '01';
  img.src = `images/準備中_${suffix}.png`;
  img.alt = `準備中_${suffix}`;
}
// --- 初期化 ---
const savedLang = localStorage.getItem('uiux_lang');
if (savedLang && translations[savedLang]) {
  langSelect.value = savedLang;
  updateLang(savedLang);
} else {
  updateLang(currentLang);
}
showPage('input');
  showPage('input');

// 設定ページ 音量・モード
const settingVolume = document.getElementById('settingVolume');
const settingVolumeValue = document.getElementById('settingVolumeValue');
const modeSelect = document.getElementById('modeSelect');

// 音量スライダーの値を表示＆全体音量に反映
settingVolume.addEventListener('input', function() {
  settingVolumeValue.textContent = this.value;
  document.getElementById('volume').value = this.value;
  // 音声ページのスライダー値も変更時に音量を即時反映
  if (document.getElementById('page-run-result').style.display !== 'none') {
    // すでに発話中なら音量を変更（Web Speech APIは途中変更不可なので、今後の発話に反映）
    // ここではスライダー値を合わせるのみ
  }
});
// 音声ページのスライダー変更時も設定ページに反映
const volumeSlider = document.getElementById('volume');
volumeSlider.addEventListener('input', function() {
  settingVolume.value = this.value;
  settingVolumeValue.textContent = this.value;
});
// モード変更（現状は効果なし）
modeSelect.addEventListener('change', function() {
  // 今は何もしない
});
