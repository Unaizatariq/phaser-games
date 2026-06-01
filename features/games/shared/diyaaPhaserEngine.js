(function () {
    const GAME = window.GAME_DATA || {};
    const W = 1280, H = 720;
    const SUBJECT = String(GAME.subject || 'english').toLowerCase();
    const MODE = String(GAME.mode || GAME.skill || 'reading').toLowerCase();
    const RTL = !!GAME.rtl || GAME.lang === 'ur-PK' || SUBJECT.includes('urdu');
    const BASE_ABS = '/features/games/';
    const BASE_REL = '../../../../';
    const C = { ink: '#18284a', mute: '#48617e', white: '#ffffff', cream: '#fffaf0', green: '#168c18', blue: '#075fc4', purple: '#4b128d', orange: '#d85b00', red: '#e53935', yellow: '#ffd23a' };
    const MODE_THEME = {
        reading: { label: 'READING', color: 0x168c18, hex: '#168c18', icon: 'book-icon' },
        writing: { label: 'WRITING', color: 0x075fc4, hex: '#075fc4', icon: 'pencil-icon' },
        listening: { label: 'LISTENING', color: 0x4b128d, hex: '#4b128d', icon: 'speaker-icon' },
        speaking: { label: 'SPEAKING', color: 0xd85b00, hex: '#d85b00', icon: 'mic-icon' }
    };
    const theme = MODE_THEME[MODE] || MODE_THEME.reading;
    const uiKeys = ['bg-menu', 'bg-game', 'panel-background', 'option-card', 'progress-bar-bg', 'progress-bar-fill', 'play-button', 'next-button', 'retry-button', 'home-button', 'star-icon', 'heart-full', 'heart-empty', 'mascot', 'speaker-icon', 'mic-icon', 'pencil-icon', 'book-icon', 'close-icon', 'pause-icon', 'hint-icon'];
    const audioKeys = { right: 'ui/right.mp3', wrong: 'ui/wrong.mp3', complete: 'ui/level-complete.mp3' };
    const subjectAssets = {
        english: { prefix: 'assets/english/', items: ['icons/book', 'icons/pencil', 'icons/speaker', 'icons/mic', 'icons/listening', 'icons/phonics', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(x => 'alphabet/' + x), ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(x => 'letters/' + x)] },
        math: { prefix: 'assets/math/', items: [...Array.from({ length: 101 }, (_, i) => 'numbers/' + i), ...Array.from({ length: 51 }, (_, i) => 'number-words/' + i), 'shapes/circle', 'shapes/square', 'shapes/triangle', 'shapes/rectangle', 'shapes/oval', 'shapes/star', 'shapes/heart', 'shapes/diamond', 'shapes/hexagon', 'symbols/plus', 'symbols/minus', 'symbols/multiply', 'symbols/divide', 'symbols/equals', 'symbols/greater-than', 'symbols/less-than', 'tools/ruler', 'tools/blocks', 'tools/abacus', 'tools/calculator', 'tools/dice', 'tools/clock', 'tools/tally'] },
        science: { prefix: 'assets/science/', items: ['science-icons/magnifier', 'science-icons/leaf', 'science-icons/sun', 'science-icons/cloud', 'science-icons/water-drop', 'science-icons/globe', 'science-icons/test-tube', 'science-icons/beaker', 'science-icons/microscope', 'animals/lion', 'animals/elephant', 'animals/giraffe', 'animals/zebra', 'animals/monkey', 'animals/cow', 'animals/dog', 'animals/cat', 'animals/rabbit', 'animals/bird', 'animals/fish', 'animals/butterfly', 'animals/turtle', 'animals/duck', 'animals/penguin', 'plants/tree', 'plants/flower', 'plants/grass', 'plants/cactus', 'plants/sunflower', 'plants/rose', 'plants/leaf', 'plants/sapling', 'weather/sunny', 'weather/cloudy', 'weather/rainy', 'weather/windy', 'weather/snowy', 'weather/rainbow', 'weather/stormy', 'weather/foggy', 'weather/hot', 'weather/cold', 'weather/day', 'weather/night', 'body-parts/head', 'body-parts/eyes', 'body-parts/nose', 'body-parts/mouth', 'body-parts/ear', 'body-parts/hand', 'body-parts/arm', 'body-parts/leg', 'body-parts/foot'] },
        computer: { prefix: 'assets/computer/', items: ['devices/desktop-computer', 'devices/laptop', 'devices/monitor', 'devices/cpu', 'devices/printer', 'devices/mouse', 'devices/keyboard', 'devices/speakers', 'devices/headphones', 'devices/webcam', 'devices/microphone', 'devices/scanner', 'devices/joystick', 'devices/projector', 'devices/usb-drive', 'devices/hard-drive', 'devices/wifi-router', 'devices/power-button', 'devices/tasks', 'devices/home'] },
        urdu: { prefix: 'assets/urdu/', items: [...Array.from({ length: 40 }, (_, i) => 'alphabet/' + String(i + 1)), 'icons/urdu-book', 'icons/teacher-female', 'icons/teacher-male', 'icons/listen', 'icons/record', 'icons/correct', 'icons/wrong'] }
    };
    function clean(v) { return String(v || '').toLowerCase().replace(/[؟?.,!۔،]/g, '').replace(/[-_]/g, ' ').replace(/\s+/g, ' ').trim(); }
    function cap(v) { return String(v || '').replace(/[-_]/g, ' ').replace(/\b\w/g, m => m.toUpperCase()); }
    function key(subject, item) { return 'asset_' + subject + '_' + item.replace(/[^a-zA-Z0-9]/g, '_'); }
    function normTokens(v) { return clean(v).split(' ').filter(x => x.length > 1); }
    function editDistance(a, b) { a = clean(a); b = clean(b); const dp = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0)); for (let i = 0; i <= a.length; i++) dp[i][0] = i; for (let j = 0; j <= b.length; j++) dp[0][j] = j; for (let i = 1; i <= a.length; i++) { for (let j = 1; j <= b.length; j++) { dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); } } return dp[a.length][b.length]; }
    function similarity(a, b) { a = clean(a); b = clean(b); if (!a || !b) return 0; if (a === b) return 1; const max = Math.max(a.length, b.length); return (max - editDistance(a, b)) / max; }
    function flex(a, b) { a = clean(a); b = clean(b); if (!a || !b) return false; if (a === b) return true; if ((a.length > 3 && b.includes(a)) || (b.length > 3 && a.includes(b))) return true; const at = normTokens(a), bt = normTokens(b); if (bt.length && bt.every(t => at.includes(t))) return true; if (at.length && at.every(t => bt.includes(t)) && a.length <= b.length + 6) return true; return similarity(a, b) >= 0.78; }
    function assetAbs(p) { return BASE_ABS + p; } function assetRel(p) { return BASE_REL + p; }
    function assetMatch(value) {
        const s = clean(value); if (!s) return null;
        const engMap = { apple: 'A', ball: 'B', cat: 'C', dog: 'D', elephant: 'E', fish: 'F', grapes: 'G', hat: 'H', 'ice cream': 'I', juice: 'J', kite: 'K', lion: 'L', mango: 'M', nest: 'N', orange: 'O', parrot: 'P', queen: 'Q', rose: 'R', sun: 'S', tree: 'T', umbrella: 'U', van: 'V', watch: 'W', xylophone: 'X', yacht: 'Y', zebra: 'Z' };
        if (/^[a-z]$/i.test(s)) return key('english', 'alphabet/' + s.toUpperCase());
        for (const [name, letter] of Object.entries(engMap)) if (s.includes(name)) return key('english', 'alphabet/' + letter);
        const compMap = { computer: 'desktop-computer', desktop: 'desktop-computer', pc: 'desktop-computer', laptop: 'laptop', monitor: 'monitor', screen: 'monitor', cpu: 'cpu', tower: 'cpu', printer: 'printer', mouse: 'mouse', keyboard: 'keyboard', speaker: 'speakers', speakers: 'speakers', headphone: 'headphones', headphones: 'headphones', webcam: 'webcam', camera: 'webcam', microphone: 'microphone', mic: 'microphone', scanner: 'scanner', joystick: 'joystick', projector: 'projector', usb: 'usb-drive', 'hard drive': 'hard-drive', router: 'wifi-router', wifi: 'wifi-router', power: 'power-button', machine: 'cpu', tasks: 'tasks', home: 'home' };
        for (const [name, item] of Object.entries(compMap)) if (s.includes(name)) return key('computer', 'devices/' + item);
        const mathShape = ['circle', 'square', 'triangle', 'rectangle', 'oval', 'star', 'heart', 'diamond', 'hexagon']; for (const sh of mathShape) if (s.includes(sh)) return key('math', 'shapes/' + sh);
        const sym = { plus: 'symbols/plus', add: 'symbols/plus', minus: 'symbols/minus', subtract: 'symbols/minus', multiply: 'symbols/multiply', times: 'symbols/multiply', divide: 'symbols/divide', equal: 'symbols/equals', greater: 'symbols/greater-than', less: 'symbols/less-than', ruler: 'tools/ruler', blocks: 'tools/blocks', block: 'tools/blocks', abacus: 'tools/abacus', calculator: 'tools/calculator', dice: 'tools/dice', clock: 'tools/clock', tally: 'tools/tally' }; for (const [name, item] of Object.entries(sym)) if (s.includes(name)) return key('math', item);
        const n = s.match(/\b\d{1,3}\b/); if (n) return key('math', 'numbers/' + Math.min(100, Number(n[0])));
        for (const item of subjectAssets.science.items) { const name = item.split('/').pop().replace(/-/g, ' '); if (s.includes(name)) return key('science', item); }
        if (SUBJECT.includes('urdu')) return key('urdu', 'icons/urdu-book');
        return null;
    }
    function textLang() { return RTL ? 'ur-PK' : 'en-PK'; }
    function sanitizeNarrationText(text, lang) {
        const isUr = String(lang || '').toLowerCase().startsWith('ur') || RTL || /[\u0600-\u06FF]/.test(String(text || ''));
        let out = String(text || '');
        out = out.replace(/_{2,}/g, isUr ? ' خالی جگہ ' : ' blank ');
        out = out.replace(/(^|\s)_(?=\s|$)/g, isUr ? ' خالی جگہ ' : ' blank ');
        out = out.replace(/\s+/g, ' ').trim();
        return out;
    }
    function textFont() { return RTL ? 'Noto Nastaliq Urdu, Jameel Noori Nastaleeq, Noto Naskh Arabic, Arial, sans-serif' : 'Comic Sans MS, Trebuchet MS, Arial Rounded MT Bold, Arial, sans-serif'; }
    function voiceScore(v, lang) {
        const vl = (v.lang || '').toLowerCase(), name = (v.name || '').toLowerCase();
        const isUr = lang.toLowerCase().startsWith('ur') || lang.toLowerCase().startsWith('hi') || SUBJECT.includes('urdu') || RTL;
        let score = 0;
        const childLike = /(child|kid|kids|boy|girl|junior|young|student|school)/i;
        const natural = /(neural|natural|premium|online|google|microsoft|aria|zira|heera|lekha|sana|farah|hira|ayesha|kalpana|hemant|swara|madhur|susan|ravi)/i;
        if (isUr) {
            const preferred = ['ur-pk', 'ur', 'ur-in', 'hi-in', 'hi', 'en-in', 'en-gb', 'en-us', 'en'];
            preferred.forEach((p, i) => { if (vl === p) score += 180 - i * 18; else if (vl.startsWith(p.split('-')[0])) score += 95 - i * 12; });
            if (name.includes('urdu')) score += 85;
            if (name.includes('pakistan') || name.includes('pakistani')) score += 70;
            if (name.includes('hindi') || name.includes('india') || name.includes('indian')) score += 28;
            if (/^en/.test(vl) && !(name.includes('india') || name.includes('pakistan') || name.includes('indian') || vl === 'en-in')) score -= 90;
        } else {
            const preferred = ['en-pk', 'en-in', 'en-gb', 'en-us', 'en'];
            preferred.forEach((p, i) => { if (vl === p) score += 150 - i * 12; else if (vl.startsWith(p.split('-')[0])) score += 75 - i * 8; });
            if (name.includes('pakistan') || name.includes('pakistani')) score += 55;
            if (name.includes('india') || name.includes('indian')) score += 28;
            if (name.includes('english')) score += 10;
        }
        if (childLike.test(name)) score += 35;
        if (natural.test(name)) score += 18;
        return score;
    }
    function voiceLangMatches(v, lang) {
        const vl = (v.lang || '').toLowerCase();
        const isUr = String(lang || '').toLowerCase().startsWith('ur') || String(lang || '').toLowerCase().startsWith('hi') || SUBJECT.includes('urdu') || RTL;
        if (isUr) return /^(ur|hi|en-in|en-gb|en-us|en)/.test(vl);
        return /^en/.test(vl);
    }
    function pickVoice(lang) {
        const voices = window.speechSynthesis ? speechSynthesis.getVoices() : [];
        if (!voices.length) return null;
        const usable = voices.filter(v => voiceLangMatches(v, lang));
        return (usable.length ? usable : voices).slice().sort((a, b) => voiceScore(b, lang) - voiceScore(a, lang))[0];
    }
    function splitWords(text) { const out = []; const re = /\S+/g; let m; text = String(text || ''); while ((m = re.exec(text))) { out.push({ word: m[0], start: m.index, end: m.index + m[0].length }); } return out; }
    function wordFromChar(words, charIndex) { if (!words.length) return -1; for (let i = 0; i < words.length; i++) { if (charIndex >= words[i].start && charIndex < words[i].end) return i; if (charIndex < words[i].start) return Math.max(0, i - 1); } return words.length - 1; }
    function hasUrduScript(text) { return /[\u0600-\u06FF]/.test(String(text || '')); }
    function hasUrduVoice() {
        try { return (speechSynthesis.getVoices() || []).some(v => /^ur/i.test(v.lang || '') || /urdu|pakistan|pakistani/i.test(v.name || '')); } catch (e) { return false; }
    }
    function pickVoiceByRegex(regex) {
        try { return (speechSynthesis.getVoices() || []).find(v => regex.test((v.lang || '') + ' ' + (v.name || ''))) || null; } catch (e) { return null; }
    }
    function urduToDevanagariFallback(text) {
        const map = {
            'ا': 'अ', 'آ': 'आ', 'ب': 'ब', 'پ': 'प', 'ت': 'त', 'ٹ': 'ट', 'ث': 'स', 'ج': 'ज', 'چ': 'च', 'ح': 'ह', 'خ': 'ख', 'د': 'द', 'ڈ': 'ड', 'ذ': 'ज़', 'ر': 'र', 'ڑ': 'ड़', 'ز': 'ज़', 'ژ': 'झ', 'س': 'س', 'ش': 'श', 'ص': 'स', 'ض': 'ज़', 'ط': 'ت', 'ظ': 'ज़', 'ع': 'अ', 'غ': 'ग', 'ف': 'फ', 'ق': 'क', 'ک': 'क', 'گ': 'g', 'ل': 'l', 'م': 'm', 'ن': 'n', 'و': 'o', 'ہ': 'h', 'ھ': 'h', 'ء': '', 'ی': 'y', 'ے': 'e', 'ئ': 'y', 'ں': 'n', 'َ': '', 'ِ': 'i', 'ُ': 'u', 'ّ': '', 'ٰ': '', 'ـ': '',
            '۰': '0', '۱': '1', '۲': '2', '۳': '3', '۴': '4', '۵': '5', '۶': '6', '۷': '7', '۸': '8', '۹': '9', '،': ',', '۔': '.', '؟': '?'
        };
        const dict = {
            'میں': 'मैं', 'میرا': 'मेरा', 'میری': 'मेरी', 'میرے': 'मेरे', 'ہم': 'हम', 'آپ': 'आप', 'یہ': 'यह', 'وہ': 'वह', 'ہے': 'है', 'ہیں': 'हैं', 'تھا': 'था', 'تھی': 'थी', 'اور': 'और', 'کے': 'के', 'کی': 'की', 'کا': 'का', 'کو': 'को', 'سے': 'से', 'پر': 'पर', 'نے': 'ने', 'نہیں': 'नहीं', 'بہت': 'बहुत', 'اچھا': 'अच्छा', 'اچھی': 'अच्छी', 'اچھے': 'अच्छे', 'دوست': 'दोस्त', 'خاندان': 'खानदान', 'اسکول': 'स्कूल', 'استاد': 'उस्ताद', 'استانی': 'उस्तानी', 'کتاب': 'किताब', 'کتابیں': 'किताबें', 'پڑھنا': 'पढ़ना', 'لکھنا': 'लिखना', 'کھیلتا': 'खेलता', 'کھیلتی': 'खेलती', 'کھانا': 'खाना', 'پانی': 'पानी', 'دودھ': 'दूध', 'بلی': 'बिल्ली', 'کتا': 'कुत्ता', 'پھل': 'फल', 'سیب': 'सेब', 'کیلا': 'केला', 'آم': 'आम', 'صحت': 'सेहत', 'صاف': 'साफ', 'خوش': 'खुश', 'محبت': 'मोहब्बत', 'روز': 'रोज़', 'صبح': 'सुबह', 'شام': 'शाम', 'بچے': 'बच्चे', 'طالب': 'तालिब', 'علم': 'इल्म', 'پاکستان': 'पाकिस्तान', 'زندگی': 'ज़िंदगी', 'درخت': 'दरख़्त', 'سورج': 'सूरज', 'بارش': 'बारिश', 'آسمان': 'आसमान', 'زمین': 'ज़मीन', 'گھر': 'घर', 'کمرہ': 'कमरा', 'شہر': 'शहर', 'جانور': 'जानवर', 'پرندے': 'परिंदे', 'سبز': 'सब्ज़', 'سرخ': 'सुर्ख', 'پیلا': 'पीला', 'نیلا': 'नीला', 'سفید': 'सफेद', 'کالا': 'काला', 'وقت': 'वक़्त', 'کمپیوٹر': 'कंप्यूटर', 'ماؤس': 'माउस', 'کیبورڈ': 'कीबोर्ड', 'مانیٹر': 'मॉनitor', 'مشین': 'मशीन'
        };
        return String(text || '').split(/(\s+)/).map(tok => {
            const cleanTok = tok.replace(/[۔،؟?.,!]/g, '');
            const punct = tok.slice(cleanTok.length);
            if (dict[cleanTok]) return dict[cleanTok] + punct;
            return tok.split('').map(ch => map[ch] || ch).join('');
        }).join('');
    }
    const URDU_ROMAN_WORDS = {
        'میں': 'mein', 'میرا': 'mera', 'میری': 'meri', 'میرے': 'mere', 'ہم': 'hum', 'ہمارا': 'hamara', 'ہماری': 'hamari', 'ہمارے': 'hamare', 'آپ': 'aap', 'اس': 'is', 'یہ': 'yeh', 'وہ': 'woh', 'اور': 'aur', 'ہے': 'hai', 'ہیں': 'hain', 'تھا': 'tha', 'تھی': 'thi', 'تھے': 'thay', 'ایک': 'aik', 'روز': 'roz', 'ہر': 'har', 'صبح': 'subah', 'شام': 'shaam', 'رات': 'raat', 'دن': 'din', 'بہت': 'bohat', 'ساتھ': 'sath', 'دوست': 'dost', 'خاندان': 'khandan', 'خوشحال': 'khushhaal', 'ابو': 'abbu', 'امی': 'ammi', 'کام': 'kaam', 'کھانا': 'khana', 'بناتی': 'banati', 'جاتے': 'jatay', 'جاتا': 'jata', 'جاتی': 'jati', 'اسکول': 'school', 'کلاس': 'class', 'بستہ': 'basta', 'استانی': 'ustani', 'استاد': 'ustad', 'پڑھنا': 'parhna', 'لکھنا': 'likhna', 'سکھاتی': 'sikhati', 'کھیلتا': 'khelta', 'کھیلتے': 'kheltay', 'کھیلتی': 'khelti', 'محبت': 'mohabbat', 'بلی': 'billi', 'کتا': 'kutta', 'دودھ': 'doodh', 'پھل': 'phal', 'سیب': 'saib', 'کیلا': 'kela', 'آم': 'aam', 'صحت': 'sehat', 'مند': 'mand', 'صاف': 'saaf', 'پانی': 'pani', 'سورج': 'sooraj', 'چاند': 'chaand', 'درخت': 'darakht', 'پودے': 'podhay', 'جانور': 'janwar', 'پرندے': 'parinday', 'بارش': 'barish', 'موسم': 'mausam', 'رنگ': 'rang', 'نیلا': 'neela', 'سبز': 'sabz', 'پیلا': 'peela', 'سرخ': 'surkh', 'سفید': 'safed', 'سیاہ': 'siyah', 'گھر': 'ghar', 'کمرہ': 'kamra', 'کتاب': 'kitab', 'لنچ': 'lunch', 'سبق': 'sabaq', 'جواب': 'jawab', 'درست': 'durust', 'غلط': 'ghalat', 'منتخب': 'muntakhab', 'سنیں': 'sunein', 'پڑھیں': 'parhein', 'پھر': 'phir', 'سوال': 'sawal', 'مرکزی': 'markazi', 'لفظ': 'lafz', 'بارے': 'baray', 'مطابق': 'mutabiq', 'باغ': 'baagh', 'بازار': 'bazaar', 'گلی': 'gali', 'ہسپتال': 'hospital', 'چڑیا': 'chirya', 'گھر': 'ghar', 'علی': 'Ali', 'سارا': 'Sara', 'احمد': 'Ahmed', 'بلال': 'Bilal', 'بکری': 'bakri', 'طوطا': 'tota', 'گیند': 'gaind', 'پسند': 'pasand', 'رس': 'ras', 'دار': 'daar', 'کیونکہ': 'kyun ke', 'کے': 'ke', 'کی': 'ki', 'کا': 'ka', 'کو': 'ko', 'سے': 'se', 'پر': 'par', 'نے': 'ne', 'لیے': 'liye', 'بھی': 'bhi', 'نہیں': 'nahin', 'ضروری': 'zaroori', 'اچھا': 'acha', 'اچھی': 'achi', 'اچھے': 'achay', 'چھوٹا': 'chhota', 'چھوٹی': 'chhoti', 'بڑا': 'bara', 'بڑی': 'bari', 'نرم': 'naram', 'میٹھا': 'meetha', 'خوبصورت': 'khubsurat', 'پاکستان': 'Pakistan', 'ملک': 'mulk', 'تعلیم': 'taleem', 'استعمال': 'istimaal', 'انٹرنیٹ': 'internet', 'کمپیوٹر': 'computer', 'موبائل': 'mobile', 'سائنس': 'science', 'ریاضی': 'maths'
    };
    function romanizeUrduForFallback(text) {
        return String(text || '').split(/(\s+)/).map(tok => {
            const cleanTok = tok.replace(/[۔،؟?!.]/g, '');
            const suffix = tok.slice(cleanTok.length);
            if (URDU_ROMAN_WORDS[cleanTok]) return URDU_ROMAN_WORDS[cleanTok] + suffix;
            if (/[\u0600-\u06FF]/.test(cleanTok)) return cleanTok.split('').map(ch => ({
                'ا': 'a', 'آ': 'aa', 'ب': 'b', 'پ': 'p', 'ت': 't', 'ٹ': 't', 'ث': 's', 'ج': 'j', 'چ': 'ch', 'ح': 'h', 'خ': 'kh', 'د': 'd', 'ڈ': 'd', 'ذ': 'z', 'ر': 'r', 'ڑ': 'r', 'ز': 'z', 'ژ': 'zh', 'س': 's', 'ش': 'sh', 'ص': 's', 'ض': 'z', 'ط': 't', 'ظ': 'z', 'ع': 'a', 'غ': 'gh', 'ف': 'f', 'ق': 'q', 'ک': 'k', 'گ': 'g', 'ل': 'l', 'م': 'm', 'ن': 'n', 'و': 'o', 'ہ': 'h', 'ھ': 'h', 'ء': '', 'ی': 'y', 'ے': 'ay', 'ئ': 'y', 'ں': 'n', 'َ': '', 'ِ': '', 'ُ': '', 'ّ': '', 'ٰ': '', 'ـ': ''
            }[ch] || '')).join('') + suffix;
            return tok;
        }).join('');
    }
    const NARRATION_ROOT = 'assets/audio/narration';
    function audioContextMeta(opts = {}) {
        const q = opts.source || opts.q || {};
        return {
            grade: String(q.grade || GAME.grade || 'general').toLowerCase().replace(/[^a-z0-9]+/g, ''),
            subject: String(q.subject || GAME.subject || SUBJECT || 'general').toLowerCase().replace(/[^a-z0-9]+/g, ''),
            mode: String(q.mode || GAME.mode || MODE || 'reading').toLowerCase().replace(/[^a-z0-9]+/g, ''),
            level: String(q.level || GAME.level || '1').replace(/[^0-9a-zA-Z_-]+/g, ''),
            index: Number.isFinite(opts.index) ? opts.index : (Number.isFinite(q.index) ? q.index : 0),
            purpose: String(opts.purpose || q.audioPurpose || MODE || 'narration').toLowerCase().replace(/[^a-z0-9]+/g, '-')
        };
    }
    function narrationFileCandidates(opts = {}) {
        const q = opts.source || opts.q || {};
        const paths = [];
        const add = v => { if (v && typeof v === 'string' && !paths.includes(v)) paths.push(v); };
        add(q.audioSrc); add(q.narrationAudio); add(q.dialogueAudioSrc); add(opts.audioSrc);
        if (q.audioFile || opts.audioFile) {
            const m = audioContextMeta(opts);
            const name = q.audioFile || opts.audioFile;
            const rel = `${NARRATION_ROOT}/${m.subject}/${m.grade}/${m.mode}/level-${m.level}/${name}`;
            add(assetAbs(rel)); add(assetRel(rel));
        }
        return paths;
    }
    function stopAllNarration() {
        try { if (window.__diyaaNarrationCleanup) { window.__diyaaNarrationCleanup(); window.__diyaaNarrationCleanup = null; } } catch (e) { }
        try { window.__diyaaNarrationToken = (window.__diyaaNarrationToken || 0) + 1; } catch (e) { }
        try { if (window.__diyaaCurrentNarrationAudio) { window.__diyaaCurrentNarrationAudio.pause(); window.__diyaaCurrentNarrationAudio.currentTime = 0; window.__diyaaCurrentNarrationAudio = null; } } catch (e) { }
        try { if (window.speechSynthesis) { speechSynthesis.cancel(); setTimeout(() => { try { speechSynthesis.cancel(); } catch (e) { } }, 0); } } catch (e) { }
    }

    function estimatedWordMs(word, isUr) {
        const raw = String((word && word.word) || word || '');
        const cleaned = raw.replace(/[.,!?؟۔،]/g, '');
        const len = cleaned.length;

        const commaPause = /[،,]$/.test(raw) ? 250 : 0;
        const fullStopPause = /[.!?؟۔]$/.test(raw) ? 450 : 0;

        const min = isUr ? 850 : 650;
        const max = isUr ? 1100 : 850;
        const base = isUr ? 850 : 650;
        const perChar = isUr ? 32 : 24;

        const wordMs = Math.max(min, Math.min(max, base + len * perChar));
        return wordMs + commaPause + fullStopPause;
    }

    function runWordProgress(text, opts = {}, durationMs = 0) {
        const words = splitWords(text);
        if (!words.length || typeof opts.onWord !== 'function') return () => { };

        let timers = [];
        const clear = () => {
            timers.forEach(t => clearTimeout(t));
            timers = [];
        };

        window.__diyaaNarrationCleanup = clear;

        const isUr = String(opts.lang || '').toLowerCase().startsWith('ur') || hasUrduScript(text) || RTL;
        const initialDelay = Math.max(0, Number(opts.initialDelayMs || 0));

        const timings = Array.isArray(opts.wordTimings)
            ? opts.wordTimings
            : (Array.isArray((opts.source || {}).wordTimings) ? (opts.source || {}).wordTimings : null);

        if (timings && timings.length) {
            timings.forEach((t, i) => {
                const at = initialDelay + Math.max(0, Number(t.startMs ?? t.start ?? 0));
                timers.push(setTimeout(() => {
                    opts.onWord(Math.min(i, words.length - 1), words[Math.min(i, words.length - 1)]);
                }, at));
            });
        } else if (durationMs && Number.isFinite(durationMs)) {
            const naturalTotal = words.reduce((sum, w) => sum + estimatedWordMs(w, isUr), 0);
            const total = Math.max(durationMs, naturalTotal);
            const scale = total / Math.max(1, naturalTotal);

            let at = initialDelay;
            words.forEach((w, i) => {
                timers.push(setTimeout(() => opts.onWord(i, w), at));
                at += estimatedWordMs(w, isUr) * scale;
            });
        } else {
            let at = initialDelay;
            words.forEach((w, i) => {
                timers.push(setTimeout(() => opts.onWord(i, w), at));
                at += estimatedWordMs(w, isUr);
            });
        }

        return clear;
    }

    function playAudioFile(url, text, opts = {}) {
        return new Promise((resolve, reject) => {
            try {
                const audio = new Audio(url);
                audio.preload = 'auto';
                audio.crossOrigin = 'anonymous';
                audio.volume = typeof opts.volume === 'number' ? opts.volume : 1;

                let clearProgress = () => { };

                const done = () => {
                    clearProgress();
                    if (window.__diyaaCurrentNarrationAudio === audio) window.__diyaaCurrentNarrationAudio = null;
                    if (typeof opts.onEnd === 'function') opts.onEnd();
                    resolve(true);
                };

                audio.onloadedmetadata = () => {
                    const dur = Number.isFinite(audio.duration) ? audio.duration * 1000 : 0;
                    clearProgress = runWordProgress(text, opts, dur);
                };

                audio.onerror = () => {
                    clearProgress();
                    reject(new Error('audio-file-missing'));
                };

                audio.onended = done;
                window.__diyaaCurrentNarrationAudio = audio;

                const playPromise = audio.play();
                if (playPromise && typeof playPromise.catch === 'function') playPromise.catch(reject);

                setTimeout(() => {
                    if (audio.readyState < 2) reject(new Error('audio-not-ready'));
                }, 1200);
            } catch (e) {
                reject(e);
            }
        });
    }

    function waitForSpeechVoices() {
        return new Promise(resolve => {
            if (!window.speechSynthesis) return resolve([]);

            let voices = speechSynthesis.getVoices();
            if (voices && voices.length) return resolve(voices);

            let done = false;
            const finish = () => {
                if (done) return;
                done = true;
                resolve(speechSynthesis.getVoices() || []);
            };

            speechSynthesis.onvoiceschanged = finish;
            setTimeout(finish, 900);
        });
    }

    function makeUtterance(text, lang, voice, opts = {}) {
        const u = new SpeechSynthesisUtterance(String(text));
        u.lang = lang;

        const isUrduLike = String(lang).toLowerCase().startsWith('ur') || String(lang).toLowerCase().startsWith('hi') || RTL;

        u.rate = opts.rate || (isUrduLike ? 0.90 : 0.92);
        u.pitch = opts.pitch || (isUrduLike ? 1.02 : 1.08);
        u.volume = 1;

        if (voice) u.voice = voice;

        return u;
    }

    function speakWithBrowserTTS(text, opts = {}) {
        if (!window.speechSynthesis || !window.SpeechSynthesisUtterance || !text) return Promise.resolve(false);

        return new Promise(async (res) => {
            try {
                await waitForSpeechVoices();

                try {
                    if (window.__diyaaNarrationCleanup) {
                        window.__diyaaNarrationCleanup();
                        window.__diyaaNarrationCleanup = null;
                    }
                } catch (e) { }

                const token = (window.__diyaaNarrationToken = (window.__diyaaNarrationToken || 0) + 1);

                speechSynthesis.cancel();
                try { speechSynthesis.resume(); } catch (e) { }

                const originalText = String(text).replace(/\s+/g, ' ').trim();
                const isUr = (opts.lang || textLang()).toLowerCase().startsWith('ur') || hasUrduScript(originalText) || RTL;
                const narrationText = sanitizeNarrationText(originalText, opts.lang || textLang());
                const highlightWords = splitWords(originalText);

                let clearProgress = () => { };
                let fallbackTimer = null;
                let startedFallback = false;
                let ended = false;
                let lastIdx = -1;
                let boundarySeen = false;

                const cancelFallbackTimer = () => {
                    if (fallbackTimer) {
                        clearTimeout(fallbackTimer);
                        fallbackTimer = null;
                    }
                };

                const finish = () => {
                    if (ended || window.__diyaaNarrationToken !== token) return;

                    ended = true;
                    cancelFallbackTimer();
                    clearProgress();

                    if (window.__diyaaNarrationCleanup === clearProgress) {
                        window.__diyaaNarrationCleanup = null;
                    }

                    if (typeof opts.onEnd === 'function') opts.onEnd();
                    res(true);
                };

                const startFallbackProgress = () => {
                    if (startedFallback || boundarySeen || ended || window.__diyaaNarrationToken !== token) return;

                    startedFallback = true;
                    clearProgress = runWordProgress(
                        originalText,
                        Object.assign({}, opts, { initialDelayMs: 0 }),
                        0
                    );
                };

                let speechText = narrationText;
                let speechLang = isUr ? 'ur-PK' : 'en-PK';
                let voice = null;

                if (isUr) {
                    const urVoice = pickVoiceByRegex(/(^|\s)ur(-|\s|$)|urdu|pakistan|pakistani/i);
                    const hiVoice = pickVoiceByRegex(/(^|\s)hi(-|\s|$)|hindi|india|indian/i);

                    if (urVoice) {
                        voice = urVoice;
                        speechLang = urVoice.lang || 'ur-PK';
                    } else if (hiVoice) {
                        voice = hiVoice;
                        speechLang = hiVoice.lang || 'hi-IN';
                        speechText = urduToDevanagariFallback(narrationText);
                    } else {
                        voice = pickVoice('en-IN') || pickVoice('en-GB') || null;
                        speechLang = (voice && voice.lang) || 'en-IN';
                        speechText = romanizeUrduForFallback(narrationText);
                    }
                } else {
                    voice = pickVoice('en-PK') || pickVoice('en-IN') || pickVoice('en-GB') || null;
                    speechLang = (voice && voice.lang) || 'en-PK';
                }

                const u = makeUtterance(speechText, speechLang, voice, opts);
                let keepAliveTimer = null;

                u.onstart = () => {
                    keepAliveTimer = setInterval(() => {
                        if (ended || window.__diyaaNarrationToken !== token) {
                            clearInterval(keepAliveTimer);
                        } else {
                            try {
                                speechSynthesis.pause();
                                speechSynthesis.resume();
                            } catch (e) { }
                        }
                    }, 10000);

                    fallbackTimer = setTimeout(
                        () => startFallbackProgress(),
                        isUr ? 1600 : 1200
                    );
                };

                u.onboundary = e => {
                    if (
                        ended ||
                        typeof opts.onWord !== 'function' ||
                        !highlightWords.length ||
                        !e ||
                        !Number.isFinite(e.charIndex)
                    ) return;

                    const spokenWords = splitWords(speechText);
                    const idx = wordFromChar(
                        spokenWords.length ? spokenWords : highlightWords,
                        e.charIndex || 0
                    );

                    if (idx >= 0 && idx < highlightWords.length && idx !== lastIdx) {
                        boundarySeen = true;
                        cancelFallbackTimer();
                        clearProgress();

                        lastIdx = idx;
                        opts.onWord(idx, highlightWords[idx], e);
                    }
                };

                u.onend = () => {
                    clearInterval(keepAliveTimer);
                    finish();
                };

                u.onerror = () => {
                    clearInterval(keepAliveTimer);

                    if (window.__diyaaNarrationToken !== token) return;

                    cancelFallbackTimer();

                    if (!boundarySeen && !startedFallback) {
                        startFallbackProgress();
                    }

                    const fallbackTotal = highlightWords.reduce(
                        (sum, w) => sum + estimatedWordMs(w, isUr),
                        0
                    );

                    setTimeout(finish, Math.max(1200, fallbackTotal));
                };

                speechSynthesis.speak(u);

                setTimeout(() => {
                    try {
                        if (window.__diyaaNarrationToken === token) speechSynthesis.resume();
                    } catch (e) { }
                }, 80);

                setTimeout(() => {
                    if (
                        !fallbackTimer &&
                        !boundarySeen &&
                        !startedFallback &&
                        !ended &&
                        window.__diyaaNarrationToken === token
                    ) {
                        startFallbackProgress();
                    }
                }, isUr ? 1800 : 1400);

            } catch (e) {
                if (typeof opts.onEnd === 'function') opts.onEnd();
                res(false);
            }
        });
    }

    async function speak(text, opts = {}) {
        if (!text) return Promise.resolve(false);

        stopAllNarration();

        const cleanText = String(text);
        const candidates = opts.forceTTS ? [] : narrationFileCandidates(opts);

        for (const url of candidates) {
            try {
                await playAudioFile(url, cleanText, opts);
                return true;
            } catch (e) { }
        }

        return speakWithBrowserTTS(cleanText, opts);
    }

    function speechExpectedList(q) {
        const items = []; const add = v => { if (v && !items.includes(String(v))) items.push(String(v)); };
        add(q.answer); add(q.expected); add(q.word); add(q.correctAnswer);
        if (Array.isArray(q.acceptedAnswers)) q.acceptedAnswers.forEach(add);
        if (Array.isArray(q.validAnswers)) q.validAnswers.forEach(add);
        return items.filter(Boolean);
    }
    function speechSimilarity(a, b) {
        a = clean(a); b = clean(b); if (!a || !b) return 0; if (a === b) return 1;
        const at = a.split(' ').filter(Boolean), bt = b.split(' ').filter(Boolean);
        const common = at.filter(t => bt.includes(t)).length;
        const tokenScore = common / Math.max(at.length, bt.length, 1);
        return Math.max(similarity(a, b), tokenScore);
    }
    function speechMatches(heard, expectedList) {
        const h = clean(heard); if (!h) return false;
        return expectedList.some(exp => {
            const e = clean(exp); if (!e) return false;
            if (h === e) return true;
            if (e.length <= 4 && !e.includes(' ')) return similarity(h, e) >= 0.88;
            const eTokens = e.split(' ').filter(Boolean), hTokens = h.split(' ').filter(Boolean);
            if (eTokens.length === 1) return hTokens.includes(e) || similarity(h, e) >= 0.84;
            const covered = eTokens.filter(t => hTokens.includes(t)).length / eTokens.length;
            return covered >= 0.70 || speechSimilarity(h, e) >= 0.78;
        });
    }
    function bestSpeechMatch(heardList, expectedList) {
        let best = { heard: '', score: 0, ok: false };
        for (const h of heardList) {
            for (const e of expectedList) {
                const score = speechSimilarity(h, e);
                if (score > best.score) best = { heard: h, score, ok: speechMatches(h, expectedList) };
            }
        }
        return best;
    }

    class MainScene extends Phaser.Scene {
        constructor() {
            super('Main');
            this.q = 0; this.lives = 3; this.score = 0; this.dynamic = []; this.overlay = []; this.isPaused = false; this.soundOn = true; this.__autoReadNext = false; this.isReadingNarrationPlaying = false;
            this.stateKey = 'DIYAA_PROGRESS_' + [GAME.grade || 'grade', SUBJECT, MODE, GAME.level || '1', location.pathname].join('_').replace(/[^a-zA-Z0-9_/-]/g, '_');
        }
        preload() {
            this.load.setPath('');
            const uiSet = new Set([...uiKeys, 'mascot-wow', 'mascot-oops', 'pause-button', 'sound-button', 'read-button', 'coin-icon']);
            uiSet.forEach(k => { this.load.image(k, assetAbs('ui/' + k + '.png')); this.load.image(k + '_rel', assetRel('ui/' + k + '.png')); });
            Object.entries(audioKeys).forEach(([k, p]) => { this.load.audio(k, assetAbs(p)); this.load.audio(k + '_rel', assetRel(p)); });
            const subAlias = SUBJECT.includes('math') ? 'math' : (SUBJECT.includes('urdu') ? 'urdu' : SUBJECT);
            const needed = new Set();
            const addAssetFromValue = v => { const m = assetMatch(v); if (m) needed.add(m); };
            (GAME.examples || []).forEach(addAssetFromValue);
            (GAME.questions || []).forEach(q => {
                [q.answer, q.expected, q.word, q.correctAnswer, q.prompt, q.question, q.text, q.passage].forEach(addAssetFromValue);
                (q.options || []).forEach(addAssetFromValue);
            });
            const loadSubject = (sub) => { const cfg = subjectAssets[sub]; if (!cfg) return; cfg.items.forEach(item => { const k = key(sub, item); if (needed.has(k) || sub === subAlias) { this.load.image(k, assetAbs(cfg.prefix + item + '.png')); this.load.image(k + '_rel', assetRel(cfg.prefix + item + '.png')); } }); };
            loadSubject(subAlias);
            ['english', 'math', 'science', 'computer', 'urdu'].forEach(sub => {
                const cfg = subjectAssets[sub]; if (!cfg) return;
                cfg.items.forEach(item => { const k = key(sub, item); if (needed.has(k)) { this.load.image(k, assetAbs(cfg.prefix + item + '.png')); this.load.image(k + '_rel', assetRel(cfg.prefix + item + '.png')); } });
            });
        }
        create() {
            this.restoreProgress();
            this.makeBase();
            window.addEventListener('beforeunload', () => this.saveProgress());
            this.time.delayedCall(120, () => this.showQuestion());
        }
        has(k) { return this.textures.exists(k); }
        img(k) {
            const aliases = {
                'speaker-icon': 'sound-button', 'mic-icon': 'sound-button', 'pencil-icon': 'read-button', 'book-icon': 'read-button', 'pause-icon': 'pause-button', 'close-icon': 'home-button', 'hint-icon': 'sound-button', 'mascot': 'mascot-wow'
            };
            const kk = this.has(k) ? k : (this.has(k + '_rel') ? k + '_rel' : null); if (kk) return kk;
            const a = aliases[k]; if (a) return this.has(a) ? a : (this.has(a + '_rel') ? a + '_rel' : null);
            return null;
        }
        snd(k) { return this.cache.audio.exists(k) ? k : (this.cache.audio.exists(k + '_rel') ? k + '_rel' : null); }
        addDyn(o) { if (o) this.dynamic.push(o); return o; }
        clearDyn() { this.dynamic.forEach(o => { try { o.destroy(); } catch (e) { } }); this.dynamic = []; }
        clearOverlay() { this.overlay.forEach(o => { try { o.destroy(); } catch (e) { } }); this.overlay = []; }
        addOverlay(o) { if (o) this.overlay.push(o); return o; }
        imageOrFallback(k, x, y, w, h, round = 24, fill = 0xffffff, stroke = 0x8b5cf6) {
            const kk = this.img(k); if (kk) return this.add.image(x, y, kk).setDisplaySize(w, h);
            const g = this.add.graphics(); g.fillStyle(fill, 1).fillRoundedRect(x - w / 2, y - h / 2, w, h, round).lineStyle(4, stroke).strokeRoundedRect(x - w / 2, y - h / 2, w, h, round); return g;
        }
        addPanel(x, y, w, h, r = 28, fill = 0xffffff, alpha = .95, stroke = 0x8b5cf6, lw = 4) {
            const g = this.add.graphics();
            g.fillStyle(fill, alpha).fillRoundedRect(x, y, w, h, r).lineStyle(lw, stroke, 1).strokeRoundedRect(x, y, w, h, r);
            return g;
        }
        hideGameplayContent() {
            this.dynamic.forEach(o => {
                if (o && o.node) o.node.style.visibility = 'hidden';
                else if (o && typeof o.setVisible === 'function') o.setVisible(false);
            });
        }
        showGameplayContent() {
            this.dynamic.forEach(o => {
                if (o && o.node) o.node.style.visibility = 'visible';
                else if (o && typeof o.setVisible === 'function') o.setVisible(true);
            });
        }
        saveProgress() {
            try { localStorage.setItem(this.stateKey, JSON.stringify({ q: this.q, lives: this.lives, score: this.score, updated: Date.now() })); } catch (e) { }
        }
        restoreProgress() {
            try { const raw = localStorage.getItem(this.stateKey); if (!raw) return; const st = JSON.parse(raw); const max = (GAME.questions || []).length || 1; this.q = Math.max(0, Math.min(max - 1, Number(st.q) || 0)); this.lives = Math.max(1, Math.min(3, Number(st.lives) || 3)); this.score = Math.max(0, Number(st.score) || 0); } catch (e) { }
        }
        resetProgress() { try { localStorage.removeItem(this.stateKey); } catch (e) { } this.q = 0; this.lives = 3; this.score = 0; }
        makeBase() {
            this.imageOrFallback('bg-game', W / 2, H / 2, W, H, 0, 0x90e0ef, 0x90e0ef).setDepth(0);

            this.homeBtn = this.hudIcon(65, 50, 'home-button', () => this.goHome(), 58);
            this.pauseBtn = this.hudIcon(135, 50, 'pause-button', () => this.pauseGame(), 58);
            this.soundBtn = this.hudIcon(W - 65, 50, 'sound-button', () => this.toggleSound(), 58);

            this.progressShell = this.add.graphics().setDepth(11);
            this.progressFill = this.add.graphics().setDepth(12);

            const starK = this.img('star-icon') || this.img('coin-icon') || this.img('heart-full');

            if (starK) {
                this.progressStar = this.add.image(W / 2 + 245, 50, starK).setDisplaySize(50, 50).setDepth(13);
                this.starIcon = this.add.image(W - 330, 50, starK).setDisplaySize(44, 44).setDepth(13);
            }

            this.starText = this.add.text(W - 292, 50, '30', {
                fontFamily: textFont(),
                fontSize: 30,
                fontStyle: '900',
                color: '#ffffff',
                stroke: '#173B7A',
                strokeThickness: 6
            }).setOrigin(0, .5).setDepth(13);

            this.lifeIcons = [];
            for (let i = 0; i < 3; i++) {
                const k = this.img('heart-full');
                if (k) {
                    this.lifeIcons.push(
                        this.add.image(W - 210 + i * 50, 50, k).setDisplaySize(44, 44).setDepth(13)
                    );
                }
            }

            this.updateHUD();
        }
        hudIcon(x, y, keyName, cb, size = 56) {
            const img = this.img(keyName); let visual;
            if (img) visual = this.add.image(x, y, img).setDisplaySize(size, size).setDepth(13);
            else { visual = this.addPanel(x - size / 2, y - size / 2, size, size, 18, theme.color, 1, 0xffffff, 3).setDepth(13); }
            this.add.zone(x, y, size + 16, size + 16).setInteractive({ useHandCursor: true }).setDepth(20).on('pointerdown', cb);
            return visual;
        }
        toggleSound() { this.soundOn = !this.soundOn; if (!this.soundOn) stopAllNarration(); try { this.sound.mute = !this.soundOn; } catch (e) { } if (this.soundBtn && this.soundBtn.setAlpha) this.soundBtn.setAlpha(this.soundOn ? 1 : .45); }
        goHome() { stopAllNarration(); this.saveProgress(); try { window.parent.postMessage({ type: 'DIYAA_GAME_HOME' }, '*'); } catch (e) { } if (window.parent === window) { history.back(); } }
        updateHUD() {
            const total = (GAME.questions || []).length || 1;
            const pct = Math.max(.05, Math.min(1, (this.q + 1) / total));

            this.progressShell?.clear();
            this.progressShell
                ?.fillStyle(0x1e293b, .35)
                .fillRoundedRect(W / 2 - 230, 36, 460, 28, 14)
                .lineStyle(4, 0xffffff, .9)
                .strokeRoundedRect(W / 2 - 230, 36, 460, 28, 14);

            this.progressFill?.clear();
            this.progressFill
                ?.fillStyle(0x63e22f, 1)
                .fillRoundedRect(W / 2 - 224, 42, 448 * pct, 16, 8);

            this.starText?.setText(String(this.score * 10 || 30));

            for (let i = 0; i < 3; i++) {
                const kk = this.img(i < this.lives ? 'heart-full' : 'heart-empty');
                if (kk && this.lifeIcons[i]) {
                    this.lifeIcons[i].setTexture(kk).setDisplaySize(44, 44);
                }
            }
        }
        cleanText(t) { return String(t || '').replace(/^\s*(READING|WRITING|LISTENING|SPEAKING)\s*[•:-]?\s*/i, '').trim(); }
        textStyle(size = 28, color = C.ink, weight = '900', width = 760) { return { fontFamily: textFont(), fontSize: size, fontStyle: weight, color, align: 'center', wordWrap: { width }, rtl: RTL, lineSpacing: 4 }; }
        makeBtn(x, y, label, cb, color = theme.color, w = 210, h = 62, icon = null, ignorePause = false) {
            const arr = []; const imgKey = icon && this.img(icon);
            const shadow = this.add.graphics().setDepth(20); shadow.fillStyle(0x0f172a, .16).fillRoundedRect(x - w / 2 + 4, y - h / 2 + 6, w, h, 22); arr.push(shadow);
            const g = this.addPanel(x - w / 2, y - h / 2, w, h, 22, color, 1, 0xffffff, 4).setDepth(21); arr.push(g);
            if (imgKey) arr.push(this.add.image(x - w / 2 + 38, y, imgKey).setDisplaySize(32, 32).setDepth(22));
            arr.push(this.add.text(imgKey ? x + 22 : x, y, label, { fontFamily: textFont(), fontSize: Math.min(24, Math.max(18, Math.floor(w / 8))), fontStyle: '900', color: '#fff', align: 'center' }).setOrigin(.5).setDepth(22));
            const z = this.add.zone(x, y, w, h).setInteractive({ useHandCursor: true }).setDepth(30).on('pointerdown', () => { if (ignorePause || !this.isPaused) cb && cb(); }); arr.push(z);
            return arr;
        }
        makeStylishReadButton(x, y, label, cb, ignorePause = false) {
            const w = 180, h = 54;
            const container = this.addDyn(this.add.container(x, y).setDepth(21));

            const shadow = this.add.graphics();
            shadow.fillStyle(0x0f172a, .2).fillRoundedRect(-w / 2 + 3, -h / 2 + 5, w, h, 27);
            container.add(shadow);

            const base = this.add.graphics();
            base.fillStyle(0x16a34a, 1).fillRoundedRect(-w / 2, -h / 2, w, h, 27);
            base.lineStyle(4, 0x4ade80, 1).strokeRoundedRect(-w / 2, -h / 2, w, h, 27);
            container.add(base);

            const tri = this.add.graphics();
            tri.fillStyle(0xffffff, 1);
            tri.beginPath();
            const tx = -w / 2 + 32, ty = 0;
            tri.moveTo(tx - 8, ty - 10);
            tri.lineTo(tx + 10, ty);
            tri.lineTo(tx - 8, ty + 10);
            tri.closePath();
            tri.fillPath();
            container.add(tri);

            container.add(this.add.text(12, 0, label, {
                fontFamily: textFont(), fontSize: 22, fontStyle: '900', color: '#ffffff', align: 'center'
            }).setOrigin(.5));

            const zone = this.add.zone(0, 0, w, h).setInteractive({ useHandCursor: true }).on('pointerdown', () => {
                if (ignorePause || !this.isPaused) cb && cb();
            });

            zone.on('pointerover', () => {
                this.tweens.add({ targets: container, scaleX: 1.05, scaleY: 1.05, duration: 100 });
            });
            zone.on('pointerout', () => {
                this.tweens.add({ targets: container, scaleX: 1, scaleY: 1, duration: 100 });
            });

            container.add(zone);
            return [container];
        }
        makeStylishButton(x, y, label, color, cb, ignorePause = false) {
            const w = 150, h = 50;
            const container = this.addDyn(this.add.container(x, y).setDepth(250));

            const shadow = this.add.graphics();
            shadow.fillStyle(0x0f172a, .2).fillRoundedRect(-w / 2 + 3, -h / 2 + 4, w, h, 25);
            container.add(shadow);

            const base = this.add.graphics();
            const hl = color === 0xf97316 ? 0xfbd38d : 0x4ade80;

            const drawBase = (bright) => {
                base.clear();
                base.fillStyle(color, bright ? 1 : 0.9).fillRoundedRect(-w / 2, -h / 2, w, h, 25);
                base.lineStyle(4, bright ? 0xffffff : hl, 1).strokeRoundedRect(-w / 2, -h / 2, w, h, 25);
            };

            drawBase(false);
            container.add(base);

            container.add(this.add.text(0, 0, label, {
                fontFamily: textFont(), fontSize: 22, fontStyle: '900', color: '#ffffff', align: 'center'
            }).setOrigin(.5));

            const zone = this.add.zone(0, 0, w, h).setInteractive({ useHandCursor: true }).on('pointerdown', () => {
                if (ignorePause || !this.isPaused) cb && cb();
            });

            zone.on('pointerover', () => {
                this.tweens.add({ targets: container, scaleX: 1.05, scaleY: 1.05, duration: 100 });
                drawBase(true);
            });
            zone.on('pointerout', () => {
                this.tweens.add({ targets: container, scaleX: 1, scaleY: 1, duration: 100 });
                drawBase(false);
            });

            container.add(zone);
            return [container];
        }
        showStart() { this.showQuestion(); }
        sampleChip(x, y, text) { const g = this.addPanel(x - 70, y - 52, 140, 104, 18, 0xffffff, .96, theme.color, 4).setDepth(8); const k = assetMatch(text); const kk = k && this.img(k); if (kk) { const im = this.add.image(x, y - 8, kk).setDisplaySize(64, 64).setDepth(9); this.dynamic.push(im); } const label = this.add.text(x, y + 38, String(text).slice(0, 18), { fontFamily: textFont(), fontSize: 15, fontStyle: '900', color: C.ink, align: 'center', wordWrap: { width: 118 }, rtl: RTL }).setOrigin(.5).setDepth(9); this.dynamic.push(label); return g; }
        teacherText(q) { const opts = (q.options || []).length ? ' Options are ' + q.options.join(', ') : ''; if (MODE === 'listening') return q.audioText || q.prompt || 'Listen and choose.'; if (MODE === 'speaking') return (q.audioText || q.prompt || 'Speak the answer') + '. Speak clearly.'; if (MODE === 'writing') return (q.audioText || q.prompt || 'Write the answer') + '.'; return (q.audioText || q.prompt || 'Read and answer.') + opts; }
        shuffleOptions(opts) { const arr = (opts || []).slice(); for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[arr[i], arr[j]] = [arr[j], arr[i]]; } return arr; }
        readingQuestionText(q, opts) { const prompt = this.cleanText(q.question || q.prompt || 'Choose the correct answer.'); const list = (opts || []).filter(Boolean); if (RTL) return `${prompt} اختیارات ہیں: ${list.join('، ')}`; return `${prompt}. Options are: ${list.join(', ')}.`; }
        showQuestion() {
            stopAllNarration();
            this.clearDyn();
            this.clearOverlay();
            this.isPaused = false;
            this.updateHUD();
            this.saveProgress();

            const qs = GAME.questions || [];
            if (this.q >= qs.length) return this.showCompletePanel(true);

            const q = qs[this.q] || {};
            const prompt = this.cleanText(q.prompt || q.question || 'Choose the answer.');

            this.addDyn(this.add.text(
                W / 2,
                155,
                `${this.q + 1}. ${prompt}`,
                {
                    fontFamily: textFont(),
                    fontSize: 28,
                    fontStyle: '900',
                    color: '#ffffff',
                    stroke: '#173B7A',
                    strokeThickness: 8,
                    align: 'center',
                    wordWrap: { width: 980 },
                    rtl: RTL
                }
            ).setOrigin(.5).setDepth(9));

            if (MODE === 'writing') this.renderWriting(q);
            else if (MODE === 'speaking' || q.type === 'speech') this.renderSpeaking(q);
            else if (MODE === 'listening') this.renderListening(q);
            else this.renderReading(q);

            this.time.delayedCall(140, () => {
                if (this.soundOn && !this.isPaused && MODE !== 'reading') {
                    speak(this.teacherText(q), {
                        source: q,
                        index: this.q,
                        purpose: 'question',
                        lang: GAME.lang || textLang(),
                        forceTTS: true
                    });
                }
            });
        }
        assetCard(x, y, text, w = 220, h = 68, answerCb = null, badgeLetter = 'A') {
            const container = this.addDyn(this.add.container(x, y).setDepth(8));

            const shadow = this.add.graphics();
            shadow.fillStyle(0x000000, .10).fillRoundedRect(-w / 2 + 3, -h / 2 + 5, w, h, 20);
            container.add(shadow);

            const bg = this.add.graphics();
            bg.fillStyle(0xfffbf2, 1)
                .lineStyle(2, 0xd1b28b, 1)
                .fillRoundedRect(-w / 2, -h / 2, w, h, 20)
                .strokeRoundedRect(-w / 2, -h / 2, w, h, 20);
            container.add(bg);

            const badgeR = 18;
            const badgeBg = this.add.graphics();
            badgeBg.fillStyle(0x6366f1, 1).fillCircle(-w / 2 + 28, 0, badgeR);
            badgeBg.lineStyle(2, 0x4f46e5, 1).strokeCircle(-w / 2 + 28, 0, badgeR);
            container.add(badgeBg);

            container.add(
                this.add.text(-w / 2 + 28, 0, badgeLetter, {
                    fontFamily: textFont(),
                    fontSize: 22,
                    fontStyle: '900',
                    color: '#ffffff'
                }).setOrigin(.5)
            );

            const textX = 22;
            const textW = w - 60;

            container.add(this.add.text(textX, 0, String(text), {
                fontFamily: textFont(),
                fontSize: 18,
                fontStyle: '900',
                color: '#173B7A',
                align: 'center',
                wordWrap: { width: textW },
                rtl: RTL,
                lineSpacing: 2
            }).setOrigin(.5));

            if (answerCb) {
                const zone = this.add.zone(0, 0, w, h)
                    .setInteractive({ useHandCursor: true })
                    .on('pointerdown', () => answerCb(text));

                zone.on('pointerover', () => {
                    this.tweens.add({ targets: container, scaleX: 1.025, scaleY: 1.025, duration: 100 });
                });

                zone.on('pointerout', () => {
                    this.tweens.add({ targets: container, scaleX: 1, scaleY: 1, duration: 100 });
                });

                container.add(zone);
            }

            return container;
        }
        renderReading(q) {
            const ans = q.answer || '';
            let readingText = q.text ||
                q.passage ||
                q.readingText ||
                q.audioText ||
                GAME.passage ||
                ans ||
                q.prompt;

            if (Array.isArray(readingText)) readingText = readingText.join(' ');

            readingText = String(readingText).replace(/\s+/g, ' ').trim();

            const boxW = 750, boxH = 135, boxX = W / 2, boxY = 290;
            const words = readingText.split(/\s+/).filter(Boolean);
            const dir = RTL ? 'rtl' : 'ltr';

            const html = `<div class="diyaa-reading-box" style="width:${boxW}px;height:${boxH}px;overflow:hidden;box-sizing:border-box;padding:6px 18px;font-family:${textFont()};font-size:${RTL ? 25 : 25}px;line-height:1.52;font-weight:900;color:#173B7A;text-align:${RTL ? 'right' : 'center'};direction:${dir};white-space:normal;word-break:normal;overflow-wrap:break-word;border-radius:20px;">
    <div class="diyaa-reading-inner" style="transition:transform 240ms ease;will-change:transform;">
      ${words.map((w, i) => `<span data-i="${i}" style="display:inline-block;margin:${RTL ? '0 0 0 .15em' : '0 .15em 0 0'};transition:color 90ms linear,font-weight 90ms linear;">${String(w).replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]))}</span>`).join(' ')}
    </div>
  </div>`;

            const dom = this.add.dom(boxX, boxY).createFromHTML(html).setDepth(8).setOrigin(.5);
            this.addDyn(dom);

            const root = dom.node.querySelector('.diyaa-reading-box');
            const inner = dom.node.querySelector('.diyaa-reading-inner');
            const spans = [...dom.node.querySelectorAll('span[data-i]')];

            const highlight = (idx) => {
                spans.forEach((sp, i) => {
                    const active = i === idx;
                    sp.style.color = active ? '#22c55e' : '#173B7A';
                    sp.style.fontWeight = active ? '950' : '900';
                });

                const sp = spans[idx];
                if (sp && root && inner) {
                    const top = sp.offsetTop;
                    const max = Math.max(0, inner.scrollHeight - root.clientHeight);
                    const target = Math.min(max, Math.max(0, top - 12));
                    inner.style.transform = `translateY(${-target}px)`;
                }
            };

            const reset = () => {
                spans.forEach(sp => {
                    sp.style.color = '#173B7A';
                    sp.style.fontWeight = '900';
                });
                if (inner) inner.style.transform = 'translateY(0px)';
            };

            reset();

            const opts = this.shuffleOptions((q.options && q.options.length ? q.options : [ans, 'Yes', 'No']).slice(0, 4));

            const askQuestion = () => {
                if (this.soundOn && !this.isPaused && !this.isReadingNarrationPlaying) {
                    speak(this.readingQuestionText(q, opts), {
                        source: q,
                        index: this.q,
                        purpose: 'reading-question',
                        lang: GAME.lang || textLang(),
                        forceTTS: true
                    });
                }
            };

            const startRead = () => {
                reset();

                stopAllNarration();

                if (!this.soundOn || this.isPaused) return;

                const fullText = String(readingText).replace(/\s+/g, ' ').trim();

                this.isReadingNarrationPlaying = true;

                speak(fullText, {
                    source: q,
                    index: this.q,
                    purpose: 'reading',
                    lang: GAME.lang || textLang(),
                    forceTTS: true,
                    onWord: (i) => highlight(i),
                    onEnd: () => {
                        this.isReadingNarrationPlaying = false;
                        setTimeout(askQuestion, 500);
                    }
                });
            };

            this.makeStylishReadButton(W / 2, 405, 'READ', startRead)
                .forEach(o => this.addDyn(o));

            if (this.__autoReadNext) {
                this.__autoReadNext = false;
                this.time.delayedCall(260, startRead);
            }

            const xs = [W / 2 - 125, W / 2 + 125, W / 2 - 125, W / 2 + 125];
            const ys = [500, 500, 575, 575];
            const badges = ['A', 'B', 'C', 'D'];

            opts.forEach((o, i) => {
                this.assetCard(xs[i], ys[i], o, 220, 68, v => this.answer(v, q.answer), badges[i]);
            });
        }
        renderListening(q) {
            const startListen = () => {
                if (this.soundOn && !this.isPaused) {
                    speak(this.teacherText(q), {
                        source: q,
                        index: this.q,
                        purpose: 'listening',
                        lang: GAME.lang || textLang(),
                        forceTTS: true
                    });
                }
            };

            this.makeStylishReadButton(W / 2, 405, 'PLAY SOUND', startListen)
                .forEach(o => this.addDyn(o));

            const opts = this.shuffleOptions((q.options && q.options.length ? q.options : [q.answer, 'A', 'B']).slice(0, 4));

            const xs = [W / 2 - 125, W / 2 + 125, W / 2 - 125, W / 2 + 125];
            const ys = [500, 500, 575, 575];
            const badges = ['A', 'B', 'C', 'D'];

            opts.forEach((o, i) => {
                this.assetCard(xs[i], ys[i], o, 220, 68, v => this.answer(v, q.answer), badges[i]);
            });
        }
        renderWriting(q) {
            const expected = String(q.answer || q.expected || '').trim(); const prompt = String(q.prompt || 'Write the answer.').trim(); const isTracing = q.type === 'tracing' || q.writingMode === 'trace';

            if (isTracing) {
                const guide = String(expected || prompt.replace(/^Trace\s+/i, '')).slice(0, 18);
                const html = `<div style="position:relative;width:500px;height:220px;overflow:hidden;border-radius:24px;background:rgba(255,255,255,.9);direction:${RTL ? 'rtl' : 'ltr'};font-family:${textFont()};box-shadow: 0 4px 6px rgba(0,0,0,0.1); border: 4px solid ${theme.hex};">
      <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:${RTL ? 80 : 90}px;font-weight:900;color:rgba(15,23,42,.12);letter-spacing:1px;-webkit-text-stroke:2px rgba(7,95,196,.35);text-align:center;line-height:1.05;padding:8px;box-sizing:border-box;">${guide.replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]))}</div>
      <canvas width="500" height="220" style="position:absolute;inset:0;touch-action:none;cursor:crosshair;"></canvas>
    </div>`;
                const traceDom = this.add.dom(W / 2, 380).createFromHTML(html).setDepth(11).setOrigin(.5); this.addDyn(traceDom);
                const canvas = traceDom.node.querySelector('canvas'); const ctx = canvas.getContext('2d'); let drawing = false, touched = false; ctx.lineWidth = 10; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.strokeStyle = theme.hex;
                const pos = (ev) => { const r = canvas.getBoundingClientRect(); const e = ev.touches && ev.touches[0] ? ev.touches[0] : ev; return { x: (e.clientX - r.left) * (canvas.width / r.width), y: (e.clientY - r.top) * (canvas.height / r.height) }; };
                const start = (ev) => { ev.preventDefault(); drawing = true; touched = true; const p = pos(ev); ctx.beginPath(); ctx.moveTo(p.x, p.y); }; const move = (ev) => { if (!drawing) return; ev.preventDefault(); const p = pos(ev); ctx.lineTo(p.x, p.y); ctx.stroke(); }; const end = () => { drawing = false; };
                canvas.addEventListener('pointerdown', start); canvas.addEventListener('pointermove', move); window.addEventListener('pointerup', end, { passive: true }); canvas.addEventListener('touchstart', start, { passive: false }); canvas.addEventListener('touchmove', move, { passive: false }); canvas.addEventListener('touchend', end, { passive: true });
                this.makeBtn(W / 2 - 100, 540, 'CLEAR', () => { ctx.clearRect(0, 0, canvas.width, canvas.height); touched = false; }, 0xf97316, 160, 60, 'retry-button').forEach(o => this.addDyn(o));
                this.makeBtn(W / 2 + 100, 540, 'DONE', () => { if (touched || expected.length <= 1) this.answer(expected, expected); else { this.playFx('wrong'); } }, theme.color, 160, 60, 'read-button').forEach(o => this.addDyn(o));
            } else {
                const input = this.add.dom(W / 2, 390, 'input', `font-size:32px;padding:18px;border-radius:20px;border:5px solid ${theme.hex};text-align:center;outline:none;width:400px;background:white;color:#17324d;font-weight:900;direction:${RTL ? 'rtl' : 'ltr'};font-family:${textFont()};box-shadow: 0 4px 6px rgba(0,0,0,0.1);`, ''); this.addDyn(input);
                this.makeBtn(W / 2, 510, 'CHECK', () => this.answer(input.node.value, expected), theme.color, 200, 70, 'read-button').forEach(o => this.addDyn(o));
            }
        }
        renderSpeaking(q) {
            const expected = q.answer || q.expected || '';
            this.assetCard(W / 2, 330, expected, 360, 110, null);
            const status = this.addDyn(this.add.text(W / 2, 430, 'Press the mic and speak clearly.', { fontFamily: textFont(), fontSize: 24, fontStyle: '900', color: C.ink, stroke: '#ffffff', strokeThickness: 4, align: 'center', wordWrap: { width: 640 }, rtl: RTL }).setOrigin(.5).setDepth(9));
            this.makeBtn(W / 2 - 130, 520, 'SPEAK NOW', () => this.startSpeech(q, status), 0x16a34a, 220, 70, 'mic-icon').forEach(o => this.addDyn(o));
            this.makeBtn(W / 2 + 130, 520, 'REPLAY', () => { if (this.soundOn && !this.isPaused) speak(this.teacherText(q), { source: q, index: this.q, purpose: 'speaking', lang: GAME.lang || textLang() }); }, theme.color, 220, 70, 'sound-button').forEach(o => this.addDyn(o));
        }
        playFx(k) { try { const s = this.snd(k); if (s) this.sound.play(s, { volume: .85 }); } catch (e) { } }
        answer(v, expected) {
            if (this.isReadingNarrationPlaying) {
                stopAllNarration();
                this.isReadingNarrationPlaying = false;
            } else {
                stopAllNarration();
            }

            if (flex(v, expected)) {
                this.score++;
                this.playFx('right');
                this.feedback(true);
                this.q++;
                this.updateHUD();
                this.saveProgress();
                this.__autoReadNext = MODE === 'reading';
                setTimeout(() => this.showQuestion(), 650);
            } else {
                this.lives--;
                this.playFx('wrong');
                this.feedback(false);
                this.updateHUD();
                this.saveProgress();

                if (this.lives <= 0) {
                    setTimeout(() => this.gameOver(), 850);
                }
            }
        }
        startSpeech(q, status) {
            const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (!SR) { status.setText('Speech recognition needs Chrome/Edge on HTTPS or localhost.'); return; }
            const expectedList = speechExpectedList(q); const expected = expectedList[0] || ''; const lang = GAME.lang || (RTL ? 'ur-PK' : 'en-PK'); const rec = new SR(); rec.lang = lang; rec.interimResults = true; rec.continuous = false; rec.maxAlternatives = 8;
            let heardList = []; let completed = false;
            const finish = (ok, heard, msg) => { if (completed) return; completed = true; try { rec.abort(); } catch (e) { } status.setText(msg || ('I heard: ' + (heard || ''))); this.answer(ok ? expected : (heard || 'wrong answer'), expected); };
            status.setText('Listening... speak the answer clearly.');
            rec.onresult = e => { let live = '', finalTexts = []; for (let i = e.resultIndex; i < e.results.length; i++) { const res = e.results[i]; if (res[0] && res[0].transcript) live += res[0].transcript + ' '; for (let j = 0; j < res.length; j++) { const t = (res[j] && res[j].transcript || '').trim(); if (t) { heardList.push(t); if (res.isFinal) finalTexts.push(t); } } } const current = live.trim(); if (current) status.setText('I heard: ' + current); const all = [...new Set(heardList.map(clean).filter(Boolean))]; if (all.some(h => speechMatches(h, expectedList))) return finish(true, all[0], 'Correct! I heard: ' + all[0]); if (finalTexts.length) { const best = bestSpeechMatch(all, expectedList); return finish(false, best.heard || finalTexts[0], 'Wrong answer. I heard: ' + (best.heard || finalTexts[0])); } };
            rec.onerror = e => { if (completed) return; const msg = e.error === 'not-allowed' ? 'Microphone permission blocked. Please allow mic and retry.' : (e.error === 'no-speech' ? 'No speech detected. Try again.' : 'Mic error: ' + (e.error || 'try again')); status.setText(msg); this.playFx('wrong'); };
            rec.onend = () => { if (completed) return; const unique = [...new Set(heardList.map(clean).filter(Boolean))]; if (!unique.length) { status.setText('No clear audio. Try again.'); this.playFx('wrong'); return; } const best = bestSpeechMatch(unique, expectedList); finish(!!best.ok, best.heard || unique[0], best.ok ? ('Correct! I heard: ' + (best.heard || unique[0])) : ('Wrong answer. I heard: ' + (best.heard || unique[0]))); };
            try { rec.start(); setTimeout(() => { if (!completed) { try { rec.stop(); } catch (e) { } } }, 5200); } catch (e) { status.setText('Please click the mic again and allow permission.'); }
        }
        feedback(ok) {
            this.hideGameplayContent();
            const items = [];

            const sh = this.add.graphics().setDepth(300);
            sh.fillStyle(0x000000, .5).fillRect(0, 0, W, H);
            items.push(sh);

            const panel = this.imageOrFallback(
                'panel-background',
                W / 2,
                H / 2,
                360,
                250,
                28,
                0xffffff,
                ok ? 0x22c55e : 0xef4444
            ).setDepth(301);
            items.push(panel);

            const mascotKey = this.img(ok ? 'mascot-wow' : 'mascot-oops') || this.img('mascot');
            if (mascotKey) {
                items.push(
                    this.add.image(W / 2, H / 2 - 35, mascotKey).setDisplaySize(125, 125).setDepth(302)
                );
            }

            items.push(this.add.text(W / 2, H / 2 + 78, ok ? 'Wow!' : 'Oops!', {
                fontFamily: textFont(),
                fontSize: 38,
                fontStyle: '900',
                color: ok ? '#22c55e' : '#ef4444',
                stroke: '#ffffff',
                strokeThickness: 5
            }).setOrigin(.5).setDepth(303));

            this.time.delayedCall(ok ? 650 : 850, () => {
                items.forEach(o => { try { o.destroy(); } catch (e) { } });
                if (!ok) this.showGameplayContent();
            });
        }
        pauseGame() {
            if (this.isPaused) return;
            this.isPaused = true;

            try { if (window.__diyaaCurrentNarrationAudio) window.__diyaaCurrentNarrationAudio.pause(); } catch (e) { }
            try { if (window.speechSynthesis) speechSynthesis.pause(); } catch (e) { }

            const sh = this.addOverlay(this.add.graphics().setDepth(200));
            sh.fillStyle(0x0f172a, .52).fillRect(0, 0, W, H);

            this.addOverlay(this.imageOrFallback(
                'panel-background',
                W / 2,
                H / 2,
                400,
                260,
                30,
                0xfffbeb,
                theme.color
            ).setDepth(201));

            this.addOverlay(this.add.text(W / 2, H / 2 - 58, 'PAUSED', {
                fontFamily: textFont(),
                fontSize: 44,
                fontStyle: '900',
                color: theme.hex,
                stroke: '#ffffff',
                strokeThickness: 5
            }).setOrigin(.5).setDepth(202));

            this.addOverlay(this.add.text(W / 2, H / 2 + 8, 'Take a short break.', {
                fontFamily: textFont(),
                fontSize: 22,
                fontStyle: '800',
                color: C.ink,
                align: 'center',
                wordWrap: { width: 360 },
                rtl: RTL
            }).setOrigin(.5).setDepth(202));

            this.makeOverlayButton(W / 2, H / 2 + 84, 'RESUME', () => this.resumeGame(), 0x16a34a, 190, 58);
        }
        makeOverlayButton(x, y, label, cb, color, w, h) {
            const arr = this.makeBtn(x, y, label, cb, color, w, h, 'play-button', true);
            arr.forEach(o => { try { o.setDepth((o.depth || 0) + 200); } catch (e) { } this.addOverlay(o); });
        }
        resumeGame() {
            this.isPaused = false; this.clearOverlay();
            try { if (window.__diyaaCurrentNarrationAudio) window.__diyaaCurrentNarrationAudio.play(); } catch (e) { }
            try { if (window.speechSynthesis) speechSynthesis.resume(); } catch (e) { }
        }
        gameOver() {
            stopAllNarration();
            this.hideGameplayContent();
            this.clearDyn();
            this.clearOverlay();

            const sh = this.add.graphics().setDepth(200);
            sh.fillStyle(0x000000, .42).fillRect(0, 0, W, H);
            this.addDyn(sh);

            this.addDyn(this.imageOrFallback(
                'panel-background',
                W / 2,
                H / 2,
                400,
                290,
                30,
                0xfffbeb,
                0xef4444
            ).setDepth(201));

            const mascotKey = this.img('mascot-oops') || this.img('mascot');
            if (mascotKey) {
                this.addDyn(this.add.image(W / 2, H / 2 - 50, mascotKey).setDisplaySize(120, 120).setDepth(202));
            }

            this.addDyn(this.add.text(W / 2, H / 2 + 42, 'GAME OVER', {
                fontFamily: textFont(),
                fontSize: 34,
                fontStyle: '900',
                color: '#ef4444',
                stroke: '#ffffff',
                strokeThickness: 5
            }).setOrigin(.5).setDepth(203));

            this.makeStylishButton(W / 2, H / 2 + 105, 'RETRY', 0xf97316, () => {
                this.resetProgress();
                this.showQuestion();
            }, true);
        }
        showCompletePanel(auto = false) {
            stopAllNarration();
            this.playFx('complete');
            this.hideGameplayContent();
            this.clearDyn();
            this.clearOverlay();

            try { localStorage.removeItem(this.stateKey); } catch (e) { }

            const sh = this.add.graphics().setDepth(200);
            sh.fillStyle(0x000000, .42).fillRect(0, 0, W, H);
            this.addDyn(sh);

            this.addDyn(this.imageOrFallback(
                'panel-background',
                W / 2,
                H / 2,
                430,
                315,
                32,
                0xfff8e8,
                theme.color
            ).setDepth(201));

            const mascotKey = this.img('mascot-wow') || this.img('mascot');
            if (mascotKey) {
                this.addDyn(this.add.image(W / 2, H / 2 - 65, mascotKey).setDisplaySize(135, 135).setDepth(202));
            }

            this.addDyn(this.add.text(W / 2, H / 2 + 35, 'LEVEL COMPLETE', {
                fontFamily: textFont(),
                fontSize: 32,
                fontStyle: '900',
                color: theme.hex,
                stroke: '#ffffff',
                strokeThickness: 5
            }).setOrigin(.5).setDepth(203));

            this.makeStylishButton(W / 2 - 85, H / 2 + 105, 'RETRY', 0xf97316, () => {
                this.resetProgress();
                this.showQuestion();
            }, true);

            this.makeStylishButton(W / 2 + 85, H / 2 + 105, 'NEXT', 0x16a34a, () => {
                try {
                    window.parent.postMessage({
                        type: 'DIYAA_LEVEL_COMPLETE',
                        score: this.score,
                        lives: this.lives
                    }, '*');
                } catch (e) { }
                if (window.parent === window) this.showQuestion();
            }, true);
        }
    }
    const config = {
        type: Phaser.AUTO,
        parent: 'game-root',
        width: W,
        height: H,
        backgroundColor: 'rgba(0,0,0,0)',
        transparent: true,
        scale: {
            mode: Phaser.Scale.ENVELOP,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width: W,
            height: H
        },
        dom: {
            createContainer: true
        },
        audio: {
            disableWebAudio: false
        },
        scene: [MainScene]
    }; new Phaser.Game(config);
})();
