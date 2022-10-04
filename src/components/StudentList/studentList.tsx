//assets
import foto from "../../../assets/4.jpg";

export const StudentList= function (data:any) {
    return `
        <div className="studentsList__div">
            <p className="studentsList__div-p">
                <a
                    href="/studentInfo"
                >
                    <img className="foto" src=${foto} />
                </a>
                <br />${data.surname} ${data.name}
            </p>
            <p className="studentsList__div-p">${data.age}</p>            
            <p class="studentsList__div-p">дата рождения: ${data.date}</p>
            <p class="studentsList__div-p">команда: ${data.teamName}</p>
        </div>`;
    
};