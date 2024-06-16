import React, { useState } from 'react';
import exit from './exit.jpg';
import nosmoking from './nosmoking.png';
import parking from './parking.jpg';
import refuge from './refuge.jpg';
import toilet from './toilet.png';

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
        border: "2px solid grey",
        borderRadius: 16,
    },
    imageContainer: {
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid grey",
        borderRadius: 16,
        margin: 18,
    },
    imageItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 16,
    },
    inputBox: {
        border: "1px solid grey",
        borderRadius: 16,
        marginTop: 10, 
        width: 150,
        height: 40,
        fontSize: 16,
    },
    exampleContainer: {
        display: "flex",
        color: "black",
        fontSize: 24,
        fontWeight: "bold",
        justifyContent: "center",
        gap: 10,
    },
    button: {
        width: 100,
        height: 40,
        fontSize : 24,
    },
    resultContainer: {
        margin: 8,
        padding: 8,
        gap: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
        border: "1px solid grey",
        borderRadius: 16,
    },
};

const A3_53 = (props) => {
    const [answers, setAnswers] = useState('');
    const [result, setResult] = useState(null);
    const questions = {
        question: '다음 표지판의 알맞은 이름을 아래에서 찾아 적어보세요.',
        example: ['장애인주차구역', '대피소', '비상구', '화장실', '금연'],
        images: [exit, nosmoking, parking, refuge, toilet],
    };
    const correct = ['비상구', '금연', '장애인주차구역', '대피소', '화장실'];
    
    const handleChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };

    const handleSubmit = () => {
        let Newcount = 0;
        for (let i = 0; i < correct.length; i++) {
            if (answers[i] === correct[i]) {
                Newcount++;
            }
        }
        setResult(`제출 완료! 정답: ${Newcount} 개`);
    };

    return (
        <>
            <div style={styles.wrapper}>
            <h1>표지판 이름 맞추기</h1>
            <h2>{questions.question}</h2>
            <ul style={styles.exampleContainer}>{questions.example.map((a, index) => <p key={index}>{a}</p>)}</ul>
            </div>
            <div style={styles.imageContainer}>
                {questions.images.map((b, index) => (
                    <div key={index} style={styles.imageItem}>
                        <img src={b} style={styles.image} alt={`question-${index}`} />
                        <input
                            type="text"
                            value={answers[index]}
                            onChange={(e) => handleChange(index, e.target.value)}
                            placeholder="정답 입력"
                            style={styles.inputBox}
                        />
                    </div>
                ))}
            </div>
            <div style={styles.resultContainer}>
            <button onClick={handleSubmit} style={styles.button}>제출</button>
            {result && <div style={styles.exampleContainer}>{result}</div>}
            </div>
        </>
    );
};

export default A3_53;