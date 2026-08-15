---
layout: default
---
<div id="page">
  <section id="banner"></section>
  <header id="hero">
    <!--Avatar and Note-->
    <section id="avatarNnote">
      <div id="avatar"></div>
      <audio id="music" src="assets/audio/music.mp3" loop></audio>
      <aside id="bubble">
        <div id="dotout"></div>
          <div id="dotin"></div>
          <p id="note">{{ site.note }}</p>
      </aside>
    </section>
    
    <!--Name and Email-->
    <section id="plate">
      <div id="namePlate">
        <h1 id="name"><a href="/">{{ site.name }}</a></h1>
        <a href="https://arcet.vercel.app" target="_blank">
          <img id="badge" height="32" width="32" src="assets/images/arcet.webp" alt="Arcet" />
        </a>
      </div>
      <div id="mailPlate">
        <a href="mailto: {{ site.email }}" id="mailID">{{ site.email }}</a>
      </div>
    </section>
  </header>

  <address>
    <a href="https://github.com/srikanth9x" target="_blank" id="github" class="icon">
      <i class="iconoir-github"></i>
    </a>
    <a href="{{ '/feed.xml' | relative_url }}" target="_blank" id="feed" class="icon">
      <i class="iconoir-rss-feed"></i>
    </a>
    <a href="https://x.com/srikanth9x" target="_blank" id="x" class="icon">
      <i class="iconoir-x"></i>
    </a>    
    <a href="https://linkedin.com/in/srikanth9x" target="_blank" id="linkedin" class="icon">
      <i class="iconoir-linkedin"></i>
    </a>
    <a href="https://youtube.com/@srikanth9x" target="_blank" id="youtube" class="icon">
      <i class="iconoir-youtube"></i>
    </a>
    <a href="https://instagram.com/srikanth9x" target="_blank" id="instagram" class="icon">
      <i class="iconoir-instagram"></i>
    </a>
  </address>
  
  <!--About-->
  <section class="card" id="meIn3Secs">
    <h2 class="cardTitle">Me in 3 seconds</h2>
    <p>{{ site.description }}</p>
    <a href="/about" class="cardAction">
      <p>me in 3 minutes
        <i class="iconoir-arrow-up-right"></i>
      </p>
    </a>
  </section>

  <!--Now-->
  <section class="card">
    <h2 class="cardTitle">What I'm doing now?</h2>
    <a href="/now" class="cardAction">
      <p>have a look
        <i class="iconoir-arrow-up-right"></i>
      </p>
    </a>
  </section>
 
 <!--   
 "Friends" - Temporary Drop-OFF
 
  <a href="/friends" class="card link" id="friends">
    <p class="cardTitle">Friends</p>
    <i class="iconoir-arrow-up-right"></i>
  </a>
  -->
  
  <!--Projects-->
  <section class="card" id="projects">
    <h2 class="cardTitle">Projects</h2>
    
    {% assign featured_projects = site.data.projects | where: "featured", true %}
    
    {% for project in featured_projects %}
      {% assign url = "/projects/" | append: project.slug | append: "/" %}
      <a href="{{ url }}" class="project" id="{{ project.slug }}">
      <img class="pIcon" src="assets/images/projects/{{ project.slug }}/icon.webp" alt="{{ project.title }}" />
      <div class="pName">
        <span>{{ project.title }}</span>
        <i class="iconoir-arrow-up-right"></i>
      </div>
      </a>
    {% endfor %}
    <br>
    <a href="/projects" class="cardAction">
      <p>more here
        <i class="iconoir-arrow-up-right"></i>
      </p>
    </a>
  </section>
  
  <footer class="card">
    <p>&copy; 2026 Bandari Srikanth</p>
  </footer>
  <section id="popup">
    <div id="popupAvatar"></div>
    <div id="popupBanner"></div>
  </section>
</div>