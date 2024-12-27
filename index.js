//-------------------POPUP
const openModalButtonIds = [
    "open-modal-btn",
    "open-modal",
    "open-modall",
    "open-moda",
    "open-modw",
    "open-modS",
    "open-mo",
    "open-m",
    "open-win",
    "open-wi",
    "open-w"
];

openModalButtonIds.forEach(id => {
    const button = document.getElementById(id);
    if (button) {
        button.addEventListener("click", function() {
            document.getElementById("my-modal").classList.add("open");
        });
    }
});

function showModal(modalId) {
    document.getElementById(modalId).classList.add("open");
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove("open");
}

const showButtons = [
    { buttonId: "show-btn", modalId: "primer" },
    { buttonId: "show-btn2", modalId: "primer2" },
    { buttonId: "show-btn3", modalId: "primer3" },
    { buttonId: "show-btn4", modalId: "primer4" },
    { buttonId: "show-btn5", modalId: "primer5" },
    { buttonId: "show-btn6", modalId: "primer6" },
    { buttonId: "show-btn7", modalId: "primer7" },
    { buttonId: "show-btn8", modalId: "primer8" },
];

showButtons.forEach(button => {
    document.getElementById(button.buttonId).addEventListener("click", function() {
        showModal(button.modalId);
    });
});

document.getElementById("close-modal-btn").addEventListener("click", function() {
    closeModal("my-modal");
});

const closeButtons = ["close-modal-btn", "close-modal-bt", "close-modal-b", "close-modal", "close-moda", "close-mod", "close-mo", "close-m", "close-w"];
closeButtons.forEach(buttonId => {
    document.getElementById(buttonId).addEventListener("click", function() {
        let modalId;

        switch(buttonId) {
            case "close-modal-btn":
                modalId = "my-modal";
                break;
            case "close-modal-bt":
                modalId = "primer";
                break;
            case "close-modal-b":
                modalId = "primer2";
                break;
            case "close-modal":
                modalId = "primer3";
                break;
            case "close-moda":
                modalId = "primer4";
                break;
            case "close-mod":
                modalId = "primer5";
                break;
            case "close-mo":
                modalId = "primer6";
                break;
            case "close-m":
                modalId = "primer7";
                break;
            case "close-w":
                modalId = "primer8";
                break;
    
            default:
                modalId = null;
        }

        if (modalId) {
            closeModal(modalId);
        }
    });
});


//------------slider
let currentIndex = 0;

function showSlide(index) {
    const reviews = document.querySelectorAll('.review');
    reviews.forEach((review, i) => {
        review.classList.remove('active');
        if (i === index) {
            review.classList.add('active');
        }
    });
}

function moveSlide(direction) {
    const reviews = document.querySelectorAll('.review');
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = reviews.length - 1;
    } else if (currentIndex >= reviews.length) {
        currentIndex = 0;
    }

    showSlide(currentIndex);
}

showSlide(currentIndex);
//--------- right-popup

const butt = document.getElementById("right-butt")
const clsButt = document.getElementById("right-cls-butt")
const rightPopup = document.getElementById("right-popup")
const right = document.getElementById("right1")

butt.addEventListener("click", () => {
    rightPopup.classList.add("active");
    right.classList.add("active");
});

clsButt.addEventListener("click", () => {
    rightPopup.classList.remove("active");
    right.classList.remove("active");
});
///---------header

const header = document.getElementById('head');
const firstWin = document.getElementById('fiwstWIn');

// Функция для проверки позиции
function checkScroll() {
    const firstWinRect = firstWin.getBoundingClientRect();
    if (firstWinRect.top <= 0) {
        header.style.position = 'fixed';
    } else {
        header.style.position = 'static'; // Возвращаем стиль, если прокрутка обратно
    }
}

// Добавляем событие прокрутки
window.addEventListener('scroll', checkScroll);
