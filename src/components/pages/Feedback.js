import './feedback.css';

function Feedback() {
    function sendFeedback(event) {
        event.preventDefault();
        let email = document.getElementById('email').value;
        let name = document.getElementById('name').value;
        let text = document.getElementById('text').value;
        let emailError = document.getElementById('emailerror');
        let nameError = document.getElementById('nameerror');
        let textError = document.getElementById('texterror');
        let correctEmail;

        function checkEmail() {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    
            return re.test(String(email).toLowerCase());
        }

        correctEmail = checkEmail();
        if (correctEmail === false || email === '') {
            emailError.innerHTML = ' введен не верно';
        } else {
            emailError.innerHTML = null;
        }

        if (name === '') {
            nameError.innerHTML = ' не введено';
        } else {
            nameError.innerHTML = null;
        }

        if (text === '') {
            textError.innerHTML = ' не введен';
        } else {
            textError.innerHTML = null;
        }

        if(correctEmail === true && name !== '' && text !=='') {
            const feedbackObject = {
                "email": email,
                "name": name,
                "text": text
            }
            console.log(feedbackObject);
            }
    }
    return (
        <div className="feedback">
                <div className="feedback__container">
                    <label>Ваш Email*<span id="emailerror" className="feedback_container-error"></span></label>
                    <input id="email" type="email" placeholder="введите email"/>
                    <label>Ваше Имя* <span id="nameerror" className="feedback_container-error"></span></label>
                    <input id="name" type="text" placeholder="введите имя" required/>
                    <label>Сообщение* <span id="texterror" className="feedback_container-error"></span></label>
                    <textarea id="text" placeholder="введите сообщение" required/>
                    <div className="feedback__container-fill">* - обязательно для заполнения</div>
                    <button id="feedback" type="submit" onClick={sendFeedback}>Отправить сообщение</button>            
                </div>
                
        </div>  
    )
}



export default Feedback;