"Use strict"

const button_1 = document.getElementById('button_1');
const button_2 = document.getElementById('button_2');
const buttonContainer = document.getElementById('buttonContainer');



function generate() {
    let vocabulary = {
        "put into": "распределять в",
        "niece": "племянница",
        "nephew": "племянник",
        "possession": "владение",
        "noun": "существительное",
        "mean": "означать",
        "the same": "такой же/тоже самое",
        "refer to": "ссылаться на что-то/упоминать что-то",
        "quiz": "викторина",
        "opposite": "напротив",
        "to be different from": "отличаться от",
        "a lot of": "много",
        "contrast": "разница",
        "enjoy": "нравится/получать удовольствие",
        "clearly": "очевидно",
        "missing": "пропущенный",
        "meet": "встречатся",
        "often": "часто",
        "ancient": "древний",
        "classmate": "однокласник",
        "usually": "обычно",
        "always": "всегда",
        "sleep": "спать",
        "spelling": "правописание",
        "distinguish": "различать",
        "similar": "похожий",
        "do the washing": "стирать",
        "do the ironing": "гладить",
        "set the table": "накрывать на стол",
        "keep": "хранить/держать",
        "match": "сопоставить",
        "furniture": "мебель",
        "get ready": "собираться",
        "order": "порядок",
        "next to": "рядом с",
        "below": "ниже",
        "something": "что-то",
        "exist": "существовать",
        "cross out": "вычёркивать",
        "like this": "таким образом",
        "preposition": "предлог",
        "explain": "объяснять",
        "contraction": "сокращение",
        "pay attention to": "обращать внимание на",
        "pronunciation": "произношение",
        "missing words": "пропущенные слова",
        "again": "снова",
        "a wardrobe": "шкаф",
        "kitchen": "кухня",
        "living room": "гостинная",
        "dining room": "столовая в доме",
        "study": "кабинет",
        "bedroom": "спальня",
        "lowyer": "юрист",
        "behind": "сзади",
        "in front of": "спереди",
        "on the left/right": "слева/справа",
        "conversation": "беседа",
        "cross out": "вычёркивать",
        "prompt": "подсказка",
        "there isn't a lot to do": "тут нечего делать",
        "cheap": "дёшево",
        "crime": "преступность",
        "as well": "так же",
        "decide": "решать",
        "worst": "худший",
        "any (in negative)": "никакой",
        "spend over": "тратить больше",
        "make arrangements": "договариваться",
        "similar to": "похожий на вас",
        "spend money": "тратить деньги",
        "tired": "уставший/уставать",
        "take a break": "сделать перерыв",
        "take notes": "сделать заметки",
        "contractions": "сокращения",
        "facilities": "удобства",
        "take": "отводить",
        "predict": "предугадать",
        "allow": "разрешать",
        "seat": "сидячее место (в транспорте)",
        "a bit": "немного",
        "to be angry with": "злится на",
        "untidy": "неопрятный/не аккуратный",
        "suppose": "предполагать",
        "unfair": "несправедливый",
        "busy": "занятой",
        "to have a time": "проводить время",
        "i must have moody": "у меня должно быть настроение",
        "lately": "в последнее время",
        "ordinary": "обычный",
        "own": "владеть/обладать",
        "charity": "благотворительная организация",
        "appear": "появлятся",
        "baggage": "багаж",
        "advice": "совет",
        "treat": "угощать",
        "whole": "весь/целый",
        "clear": "ясный (о погоде)",
        "skiing": "кататься на лыжах",
        "must've been": "должно быть",
        "sibling rivalry": "соперничество (брат/сестра)",
        "get on well": "ладить",
        "nice to meet you": "приятно познакомиться",
        "What about you?": "Что насчёт тебя?",
        "pair": "пара",
        "invent": "придумывать/изобретать",
        "twins": "двойняшки",
        "affirmative": "утвердительный",
        "negative": "отрецательный",
        "interrogative": "вопросительный",
        "order": "порядок",
        "present": "подарок",
        "to be late": "опаздывать",
        "opinion": "мнение",
        "borrow": "одалживать",
        "ability": "способность",
        "permission": "разрешение",
        "meaning": "значение",
        "bin": "урна",
        "cupboard": "шкаф/не для вещей",
        "ruler": "линейка",
        "definite": "определённый",
        "mention": "упоминать",
        "for the first time": "впервые",
        "the same": "одинаковый",
        "bring": "приносить",
        "buy": "покупать",
        "think": "думать",
        "hear": "слышать",
        "draw": "рисовать",
        "know": "знать",
        "feed": "кормить",
        "eat": "кушать",
        "break": "ломать",
        "catch": "ловить/словить",
        "get": "получать/доставать",
        "meet": "встречать",
        "take": "брать/взять",
        "to catch a cold": "заболеть",
        "to feel well (unwell)": "чувствовать себя хорошо (плохо)",
        "to comb": "расчёсывать, зачёсывать",
        "to brush": "чистить щёткой",
        "to brush teeth": "чистить зубы",
        "to take a shower": "принимать душ",
        "to empty": "освобождать",
        "larder": "чулан",
        "dustbin": "мусорное ведро",
        "to empty a dustbin": "выбрасывать мусор",
        "fall": "падать",
        "give": "давать",
        "wake up": "просыпаться",
    };

    let englishWords = Object.keys(vocabulary);
    let randomEnglishWord = englishWords[Math.floor(Math.random() * englishWords.length)]
    let russianWord = vocabulary[randomEnglishWord];

    document.getElementById("russianWord").innerHTML = russianWord;
    document.getElementById("englishWord").innerHTML = randomEnglishWord;
};
button_1.addEventListener('click', generate);

function showHidden() {
    const elem = document.getElementById('russianWord');
    const style = getComputedStyle(elem);

    if (style.display === 'none') {
        document.getElementById('russianWord').style.display = 'flex';
        button_2.innerText = "Скрыть перевод"
    } else if (style.display !== 'none') {
        document.getElementById('russianWord').style.display = 'none';
        button_2.innerText = "Показать перевод"
    }
}
button_2.addEventListener('click', showHidden);






