const newsData = [
    {
        category: "News",
        day: "25",
        date: "2024.10",
        title: "상상인그룹의 ‘상상휠하모니 오케스트라’, 첫 외부 공연 ‘DMZ OPEN 페스티벌’ 성료",
        content: "세계 최초 휠체어 사용 단원으로 구성된 상상인그룹(대표 유준원)의 상상휠(Wheel)하모니 오케스트라..."
    },
    {
        category: "News",
        day: "25",
        date: "2024.10",
        title: "상상인그룹의 ‘상상휠하모니 오케스트라’, 첫 외부 공연 ‘DMZ OPEN 페스티벌’ 성료",
        content: "세계 최초 휠체어 사용 단원으로 구성된 상상인그룹(대표 유준원)의 상상휠(Wheel)하모니 오케스트라..."
    },
    {
        category: "News",
        day: "25",
        date: "2024.10",
        title: "상상인그룹의 ‘상상휠하모니 오케스트라’, 첫 외부 공연 ‘DMZ OPEN 페스티벌’ 성료",
        content: "세계 최초 휠체어 사용 단원으로 구성된 상상인그룹(대표 유준원)의 상상휠(Wheel)하모니 오케스트라..."
    },
    {
        category: "News",
        day: "25",
        date: "2024.10",
        title: "상상인그룹의 ‘상상휠하모니 오케스트라’, 첫 외부 공연 ‘DMZ OPEN 페스티벌’ 성료",
        content: "세계 최초 휠체어 사용 단원으로 구성된 상상인그룹(대표 유준원)의 상상휠(Wheel)하모니 오케스트라..."
    },
    {
        category: "News",
        day: "25",
        date: "2024.10",
        title: "상상인그룹의 ‘상상휠하모니 오케스트라’, 첫 외부 공연 ‘DMZ OPEN 페스티벌’ 성료",
        content: "세계 최초 휠체어 사용 단원으로 구성된 상상인그룹(대표 유준원)의 상상휠(Wheel)하모니 오케스트라..."
    },
];

document.addEventListener('DOMContentLoaded', () => {
    const newsBox = document.querySelector('.NewBox2');

    newsBox.innerHTML = newsData.map(news => `
        <div class="NewsDepth flex-02">
            <span>${news.category}</span>
            <div class="Day">
                <p>${news.day}</p>
                <span>${news.date}</span>
            </div>
            <div class="NewsText">
                <h6>${news.title}</h6>
                <span>${news.content}</span>
            </div>
        </div>
        `).join('');
})