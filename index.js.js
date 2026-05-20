

 /* <!-- =============================================
       JAVASCRIPT — ALL DATA IS EDITED HERE
       Sections to customize:
         1. techStack[]   — marquee items
         2. projects[]    — project cards
         3. posts[]       — blog entries
         4. skillCats[]   — skills matrix
  ================================================ -->*/
  

    /* ------------------------------------------
       1. TECH STACK MARQUEE
       Add or remove items from this array.
    ------------------------------------------ */
    const techStack = [
      'Python', 'C++', 'MATLAB', 'VHDL', 'React', 'TensorFlow',
      'Arduino', 'Raspberry Pi', 'Simulink', 'KiCad', 'LTspice',
      'Node.js', 'OpenCV', 'NumPy', 'Git', 'Linux'
    ];

    function buildMarquee() {
      const inner = document.getElementById('marqueeInner');
      let html = '';
      // Duplicate once so the loop is seamless
      for (let i = 0; i < 2; i++) {
        techStack.forEach(t => {
          html += `<span class="marquee-item"><span>▸</span>${t}</span>`;
        });
      }
      inner.innerHTML = html;
    }


    /* ------------------------------------------
       2. PROJECTS DATA
       Each object = one project card.
       Fields:
         icon        — emoji for the card icon
         title       — project name
         desc        — short technical description
         tags        — CSS class (py/cpp/mat/vhd/c/js)
         tagNames    — display label for each tag
         gh          — GitHub URL  (null to hide)
         demo        — Live demo URL (null to hide)
    ------------------------------------------ */
    const projects = [
      {
        icon: '📡',
        title: 'Adaptive Equalizer DSP',
        desc: 'Implemented an LMS-based adaptive equalizer in MATLAB/Simulink to compensate for channel distortion in digital communication systems, achieving 18 dB SNR improvement.',
        tags:     ['mat', 'mat', 'cpp'],
        tagNames: ['MATLAB', 'Simulink', 'C++'],
        gh:   '#',
        demo: '#'
      },
      {
        icon: '⚡',
        title: 'FPGA-based FFT Engine',
        desc: 'Designed and synthesized a 1024-point FFT processor on Xilinx Artix-7 FPGA using VHDL. Optimized for throughput with a pipelined butterfly architecture.',
        tags:     ['vhd', 'vhd', 'mat'],
        tagNames: ['VHDL', 'Xilinx ISE', 'MATLAB'],
        gh:   '#',
        demo: null
      },
      {
        icon: '🤖',
        title: 'Autonomous Line Follower',
        desc: 'Built a PID-controlled autonomous robot using STM32 microcontroller, IR sensor array, and custom PCB. Achieved sub-5mm tracking precision on curved paths.',
        tags:     ['cpp', 'c', 'mat'],
        tagNames: ['C++', 'STM32 HAL', 'KiCad'],
        gh:   '#',
        demo: '#'
      },
      {
        icon: '📊',
        title: 'ECG Signal Classifier',
        desc: 'Developed a real-time ECG arrhythmia classifier using Python and scikit-learn. Preprocessed signals with band-pass filtering and extracted time-domain features. 94% test accuracy.',
        tags:     ['py', 'py', 'py'],
        tagNames: ['Python', 'scikit-learn', 'NumPy'],
        gh:   '#',
        demo: '#'
      },
      {
        icon: '🌐',
        title: 'IoT Environmental Monitor',
        desc: 'End-to-end IoT system: ESP32 sensors → MQTT broker → Node.js backend → React dashboard. Monitors temperature, humidity, and air quality with alert thresholds.',
        tags:     ['cpp', 'py', 'py'],
        tagNames: ['C++ (ESP32)', 'Node.js', 'React'],
        gh:   '#',
        demo: '#'
      },
      {
        icon: '🔬',
        title: 'Network Synthesis Tool',
        desc: 'A Python GUI application implementing Butterworth, Chebyshev, and Elliptic filter synthesis. Generates circuit schematics and exports SPICE netlists for simulation.',
        tags:     ['py', 'py', 'mat'],
        tagNames: ['Python', 'PyQt5', 'SPICE'],
        gh:   '#',
        demo: null
      },
    ];

    function buildProjects() {
      const grid = document.getElementById('projectGrid');
      grid.innerHTML = projects.map(p => `
        <div class="card">
          <div class="card-header">
            <div class="card-icon">${p.icon}</div>
            <div class="card-links">
              ${p.gh   ? `<a href="${p.gh}"   class="link-btn">GitHub</a>` : ''}
              ${p.demo ? `<a href="${p.demo}" class="link-btn">Demo ↗</a>` : ''}
            </div>
          </div>
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
          <div class="tags">
            ${p.tagNames.map((t, i) => `<span class="tag ${p.tags[i]}">${t}</span>`).join('')}
          </div>
        </div>
      `).join('');
    }


    /* ------------------------------------------
       3. BLOG / TECHNICAL NOTES DATA
       Each object = one blog post card.
       Fields:
         cat   — category label (shown in green)
         date  — publish date
         title — post title
         desc  — one-paragraph summary
    ------------------------------------------ */
    const posts = [
      {
        cat:   'SIGNAL PROCESSING',
        date:  'NOV 2024',
        title: 'Understanding the DFT: From Euler\'s Formula to Spectral Leakage',
        desc:  'A deep dive into why the Discrete Fourier Transform works, how windowing functions reduce spectral leakage, and what happens at the boundaries of finite-length signals.'
      },
      {
        cat:   'CIRCUIT DESIGN',
        date:  'OCT 2024',
        title: 'Butterworth vs Chebyshev Filters: A Practical Engineering Trade-off',
        desc:  'Comparing two cornerstone filter designs through simulation and hardware implementation — when maximally flat matters and when equiripple is worth the trade.'
      },
      {
        cat:   'EMBEDDED SYSTEMS',
        date:  'SEP 2024',
        title: 'PID Controller Tuning Without a Textbook: Ziegler–Nichols in Practice',
        desc:  'Real-world notes from tuning a PID controller on hardware — the gap between simulation and physical systems, and how to bridge it systematically.'
      },
      {
        cat:   'MATHEMATICS',
        date:  'AUG 2024',
        title: 'Laplace Transforms: Why Engineers Use Them and How to Build Intuition',
        desc:  'Moving beyond mechanical application of transform tables — developing a geometric intuition for why the s-domain reveals system behaviour invisible in the time domain.'
      },
    ];

    function buildBlog() {
      const grid = document.getElementById('blogGrid');
      grid.innerHTML = posts.map(p => `
        <div class="blog-card">
          <div class="blog-meta">
            <span class="blog-cat">${p.cat}</span>
            <span>${p.date}</span>
          </div>
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
          <span class="read-more">READ ARTICLE →</span>
        </div>
      `).join('');
    }


    /* ------------------------------------------
       4. SKILLS MATRIX DATA
       Three categories: Software, Hardware, Core Engineering.
       pct = proficiency percentage (drives the bar width).
    ------------------------------------------ */
    const skillCats = [
      {
        icon:  '💻',
        title: 'Software',
        sub:   'Languages & Frameworks',
        skills: [
          { name: 'Python',           pct: 90 },
          { name: 'C / C++',          pct: 82 },
          { name: 'MATLAB',           pct: 85 },
          { name: 'JavaScript/React', pct: 72 },
          { name: 'VHDL',             pct: 70 },
          { name: 'Git & Linux',      pct: 80 },
        ]
      },
      {
        icon:  '⚙️',
        title: 'Hardware',
        sub:   'Components & Instruments',
        skills: [
          { name: 'Oscilloscope (DSO)',  pct: 88 },
          { name: 'PCB Design (KiCad)', pct: 75 },
          { name: 'Arduino / STM32',    pct: 85 },
          { name: 'FPGA (Xilinx)',      pct: 68 },
          { name: 'Signal Generator',   pct: 90 },
          { name: 'Soldering & Rework', pct: 80 },
        ]
      },
      {
        icon:  '∫',
        title: 'Core Engineering',
        sub:   'Theory & Mathematics',
        skills: [
          { name: 'Signal Processing',   pct: 88 },
          { name: 'Network Synthesis',   pct: 80 },
          { name: 'Control Systems',     pct: 78 },
          { name: 'Calculus & Transforms', pct: 85 },
          { name: 'Digital Comms',       pct: 75 },
          { name: 'Electromagnetics',    pct: 70 },
        ]
      },
    ];

    function buildSkills() {
      const grid = document.getElementById('skillsGrid');
      grid.innerHTML = skillCats.map(cat => `
        <div class="skill-cat">
          <div class="skill-cat-header">
            <span class="skill-cat-icon">${cat.icon}</span>
            <div>
              <div class="skill-cat-title">${cat.title}</div>
              <div class="skill-cat-sub">${cat.sub}</div>
            </div>
          </div>
          <div class="skill-list">
            ${cat.skills.map(s => `
              <div class="skill-item">
                <span>${s.name}</span>
                <div class="skill-bar-wrap">
                  <div class="skill-bar" style="width:${s.pct}%"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('');
    }


    /* ------------------------------------------
       SIGNAL CALCULATOR LOGIC
       Called every time a slider moves.
    ------------------------------------------ */
    function updateSignal() {
      const f  = +document.getElementById('freq').value;
      const a  = +document.getElementById('amp').value;
      const ph = +document.getElementById('phase').value;

      document.getElementById('freqVal').textContent  = f  + ' Hz';
      document.getElementById('ampVal').textContent   = a  + ' V';
      document.getElementById('phaseVal').textContent = ph + '°';

      const T = (1 / f) * 1000; // period in ms
      document.getElementById('outPeriod').textContent =
        T < 1 ? (T * 1000).toFixed(2) + ' μs' : T.toFixed(2) + ' ms';
      document.getElementById('outOmega').textContent =
        (2 * Math.PI * f).toFixed(1) + ' r/s';
      document.getElementById('outRMS').textContent =
        (a / Math.sqrt(2)).toFixed(2) + ' V';
      document.getElementById('outPkPk').textContent = (a * 2) + ' V';

      drawWave(f, a, ph);
    }

    function drawWave(f, a, ph) {
      const canvas = document.getElementById('waveCanvas');
      const ctx    = canvas.getContext('2d');
      canvas.width  = canvas.offsetWidth * 2;
      canvas.height = 160;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isLight = document.body.classList.contains('light');
      ctx.strokeStyle = isLight ? '#0077aa' : '#00d4ff';
      ctx.lineWidth   = 3;
      ctx.beginPath();

      const w = canvas.width, h = canvas.height, cy = h / 2;
      const cycles = Math.min(f / 20, 4) + 1;

      for (let x = 0; x < w; x++) {
        const t = (x / w) * cycles;
        const y = cy - (a / 100) * (cy - 10) *
                  Math.sin(2 * Math.PI * t + ph * Math.PI / 180);
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Centre line
      ctx.strokeStyle = isLight ? 'rgba(0,119,170,0.15)' : 'rgba(0,212,255,0.12)';
      ctx.lineWidth   = 1;
      ctx.beginPath();
      ctx.moveTo(0, cy);
      ctx.lineTo(w, cy);
      ctx.stroke();
    }


    /* ------------------------------------------
       CONTACT FORM
       Replace the submitForm body with a real
       fetch() to your backend / Formspree endpoint.
    ------------------------------------------ */
    function submitForm() {
      const n = document.getElementById('cName').value.trim();
      const e = document.getElementById('cEmail').value.trim();
      const m = document.getElementById('cMsg').value.trim();

      if (!n || !e || !m) {
        alert('Please fill in name, email, and message.');
        return;
      }

      // TODO: replace with real API call, e.g.:
      // fetch('https://formspree.io/f/YOUR_ID', { method:'POST', body: JSON.stringify({n,e,m}) })

      document.getElementById('formSuccess').style.display = 'block';
      document.getElementById('cName').value    = '';
      document.getElementById('cEmail').value   = '';
      document.getElementById('cSubject').value = '';
      document.getElementById('cMsg').value     = '';
    }


    /* ------------------------------------------
       DARK / LIGHT THEME TOGGLE
    ------------------------------------------ */
    function toggleTheme() {
      document.body.classList.toggle('light');
      const isLight = document.body.classList.contains('light');
      document.getElementById('themeBtn').textContent = isLight ? '◑ DARK' : '◑ LIGHT';
      updateSignal(); // redraw canvas in correct color
    }


    /* ------------------------------------------
       SCROLL REVEAL
       Uses IntersectionObserver to fade sections in.
    ------------------------------------------ */
    function initReveal() {
      const els = document.querySelectorAll('.reveal');
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.1 });
      els.forEach(el => obs.observe(el));
    }


    /* ------------------------------------------
       INIT — runs when the page loads
    ------------------------------------------ */
    buildMarquee();
    buildProjects();
    buildBlog();
    buildSkills();
    initReveal();
    setTimeout(updateSignal, 100); // slight delay so canvas has correct width
    window.addEventListener('resize', () => updateSignal());
