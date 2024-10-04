import BookableDetails  from "./BookableDetails.jsx";
import BookablesList from "./BookablesList.jsx";
import {useState} from "react";

export default function BookablesView () {
    // 부모 BookablesView 컴포넌트가 state 변수 선언하고
    // 자식 BookablesList, BookableDetails 컴포넌트에게 프롭스(props) 전달함.
    const [bookable, setBookable] = useState();
    return (
        <>
             {/*자식 컴포넌트에서 state 변수값 변경할 수 있도록 변경함수도 전달합니다.*/}
            <BookablesList bookable={bookable} setBookable={setBookable}/>
            <BookableDetails bookable={bookable}/>
        </>
    );
}