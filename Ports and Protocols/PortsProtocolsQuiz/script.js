const questions = [
    { question: "What port does FTP use?", answer: "FTP", transport: "TCP/20,21" },
    { question: "What protocol runs on port 22?", answer: "SSH,SFTP", transport: "TCP" },
    { question: "What port does HTTP use?", answer: "HTTP", transport: "TCP/80" },
    { question: "What protocol runs on port 443?", answer: "HTTPS", transport: "TCP" },
    { question: "What port does SMTP use?", answer: "SMTP", transport: "TCP/25" },
    { question: "What protocol runs on port 53?", answer: "DNS", transport: "TCP/UDP" },
    { question: "What port does DHCP use?", answer: "DHCP", transport: "UDP/67,68" },
    { question: "What protocol runs on port 69?", answer: "TFTP", transport: "UDP" },
    { question: "What port does NTP use?", answer: "NTP", transport: "UDP/123" },
    { question: "What protocol runs on port 161,162?", answer: "SNMP", transport: "UDP" },
    { question: "What port does LDAP use?", answer: "LDAP", transport: "TCP/389" },
    { question: "What protocol runs on port 445?", answer: "SMB", transport: "TCP" },
    { question: "What port does Syslog use?", answer: "Syslog", transport: "UDP/514" },
    { question: "What protocol runs on port 587?", answer: "SMTPS", transport: "TCP" },
    { question: "What port does LDAPS use?", answer: "LDAPS", transport: "TCP/636" },
    { question: "What protocol runs on port 1433?", answer: "SQL Server", transport: "TCP/UDP" },
    { question: "What port does RDP use?", answer: "RDP", transport: "TCP/UDP/3389" },
    { question: "What protocol runs on port 5060,5061?", answer: "SIP", transport: "TCP/UDP" }
];

// Shuffle questions randomly
let shuffledQuestions = questions.sort(() => Math.random() - 0.5);
let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    if (currentQuestionIndex >= shuffledQuestions.length) {
        document.getElementById("question").innerText = "Quiz Completed!";
        document.getElementById("protocolAnswer").style.display = "none";
        document.getElementById("transportAnswer").style.display = "none";
        document.querySelector("button").style.display = "none";
        document.getElementById("score").innerText = `Final Score: ${score} / ${questions.length}`;
        return;
    }

    document.getElementById("question").innerText = shuffledQuestions[currentQuestionIndex].question;
    document.getElementById("protocolAnswer").value = "";
    document.getElementById("transportAnswer").value = "";
    document.getElementById("feedback").innerText = "";
}

function checkAnswer() {
    let userProtocol = document.getElementById("protocolAnswer").value.trim();
    let userTransport = document.getElementById("transportAnswer").value.trim();
    
    let correctProtocol = shuffledQuestions[currentQuestionIndex].answer.split(","); // Allow multiple correct answers
    let correctTransport = shuffledQuestions[currentQuestionIndex].transport;

    if (correctProtocol.includes(userProtocol) && userTransport === correctTransport) {
        score++;
        document.getElementById("feedback").innerText = "✅ Correct!";
        document.getElementById("feedback").style.color = "lightgreen";
    } else {
        document.getElementById("feedback").innerText = `❌ Incorrect! The correct answer is: ${shuffledQuestions[currentQuestionIndex].answer}, ${correctTransport}`;
        document.getElementById("feedback").style.color = "red";
    }

    document.getElementById("score").innerText = `Score: ${score}`;
    currentQuestionIndex++;
    setTimeout(loadQuestion, 2500);
}

window.onload = loadQuestion;
