import { useDispatch, useSelector } from "react-redux";
import { questionActions } from "../store/questionSlice";


const Question = ({ question, answer }) => {

    const dispatch = useDispatch();
    const questionState = useSelector(state => state.question.question.question);
    const handleQuestionState = () => {
        dispatch(questionActions.handleQuestionContent({ question }));
    }
    
    return <div className="font-josefin text-xl font-bold text-stone-800 m-4">
        <h2
            onClick={handleQuestionState}
            tabIndex={0}
            className="p-4 hover:cursor-pointer focus:bg-grisCard focus:ring-1 ring-morao"
        >{question}</h2>
        {questionState === question &&
            <p className="m-2 text-lg text-morao max-w-96">{answer}</p>
        }
    </div>
}

export default Question;