const stateContainer = new AppStateContainer();
const requestService = new RequestService('https://flaskapitutorial.onrender.com');

window.onload = () => {
    const container = document.querySelector('.container');
    const templateLogin = document.querySelector('.template-login');
    const templateWorkspace = document.querySelector('.template-workspace');
    
    const loginNode = new Template(templateLogin, 'login-wrapper');
    //const workspaceNode = new Template(templateWorkspace, 'workspace-wrapper');

    loginNode.render(container);

    const signinRadio = document.querySelector('.signin-radio');
    const signupRadio = document.querySelector('.signup-radio');
    const formbox = document.querySelector('.form-box');
    const body = document.querySelector('body');
    const signin = document.querySelector('.signin');
    const signup = document.querySelector('.signup');
    const signupForm = document.querySelector('.signup-form');
    const signinForm = document.querySelector('.signin-form');

    signinRadio.onclick = () => {
        formbox.classList.remove('active');
        body.classList.remove('active');
        /*formbox.classList.add('active');
        body.classList.add('active');*/
    }

    signupRadio.onclick = () => {
        /*formbox.classList.remove('active');
        body.classList.remove('active');*/
        formbox.classList.add('active');
        body.classList.add('active');
    }

    signinForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.querySelector('.signin-email').value;
        const password = document.querySelector('.signin-password').value;
        result = await requestService.makePost('public/signin', {
            email: email,
            password: password
        });

        console.log(result);
    });

    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.querySelector('.signup-email').value;
        const password = document.querySelector('.signup-password').value;
        result = await requestService.makePost('public/register', {
            email: email,
            password: password
        });

        console.log(result);
    });

    /*signin.onclick = () => {
        loginNode.remove();
        workspaceNode.render(container);
    }

    signup.onclick = () => {
        loginNode.remove();
        workspaceNode.render(container);
    }*/
}
