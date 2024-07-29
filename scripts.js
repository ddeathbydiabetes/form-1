document.addEventListener('DOMContentLoaded', (event) => {
    emailjs.init("E42mVfpSaCv18LKVg");
    
    
    document.getElementById('survey-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const whoAreYou = document.getElementById('dropdown').selectedOptions[0].text;
        const doYouThinkAmCool = document.querySelector('input[name="answer"]:checked').parentElement.textContent.trim();
        const whatDoULikeAboutMe = Array.from(document.querySelectorAll('input[name="choose"]:checked'))
            .map(el => el.parentElement.textContent.trim())
            .join(', ');
        const comments = document.getElementById('comments').value;
        
        const templateParams = {
            name: name,
            email: email,
            age: age,
            who_are_you: whoAreYou,
            do_you_think_am_cool: doYouThinkAmCool,
            what_do_u_like_about_me: whatDoULikeAboutMe,
            comments: comments
        };
        
        emailjs.send('testing-aurel1', 'answer-testing', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message Sent!');
            }, function(error) {
                console.log('FAILED...', error);
                alert('Pesan gagal dikirim.');
            });
    });
});
