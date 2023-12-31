import { Tutorial } from "./Tutorial";

import styles from "./Tutorial.module.css";

import openai from "../../assets/openai.svg"
import embeddings from "../../assets/embeddings.svg"
import search from "../../assets/search.svg"
import agents from "../../assets/agents.svg"

export type TutorialModel = {
    title: string;
    question: string;
    id: number;
    icon: string;
};

const TUTORIALS: TutorialModel[] = [
    {
        title: "Language Models",
        question: "Teach me about language models",
        id: 0,
        icon: openai
    },
    {
        title: "Embeddings",
        question: "Teach me about embeddings",
        id: 1,
        icon: embeddings
    },
    {
        title: "Retrieval Augmented Generation",
        question: "Teach me about retrieval augmented generation",
        id: 2,
        icon: search
    },
    {
        title: "Agents",
        question: "Teach me about agents",
        id: 3,
        icon: agents
    }
];

interface Props {
    onTutorialClicked: (question: string, id: number) => void;
}

export const TutorialList = ({ onTutorialClicked }: Props) => {
    return (
        <ul className={styles.tutorialsNavList}>
            {TUTORIALS.map((x, i) => (
                <li key={i}>
                    <Tutorial title={x.title} question={x.question} id={x.id} icon={x.icon} onClick={onTutorialClicked} />
                </li>
            ))}
        </ul>
    );
};
