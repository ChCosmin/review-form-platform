interviewApp.Footer = function(options) {
    return `
    <footer>
        <div class="grid">
            <span class="col-3">Copyright@Softvision 2017</span>
        </div>
    </footer>
    `
}

interviewApp.NAV = function(options){
    function NavMenu(options={}){
        const links = options.map(function(menuLink){            
            function NavLink(options={}){
                return `
                <a id="${options.id || ''}" class="menu-items-link ${options.isActive || ''}">${options.label}</a>
                `               
        }
            return NavLink(menuLink);
        })          
        return links.join('')    
    }        
    return `
    <header>		
	<nav>
		<div class="menu grid-menu">
			<div class="logo col-1-menu">
				<a>
					<img id="logo" width="150" height="50" src="assets/images/svlogo.png" alt="softvision logo">
				</a>
			</div>
            <div class="menu-items col-2-menu">
                ${NavMenu(options.menuLinks)}				
			</div>
			<div class="menu-items logout col-1-menu">
				<a id="logoutButton" class="menu-items-link logout-link">Logout</a>
			</div>
		</div>
	</nav>		
	</header>
    `
}

