import react from 'react';
import ReactDOM from 'react-dom';

const WorkExpArr = [
"HOT Public Inquiries Coordinator ~ 2020-2021 ~ רכז במחלקת פניות ציבור בהוט",
"Machine Operator ~ 2019-2020 ~ מפעיל מכונה",
"Frontal Customer Services ~ 2015-2017 ~ שירות לקוחות פרונטלי בחברות שונות"
]

const certificationsArr = [
    "Electrical Practical engineer ~ הנדסאי חשמל"
]

const educationArr = [
    `Air force technical collage in Be'er Sheva ~ 2011-2015 המכללה הטכנולוגית של חיל האוויר בבאר שבע (כיתות ט' עד י"ב)`,
    `Air force technical collage in Be'er Sheva ~ 2016-2017 המכללה הטכנולוגית של חיל האוויר בבאר שבע (כיתות י"ג עד י"ד)`
]

const skillArr =[
    "Working under pressure ~ יכולת עבודה תחת לחץ",
    "Full control of a digitalized environments ~ שליטה מלאה בסביבות ממוחשבות",
    "Taking responsibility and leading Group-Projects ~ לקיחת אחראיות והובלת פרויקטים קבוצתיים",
    "Able to learn any subject after a short period of time ~ יכולת למידת כל נושא לאחר פרק זמן קצר"
]

const elem = (props) => {
    return (
        <div style={{textAlign: 'left', marginLeft: "2.5%"}}>
            <h2>My CV:</h2>
            <h3>Certifications so far:</h3>
            <ul>
                {certificationsArr.map(dabook => <li>{dabook}</li>)}
            </ul>
            <h3>Work experience so far:</h3>
            <ul>
                {WorkExpArr.map(badook => <li>{badook}</li>)}
            </ul>
            <h3>Education:</h3>
            <ul>
                {educationArr.map(kadoob => <li>{kadoob}</li>)}
            </ul>
            <h3>Skills:</h3>
            <ul>
                {skillArr.map(kabood => <li>{kabood}</li> )}
            </ul>
        </div>
    )
};

export default elem;