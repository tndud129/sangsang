const Data2 = [
    {
        day: "11",
        date: "2024.10",
        title: "임원 ‧ 주요주주특정증권등소유상황보고서",
    },
    {
        day: "11",
        date: "2024.10",
        title: "주식등의대량보유상황보고서(일반)",
    },
    {
        day: "08",
        date: "2024.10",
        title: "주식등의대량보유상황보고서(약식)",
    },
    {
        day: "27",
        date: "2024.09",
        title: "주식등의대량보유상황보고서(일반)",
    },
    {
        day: "27",
        date: "2024.09",
        title: "임원 ‧ 주요주주특정증권등소유상황보고서",
    },
    {
        day: "03",
        date: "2024.09",
        title: "[정정]반기보고서(일반법인)",
    },
    {
        day: "26",
        date: "2024.08",
        title: "주식등의대량보유상황보고서(일반)",
    },
]

document.addEventListener('DOMContentLoaded', () => {
    const dataWrap = document.querySelector('.S4dataWrap');

    dataWrap.innerHTML = Data2.map(data => `
            <li>
                <div class="S4data flex-02">
                    <div>
                        <p>${data.day}</p>
                        <span>${data.date}</span>
                    </div>
                    <a href="#none">
                        <h3>${data.title}</h3>
                    </a>
                </div>
            </li>
        `).join('');
})