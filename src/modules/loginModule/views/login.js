interviewApp.loginPage = function(options={}) {
    
    const loginHeader = function(){
        return `
        <header class="hero-header">	
        <div class="grid">	
            <div class="login-form col-1">
            ${loginForm()}	
            </div>
        </div>
        </header>
        `
    }
    
    const loginForm = function(options={}){
        return `
        <form id="login_form" name="login_form" method="POST">
            <div class="login-form-header">Interview Feedback</div>
            <div class="login-form-content">
                <input class="login-form-content-field" type="text" name="username" placeholder="Username" required>
                <input class="login-form-content-field" type="password" name="password" placeholder="Password" required>
            </div>
            <button id="loginButton" class="btn-type1" type="submit"><a id="loginButton" class="btn-type1-text noselect">Login</a></button>
        </form>
        `
    }
    
    const submitFeedbackSection = function(options={}){
        return `
        <section class="section-row">
            <div class="grid">
                <div class="col-1">	
                    <img src="assets/images/new feedback.jpg" height="300" width="400" alt="person checking a feedback form">
                </div>
                <article class="login-section-article col-2">
                    <h3 class="section-row-header">Submit new feedback</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.
                    </p>
                </article>
            </div>
        </section>
        `
    }
    
    const submitFeedbackResults = function(options={}){
        return `
        <section class="section-row">
            <div class="grid">
                <article class="login-section-article col-2">
                    <h3 class="section-row-header">View feedback results</h3>			
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.</p>
                </article>
                <div class="col-1">
                    <img src="assets/images/results.jpg" height="300" width="400" alt="someone showing charts to someone who's taking notes">
                </div>
            </div>
        </section>
        `
    }
        
    return `
    ${loginHeader()}
    ${submitFeedbackSection()}
    ${submitFeedbackResults()}
    ${interviewApp.Footer()}
    `
}