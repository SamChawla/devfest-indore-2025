<template>
  <header class="header">
    <nav class="nav">
      <div class="logo-section">
        
        <router-link to="/" class="logo-text">DevFest</router-link>
        <span class="location-tag">Indore</span>
      </div>
      <ul class="nav-links">
        <li>
          <router-link to="/" class="nav-link" active-class="active">Home</router-link>
        </li>
        <li>
          <router-link to="/agenda" class="nav-link" active-class="active">Agenda</router-link>
        </li>
        <li>
          <router-link to="/speakers" class="nav-link" active-class="active">Speakers</router-link>
        </li>
        <li>
          <router-link to="/badge" class="nav-link" active-class="active">Badge</router-link>
        </li>
        <li>
          <router-link to="/sponsors" class="nav-link" active-class="active">Sponsors</router-link>
        </li>
        <li>
          <router-link to="/team" class="nav-link" active-class="active">Team</router-link>
        </li>
        <li>
          <router-link to="/faq" class="nav-link" active-class="active">FAQ</router-link>
        </li>
      </ul>
      <button class="register-btn" @click="handleRegister">Register Now</button>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  methods: {
    handleRegister() {
      window.open('https://konfhub.com/pre-devfest-indore', '_blank')
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #ffffff;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: center;
}

.nav {
  max-width: 1400px;
  width: 100%;
  background-color: #F0F0F0;
  border-radius: 50px;
  padding: 0.75rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-icon {
  display: flex;
  align-items: center;
}

.logo-icon svg {
  width: 24px;
  height: 24px;
}

.logo-text {
  color: #333333;
  font-size: 1.25rem;
  font-weight: bold;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.location-tag {
  background-color: #ffffff;
  color: #333333;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  border: 1px solid #000000;
  font-size: 0.875rem;
  font-weight: normal;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  align-items: center;
  flex: 1;
  justify-content: center;
}

.nav-link {
  color: #333333;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-size: 0.9375rem;
  font-weight: normal;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  border-radius: 50px;
  transition: background-color 0.2s;
}

.nav-link:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.nav-link.active {
  background-color: #D0D0D0;
  color: #333333;
}

.register-btn {
  background-color: #FBBC04;
  color: #333333;
  border: 1px solid #000000;
  padding: 0.625rem 1.5rem;
  border-radius: 50px;
  font-size: 0.9375rem;
  font-weight: bold;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  transition: background-color 0.2s;
}

.register-btn:hover {
  background-color: #F9AB00;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .nav-links {
    gap: 1rem;
  }
  
  .nav-link {
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
  }
}

@media (max-width: 768px) {
  .nav {
    flex-wrap: wrap;
    padding: 1rem;
  }
  
  .nav-links {
    order: 3;
    width: 100%;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 1rem;
  }
  
  .register-btn {
    order: 2;
  }
}
</style>